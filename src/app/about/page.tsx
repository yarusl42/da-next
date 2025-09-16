"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoiseBg from "@/components/NoiseBg";
import ChatWidget from "@/components/ChatWidget";
import Contact from "@/components/Contact";
import { useRef, useEffect, useState } from "react";
import { useInView, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Services from "@/components/landingPage/Services";
import OurStory from "@/components/about/OurStory";
import TechStack from "@/components/about/TechStack";
import WhySkynex from "@/components/about/WhySkynex";
import FlippingCarouselOverlay from "@/components/about/FlippingCarouselOverlay";
import GlidingCarouselOverlay from "@/components/about/GlidingCarouselOverlay";

export default function AboutPage() {
  // Limit rotation to the scroll range spanning from Our Story (hero) to the end of Services
  const rangeRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: rangeProgress } = useScroll({
    target: rangeRef,
    offset: ["start start", "end end"],
  });
  const rangeRef2 = useRef<HTMLDivElement | null>(null);

  // Delay and stretch the flip so it finishes lower on the page without changing the start position
  const ROTATE_DELAY = 0.0; // portion of scroll (0-1) to wait before starting rotation (start sooner)
  const ROTATE_DURATION = 1; // portion of scroll (0-1) over which to complete the rotation
  const progressDelayed = useTransform(
    rangeProgress,
    [0, ROTATE_DELAY, ROTATE_DELAY + ROTATE_DURATION, 1],
    [0, 0, 1, 1]
  );
  const rotateY = useTransform(progressDelayed, [0, 1], [0, 180]);
  // Animate a vertical offset that starts at 0 and grows as the flip completes, so the end position is lower.
  const TARGET_OFFSET_PX = 160; // increase to end even lower; 0 preserves current
  const yOffset = useTransform(progressDelayed, [0, 1], [0, TARGET_OFFSET_PX]);
  // Keep starting position centered (-50%), add animated offset during flip
  const motionTransform = useMotionTemplate`translateY(calc(-50% + ${yOffset}px)) rotateY(${rotateY}deg)`;

  // Exact section-driven switching: detect when each section is in view
  // Compute in-view threshold so the switch happens when the section's top reaches
  // a point slightly BELOW the viewport center (keeps starting position same, flips later).
  const TRIGGER_ADJUST_PX = 200; // increase to flip lower; decrease to flip higher
  const [inViewMargin, setInViewMargin] = useState("-30% 0px -70% 0px");
  useEffect(() => {
    const update = () => {
      const y = typeof window !== "undefined" ? Math.round(window.innerHeight / 2 + TRIGGER_ADJUST_PX) : 0;
      const bottom = typeof window !== "undefined" ? Math.max(0, window.innerHeight - y) : 0;
      setInViewMargin(`-${y}px 0px -${bottom}px 0px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [TRIGGER_ADJUST_PX]);

  // Section refs
  const techRef = useRef<HTMLElement | null>(null);
  const whyRef = useRef<HTMLElement | null>(null);
  // Cast margin to any to satisfy TS typing differences across framer-motion versions
  const techInView = useInView(techRef, { margin: inViewMargin as any });
  const whyInView = useInView(whyRef, { margin: inViewMargin as any });
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    // Two slides now: 0 = Tech, 1 = Why. Later section takes priority.
    if (whyInView) setActiveSlide(1);
    else if (techInView) setActiveSlide(0);
  }, [techInView, whyInView]);

  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <main className="relative">
        <div ref={rangeRef} className="relative">
          <FlippingCarouselOverlay motionTransform={motionTransform} />
          <OurStory />
          <Services showImage={false} />
        </div>
        <div ref={rangeRef2} className="relative">
          <GlidingCarouselOverlay activeSlide={activeSlide} />
          <TechStack ref={techRef} />
          <WhySkynex ref={whyRef} />
        </div>
      </main>
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}
