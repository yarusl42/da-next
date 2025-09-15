import React from "react";

type TextWithImageProps = {
  title: string;
  image: string;
  aspectClass?: string; // e.g. "aspect-[4/2]"
  children?: React.ReactNode; // slot content
};

const TextWithImage: React.FC<TextWithImageProps> = ({ title, image, aspectClass = "aspect-[4/2]", children }) => {
  return (
    <section className="py-10 bg-muted/30 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 pb-8">
          <h2 className="text-5xl font-antonio font-bold text-foreground">{title}</h2>
          <div data-name="slot">{children}</div>
        </div>

        <img
          src={image}
          alt={title}
          className={`w-full ${aspectClass} object-cover rounded-2xl shadow-strong`}
        />
      </div>
    </section>
  );
};

export default TextWithImage;
