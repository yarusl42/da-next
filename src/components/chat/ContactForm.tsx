import React from "react";
import { Send, Phone } from "lucide-react";

interface ContactFormProps {
  phone: string;
  setPhone: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  loading: boolean;
  botTyping: boolean;
  error: string | null;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  phone,
  setPhone,
  onSubmit,
  loading,
  botTyping,
  error,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 flex-1 rounded-xl border border-border bg-background px-3 py-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <input
            className="flex-1 bg-transparent outline-none text-base"
            type="tel"
            inputMode="tel"
            placeholder="e.g. +1 555 123 4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading || botTyping}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
          disabled={loading || botTyping}
        >
          {loading ? "Sending..." : (
            <>
              <Send className="h-4 w-4" />
              Send
            </>
          )}
        </button>
      </div>
      {error && <div className="text-xs text-accent">{error}</div>}
    </form>
  );
};
