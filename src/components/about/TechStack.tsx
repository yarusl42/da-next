import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import figma from "@/assets/about/figma.avif";
import react from "@/assets/about/react.avif";
import framer from "@/assets/about/framer.avif";
import windsurf from "@/assets/about/windsurf.avif";
import google from "@/assets/about/google.avif";

const TechStack = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-section relative z-10">
      <div className="max-w-6xl px-6 max-[1000px]:max-w-md max-[870px]:max-w-xs max-[768px]:max-w-3xl">
        <motion.div
          className="max-w-xl max-[768px]:max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="mb-16">
            <h2 className="text-5xl font-antonio font-bold mb-5">Our Tech Stack</h2>
            <p className="text-base max-w-3xl">
              We use modern, proven tools to deliver fast, reliable websites that help your business grow.
            </p>
          </div>
          <ul className="space-y-0 max-w-[480px] max-[768px]:max-w-3xl">
            <li className="flex items-start gap-4 py-5 border-b border-foreground/20">
              <img src={figma} alt="Figma" className="rounded-xl w-14 h-14 object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="text-base font-semibold">Figma</div>
                <p className="text-sm font-light">For clean, professional design mockups before development.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 py-5 border-b border-foreground/20">
              <img src={react} alt="React" className="rounded-xl w-14 h-14 object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="text-base font-semibold">React & Next.js</div>
                <p className="text-sm font-light">Cutting-edge frameworks for high-performance, scalable websites.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 py-5 border-b border-foreground/20">
              <img src={framer} alt="Framer" className="rounded-xl w-14 h-14 object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="text-base font-semibold">Framer</div>
                <p className="text-sm font-light">For interactive, responsive layouts with smooth animations.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 py-5 border-b border-foreground/20">
              <img src={windsurf} alt="Windsurf" className="rounded-xl w-14 h-14 object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="text-base font-semibold">Windsurf</div>
                <p className="text-sm font-light">Accelerating development with AI efficiency, without sacrificing quality.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 py-5 border-b border-foreground/20">
              <img src={google} alt="Google" className="rounded-xl w-14 h-14 object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="text-base font-semibold">Google Tools</div>
                <p className="text-sm font-light">Analytics, Search Console, and Business Profile to boost visibility and track growth.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
});

TechStack.displayName = "TechStack";

export default TechStack;
