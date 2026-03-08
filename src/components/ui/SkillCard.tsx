"use client";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Server,
  Container,
  Cloud,
  GitBranch,
  Workflow,
  Lock,
  Radio,
  Users,
  FileCode,
  Palette,
  Layout,
  Layers,
  Braces,
} from "lucide-react";
import { Skill } from "@/types";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  React: Code,
  "Next.js": Globe,
  JavaScript: Braces,
  TypeScript: FileCode,
  HTML5: Layout,
  CSS3: Palette,
  "Tailwind CSS": Layers,
  "Node.js": Server,
  Django: Server,
  "Express.js": Server,
  "REST APIs": Globe,
  PostgreSQL: Database,
  MongoDB: Database,
  Docker: Container,
  Azure: Cloud,
  Jenkins: Workflow,
  Git: GitBranch,
  "CI/CD": Workflow,
  JWT: Lock,
  WebSockets: Radio,
  "Agile/Scrum": Users,
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.name] || Code;

  return (
    <motion.div
      className="flex-shrink-0 flex flex-col items-center gap-2 p-4 w-[100px] md:w-[120px] bg-netflix-dark rounded-lg border border-netflix-gray hover:border-netflix-red transition-colors cursor-default"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-8 h-8 text-netflix-white" />
      <span className="text-xs text-netflix-light-gray text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}
