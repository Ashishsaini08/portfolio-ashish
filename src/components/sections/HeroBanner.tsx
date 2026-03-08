"use client";
import { motion } from "framer-motion";
import { Play, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const { personal } = portfolioData;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroBanner() {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #E50914 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #831010 0%, transparent 40%), #141414",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/80 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-4 md:px-8 lg:px-12 pb-16 md:pb-24 max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="inline-block text-netflix-red font-[var(--font-bebas-neue)] text-lg md:text-xl tracking-widest mb-2"
        >
          PORTFOLIO
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-netflix-red font-semibold mb-4"
        >
          {personal.title}
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm md:text-base text-netflix-light-gray leading-relaxed mb-6 max-w-xl"
        >
          {personal.summary}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-netflix-black rounded text-sm font-bold hover:bg-white/80 transition-colors"
          >
            <Play className="w-4 h-4 fill-current" />
            View Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-2.5 bg-netflix-gray/80 text-white rounded text-sm font-bold hover:bg-netflix-gray transition-colors"
          >
            <Download className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
