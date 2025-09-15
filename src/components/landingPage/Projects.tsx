import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/placeholder.svg";
import project2 from "@/assets/placeholder.svg";
import project3 from "@/assets/placeholder.svg";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useHoverFollower } from "@/hooks/use-hover-follower";
import HoverFollowerOverlay from "@/components/common/HoverFollowerOverlay";

type ProjectsProps = {
  id?: string;
};

const Projects: React.FC<ProjectsProps> = ({ id = "projects" }) => {
  const projectsRef = useRef(null);
  const router = useRouter();

  const projects = [
    {
      id: 1,
      image: project1,
      badge: "Dentist Practice",
      title: "Complete Website Redesign",
      subtitle: "Achieved a 45% increase in patient calls within 60 days through a full UX revamp, faster load times, and local SEO improvements.",
    },
    {
      id: 2,
      image: project2,
      badge: "Fitness Center",
      title: "High-Converting Landing Page",
      subtitle: "Generated 30+ qualified new member inquiries in the first month via a conversion-focused layout, clear CTAs, and integrated lead capture.",
    },
    {
      id: 3,
      image: project3,
      badge: "Law Firm",
      title: "Professional Website Build",
      subtitle: "Secured Top 3 Google rankings for core practice keywords, resulting in a steady pipeline of consultation requests from local clients.",
    },
  ];

  return (
    <section id={id} className="py-section relative z-10" ref={projectsRef}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-antonio font-bold mb-4 md:mb-5">Featured Projects</h2>
          <p className="text-base  max-w-xl">
            See how we help local businesses turn visitors into customers with fast, modern design and measurable results.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} onOpen={() => router.push("/project")} />
          ))}
        </div>
        <div className="mt-10 md:mt-12 flex justify-center">
          <Button onClick={() => router.push("/projects")} variant="ghost" className="text-[20px] md:text-[26px] h-11 md:h-12 px-8 md:px-10">
            Browse Other Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

type Project = {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
};

const ProjectItem: React.FC<{ project: Project; onOpen: () => void }> = ({ project, onOpen }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(itemRef, { once: true });
  const { hover, pos, onMouseEnter, onMouseLeave, onMouseMove } = useHoverFollower(itemRef, { speed: 0.2 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, rotateX: 45, y: 50 }}
      animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
    >
      <Card
        role="button"
        aria-label={`Open project: ${project.title}`}
        onClick={onOpen}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        className="group cursor-pointer overflow-hidden shadow-medium hover:shadow-strong transition-smooth transform-gpu"
      >
        <div className="relative w-full aspect-square md:aspect-[3/2]">
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />

          {/* Hover circle follower overlay */}
          <HoverFollowerOverlay hover={hover} pos={pos} offset={{ x: 10, y: 0 }} />

          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4 md:p-6">
            <Badge className="mb-3 md:mb-4 bg-primary text-white rounded-full text-xs md:text-sm font-normal px-2.5 py-1">{project.badge}</Badge>
            <h3 className="text-[28px] sm:text-[36px] md:text-[60px] font-antonio font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-lg">{project.subtitle}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Projects;
