"use client";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const { personal } = portfolioData;

export default function Footer() {
  return (
    <footer className="border-t border-netflix-gray mt-16">
      <div className="px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="text-netflix-light-gray hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="text-netflix-light-gray hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-netflix-light-gray hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs text-netflix-light-gray">
            <MapPin className="w-3 h-3" />
            <span>{personal.location}</span>
          </div>
          <p className="text-xs text-netflix-light-gray">
            &copy; {new Date().getFullYear()} {personal.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
