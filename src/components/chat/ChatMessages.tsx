import React from "react";
import SKYNEX from "@/assets/favicon.webp";
import { ChatStep } from "@/hooks/use-chat-state";

interface ChatMessagesProps {
  botGreeted: boolean;
  step: ChatStep;
  userMessage: string;
  phone: string;
  botTyping: boolean;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  botGreeted,
  step,
  userMessage,
  phone,
  botTyping,
}) => {
  return (
    <>
      {/* Bot greeting */}
      {botGreeted && (
        <div className="flex items-start gap-2">
          <img src={SKYNEX.src} alt="Assistant" className="h-8 w-8 rounded-full object-cover flex-shrink-0 mt-1" />
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary text-foreground px-3 py-2 text-sm">
            👋 Hi, I&apos;m Skynex Assistant. What can I help you with today?
          </div>
        </div>
      )}

      {/* Show user's message once sent */}
      {step !== "message" && userMessage.trim() && (
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-3 py-2 text-sm">
            {userMessage}
          </div>
        </div>
      )}

      {/* Contact prompt bubble during contact */}
      {step === "contact" && (
        botTyping ? (
          <div className="flex items-start gap-2">
            <img src={SKYNEX.src} alt="Assistant" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary text-foreground px-3 py-2 text-sm">
              <div className="flex items-center gap-1 py-0.5">
                <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/70 animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/70 animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/70 animate-pulse" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-2">
            <img src={SKYNEX.src} alt="Assistant" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary text-foreground px-3 py-2 text-sm">
              Got it 👍 Could you share your phone number so one of our team can get back to you?
            </div>
          </div>
        )
      )}

      {/* Sent state bubbles */}
      {step === "sent" && (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <img src={SKYNEX.src} alt="Assistant" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary text-foreground px-3 py-2 text-sm">
              Got it 👍 Could you share your phone number so one of our team can get back to you?
            </div>
          </div>
          {phone.trim() && (
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-3 py-2 text-sm">
                {phone}
              </div>
            </div>
          )}
          <div className="flex items-start gap-2">
            <img src={SKYNEX.src} alt="Assistant" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary text-foreground px-3 py-2 text-sm">
              ✅ Thanks! We&apos;ve received your details and our team will be in touch very soon.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
