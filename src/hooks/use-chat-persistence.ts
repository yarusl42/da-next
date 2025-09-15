import { useEffect, useRef, useState } from "react";
import { playAudioWithFallback } from "@/lib/audio-utils";

const OPEN_KEY = "chat_open_v1";

export const useChatPersistence = () => {
  const [open, setOpen] = useState(false);
  const didInit = useRef(false);

  // Auto-open logic with user interaction trigger
  useEffect(() => {
    try {
      const storedOpen = localStorage.getItem(OPEN_KEY);
      if (storedOpen !== null) {
        // Respect stored open/closed preference
        const shouldOpen = storedOpen === "1" || storedOpen === "true" || storedOpen === "open";
        setOpen(shouldOpen);
        return; // No need to set up interaction listeners
      }

      // No OPEN_KEY => first visit: wait for first user interaction, then start 5s timer
      let timeoutId: number | null = null;
      const onFirstInteraction = () => {
        // Remove interaction listeners immediately
        document.removeEventListener("pointerdown", onFirstInteraction);
        document.removeEventListener("click", onFirstInteraction);
        document.removeEventListener("touchstart", onFirstInteraction);
        document.removeEventListener("keydown", onFirstInteraction);

        // Double-check in case another tab wrote the key
        const current = localStorage.getItem(OPEN_KEY);
        if (current !== null) return;

        timeoutId = window.setTimeout(() => {
          setOpen(true);
          try {
            // Persist that we opened once so we won't schedule again
            localStorage.setItem(OPEN_KEY, "1");

            // Attempt to play sound; if blocked, attach one-time gesture fallback
            playAudioWithFallback("/sounds/notification.mp3", 0.6);
          } catch (err) {
            if (process.env.NODE_ENV === "development") console.debug("useChatPersistence: failed to persist/play on timer", err);
          }
        }, 5000);
      };

      document.addEventListener("pointerdown", onFirstInteraction, { once: true });
      document.addEventListener("click", onFirstInteraction, { once: true });
      document.addEventListener("touchstart", onFirstInteraction, { once: true });
      document.addEventListener("keydown", onFirstInteraction, { once: true });

      return () => {
        document.removeEventListener("pointerdown", onFirstInteraction);
        document.removeEventListener("click", onFirstInteraction);
        document.removeEventListener("touchstart", onFirstInteraction);
        document.removeEventListener("keydown", onFirstInteraction);
        if (timeoutId) clearTimeout(timeoutId);
      };
    } catch (err) {
      if (process.env.NODE_ENV === "development") console.debug("useChatPersistence: failed to read/setup from localStorage", err);
    }
  }, []);

  // Persist open/closed state changes
  useEffect(() => {
    // Skip the very first run to avoid writing "0" when storage was empty.
    if (!didInit.current) {
      didInit.current = true;
      return;
    }
    try {
      localStorage.setItem(OPEN_KEY, open ? "1" : "0");
    } catch (err) {
      if (process.env.NODE_ENV === "development") console.debug("useChatPersistence: failed to persist open state", err);
    }
  }, [open]);

  return { open, setOpen };
};
