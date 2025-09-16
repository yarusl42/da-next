"use client";

import NoiseBg from "@/components/NoiseBg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useHoverFollower } from "@/hooks/use-hover-follower";
import HoverFollowerOverlay from "@/components/common/HoverFollowerOverlay";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";

// Keep in sync with data shape from `@/data/servicesData`
 type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string; // Next static imports are resolved to string via .src in data
};

const ServiceCard: React.FC<{ item: ServiceItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { hover, pos, onMouseEnter, onMouseLeave, onMouseMove } = useHoverFollower(ref, { speed: 0.2 });
  const isOdd = index % 2 === 1;

  return (
    <Link href={`/services/${item.id}`} className="block cursor-pointer">
      <article className="grid md:grid-cols-2 gap-6 md:gap-10 items-center p-5 md:p-8 bg-white/70 cursor-pointer">
        <div
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className={`relative z-10 w-full aspect-[4/2] overflow-hidden ${isOdd ? 'md:order-2' : ''}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          <HoverFollowerOverlay hover={hover} pos={pos} />
        </div>
        <div className={`relative z-30 cursor-pointer pointer-events-auto ${isOdd ? 'md:order-1' : ''}`}>
          <h3 className="text-[32px] font-antonio font-normal text-foreground">{item.title}</h3>
          <p className="text-base mt-4">{item.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="space-y-6">
            <h1 className="text-5xl font-antonio font-bold text-foreground">Services</h1>
            <div data-name="slot">We build conversion-focused digital experiences. Explore our core services designed to help local businesses grow.</div>
          </div>
        </motion.section>

        <motion.section
          className="grid gap-10 md:gap-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          {servicesData.map((s, idx) => (
            <ServiceCard key={s.id} item={s as ServiceItem} index={idx} />
          ))}
        </motion.section>
      </main>
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}
