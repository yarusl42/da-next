import React, { useState } from "react";

type TextWithCarouselProps = {
  title: string;
  images: { src: string; alt?: string }[] | string[];
  aspectClass?: string; // e.g. "aspect-[4/2]", "aspect-[3/2]", "aspect-video"
  children?: React.ReactNode; // slot content
};

const TextWithCarousel: React.FC<TextWithCarouselProps> = ({ title, images, aspectClass = "aspect-[4/2]", children }) => {
  const normalized = (images as any[]).map((img) =>
    typeof img === "string" ? { src: img, alt: "" } : img
  );
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % normalized.length);
  const prev = () => setIndex((i) => (i - 1 + normalized.length) % normalized.length);

  if (!normalized.length) return null;

  return (
    <section className="py-10 bg-muted/30 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6 pb-8">
          <h2 className="text-5xl font-antonio font-bold text-foreground">{title}</h2>
          <div data-name="slot">{children}</div>
        </div>

        <div className={`relative w-full ${aspectClass} bg-muted rounded-2xl overflow-hidden shadow-strong`}>
          {normalized.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt ?? `${title} slide ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          {normalized.length > 1 && (
            <>
              <button
                aria-label="Previous slide"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
              >
                ‹
              </button>
              <button
                aria-label="Next slide"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {normalized.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-primary" : "bg-primary/30"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextWithCarousel;
