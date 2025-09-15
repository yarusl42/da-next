import React from "react";
import { Send } from "lucide-react";

interface MessageFormProps {
  messageDraft: string;
  setMessageDraft: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  error: string | null;
}

export const MessageForm: React.FC<MessageFormProps> = ({
  messageDraft,
  setMessageDraft,
  onSubmit,
  error,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <label className="block text-sm text-muted-foreground">Your message to us</label>
      <textarea
        className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-md focus:outline-none focus:ring-0"
        rows={3}
        placeholder="Hi! I'd like to know more about your services…"
        value={messageDraft}
        onChange={(e) => setMessageDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </div>
      {error && <div className="text-xs text-accent">{error}</div>}
    </form>
  );
};
