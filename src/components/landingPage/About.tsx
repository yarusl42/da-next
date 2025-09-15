import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CountUpNumber from "@/components/CountUpNumber";
import { CONTACT } from "@/data/contact";

type AboutProps = {
  id: string;
};



const About: React.FC<AboutProps> = ({ id }) => {
  const router = useRouter();
  return (
    <section id={id} className="py-section relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-10 md:space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-antonio font-bold mb-4 md:mb-5">About Skynex</h2>
            <p className="text-base leading-relaxed max-w-3xl">
              We help local businesses like dentists, gyms, and law firms get found on Google 
              with fast, professional websites and optimized Google profiles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-antonio text-primary mb-2 md:text-[60px] font-bold">
                <CountUpNumber end={5} />
              </div>
              <div className="text-base font-semibold">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-antonio text-primary mb-2 md:text-[60px] font-bold">
                <CountUpNumber end={70} />
              </div>
              <div className="text-base font-semibold">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-antonio text-primary mb-2 md:text-[60px] font-bold">
                <CountUpNumber end={40} />+
              </div>
              <div className="text-base font-semibold">Clients on Worldwide</div>
            </div>
            <div className="space-y-4 max-[1000px]:col-span-full max-[1000px]:flex max-[1000px]:gap-12 max-[1000px]:items-center max-[1000px]:space-y-0">
              <div>
                <div className="text-base font-semibold">Call Today :</div>
                <div className="text-base">{CONTACT.phone}</div>
              </div>
              <div>
                <div className="text-base font-semibold">Email :</div>
                <div className="text-base">{CONTACT.email}</div>
              </div>
            </div>
          </div>
          <Button onClick={() => router.push("/about")} variant="ghost" className="text-[20px] md:text-[26px] h-11 md:h-12 px-8 md:px-10">
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
