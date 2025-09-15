import React from "react";
import NoiseBg from "@/components/NoiseBg";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ProjectHero from "@/components/project/slots/ProjectHero";
import ProjectGrid, { ProjectGridItem } from "@/components/project/ProjectGrid";

export type TemplateProjectHeroProps = {
  title: string;
  badges: string[];
  year: string | number;
  industry: string;
  client: string;
  duration: string;
  heroImage: string;
  children?: React.ReactNode; // hero description slot
};

export type TempalteProjectPageProps = {
  hero: TemplateProjectHeroProps;
  sections?: React.ReactNode[]; // array of pre-built section blocks to render in order
  gridItems: ProjectGridItem[];
};

const TempalteProjectPage: React.FC<TempalteProjectPageProps> = ({ hero, sections = [], gridItems }) => {
  return (
    <div className="min-h-screen  relative">
      <NoiseBg />
      <Header />

      <ProjectHero
        title={hero.title}
        badges={hero.badges}
        year={String(hero.year)}
        industry={hero.industry}
        client={hero.client}
        duration={hero.duration}
        heroImage={hero.heroImage}
      >
        {hero.children}
      </ProjectHero>

      {sections.map((section, idx) => (
        <React.Fragment key={idx}>{section}</React.Fragment>
      ))}

      <ProjectGrid items={gridItems} />

      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default TempalteProjectPage;