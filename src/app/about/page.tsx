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
import OurProcess from "@/components/about/OurProcess";
import FlippingCarouselOverlay from "@/components/about/FlippingCarouselOverlay";
import GlidingCarouselOverlay from "@/components/about/GlidingCarouselOverlay";
// Static images for mobile (extracted from overlay components)
import aboutImage from "@/assets/about/about.jpg";
import techThumb from "@/assets/about/tech_stack_thumbnail.jpg";
import whyThumb from "@/assets/about/whyus.jpg";


const About = () => {
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
  const TRIGGER_ADJUST_PX = -50; // increased so the slide switches lower on the page
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

  // Section refs (Process removed)
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
          {/* Desktop/tablet: animated flip overlay */}
          <div className="hidden md:block">
            <FlippingCarouselOverlay motionTransform={motionTransform} />
          </div>
          {/* Mobile: static image instead of animation */}
          
          <OurStory />
          <div className="md:hidden max-w-6xl mx-auto px-4">
            <div className="flex justify-end">
              <img
                src={aboutImage.src}
                alt="About showcase"
                className="w-full h-auto object-cover rounded-3xl rotate-2 shadow-strong"
              />
            </div>
          </div>
          <Services showImage={false} />
        </div>
        <div ref={rangeRef2} className="relative">
          {/* Desktop/tablet: animated glide overlay */}
          <div className="hidden md:block">
            <GlidingCarouselOverlay activeSlide={activeSlide} />
          </div>
          {/* Mobile: static images per section */}
          <div className="md:hidden max-w-6xl mx-auto px-4">
            <div className="flex justify-end mb-6">
              <img
                src={techThumb.src}
                alt="Tech stack"
                className="w-full h-auto object-cover rounded-3xl shadow-strong"
              />
            </div>
          </div>
          <TechStack ref={techRef} />
          <div className="md:hidden max-w-6xl mx-auto px-4">
            <div className="flex justify-end mb-6">
              <img
                src={whyThumb.src}
                alt="Why Skynex"
                className="w-full h-auto object-cover rounded-3xl shadow-strong"
              />
            </div>
          </div>
          <WhySkynex ref={whyRef} />
        </div>
        <div className="pb-32"></div>
        <OurProcess />
        <Contact id="contact" />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default About;
