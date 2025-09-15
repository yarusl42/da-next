import React from "react";

type TextProps = {
  title: string;
  children?: React.ReactNode; // slot content
};

const Text: React.FC<TextProps> = ({ title, children }) => {
  return (
    <section className="py-10 bg-muted/30 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 pb-8">
          <h2 className="text-5xl font-antonio font-bold text-foreground">{title}</h2>
          <div data-name="slot">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Text;
