import React from "react";
import { Send } from "lucide-react";

export const SentState: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <label className="block text-sm text-muted-foreground">Your message</label>
      <textarea
        className="w-full resize-none rounded-xl border border-border bg-muted px-3 py-2 text-md opacity-70 cursor-not-allowed"
        rows={3}
        placeholder=""
        value=""
        disabled
        readOnly
      />
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-primary-foreground opacity-60 cursor-not-allowed"
          disabled
          aria-disabled="true"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </div>
    </form>
  );
};
