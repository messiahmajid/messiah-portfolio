"use client";

import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  category: string;
}

const skillsData: Skill[] = [
  // Languages
  { name: "Python", level: "Expert", category: "Languages" },
  { name: "Java", level: "Advanced", category: "Languages" },
  { name: "R", level: "Advanced", category: "Languages" },
  { name: "SQL", level: "Advanced", category: "Languages" },
  { name: "MATLAB", level: "Proficient", category: "Languages" },

  // ML/AI
  { name: "TensorFlow", level: "Expert", category: "ML/AI" },
  { name: "PyTorch", level: "Expert", category: "ML/AI" },
  { name: "Scikit-learn", level: "Expert", category: "ML/AI" },
  { name: "NLP", level: "Advanced", category: "ML/AI" },

  // Data & Analytics
  { name: "Databricks", level: "Advanced", category: "Data" },
  { name: "Tableau", level: "Advanced", category: "Data" },
  { name: "Matplotlib", level: "Proficient", category: "Data" },

  // Bioinformatics
  { name: "BLAST", level: "Expert", category: "Bio" },
  { name: "BioPython", level: "Advanced", category: "Bio" },
  { name: "ChimeraX", level: "Proficient", category: "Bio" },
];

const categories = ["Languages", "ML/AI", "Data", "Bio"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="sherwood-single-column max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="sherwood-headline text-7xl md:text-9xl text-sherwood-black mb-2">
            SKILLS
          </h2>
          <p className="sherwood-body text-xl text-sherwood-gray-600 mt-4">
            Technologies and tools I work with every day
          </p>
          <div className="sherwood-divider" />
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const categorySkills = skillsData.filter(s => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="sherwood-headline text-4xl md:text-5xl text-sherwood-black inline-block">
                    {category}
                  </h3>
                </div>

                {/* Skills in this category */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className={`p-6 border-2 transition-all cursor-pointer ${
                        skill.level === "Expert"
                          ? "bg-neon-yellow border-sherwood-black shadow-neon-glow"
                          : skill.level === "Advanced"
                          ? "bg-white border-sherwood-black"
                          : "bg-white border-sherwood-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="sherwood-headline text-2xl text-sherwood-black">
                          {skill.name}
                        </h4>
                        {skill.level === "Expert" && (
                          <span className="text-2xl">⭐</span>
                        )}
                      </div>
                      <div className="sherwood-body text-xs uppercase tracking-wide text-sherwood-gray-600">
                        {skill.level}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-sherwood-black text-white p-8 md:p-12"
        >
          <h3 className="sherwood-headline text-4xl md:text-5xl mb-6">
            WHAT I BRING TO THE TABLE
          </h3>
          <p className="sherwood-body text-xl leading-relaxed mb-6">
            Full-stack expertise spanning AI/ML, data science, and computational biology.
            I specialize in building intelligent systems that solve real-world problems—from
            fraud detection to protein structure analysis.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 p-4">
              <div className="sherwood-headline text-3xl mb-2">5+</div>
              <div className="sherwood-body text-sm uppercase tracking-wide">Languages</div>
            </div>
            <div className="bg-white/10 p-4">
              <div className="sherwood-headline text-3xl mb-2">10+</div>
              <div className="sherwood-body text-sm uppercase tracking-wide">Frameworks</div>
            </div>
            <div className="bg-white/10 p-4">
              <div className="sherwood-headline text-3xl mb-2">3</div>
              <div className="sherwood-body text-sm uppercase tracking-wide">Domains</div>
            </div>
            <div className="bg-white/10 p-4">
              <div className="sherwood-headline text-3xl mb-2">∞</div>
              <div className="sherwood-body text-sm uppercase tracking-wide">Curiosity</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="sherwood-divider mt-16" />
      </div>
    </section>
  );
}
