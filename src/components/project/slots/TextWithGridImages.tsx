import React from "react";

type TextWithGridImagesProps = {
  title: string;
  images: string[]; // expecting length 2, but renders any length >=1
  aspectClass?: string; // e.g. "aspect-[3/2]"
  children?: React.ReactNode; // slot content
};

const TextWithGridImages: React.FC<TextWithGridImagesProps> = ({ title, images, aspectClass = "aspect-[3/2]", children }) => {
  return (
    <section className="py-10 bg-muted/30 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 pb-8">
          <h2 className="text-5xl font-antonio font-bold text-foreground">{title}</h2>
          <div data-name="slot">{children}</div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${title} ${idx + 1}`}
              className={`w-full ${aspectClass} object-cover rounded-xl shadow-medium`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextWithGridImages;
