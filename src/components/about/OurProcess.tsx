import React from "react";
import { motion } from "framer-motion";
import gridImg1 from "@/assets/process_1.jpg";
import gridImg2 from "@/assets/process_2.jpg";
import gridImg3 from "@/assets/process_3.jpg";

const OurProcess: React.FC = () => {
  return (
    <section className="py-section relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="mb-16 max-w-xl">
            <h2 className="text-5xl font-antonio font-bold mb-5">Our Process</h2>
            <p className="text-base max-w-md">A simple, transparent process built to deliver real results for your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl p-10 h-[320px] flex flex-col bg-[#303030]">
              <div className="text-[60px] leading-none font-antonio font-bold text-white">01.</div>
              <div className="mt-auto">
                <h3 className="text-[32px] font-antonio font-normal leading-tight text-white">Research & Strategy</h3>
                <p className="text-sm font-light mt-2 text-white">
                  We dive deep into understanding your business, audience, and goals. Through research and strategy, we shape a clear roadmap for the project.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[320px]">
              <img src={gridImg1.src} alt="Process visual 1" className="w-full h-full object-cover" />
            </div>

            <div className="rounded-3xl p-10 h-[320px] flex flex-col bg-primary text-white">
              <div className="text-[60px] leading-none font-antonio font-bold text-white">02.</div>
              <div className="mt-auto">
                <h3 className="text-[32px] font-antonio font-normal leading-tight text-white">Concept & Ideation</h3>
                <p className="text-sm font-light mt-3 text-white">
                  We brainstorm and explore creative directions. Early sketches evolve into wireframes that set the design and functionality path.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[320px]">
              <img src={gridImg2.src} alt="Process visual 2" className="w-full h-full object-cover" />
            </div>

            <div className="rounded-3xl p-10 h-[320px] flex flex-col md:col-span-2 bg-white text-[#303030]">
              <div className="text-[60px] leading-none font-antonio font-bold">03.</div>
              <div className="mt-auto">
                <h3 className="text-[32px] font-antonio font-normal leading-tight">Feedback & Refinement</h3>
                <p className="text-sm font-light mt-2">
                  Collaboration is core to our process. We review together, gather input, and refine until the solution aligns with your goals and brand.
                </p>
              </div>
            </div>

            <div className="rounded-3xl p-10 h-[320px] flex flex-col bg-primary text-white">
              <div className="text-[60px] leading-none font-antonio font-bold text-white">04.</div>
              <div className="mt-auto">
                <h3 className="text-[32px] font-antonio font-normal leading-tight text-white">Testing & Optimization</h3>
                <p className="text-sm font-light mt-2 text-white">
                  We test performance, accessibility, and usability to ensure a smooth experience across devices and real-world scenarios.
                </p>
              </div>
            </div>

            <div className="rounded-3xl p-10 h-[320px] flex flex-col bg-[#303030] text-white">
              <div className="text-[60px] leading-none font-antonio font-bold text-white">05.</div>
              <div className="mt-auto">
                <h3 className="text-[32px] font-antonio font-normal leading-tight text-white">Launch & Delivery</h3>
                <p className="text-sm font-light mt-2 text-white">
                  We launch, hand over deliverables, and support you post‑launch to ensure momentum and long‑term success.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[320px]">
              <img src={gridImg3.src} alt="Process visual 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
