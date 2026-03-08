"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const { personal } = portfolioData;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ashish Saini",
    href: personal.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
  },
];

export default function ContactSection() {
  return (
    <motion.div
      className="px-4 md:px-8 lg:px-12 mb-8 md:mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg md:text-xl font-bold text-netflix-white mb-6">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-sm text-netflix-light-gray leading-relaxed">
            I&apos;m always open to discuss new projects, creative ideas and
            opportunities. Feel free to reach out!
          </p>
          <div className="space-y-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-netflix-dark border border-netflix-gray flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-netflix-red" />
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-netflix-light-gray hover:text-white transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-netflix-light-gray">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement)
              .value;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;
            window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-netflix-dark border border-netflix-gray rounded text-sm text-white placeholder:text-netflix-light-gray focus:outline-none focus:border-netflix-red transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-netflix-dark border border-netflix-gray rounded text-sm text-white placeholder:text-netflix-light-gray focus:outline-none focus:border-netflix-red transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-3 bg-netflix-dark border border-netflix-gray rounded text-sm text-white placeholder:text-netflix-light-gray focus:outline-none focus:border-netflix-red transition-colors resize-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-netflix-red text-white rounded text-sm font-bold hover:bg-netflix-red-hover transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
}
