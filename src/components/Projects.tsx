"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  timeAgo: string;
  highlights: string[];
  tags: string[];
  github?: string;
  demo?: string;
  badge?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "SCAMSPOT",
    subtitle: "AI-Powered Fraud Detection Tool",
    author: "Messiah Majid",
    date: "Feb 2025",
    timeAgo: "1M",
    highlights: [
      "Designed AI-powered Chrome extension and web platform for real-time scam detection, identifying 70% of social engineering scam attempts",
      "Formulated ML pipeline with fine-tuned LLMs for NLP-based text extraction on 10,000+ scam conversations, achieving 95% accuracy",
    ],
    tags: ["AI/ML", "Chrome Extension", "NLP"],
    github: "https://github.com/messiahmajid/scamspot",
    badge: "Horizons AI Hackathon",
    image: "/images/scamspot-preview.png", // placeholder
  },
  {
    title: "PYCAPSID",
    subtitle: "Computational Tool for Viral Capsid Dynamics",
    author: "Messiah Majid",
    date: "Jan 2025",
    timeAgo: "2M",
    highlights: [
      "Innovated open-source Python package to model viral capsid mechanical behavior, achieving 95% accuracy in predicting quasi-rigid domains",
      "Integrated advanced algorithms for normal mode analysis, achieving 0.88 correlation with experimental data for protein thermal fluctuations",
    ],
    tags: ["Python", "Bioinformatics", "Open Source", "Research"],
    github: "https://github.com/messiahmajid/pycapsid",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="sherwood-single-column max-w-4xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="sherwood-headline text-6xl md:text-8xl text-sherwood-black mb-4">
            PROJECTS
          </h2>
          <div className="sherwood-divider" />
        </motion.div>

        {/* Projects - Single Column */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="sherwood-card sherwood-lift-on-hover"
            >
              {/* Author and Timestamp */}
              <div className="p-6 pb-4 flex justify-between items-center border-b border-sherwood-gray-200">
                <span className="sherwood-author">{project.author}</span>
                <span className="sherwood-timestamp">{project.timeAgo}</span>
              </div>

              {/* Main Content */}
              <div className="p-6 md:p-8">
                {/* Headline with Neon Highlight */}
                <h3 className="sherwood-headline-huge text-sherwood-black mb-4">
                  {project.title}
                </h3>

                {/* Subtitle with Neon Highlight Box */}
                <div className="mb-6">
                  <span className="neon-highlight-box sherwood-body text-lg font-semibold">
                    {project.subtitle}
                  </span>
                </div>

                {/* Project Image with Fade Effect */}
                {project.image && (
                  <div className="sherwood-image-wrapper sherwood-image-glow mb-6 h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Badge */}
                {project.badge && (
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-sherwood-black text-white text-sm font-bold uppercase tracking-wider">
                      🏆 {project.badge}
                    </span>
                  </div>
                )}

                {/* Highlights */}
                <div className="mb-6 space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <p
                      key={i}
                      className="sherwood-body text-base leading-relaxed text-sherwood-black"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 bg-sherwood-gray-100 text-sherwood-black font-body text-sm font-medium border border-sherwood-gray-300 hover:bg-sherwood-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-wrap">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="sherwood-button"
                    >
                      View Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="sherwood-button"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="sherwood-divider mt-16" />
      </div>
    </section>
  );
}
