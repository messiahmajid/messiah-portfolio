"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "industry" | "research";
  highlights: string[];
  image?: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Johnson & Johnson",
    role: "MedTech Supply Chain Intern",
    location: "Raritan, NJ",
    period: "Summer 2025",
    type: "industry",
    highlights: [
      "Fixed 20+ data pipeline issues in ML-powered delivery systems",
      "Built automation tools that save 30+ hours monthly",
    ],
    image: "/experience/jnj.jpg",
  },
  {
    company: "UM Luque Laboratory",
    role: "Research Assistant",
    location: "Coral Gables, FL",
    period: "Jan 2025 - Present",
    type: "research",
    highlights: [
      "Study computational virology and bioinformatics methods",
      "Support ongoing viral capsid dynamics research",
    ],
    image: "/experience/luque-lab.jpg",
    link: "https://luquelab.github.io/test_webpage/pages/team/",
  },
];

function CalendarCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      {/* Card shadow */}
      <div className="absolute inset-0 bg-te-dark/15 rounded-xl translate-x-2 translate-y-2" />

      <div className="relative bg-white rounded-xl border border-te-dark/10 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
        {/* Image section (only if image exists) */}
        {exp.image ? (
          <div className="relative h-44 overflow-hidden">
            <Image
              src={exp.image}
              alt={exp.company}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
            {/* Type badge on image */}
            <div className="absolute top-3 left-3">
              <div className="px-2 py-1 bg-te-orange text-white text-[10px] font-bold uppercase tracking-wider rounded">
                {exp.type === "industry" ? "Industry" : "Research"}
              </div>
            </div>
          </div>
        ) : null}

        <div className="p-5">
          <div className="inline-block px-3 py-1 bg-te-orange text-white text-xs font-bold rounded mb-3">
            {exp.period}
          </div>

          <h3 className="text-xl font-bold text-te-dark mb-1 group-hover:text-te-orange transition-colors">
            {exp.role}
          </h3>

          <p className="text-te-orange font-medium mb-1">{exp.company}</p>
          <p className="text-text-muted text-sm font-mono mb-4">{exp.location}</p>

          <ul className="space-y-2">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-4 h-4 rounded border-2 border-te-orange/50 flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-2 h-2 bg-te-orange rounded-sm"
                  />
                </span>
                <span className="text-text-secondary text-sm">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom stripe */}
        <div className="h-2 bg-gradient-to-r from-te-orange via-te-orange/60 to-te-orange" />
      </div>

      {/* Link below card */}
      {exp.link && (
        <div className="relative z-10 flex justify-center mt-4">
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-te-orange hover:underline transition-colors cursor-pointer"
          >
            Visit Lab Website →
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-te-dark mb-4">
            Work <span className="text-te-orange">Experience</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Industry and research roles where I shipped real products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <CalendarCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
