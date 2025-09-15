import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { MapPin, TrendingUp, CheckCircle, Clock } from "lucide-react";

const WhySkynex = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="pt-24 relative z-10">
      <div className="max-w-6xl px-6 max-[1000px]:max-w-md max-[870px]:max-w-xs max-[768px]:max-w-3xl">
      <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col max-w-md max-[768px]:max-w-3xl"
        >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-5xl font-antonio font-bold mb-3">Why Skynex</h2>
            <p className="text-base max-w-lg max-[768px]:max-w-3xl">Results-first websites for local businesses. Built to increase calls, bookings, and customers.</p>
          </div>
        </div>

        
          <div className="border-b border-foreground/20 py-5">
            <div className="flex items-start gap-3">
              <MapPin className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Local SEO baked in</h3>
                <p className="text-sm mt-1">From Google Business Profile to on-page structure—visibility for your area is part of the build.</p>
              </div>
            </div>
          </div>
          <div className="border-b border-foreground/20 py-5">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Designed for measurable results</h3>
                <p className="text-sm mt-1">Clear goals and tracking—so you can see the impact on calls and bookings, not just page views.</p>
              </div>
            </div>
          </div>
          <div className="border-b border-foreground/20 py-5">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Google Business expertise included</h3>
                <p className="text-sm mt-1">We optimize your GBP and fundamentals, so you rank and convert better—beyond just the website.</p>
              </div>
            </div>
          </div>
          <div className="border-b border-foreground/20 py-5">
            <div className="flex items-start gap-3">
              <Clock className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Simple, stress‑free process</h3>
                <p className="text-sm mt-1">We handle the heavy lifting with a streamlined, fast launch—so you stay focused on the business.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

WhySkynex.displayName = "WhySkynex";

export default WhySkynex;
