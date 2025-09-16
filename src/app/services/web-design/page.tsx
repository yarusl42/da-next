"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoiseBg from "@/components/NoiseBg";
import ChatWidget from "@/components/ChatWidget";
import Contact from "@/components/Contact";
import TextWithImage from "@/components/project/slots/TextWithImage";
import Text from "@/components/project/slots/Text";
import TextWithCarousel from "@/components/project/slots/TextWithCarousel";
import { Button } from "@/components/ui/button";
import { Timer, MessageSquare, Smartphone } from "lucide-react";

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
            Real improvements from our redesigns. Clearer messaging, faster load times, and a more modern look that converts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-2 text-sm text-muted-foreground">Before</div>
            <img src={project1} alt="Before redesign" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-strong" />
          </div>
          <div>
            <div className="mb-2 text-sm text-muted-foreground">After</div>
            <img src={project2} alt="After redesign" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-strong" />
          </div>
        </div>
      </div>
    </section>
  );
};

const WebDesign = () => {
  const intro = (
    <>
      <p className="text-base leading-relaxed">
        We design and build fast, modern websites that are easy to use and crafted to convert visitors into customers. From strategy and UX to responsive development and launch, we handle everything end‑to‑end.
      </p>
    </>
  );

  const process = (
    <>
      <p className="text-base leading-relaxed">
        Our process is simple and transparent. We collaborate closely with you to deliver a website that reflects your brand and moves your business forward.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-[#303030]">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">01.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">Discover</h3>
            <p className="text-sm font-light mt-2 md:mt-3 text-white">
              Brief, goals, audience, and competitive research to align on what success looks like.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-primary text-white">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">02.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">Design</h3>
            <p className="text-sm font-light mt-2 md:mt-3 text-white">
              Sitemaps, wireframes, and beautiful interfaces that balance clarity and personality.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-white text-[#303030]">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold">03.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight">Build & Launch</h3>
            <p className="text-sm font-light mt-2 md:mt-3">
              Responsive development, performance optimization, QA, and smooth launch.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const importance = (
    <>
      <p className="text-base leading-relaxed">
        Your website is your 24/7 storefront. A modern, fast, and trustworthy experience directly impacts search rankings, ad performance, and conversion rates.
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-base">
          <Timer className="w-5 h-5 text-primary shrink-0" />
          <span>Faster load times improve SEO and ad Quality Scores</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <MessageSquare className="w-5 h-5 text-primary shrink-0" />
          <span>Clear messaging increases trust and conversion</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <Smartphone className="w-5 h-5 text-primary shrink-0" />
          <span>Mobile-first design captures on-the-go customers</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <main className="relative">
        <TextWithImage title="Web design and development" image={servicesImage}>
          {intro}
        </TextWithImage>

        <Text title="Our Process">
          {process}
        </Text>

        <TextWithCarousel title="Why it matters" images={[heroImage, project3, servicesImage]} aspectClass="aspect-[4/2]">
          {importance}
        </TextWithCarousel>

        <BeforeAfter />

        <section className="py-10 bg-muted/30 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <h2 className="text-4xl font-antonio font-bold">Ready to upgrade your website?</h2>
              <Button asChild variant="ghost" className="text-[26px] h-12 px-10">
                <a href="/contact">Get a Free Quote</a>
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

export default WebDesign;
