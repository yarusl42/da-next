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
import { ShieldCheck, Gauge, TrendingUp } from "lucide-react";

import heroImage from "@/assets/placeholder.svg";
import servicesImage from "@/assets/placeholder.svg";
import project3 from "@/assets/placeholder.svg";

const MetricsGrid = () => (
  <section className="py-10 bg-muted/30 relative z-10">
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <div className="space-y-4 md:space-y-6 pb-2 md:pb-4">
        <h2 className="text-4xl md:text-5xl font-antonio font-bold text-foreground">Growth Metrics We Track</h2>
        <p className="text-base leading-relaxed max-w-3xl">
          Transparent, actionable metrics—reviewed monthly and improved continuously.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="p-6 rounded-2xl border border-border bg-background/60 shadow-medium">
          <div className="text-4xl font-antonio text-primary mb-1">↑</div>
          <div className="text-base font-semibold">Organic Visitors</div>
          <div className="text-sm text-muted-foreground">Month over month</div>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-background/60 shadow-medium">
          <div className="text-4xl font-antonio text-primary mb-1">⚡</div>
          <div className="text-base font-semibold">Site Speed</div>
          <div className="text-sm text-muted-foreground">Core Web Vitals</div>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-background/60 shadow-medium">
          <div className="text-4xl font-antonio text-primary mb-1">★</div>
          <div className="text-base font-semibold">GBP Visibility</div>
          <div className="text-sm text-muted-foreground">Local rankings</div>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-background/60 shadow-medium">
          <div className="text-4xl font-antonio text-primary mb-1">☎</div>
          <div className="text-base font-semibold">Leads & Calls</div>
          <div className="text-sm text-muted-foreground">Attribution set up</div>
        </div>
      </div>
    </div>
  </section>
);

const WebsiteCare = () => {
  const intro = (
    <>
      <p className="text-base leading-relaxed">
        Stay worry‑free with ongoing updates, monthly SEO reports, security monitoring, backups, and performance optimizations. We keep your site healthy and consistently improving.
      </p>
    </>
  );

  const process = (
    <>
      <p className="text-base leading-relaxed">
        A proactive, recurring cadence that keeps your site fast, secure, and growth‑ready.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-[#303030]">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">01.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">Maintain</h3>
            <p className="text-sm font-light mt-2 md:mt-3 text-white">
              Updates, backups, uptime monitors, security patches, and bug fixes.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-primary text-white">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold text-white">02.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight text-white">Optimize</h3>
            <p className="text-sm font-light mt-2 md:mt-3 text-white">
              Speed tuning, Core Web Vitals, image/CDN, and accessibility improvements.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-6 md:p-10 h-auto md:h-[320px] flex flex-col bg-white text-[#303030]">
          <div className="text-[48px] md:text-[60px] leading-none font-antonio font-bold">03.</div>
          <div className="mt-auto">
            <h3 className="text-[24px] md:text-[32px] font-antonio font-normal leading-tight">Grow</h3>
            <p className="text-sm font-light mt-2 md:mt-3">
              Monthly SEO tasks, content suggestions, and roadmap for steady gains.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const importance = (
    <>
      <p className="text-base leading-relaxed">
        A maintained site performs better, ranks higher, and converts more. Ongoing attention prevents costly issues and keeps your marketing effective.
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-base">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
          <span>Prevent outages and security incidents</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <Gauge className="w-5 h-5 text-primary shrink-0" />
          <span>Continuously improve speed and UX</span>
        </div>
        <div className="flex items-center gap-3 text-base">
          <TrendingUp className="w-5 h-5 text-primary shrink-0" />
          <span>Compounding SEO growth with monthly actions</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <main className="relative">
        <TextWithImage title="Website Care & Growth" image={servicesImage}>
          {intro}
        </TextWithImage>

        <Text title="How We Work">
          {process}
        </Text>

        <TextWithCarousel title="Why it matters" images={[heroImage, project3, servicesImage]} aspectClass="aspect-[4/2]">
          {importance}
        </TextWithCarousel>

        <MetricsGrid />

        <section className="py-10 bg-muted/30 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <h2 className="text-4xl font-antonio font-bold">Want reliable growth each month?</h2>
              <Button asChild variant="ghost" className="text-[26px] h-12 px-10">
                <a href="/contact">Discuss Care Plans</a>
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

export default WebsiteCare;
