import React from "react";
import { Badge } from "@/components/ui/badge";

export type ProjectHeroProps = {
  title: string;
  badges: string[];
  year: string | number;
  industry: string;
  client: string;
  duration: string;
  heroImage: string;
  children?: React.ReactNode; // description slot
};

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  badges,
  year,
  industry,
  client,
  duration,
  heroImage,
  children,
}) => {
  return (
    <section className="py-section relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          {/* Service badges */}
          <div className="flex gap-3 flex-wrap">
            {badges.map((b, i) => (
              <Badge key={i} variant="secondary">{b}</Badge>
            ))}
          </div>

          {/* Company name */}
          <h1 className="text-5xl font-antonio font-bold text-foreground text-[120px]">
            {title}
          </h1>

          {/* Description slot */}
          {children && (
            <div className="text-base max-w-4xl">{children}</div>
          )}

          {/* Project details in columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">Year</div>
              <div className="text-sm font-semibold text-primary">{year}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">Industry</div>
              <div className="text-sm font-semibold text-primary">{industry}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">Client</div>
              <div className="text-sm font-semibold text-primary">{client}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground tracking-wide">Project Duration</div>
              <div className="text-sm font-semibold text-primary">{duration}</div>
            </div>
          </div>

          {/* Big image */}
          <div className="pt-8">
            <img
              src={heroImage}
              alt="Project showcase"
              className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
