"use client";
import { motion } from "framer-motion";
import { Code, Search, Eye } from "lucide-react";

const profiles = [
  { label: "Developer", icon: Code, color: "#E50914" },
  { label: "Recruiter", icon: Search, color: "#0077B5" },
  { label: "Visitor", icon: Eye, color: "#46D369" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

interface ProfileGateProps {
  onSelect: () => void;
}

export default function ProfileGate({ onSelect }: ProfileGateProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-netflix-black flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-netflix-white text-3xl md:text-5xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Who&apos;s visiting?
      </motion.h1>
      <motion.p
        className="text-netflix-light-gray text-sm md:text-base mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Select your profile to continue
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {profiles.map((profile) => (
          <motion.button
            key={profile.label}
            variants={item}
            className="flex flex-col items-center gap-3 group cursor-pointer"
            onClick={onSelect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-md flex items-center justify-center transition-all group-hover:ring-2 group-hover:ring-white"
              style={{ backgroundColor: profile.color + "20", borderColor: profile.color }}
            >
              <profile.icon
                className="w-10 h-10 md:w-14 md:h-14"
                style={{ color: profile.color }}
              />
            </div>
            <span className="text-sm text-netflix-light-gray group-hover:text-white transition-colors">
              {profile.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
