"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Hero from "@/components/landingPage/Hero";
import Services from "@/components/landingPage/Services";
import NoiseBg from "@/components/NoiseBg";
import About from "@/components/landingPage/About";
import Projects from "@/components/landingPage/Projects";
import Testimonials from "@/components/landingPage/Testimonials";
import FAQ from "@/components/landingPage/FAQ";
import ChatWidget from "@/components/ChatWidget";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Page() {
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const el = document.getElementById("hero");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showChat = !heroInView;

  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <Hero />
      <Services id="services" />
      <About id="about" />
      <Projects id="projects" />
      <Testimonials id="testimonials" />
      <FAQ id="faq" />
      <Contact id="contact" />
      <Footer />
      <AnimatePresence initial={false}>
        {showChat && <ChatWidget key="chatwidget" />}
      </AnimatePresence>
    </div>
  );
}
