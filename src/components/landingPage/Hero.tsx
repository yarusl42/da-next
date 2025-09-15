import React from "react";
import { motion } from "framer-motion";

import heroImage from "@/assets/placeholder.svg";
import project1 from "@/assets/placeholder.svg";
import project2 from "@/assets/placeholder.svg";
import project3 from "@/assets/placeholder.svg";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/lib/scroll";

const Hero: React.FC = () => {
  // Build a 7-image gallery using available assets
  const galleryImages = [
    project1,
    project2,
    project3,
    heroImage,
    project1,
    project2,
    project3,
    project3,
    project3,
  ];

  return (
    <section id="hero" className="pb-section relative z-10 h-auto md:h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 h-full"
        >
          {/* Left: subtitle, headline, CTA */}
          <div className="lg:pr-6 flex flex-col justify-center w-full lg:flex-1 lg:ml-12 px-1">
            <h1 className="text-4xl sm:text-5xl  font-antonio font-bold leading-tight mb-4 md:ml-[-5px]">
              <span className="block text-xl sm:text-2xl font-light sm:ml-[3px]">Bring</span>
              <span className="block">more local customers</span>
              <span className="block">to your business</span>
              <span className="block text-xl sm:text-2xl font-light mt-2 ml-[5px]">with Google</span>
            </h1>
            <p className="text-base tracking-wide mb-6">We build fast, SEO‑first websites and lead funnels that turn local searches into booked appointments.</p>
            <Button
              variant="cta"
              size="md"
              className={`rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal max-w-[200px]`}
              onClick={scrollToContact}
            >
              Get Free Audit
            </Button>
          </div>

          {/* Right: two-column gallery (7 images) */}
          <div className="h-auto lg:h-full flex lg:flex-1 items-start justify-center lg:justify-end gap-3 lg:gap-4 overflow-hidden lg:ml-auto mt-6 lg:mt-0 pb-4">
            {/* Column 1: 4 images, first shows only lower half */}
            <div className="h-full flex flex-col gap-3 lg:gap-4 w-full lg:flex-1">
              {/* Top image: only lower half visible */}
              <div className="hidden sm:block overflow-hidden rounded-xl h-[80px] sm:h-[100px] shadow-soft">
                <img src={galleryImages[0]} alt="Portfolio sample" className="w-full h-[160px] sm:h-[200px] object-cover object-bottom" />
              </div>
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[1]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[2]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[40px] sm:min-h-[20px] lg:min-h-[120px]">
                <img src={galleryImages[3]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Column 2: 3 images filling full height */}
            {/* Variant A: show below 1024px (md and down) */}
            <div className="flex lg:hidden h-full flex-col gap-3 lg:gap-4 w-full">
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[4]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[5]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[6]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Variant B: show at >=1100px */}
            <div className="hidden min-[1100px]:flex h-full flex-col gap-3 lg:gap-4 w-full lg:flex-1">
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[4]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[5]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl flex-1 shadow-soft min-h-[120px]">
                <img src={galleryImages[6]} alt="Portfolio sample" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
