"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoiseBg from "@/components/NoiseBg";
import ChatWidget from "@/components/ChatWidget";
import Contact from "@/components/Contact";
import TextWithImage from "@/components/project/slots/TextWithImage";
import TextWithCarousel from "@/components/project/slots/TextWithCarousel";
import Text from "@/components/project/slots/Text";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, BarChart3, Layers } from "lucide-react";

import heroImage from "@/assets/placeholder.svg";
import servicesImage from "@/assets/placeholder.svg";
import project1 from "@/assets/placeholder.svg";
import project2 from "@/assets/placeholder.svg";
import project3 from "@/assets/placeholder.svg";

const BeforeAfter = () => {
  return (
    <section className="py-10 bg-muted/30 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-4 md:space-y-6 pb-2 md:pb-4">
          <h2 className="text-4xl md:text-5xl font-antonio font-bold text-foreground">Before & After</h2>
          <p className="text-base leading-relaxed max-w-3xl">
            See how a focused funnel turns clicks into booked calls. Cleaner flow, stronger offer, and less friction.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-2 text-sm text-muted-foreground">Before</div>
            <img src={project1} alt="Before funnel" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-strong" />
          </div>
          <div>
            <div className="mb-2 text-sm text-muted-foreground">After</div>
            <img src={project2} alt="After funnel" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-strong" />
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadGeneration = () => {
  const intro = (
    <>
      <p className="text-base leading-relaxed">
        We build simple, high‑converting funnels: targeted landing pages, clear offers, and friction‑free forms that drive calls and bookings. Every step guides visitors toward a single, measurable action.
      </p>
    </>
  );

  const process = (
    <>
      <p className="text-base leading-relaxed">
        Our funnel builds are fast, testable, and focused on outcomes. We iterate quickly to hit your target cost‑per‑lead.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
      
          <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-[#303030]">
            <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">01.</div>
            <div className="mt-auto">
              <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">Offer & Audience</h3>
              <p className="text-sm font-light mt-2 md:mt-3 text-white">
              Clarify the irresistible offer and target audience. Align ad messaging with landing page promise.
              </p>
            </div>
          </div>
 
          <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-primary text-white">
            <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">02.</div>
            <div className="mt-auto">
              <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">Landing Page</h3>
              <p className="text-sm font-light mt-2 md:mt-3 text-white">
                Design a focused page with proof, FAQs, and a single CTA. Optimize for speed and clarity.
              </p>
            </div>
          </div>

          <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col  bg-white text-[#303030]">
            <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold">03.</div>
            <div className="mt-auto">
              <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight">Tracking & Scale</h3>
              <p className="text-sm font-light mt-2 md:mt-3">
              Install analytics, set up conversion events, A/B test, and scale the winners across channels.
              </p>
            </div>
          </div>
          
      </div>
    </>
  );

  const importance = (
    <>
      <p className="text-base leading-relaxed">
        A great funnel reduces ad waste and increases ROI. By removing distractions and emphasizing value, you turn more visits into qualified leads.
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-base">
          <ArrowDownRight className="w-5 h-5 text-primary shrink-0" />
          <span>Lower cost‑per‑lead and higher conversion rates</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <BarChart3 className="w-5 h-5 text-primary shrink-0" />
          <span>Clear measurement from first click to booked call</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <Layers className="w-5 h-5 text-primary shrink-0" />
          <span>Scalable foundation for paid and organic traffic</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <main className="relative">
        <TextWithImage title="Lead Generation Funnels" image={servicesImage}>
          {intro}
        </TextWithImage>

        <Text title="Our Funnel Process">
          {process}
        </Text>

        <TextWithCarousel title="Why it matters" images={[heroImage, project3, servicesImage]} aspectClass="aspect-[4/2]">
          {importance}
        </TextWithCarousel>

        <BeforeAfter />

        <section className="py-10 bg-muted/30 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <h2 className="text-4xl font-antonio font-bold">Want more calls and bookings?</h2>
              <Button asChild variant="ghost" className="text-[26px] h-12 px-10">
                <a href="/contact">Build My Funnel</a>
              </Button>
            </div>
          </div>
        </section>

        <Contact id="contact" />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default LeadGeneration;
