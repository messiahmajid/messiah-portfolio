"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

interface Project {
  title: string;
  description: string;
  role: string;
  highlights: string[];
  tags: string[];
  github?: string;
  demo?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "ScamSpot",
    role: "Lead Developer",
    description: "Chrome extension that detects social engineering in real-time using fine-tuned LLMs.",
    highlights: [
      "95% detection accuracy on 10K+ message dataset",
      "Real-time analysis with sub-second response",
      "Shipped to Chrome Web Store",
    ],
    tags: ["Python", "ML", "Chrome Extension"],
    github: "https://github.com/messiahmajid/scamspot",
    badge: "Hackathon Winner",
  },
  {
    title: "pyCapsid",
    role: "Research Developer",
    description: "Open-source Python package for modeling viral capsid dynamics. Used in active research.",
    highlights: [
      "95% accuracy in rigid domain identification",
      "0.88 correlation with experimental data",
      "Adopted by research lab for ongoing work",
    ],
    tags: ["Python", "Bioinformatics", "Open Source"],
    github: "https://github.com/messiahmajid/pycapsid",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative"
    >
      {/* Stacked paper layers */}
      <div className="absolute inset-0 bg-white rounded-lg border border-te-dark/10 transform rotate-2 translate-x-1 translate-y-1 group-hover:rotate-3 group-hover:translate-x-2 transition-transform duration-300" />
      <div className="absolute inset-0 bg-te-surface rounded-lg border border-te-dark/10 transform -rotate-1 -translate-x-0.5 translate-y-0.5 group-hover:-rotate-2 group-hover:-translate-x-1 transition-transform duration-300" />

      {/* Main card */}
      <div className="relative bg-white rounded-lg border border-te-dark/10 p-6 md:p-8 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm group-hover:shadow-md">
        {/* Paper clip */}
        <div className="absolute -top-2 right-8 w-6 h-10 pointer-events-none">
          <div className="w-4 h-8 border-2 border-te-dark/30 rounded-full transform -rotate-12" />
        </div>

        {/* Corner fold */}
        <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-12 h-12 bg-te-beige transform -rotate-45 -translate-x-6 -translate-y-6 border-b border-te-dark/10" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-4 pt-2">
          <div>
            {project.badge && (
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-te-orange border border-te-orange rounded mb-2">
                {project.badge}
              </span>
            )}
            <h3 className="text-2xl font-bold text-te-dark">
              {project.title}
            </h3>
            <p className="text-sm text-text-muted font-medium">
              {project.role}
            </p>
          </div>

          <div className="flex gap-1">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-te-orange transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHubIcon size={18} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-te-orange transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLinkIcon size={18} />
              </motion.a>
            )}
          </div>
        </div>

        <div className="h-px bg-te-dark/10 mb-4" />

        <p className="text-text-secondary mb-5 leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-2 mb-5">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="text-te-orange mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 7l3 3 7-7" />
                </svg>
              </span>
              <span className="text-text-secondary">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-text-muted bg-te-surface rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-3 right-4 text-[10px] text-text-muted/50 font-mono">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-te-dark mb-4">
            Featured <span className="text-te-orange">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Selected work in ML, bioinformatics, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-te-dark border border-te-dark/20 rounded-lg hover:border-te-orange hover:text-te-orange transition-colors"
          >
            <GitHubIcon size={16} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
