import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import servicesImage from "@/assets/services_thumbnail.avif";
import QAndAList from "@/components/QAndAList";
import { servicesData } from "@/data/servicesData";

type ServicesProps = {
  id?: string;
  showImage?: boolean;
};

const Services: React.FC<ServicesProps> = ({ id = "services", showImage = true }) => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });

  return (
    <section id={id} className="py-20 relative z-10" ref={servicesRef}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className={`flex flex-col md:flex-row justify-between gap-8 md:gap-12 ${!showImage ? "max-[1000px]:max-w-md max-[870px]:max-w-xs max-[768px]:max-w-3xl" : ""}`}>
          <motion.div
            className="flex-1 space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-antonio font-bold mb-4 md:mb-5">what we can do for you</h2>
              <p className="text-base mb-2 max-w-sm max-[768px]:max-w-3xl">
                We give local businesses an online presence that drives real results
              </p>
            </div>
            <QAndAList qAndAnswers={servicesData} showImageOnHover className="md:mr-4 w-full max-w-xl max-[768px]:max-w-3xl" />
          </motion.div>
          
          {showImage && (
            <motion.div
              className="self-center md:self-start sm:mt-8"
              initial={{ opacity: 0, rotateY: 90, x: 100 }}
              animate={servicesInView ? { opacity: 1, rotateY: 0, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={servicesImage}
                alt="Professional team collaboration"
                className="w-full max-w-[370px] h-auto [900px]:w-[370px] [900px]:h-[476px] object-cover rounded-3xl transform rotate-2 shadow-strong"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
