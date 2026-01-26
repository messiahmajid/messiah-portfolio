"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "industry" | "research";
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Johnson & Johnson",
    role: "MedTech Supply Chain Intern",
    location: "Raritan, NJ",
    period: "May 2025 - Present",
    type: "industry",
    highlights: [
      "Fixed 20+ data pipeline issues in ML-powered delivery systems",
      "Built automation tools that save 30+ hours monthly",
    ],
  },
  {
    company: "UM Luque Laboratory",
    role: "Research Assistant",
    location: "Coral Gables, FL",
    period: "Jan 2025 - Present",
    type: "research",
    highlights: [
      "Developed viral behavior prediction tools (88% accuracy)",
      "Analyzed thousands of genomic sequences for research validation",
    ],
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
      <div className="bg-white rounded-xl border border-te-dark/10 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
        {/* Calendar header with rings */}
        <div className="relative bg-te-surface px-5 py-3 border-b border-te-dark/10">
          <div className="absolute top-0 left-0 right-0 flex justify-center gap-8 -translate-y-1/2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-te-beige border-2 border-te-dark/20" />
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
              {exp.type === "industry" ? "Industry" : "Research"}
            </span>
            <div className="w-8 h-8 rounded-full bg-te-orange/10 border border-te-orange/30 flex items-center justify-center">
              <span className="text-te-orange font-bold text-xs">
                {exp.type === "industry" ? "IN" : "RS"}
              </span>
            </div>
          </div>
        </div>

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

        <div className="h-4 bg-gradient-to-b from-transparent to-te-beige/50" />
      </div>
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
