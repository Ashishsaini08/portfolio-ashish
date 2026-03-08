"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function EducationRow() {
  return (
    <motion.div
      className="px-4 md:px-8 lg:px-12 mb-8 md:mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg md:text-xl font-bold text-netflix-white mb-4">
        Education
      </h2>

      {portfolioData.education.map((edu, i) => (
        <div
          key={i}
          className="bg-netflix-dark rounded-lg p-5 border border-netflix-gray max-w-lg"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded bg-netflix-red/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-netflix-red" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{edu.degree}</h3>
              <p className="text-sm text-netflix-red">{edu.institution}</p>
              <div className="flex gap-4 text-xs text-netflix-light-gray mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {edu.startYear} - {edu.endYear}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
