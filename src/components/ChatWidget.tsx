import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useChatPersistence } from "@/hooks/use-chat-persistence";
import { useChatState } from "@/hooks/use-chat-state";
import { playAudio } from "@/lib/audio-utils";
import { MessageForm } from "./chat/MessageForm";
import { ContactForm } from "./chat/ContactForm";
import { SentState } from "./chat/SentState";
import { ChatMessages } from "./chat/ChatMessages";
import pop from "@/assets/sounds/pop.mp3";

const ChatWidget: React.FC = () => {
  const { open, setOpen } = useChatPersistence();
  const { step, setStep, userMessage, setUserMessage, phone, setPhone, botGreeted, setBotGreeted } = useChatState();
  
  // Component-specific state
  const [messageDraft, setMessageDraft] = useState("");
  const [loadingContact, setLoadingContact] = useState(false);
  const [botTyping, setBotTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    if (!messageDraft.trim()) {
      setError("Type a quick message so I know how to assist you.");
      return;
    }
    // Send instantly
    setUserMessage(messageDraft.trim());
    setMessageDraft("");
    // Show typing indicator before bot reply (contact prompt)
    setBotTyping(true);
    setStep("contact");
    // Play send confirmation sound (user gesture exists)
    playAudio(pop, 0.7);
    setTimeout(() => setBotTyping(false), 800);
  };

  const handleSendAll = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    // Validate phone number only
    const phoneClean = phone.replace(/[^0-9+]/g, "");
    const phoneDigits = phoneClean.replace(/\D/g, "");
    const phoneValid = phoneDigits.length >= 7; // at least 7 digits

    if (!phone.trim()) {
      setError("I’ll need your phone number so our team can reach out.");
      return;
    }
    if (!phoneValid) {
      setError("Hmm, that number doesn’t look right. Try adding your country code (e.g. +1 …).");
      return;
    }
    try {
      setLoadingContact(true);
      const res = await fetch("https://adamskaya.at/api/notify/skynex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, phone: phone.trim() || undefined }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStep("sent");
      // Play confirmation sound on successful submission
      playAudio(pop, 0.7);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoadingContact(false);
    }
  };

  // Bot greeting after opening

  useEffect(() => {
    if (open && !botGreeted) {
      const t = setTimeout(() => setBotGreeted(true), 600);
      return () => clearTimeout(t);
    }
  }, [open, botGreeted, setBotGreeted]);

  // Keep messages scrolled to the bottom when conversation updates
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    const el = messagesRef.current;
    if (!el) return;
    // Use rAF to ensure DOM is painted before scrolling
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  };
  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
    // Trigger when messages might grow: step changes, user/bot messages appear
  }, [open, step, userMessage, phone, botGreeted, botTyping]);

  return createPortal(
    <motion.div
      className="fixed inset-x-0 bottom-0 z-[1000] px-3 sm:px-0 flex justify-center sm:block sm:inset-x-auto sm:right-6 right-6"
      initial={{ y: 56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 56, opacity: 0 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      {/* Single panel: header is always real; body is toggled */}
      <motion.div
        key="chat-panel"
        initial={false}
        animate={{}}
        className={`w-full sm:w-[420px] sm:max-w-none max-w-[700px] shadow-strong border border-border bg-background text-foreground overflow-hidden flex flex-col min-h-0 ${open ? "rounded-2xl h-[380px] sm:h-[520px]" : "rounded-t-2xl rounded-b-none"}`}
      >
        <div
          className={`flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 bg-primary text-primary-foreground rounded-t-2xl ${open ? "cursor-default" : "cursor-pointer"}`}
          onClick={!open ? () => setOpen(true) : undefined}
          role={!open ? "button" : undefined}
          tabIndex={!open ? 0 : undefined}
          onKeyDown={!open ? (e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(true);
          } : undefined}
        >
          <div className="font-antonio text-sm sm:text-base text-white">Chat with us</div>
          {open && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="opacity-90 hover:opacity-100 transition"
              aria-label="Close chat"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          )}
        </div>

        <motion.div
          key="chat-body"
          initial={false}
          animate={open ? { height: "auto", opacity: 1, y: 0, padding: 16 } : { height: 0, opacity: 0, y: 8, padding: 0 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          style={{ willChange: "height, transform, opacity, padding", overflow: "hidden", pointerEvents: open ? "auto" : "none", flex: open ? "1 1 auto" : "0 0 auto" }}
          className={`${open ? "rounded-b-2xl" : ""} flex flex-col min-h-0`}
          aria-hidden={!open}
        >
              {/* Messages area (scrollable) */}
              <div ref={messagesRef} className="flex-1 overflow-y-scroll space-y-3 min-h-0" style={{ flex: open ? "1 1 auto" : "0 0 auto" }}>
                <ChatMessages
                  botGreeted={botGreeted}
                  step={step}
                  userMessage={userMessage}
                  phone={phone}
                  botTyping={botTyping}
                />
              </div>

              {/* Controls area (fixed) */}
              <div className="pt-2">
                {step === "message" && (
                  <MessageForm
                    messageDraft={messageDraft}
                    setMessageDraft={setMessageDraft}
                    onSubmit={handleSendMessage}
                    error={error}
                  />
                )}

                {step === "contact" && (
                  <ContactForm
                    phone={phone}
                    setPhone={setPhone}
                    onSubmit={handleSendAll}
                    loading={loadingContact}
                    botTyping={botTyping}
                    error={error}
                  />
                )}

                {step === "sent" && <SentState />}
              </div>
        </motion.div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ChatWidget;
