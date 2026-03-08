"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContentRow from "@/components/ui/ContentRow";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { portfolioData } from "@/data/portfolio";
import { Project } from "@/types";

export default function ProjectsRow() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <ContentRow title="My Projects">
        {portfolioData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </ContentRow>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.div>
  );
}
