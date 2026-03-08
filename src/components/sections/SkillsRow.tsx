"use client";
import { motion } from "framer-motion";
import ContentRow from "@/components/ui/ContentRow";
import SkillCard from "@/components/ui/SkillCard";
import { portfolioData } from "@/data/portfolio";

const categories = [
  { key: "Frontend" as const, label: "Frontend Technologies" },
  { key: "Backend" as const, label: "Backend Technologies" },
  { key: "Database" as const, label: "Databases" },
  { key: "DevOps" as const, label: "DevOps & Tools" },
  { key: "Other" as const, label: "Other Skills" },
];

export default function SkillsRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {categories.map((cat) => {
        const skills = portfolioData.skills.filter(
          (s) => s.category === cat.key
        );
        if (skills.length === 0) return null;
        return (
          <ContentRow key={cat.key} title={cat.label}>
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ContentRow>
        );
      })}
    </motion.div>
  );
}
