"use client";

import React from "react";
import { motion } from "framer-motion";
import { WashiTape, Pushpin, StarDoodle } from "./SketchyElements";
import { RocketIcon, MicroscopeIcon } from "./DoodleIcons";
import { SectionPhotoStack } from "./PhotoStack";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  highlights: string[];
  photos: { id: string; color: string; label?: string }[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Johnson & Johnson",
    role: "MedTech Supply Chain Intern",
    location: "Raritan, NJ",
    period: "May 2025 - Present",
    icon: <RocketIcon size={32} />,
    color: "#ff6b6b",
    description: "Transforming healthcare logistics through data-driven innovation at one of the world's largest medical device companies.",
    highlights: [
      "Uncovering hidden patterns in ML-powered delivery systems, resolving 20+ critical data pipeline issues that directly impact patient care timelines",
      "Building automated intelligence tools that give teams back 30+ hours monthly—time now spent on strategic innovation instead of manual reporting",
    ],
    photos: [
      { id: "jnj-1", color: "#ff6b6b", label: "Team collaboration" },
      { id: "jnj-2", color: "#e85555", label: "Data analysis" },
      { id: "jnj-3", color: "#ff8080", label: "Innovation sprint" },
      { id: "jnj-4", color: "#cc4444", label: "Healthcare impact" },
    ],
  },
  {
    company: "UM Luque Laboratory",
    role: "Research Assistant",
    location: "Coral Gables, FL",
    period: "Jan 2025 - Present",
    icon: <MicroscopeIcon size={32} />,
    color: "#4ecdc4",
    description: "Pioneering computational approaches to decode the secret language between viruses and their hosts.",
    highlights: [
      "Engineering Python-powered tools that predict viral behavior with 88% accuracy—turning abstract protein structures into actionable biological insights",
      "Developing mathematical models that reveal hidden patterns in bacteriophage dynamics, boosting prediction accuracy by 72%",
    ],
    photos: [
      { id: "lab-1", color: "#4ecdc4", label: "Lab work" },
      { id: "lab-2", color: "#3dbdb4", label: "Protein modeling" },
      { id: "lab-3", color: "#5dede4", label: "Data visualization" },
      { id: "lab-4", color: "#2dadad", label: "Research presentation" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #2d2d2d 25%, transparent 25%), linear-gradient(-45deg, #2d2d2d 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #2d2d2d 75%), linear-gradient(-45deg, transparent 75%, #2d2d2d 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-pencil inline-block relative">
            Experience
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
                d="M0 8 C 30 2, 70 12, 100 6 S 170 2, 200 8"
                stroke="#a855f7"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Photo Stack - alternating sides */}
                <motion.div
                  className={`flex justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <SectionPhotoStack photos={exp.photos} size="large" interval={3500} />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.01, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
                  className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div
                    className="bg-white p-8 shadow-paper relative card-sweep"
                    style={{
                      border: "2px solid #2d2d2d",
                      borderRadius: "8px 4px 12px 4px",
                      transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                    }}
                  >
                    <Pushpin
                      className={`${index % 2 === 0 ? "right-6" : "left-6"} -top-2`}
                      color={exp.color}
                    />
                    <WashiTape
                      className={`-top-3 ${index % 2 === 0 ? "left-8" : "right-8"}`}
                      rotation={index % 2 === 0 ? -5 : 5}
                      color={exp.color}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: `${exp.color}20` }}
                      >
                        <span style={{ color: exp.color }}>{exp.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-marker text-2xl text-pencil">{exp.company}</h3>
                        <p className="font-sketch text-lg text-pencil-light">{exp.role}</p>
                        <p className="font-sketch text-sm text-pencil-light">
                          {exp.location} · {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sketch text-pencil mb-4 italic">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <StarDoodle
                            size={16}
                            color={exp.color}
                            filled
                            className="flex-shrink-0 mt-1"
                          />
                          <p className="font-sketch text-sm text-pencil leading-relaxed">
                            {highlight}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
