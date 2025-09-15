import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useHoverFollower } from "@/hooks/use-hover-follower";
import HoverFollowerOverlay from "@/components/common/HoverFollowerOverlay";
import Link from "next/link";

export type ProjectGridItem = {
  image: string;
  badges: string[];
  title: string;
  description: string;
  link: string;
};

export type ProjectGridProps = {
  title?: string;
  items: ProjectGridItem[];
};

const ProjectGridCard: React.FC<{ item: ProjectGridItem }> = ({ item }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { hover, pos, onMouseEnter, onMouseLeave, onMouseMove } = useHoverFollower(ref, { speed: 0.2 });

  return (
    <Link href={item.link} className="block">
      <Card className="overflow-hidden hover-scale group border-0 bg-transparent shadow-none cursor-pointer">
        <div
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className="relative w-full aspect-[3/2]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-transform duration-300"
          />
          <HoverFollowerOverlay hover={hover} pos={pos} />
        </div>
        <CardContent className="p-0 space-y-4">
          <div className="flex gap-2 flex-wrap mt-4">
            {item.badges.map((badge, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
          <h3 className="text-[32px] font-antonio font-normal text-foreground">{item.title}</h3>
          <p className="text-base">{item.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ title = "More Projects", items }) => {
  return (
    <section className="py-section relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-8 mb-12">
          <h2 className="text-5xl font-antonio font-bold text-foreground whitespace-nowrap">
            {title}
          </h2>
          <div className="border-b border-foreground/20 h-px w-full mb-[-10px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {items.map((item, index) => (
            <ProjectGridCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
