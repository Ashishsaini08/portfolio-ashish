"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ProfileGate from "@/components/sections/ProfileGate";
import Navbar from "@/components/layout/Navbar";
import HeroBanner from "@/components/sections/HeroBanner";
import ProjectsRow from "@/components/sections/ProjectsRow";
import SkillsRow from "@/components/sections/SkillsRow";
import ExperienceRow from "@/components/sections/ExperienceRow";
import EducationRow from "@/components/sections/EducationRow";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [showGate, setShowGate] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("profileSelected")) {
      setShowGate(false);
    }
  }, []);

  if (!mounted) return null;

  const handleProfileSelect = () => {
    sessionStorage.setItem("profileSelected", "true");
    setShowGate(false);
  };

  return (
    <main className="min-h-screen bg-netflix-black">
      <AnimatePresence mode="wait">
        {showGate ? (
          <ProfileGate key="gate" onSelect={handleProfileSelect} />
        ) : (
          <div key="content">
            <Navbar />
            <HeroBanner />
            <div className="relative z-10 -mt-16">
              <section id="projects">
                <ProjectsRow />
              </section>
              <section id="skills">
                <SkillsRow />
              </section>
              <section id="experience">
                <ExperienceRow />
              </section>
              <section id="education">
                <EducationRow />
              </section>
              <section id="contact">
                <ContactSection />
              </section>
            </div>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
