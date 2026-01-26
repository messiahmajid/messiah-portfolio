"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiPostgresql, SiAmazon, SiDatabricks } from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython, level: 5 },
      { name: "Java", icon: FaJava, level: 4 },
      { name: "JavaScript", icon: SiJavascript, level: 4 },
      { name: "TypeScript", icon: SiTypescript, level: 4 },
    ],
  },
  {
    title: "ML & Data",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, level: 4 },
      { name: "PyTorch", icon: SiPytorch, level: 4 },
      { name: "Pandas", icon: SiPandas, level: 5 },
      { name: "NumPy", icon: SiNumpy, level: 5 },
    ],
  },
  {
    title: "Web Dev",
    skills: [
      { name: "React", icon: FaReact, level: 4 },
      { name: "Node.js", icon: FaNodeJs, level: 4 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 3 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 5 },
      { name: "Docker", icon: FaDocker, level: 3 },
      { name: "AWS", icon: SiAmazon, level: 3 },
      { name: "Databricks", icon: SiDatabricks, level: 4 },
    ],
  },
];

function KeyCap({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ y: 2, scale: 0.98 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-te-dark/20 rounded-lg translate-y-1.5" />

        <div className="relative bg-white border-2 border-te-dark/10 rounded-lg p-4
                      shadow-[inset_0_-4px_0_rgba(0,0,0,0.1)]
                      group-hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]
                      group-hover:border-te-orange/50
                      transition-all">
          <div className="text-3xl text-te-orange mb-2 group-hover:scale-110 transition-transform">
            <Icon />
          </div>

          <p className="text-sm font-medium text-te-dark">{skill.name}</p>

          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i < skill.level ? 'bg-te-orange' : 'bg-te-dark/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryBox({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative">
        <div className="flex justify-center mb-2">
          <div className="w-16 h-2 bg-te-surface rounded-full border border-te-dark/10" />
        </div>

        <div className="bg-te-surface/50 rounded-xl border border-te-dark/10 p-5">
          <h3 className="text-lg font-bold text-te-dark mb-4">{category.title}</h3>

          <div className="grid grid-cols-2 gap-3">
            {category.skills.map((skill, skillIndex) => (
              <KeyCap
                key={skill.name}
                skill={skill}
                index={index * 4 + skillIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-te-dark mb-4">
            Skills & <span className="text-te-orange">Tools</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Technologies I use to build and ship products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <CategoryBox key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
