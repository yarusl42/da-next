"use client"

import NoiseBg from "@/components/NoiseBg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectGrid, { ProjectGridItem } from "@/components/project/ProjectGrid";
import { projectsData } from "@/data/projectsData";
import ChatWidget from "@/components/ChatWidget";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Projects() {
    const gridItems: ProjectGridItem[] = [...projectsData];


    return (
        <div className="min-h-screen relative">
            <NoiseBg />
            <Header />
            <main className="max-w-6xl mx-auto px-4 md:px-6">

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                >
                  <ProjectGrid title="Projects" items={gridItems} />
                </motion.div>
            </main>
            <Contact />
            <Footer />
            <ChatWidget />
        </div>

    )   
}
