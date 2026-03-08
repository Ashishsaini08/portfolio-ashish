"use client";
import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[250px] md:w-[300px] lg:w-[350px] cursor-pointer rounded-sm overflow-hidden group/card"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Thumbnail / Placeholder */}
      <div className="aspect-video bg-netflix-dark relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, #E50914 0%, #831010 50%, #141414 100%)`,
          }}
        >
          <span className="text-3xl md:text-4xl font-bold text-white/90 font-[var(--font-bebas-neue)]">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Panel (visible on hover) */}
      <div className="absolute bottom-0 left-0 right-0 bg-netflix-dark p-3 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 rounded-b-sm">
        <div className="flex gap-2 mb-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Play className="w-4 h-4 text-black fill-black" />
            </a>
          )}
          <button
            onClick={() => onSelect(project)}
            className="w-8 h-8 rounded-full border-2 border-netflix-light-gray flex items-center justify-center hover:border-white transition-colors"
          >
            <Info className="w-4 h-4 text-white" />
          </button>
        </div>
        <h3 className="text-sm font-bold text-white">{project.title}</h3>
        <p className="text-xs text-netflix-light-gray mt-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-1.5 py-0.5 bg-netflix-gray rounded text-netflix-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
