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
import { Users, Wallet, Eye } from "lucide-react";

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
            SEO improvements compound over time. Here’s a snapshot of traffic and visibility gains after our optimization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-2 text-sm text-muted-foreground">Before</div>
            <img src={project1} alt="Before SEO" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-strong" />
          </div>
          <div>
            <div className="mb-2 text-sm text-muted-foreground">After</div>
            <img src={project2} alt="After SEO" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-strong" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SEOPage = () => {
  const intro = (
    <>
      <p className="text-base leading-relaxed">
        We optimize your website to rank higher on Google for the searches that matter. From technical SEO and site speed to on‑page content and local listings, we build a foundation that drives consistent, qualified traffic.
      </p>
    </>
  );

  const process = (
    <>
      <p className="text-base leading-relaxed">
        Our SEO process blends quick wins with sustainable improvements. We focus on what moves the needle for your business.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-[#303030]">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">01.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">Audit & Strategy</h3>
            <p className="text-sm font-light mt-2 md:mt-3 text-white">
              Technical scan, keyword research, competitor analysis, and a clear roadmap tailored to your goals.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-primary text-white">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">02.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">On‑page & Content</h3>
            <p className="text-sm font-light mt-2 md:mt-3 text-white">
              Fix metadata and structure, improve internal linking, and create content that answers what customers search for.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-white text-[#303030]">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold">03.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight">Local & Performance</h3>
            <p className="text-sm font-light mt-2 md:mt-3">
              Optimize Google Business Profile, citations, reviews, and improve site performance for higher rankings.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const importance = (
    <>
      <p className="text-base leading-relaxed">
        Higher rankings mean more visibility, trust, and leads—without paying for every click. Strong SEO also lowers paid media costs by improving landing page quality.
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-base">
          <Users className="w-5 h-5 text-primary shrink-0" />
          <span>Increase qualified traffic and inbound leads</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <Wallet className="w-5 h-5 text-primary shrink-0" />
          <span>Lower acquisition costs over time</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <Eye className="w-5 h-5 text-primary shrink-0" />
          <span>Own your visibility for high‑intent searches</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <main className="relative">
        <TextWithImage title="Google Rankings (SEO)" image={servicesImage}>
          {intro}
        </TextWithImage>

        <Text title="Our SEO Process">
          {process}
        </Text>

        <TextWithCarousel title="Why it matters" images={[heroImage, project3, servicesImage]} aspectClass="aspect-[4/2]">
          {importance}
        </TextWithCarousel>

        <BeforeAfter />

        <section className="py-10 bg-muted/30 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <h2 className="text-4xl font-antonio font-bold">Ready to grow with SEO?</h2>
              <Button asChild variant="ghost" className="text-[26px] h-12 px-10">
                <a href="/contact">Get a Free SEO Audit</a>
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

export default SEOPage;
