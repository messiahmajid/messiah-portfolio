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
    badge: "Horizons AI Hackathon Winner",
    image: "/images/scamspot-preview.png",
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
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block">
            <div className="bg-black text-white px-8 py-6 border-8 border-black relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-yellow border-4 border-black"></div>
              <h2 className="sherwood-headline text-8xl md:text-9xl relative z-10">
                PROJECTS
              </h2>
            </div>
          </div>
          <p className="sherwood-body text-xl text-sherwood-gray-600 mt-6 ml-2">
            Building tools that solve real problems
          </p>
        </motion.div>

        {/* Projects - Bold Single Column */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Decorative Number */}
              <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 z-10">
                <div className="bg-neon-yellow border-6 border-black w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                  <span className="sherwood-headline text-4xl md:text-6xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Main Card */}
              <div className="bg-white border-6 border-black relative overflow-hidden">
                {/* Header Bar */}
                <div className="bg-black text-white px-8 py-4 flex justify-between items-center border-b-6 border-black">
                  <span className="sherwood-body text-sm font-bold uppercase tracking-wider">{project.author}</span>
                  <span className="sherwood-body text-sm font-bold">{project.timeAgo}</span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Title */}
                  <motion.h3
                    className="sherwood-headline text-6xl md:text-8xl text-sherwood-black mb-6 leading-none"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Subtitle with Highlight */}
                  <div className="mb-8 inline-block">
                    <div className="bg-neon-yellow border-4 border-black px-6 py-3">
                      <p className="sherwood-body text-2xl font-bold">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Badge */}
                  {project.badge && (
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black">
                        <span className="text-2xl">🏆</span>
                        <span className="sherwood-body text-lg font-bold uppercase">{project.badge}</span>
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mb-8 space-y-6">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-4 border-l-4 border-black pl-6"
                      >
                        <div className="flex-shrink-0 w-3 h-3 bg-neon-yellow border-2 border-black mt-2"></div>
                        <p className="sherwood-body text-lg leading-relaxed text-sherwood-gray-800">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        className="px-4 py-2 bg-white border-3 border-black font-body text-sm font-bold uppercase cursor-pointer hover:bg-neon-yellow transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 flex-wrap">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-neon-lime border-4 border-black transform translate-x-2 translate-y-2"></div>
                        <div className="relative bg-black text-white border-4 border-black px-8 py-4 flex items-center gap-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span className="sherwood-headline text-xl">VIEW CODE</span>
                        </div>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-neon-yellow border-4 border-black transform translate-x-2 translate-y-2"></div>
                        <div className="relative bg-black text-white border-4 border-black px-8 py-4 flex items-center gap-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                          <span className="sherwood-headline text-xl">LIVE DEMO</span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-20 h-2 bg-black"
        />
      </div>
    </section>
  );
}
