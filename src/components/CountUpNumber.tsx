import React, { useEffect, useRef, useState } from "react";

type CountUpNumberProps = {
  end: number;
  duration?: number;
  className?: string;
};

const CountUpNumber = ({ end, duration = 1000, className }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (hasAnimated) return;
    const el = countRef.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const increment = end / (duration / 50);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 50);
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(el);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [hasAnimated, end, duration]);

  return <span ref={countRef} className={className}>{count}</span>;
};


export default CountUpNumber;
