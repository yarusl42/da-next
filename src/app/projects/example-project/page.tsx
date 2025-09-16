"use client"

import heroImage from "@/assets/placeholder.svg";
import project1 from "@/assets/placeholder.svg";
import project2 from "@/assets/placeholder.svg";
import project3 from "@/assets/placeholder.svg";
import servicesImage from "@/assets/placeholder.svg";
import { ProjectGridItem } from "@/components/project/ProjectGrid";
import { projectsData } from "@/data/projectsData";
import TempalteProjectPage from "@/components/project/TempalteProjectPage";
import TextWithImage from "@/components/project/slots/TextWithImage";
import TextWithGridImages from "@/components/project/slots/TextWithGridImages";
import TextWithCarousel from "@/components/project/slots/TextWithCarousel";

const Project = () => {
  const hero = {
    title: "ACME COMPANY",
    badges: ["Web Development", "UI/UX Design", "SEO Optimization"],
    year: "2024",
    industry: "E-commerce",
    client: "Tech Startup",
    duration: "8 weeks",
    heroImage,
    children: (
      <p className="text-base max-w-4xl">
        A comprehensive digital transformation project that elevated this local business to industry leadership through strategic design, development, and optimization.
      </p>
    ),
  };

  const sections = [
    <TextWithImage key="s1" title="Project Overview" image={servicesImage}>
      <>
        <p className="text-base leading-relaxed">
          This project involved a complete digital transformation, focusing on user experience, performance optimization, and scalable architecture. We implemented cutting-edge technologies and design principles to create a solution that not only meets current needs but anticipates future growth.
        </p>
        <p className="text-base leading-relaxed">
          The challenge was to create a cohesive digital ecosystem that would serve multiple user types while maintaining simplicity and effectiveness. Through careful planning and iterative development, we delivered a solution that exceeded expectations.
        </p>
      </>
    </TextWithImage>,
    <TextWithGridImages key="s2" title="Project Overview" images={[project1, project2]}>
      <>
        <p className="text-base leading-relaxed">
          This project involved a complete digital transformation, focusing on user experience, performance optimization, and scalable architecture. We implemented cutting-edge technologies and design principles to create a solution that not only meets current needs but anticipates future growth.
        </p>
        <p className="text-base leading-relaxed">
          The challenge was to create a cohesive digital ecosystem that would serve multiple user types while maintaining simplicity and effectiveness. Through careful planning and iterative development, we delivered a solution that exceeded expectations.
        </p>
      </>
    </TextWithGridImages>,
    <TextWithCarousel key="s3" title="Project Overview" images={[project1, project2, project3]} aspectClass="aspect-[4/2]">
      <>
        <p className="text-base leading-relaxed">
          This project involved a complete digital transformation, focusing on user experience, performance optimization, and scalable architecture. We implemented cutting-edge technologies and design principles to create a solution that not only meets current needs but anticipates future growth.
        </p>
        <p className="text-base leading-relaxed">
          The challenge was to create a cohesive digital ecosystem that would serve multiple user types while maintaining simplicity and effectiveness. Through careful planning and iterative development, we delivered a solution that exceeded expectations.
        </p>
      </>
    </TextWithCarousel>,
  ];

  const gridItems: ProjectGridItem[] = [0, 2, 3, 4].map((i) => projectsData[i]) as ProjectGridItem[];

  return <TempalteProjectPage hero={hero} sections={sections} gridItems={gridItems} />;
};

export default Project;