"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WashiTape, StarDoodle } from "./SketchyElements";
import { RocketIcon, DNAIcon, GitHubIcon, ArrowIcon, TrophyIcon } from "./DoodleIcons";

interface Project {
  title: string;
  subtitle: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  tagColor: string;
  highlights: string[];
  tags: string[];
  github?: string;
  demo?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "ScamSpot",
    subtitle: "AI-Powered Fraud Detection Tool",
    date: "Feb 2025",
    icon: <RocketIcon size={32} />,
    color: "#DC6B5A",
    tagColor: "#fff59d",
    highlights: [
      "Designed AI-powered Chrome extension and web platform for real-time scam detection, identifying 70% of social engineering scam attempts",
      "Formulated ML pipeline with fine-tuned LLMs for NLP-based text extraction on 10,000+ scam conversations, achieving 95% accuracy",
    ],
    tags: ["AI/ML", "Chrome Extension", "NLP", "Hackathon Winner"],
    github: "https://github.com/messiahmajid/scamspot",
    badge: "Horizons AI Hackathon",
  },
  {
    title: "pyCapsid",
    subtitle: "Computational Tool for Viral Capsid Dynamics",
    date: "Jan 2025",
    icon: <DNAIcon size={32} />,
    color: "#5BA3D0",
    tagColor: "#b3e5fc",
    highlights: [
      "Innovated open-source Python package to model viral capsid mechanical behavior, achieving 95% accuracy in predicting quasi-rigid domains",
      "Integrated advanced algorithms for normal mode analysis, achieving 0.88 correlation with experimental data for protein thermal fluctuations",
    ],
    tags: ["Python", "Bioinformatics", "Open Source", "Research"],
    github: "https://github.com/messiahmajid/pycapsid",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for project cards
  const y1 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-3, -1, 1]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [3, 1, -1]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <StarDoodle size={60} color="#ffd54f" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <StarDoodle size={48} color="#ff6b6b" filled />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-white inline-block relative click-wiggle">
            Projects
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <path
                d="M0 6 Q 25 2, 50 8 T 100 4 T 150 10 T 200 6"
                stroke="#ffd54f"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* Projects Grid - Polaroid Style */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ y: index === 0 ? y1 : y2, rotate: index === 0 ? rotate1 : rotate2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div
                className="p-5 pb-6 relative rounded-3xl project-card"
                style={{
                  background: '#FFFFFF',
                  border: "5px solid #FFFFFF",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Tape decoration */}
                <WashiTape
                  className="-top-3 left-1/2 -translate-x-1/2"
                  rotation={index % 2 === 0 ? -2 : 2}
                  color={project.color}
                />

                {/* Project "Image" area */}
                <div
                  className="aspect-video rounded-sm mb-4 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}40 100%)`,
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(#2d2d2d 1px, transparent 1px), linear-gradient(90deg, #2d2d2d 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    style={{ color: project.color }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Badge for hackathon */}
                  {project.badge && (
                    <div
                      className="absolute top-3 right-3 px-3 py-1 font-sketch text-sm transform rotate-3 flex items-center gap-1"
                      style={{
                        background: "#ffd54f",
                        border: "2px solid #2d2d2d",
                        borderRadius: "2px",
                      }}
                    >
                      <TrophyIcon size={14} className="text-pencil" />
                      {project.badge}
                    </div>
                  )}
                </div>

                {/* Title & Date - handwritten style */}
                <div className="mb-4">
                  <h3 className="font-marker text-2xl text-pencil mb-1">
                    {project.title}
                  </h3>
                  <p className="font-sketch text-pencil-light">
                    {project.subtitle}
                  </p>
                  <p className="font-handwriting text-lg text-pencil-light mt-1">
                    {project.date}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: project.color }}>*</span>
                      <p className="font-sketch text-sm text-pencil leading-relaxed">
                        {highlight}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-sketch text-xs text-pencil rounded-full"
                      style={{
                        background: project.tagColor,
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-pencil text-white font-sketch text-sm rounded-lg shadow-sm"
                    >
                      <GitHubIcon size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 font-sketch text-sm rounded-lg shadow-sm"
                      style={{
                        background: project.color,
                        color: "white",
                      }}
                    >
                      Demo
                      <ArrowIcon size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
