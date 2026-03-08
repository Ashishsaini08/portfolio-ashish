"use client";
import { motion } from "framer-motion";
import ContentRow from "@/components/ui/ContentRow";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <ContentRow title="Work Experience">
        {portfolioData.experience.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </ContentRow>
    </motion.div>
  );
}
