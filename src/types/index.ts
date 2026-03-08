export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Database" | "Other";
}

export interface Education {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number;
  location: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
}
