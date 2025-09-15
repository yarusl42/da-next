import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { CONTACT } from "@/data/contact";

const OurStory: React.FC = () => {
  return (
    <section className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="max-w-6xl mx-auto px-6 h-[90vh] flex items-center justify-between pb-20"
      >
        <div className="max-w-xl max-[1000px]:max-w-md max-[870px]:max-w-xs max-[768px]:max-w-3xl">
          <h1 className="text-[120px] font-antonio font-bold mb-5 max-[870px]:text-[60px]">Our Story</h1>
          <p className="text-base max-w-3xl max-[768px]:max-w-3xl">
            From the start, Skynex was built with one goal: help service-based businesses thrive in the digital world. We've seen too many local businesses lose out to competitors simply because their website was outdated, invisible on Google, or difficult to use.
          </p>
          <p className="text-base max-w-3xl mt-4">
            That's why we focus on creating websites and online strategies that actually deliver results: more calls, more bookings, and more customers.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href={CONTACT.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Skynex on Instagram" className="inline-block">
              <Instagram className="h-6 w-6 hover:opacity-80 transition" />
            </a>
            <a href={CONTACT.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Skynex on Twitter" className="inline-block">
              <Twitter className="h-6 w-6 hover:opacity-80 transition" />
            </a>
            <a href={CONTACT.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Skynex on Facebook" className="inline-block">
              <Facebook className="h-6 w-6 hover:opacity-80 transition" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurStory;
