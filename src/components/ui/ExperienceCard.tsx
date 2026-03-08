"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Experience } from "@/types";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[320px] md:w-[400px] lg:w-[500px] bg-netflix-dark rounded-lg p-5 border border-netflix-gray hover:border-netflix-red/50 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded bg-netflix-red/20 flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-5 h-5 text-netflix-red" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">{experience.role}</h3>
          <p className="text-sm text-netflix-red">{experience.company}</p>
        </div>
      </div>

      <div className="flex gap-4 text-xs text-netflix-light-gray mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {experience.startDate} - {experience.endDate}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {experience.location}
        </span>
      </div>

      <ul className="space-y-1.5 mb-3">
        {experience.description.slice(0, 4).map((item, i) => (
          <li key={i} className="text-xs text-netflix-light-gray flex gap-2">
            <span className="text-netflix-red mt-0.5">&#9656;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 bg-netflix-gray rounded text-netflix-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
