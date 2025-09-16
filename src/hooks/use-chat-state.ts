import { useEffect, useState } from "react";

export type ChatStep = "message" | "contact" | "sent";

interface ChatState {
  step: ChatStep;
  userMessage: string;
  phone: string;
  botGreeted: boolean;
}

const CHAT_STATE_KEY = "chat_state_v1";

export const useChatState = () => {
  const [step, setStep] = useState<ChatStep>("message");
  const [userMessage, setUserMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [botGreeted, setBotGreeted] = useState(false);

  // Load saved chat state on mount
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(CHAT_STATE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as Partial<ChatState>;
      if (saved.step === "message" || saved.step === "contact" || saved.step === "sent") {
        setStep(saved.step);
      }
      if (typeof saved.userMessage === "string") setUserMessage(saved.userMessage);
      if (typeof saved.phone === "string") setPhone(saved.phone);
      if (typeof saved.botGreeted === "boolean") setBotGreeted(saved.botGreeted);
    } catch (err) {
      if (process.env.NODE_ENV !== "production")
        console.debug("useChatState: failed to read from sessionStorage", err);
    }
  }, []);

  // Save chat state when it changes
  useEffect(() => {
    try {
      const data = JSON.stringify({ step, userMessage, phone, botGreeted });
      sessionStorage.setItem(CHAT_STATE_KEY, data);
    } catch (err) {
      if (process.env.NODE_ENV !== "production")
        console.debug("useChatState: failed to write to sessionStorage", err);
    }
  }, [step, userMessage, phone, botGreeted]);

  return {
    step,
    setStep,
    userMessage,
    setUserMessage,
    phone,
    setPhone,
    botGreeted,
    setBotGreeted,
  };
};
