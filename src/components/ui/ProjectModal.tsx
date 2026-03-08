"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl bg-netflix-dark rounded-lg overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Banner */}
            <div
              className="h-48 md:h-64 relative"
              style={{
                background: `linear-gradient(135deg, #E50914 0%, #831010 40%, #141414 100%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl md:text-7xl font-bold text-white/20 font-[var(--font-bebas-neue)]">
                  {project.title}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-netflix-dark rounded-full flex items-center justify-center hover:bg-netflix-gray transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 -mt-8 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-green-400">
                  {project.category}
                </span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-netflix-white hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-sm text-netflix-light-gray leading-relaxed mb-4">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-netflix-gray rounded-full text-netflix-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
