"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WashiTape, StarDoodle } from "./SketchyElements";
import {
  PythonIcon,
  JavaIcon,
  DatabaseIcon,
  CodeIcon,
  BrainIcon,
  DNAIcon,
} from "./DoodleIcons";

interface Skill {
  name: string;
  category: "language" | "framework" | "tool";
  icon?: React.ReactNode;
  color: string;
  primary?: boolean;
}

const skills: Skill[] = [
  { name: "Python", category: "language", icon: <PythonIcon size={20} />, color: "#4ecdc4", primary: true },
  { name: "Java", category: "language", icon: <JavaIcon size={20} />, color: "#ff6b6b", primary: true },
  { name: "R", category: "language", color: "#a855f7" },
  { name: "SQL", category: "language", icon: <DatabaseIcon size={20} />, color: "#3b82f6", primary: true },
  { name: "MATLAB", category: "language", color: "#f59e0b" },
  { name: "Databricks", category: "framework", color: "#ff6b6b" },
  { name: "Tableau", category: "framework", color: "#4ecdc4" },
  { name: "Scikit-learn", category: "framework", icon: <BrainIcon size={20} />, color: "#f59e0b", primary: true },
  { name: "Matplotlib", category: "framework", color: "#3b82f6" },
  { name: "TensorFlow", category: "framework", icon: <BrainIcon size={20} />, color: "#ff6b6b", primary: true },
  { name: "PyTorch", category: "framework", icon: <BrainIcon size={20} />, color: "#a855f7" },
  { name: "BLAST", category: "tool", icon: <DNAIcon size={20} />, color: "#4ecdc4", primary: true },
  { name: "BioPython", category: "tool", icon: <DNAIcon size={20} />, color: "#22c55e" },
  { name: "ChimeraX", category: "tool", icon: <DNAIcon size={20} />, color: "#3b82f6" },
];

const languages = skills.filter((s) => s.category === "language");
const frameworks = skills.filter((s) => s.category === "framework");
const tools = skills.filter((s) => s.category === "tool");

interface CategoryInfo {
  title: string;
  tagline: string;
  color: string;
  items: Skill[];
}

const categories: CategoryInfo[] = [
  {
    title: "Languages",
    tagline: "The foundations I build with",
    color: "#4ecdc4",
    items: languages,
  },
  {
    title: "Frameworks",
    tagline: "ML & data visualization toolkit",
    color: "#ff6b6b",
    items: frameworks,
  },
  {
    title: "Bio Tools",
    tagline: "Research & analysis arsenal",
    color: "#22c55e",
    items: tools,
  },
];

function CardStack({ category }: { category: CategoryInfo }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "-50px" });
  const { items, title, tagline, color } = category;

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Title with underline */}
      <h3 className="font-handwriting text-2xl sm:text-3xl text-pencil mb-2">
        {title}
      </h3>

      {/* Tagline */}
      <p className="font-sketch text-sm text-pencil-light mb-6 text-center italic">
        {tagline}
      </p>

      {/* Card stack container */}
      <div className="relative w-full flex flex-col items-center" style={{ minHeight: `${items.length * 52 + 80}px` }}>
        {items.map((skill, index) => {
          const totalCards = items.length;

          // Stacked state: cards pile on top with slight rotation offsets
          const stackedRotate = (index - totalCards / 2) * 2;
          const stackedX = (index % 2 === 0 ? -1 : 1) * (index * 2);
          const stackedY = index * 3;

          // Fanned out state: cards cascade vertically
          const spreadY = index * 52;
          const spreadX = (index % 2 === 0 ? -1 : 1) * 12;
          const spreadRotate = (index % 2 === 0 ? -2 : 2);

          return (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{ top: 0 }}
              initial={false}
              animate={{
                x: isInView ? spreadX : stackedX,
                y: isInView ? spreadY : stackedY,
                rotate: isInView ? spreadRotate : stackedRotate,
                scale: isInView ? 1 : 1 - index * 0.02,
                zIndex: isInView ? totalCards - index : totalCards - index,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: isInView ? index * 0.05 : (totalCards - index) * 0.03,
              }}
              whileHover={{
                scale: 1.1,
                zIndex: 50,
                rotate: 0,
                x: 0,
              }}
            >
              <div
                className={`bg-white px-5 py-2.5 flex items-center gap-3 shadow-paper hover:shadow-paper-hover transition-shadow cursor-pointer relative ${skill.primary ? 'ring-2' : ''}`}
                style={{
                  border: "2px solid #2d2d2d",
                  borderRadius: "8px 4px 12px 4px",
                  minWidth: "130px",
                  ringColor: skill.primary ? skill.color : undefined,
                }}
              >
                {/* Primary badge */}
                {skill.primary && (
                  <div className="absolute -top-1 -right-1">
                    <StarDoodle size={14} color={skill.color} filled />
                  </div>
                )}

                {/* Colored circle decoration */}
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Icon */}
                <div style={{ color: skill.color }} className="flex-shrink-0">
                  {skill.icon || <CodeIcon size={18} />}
                </div>

                {/* Skill name */}
                <p className="font-sketch text-sm text-pencil whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Category accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-16 h-1 rounded-full mt-4"
        style={{ backgroundColor: color, opacity: 0.5 }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2d2d2d 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-pencil inline-block relative">
            Technical Skills
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
                d="M0 6 Q 50 12, 100 6 T 200 6"
                stroke="#4ecdc4"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
          <p className="font-sketch text-pencil-light mt-4 max-w-lg mx-auto">
            From data pipelines to protein structures—the tools I use to turn ideas into impact
          </p>
        </motion.div>

        {/* Card Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Decorative connecting lines between columns (desktop only) */}
          <div className="hidden md:block absolute top-1/3 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-pencil-light/20 to-transparent" />
          <div className="hidden md:block absolute top-1/3 right-1/3 w-px h-32 bg-gradient-to-b from-transparent via-pencil-light/20 to-transparent" />

          {/* Decorative arrows */}
          <motion.div
            className="hidden md:block absolute top-16 left-[30%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
          >
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
              <path d="M0 10 Q 20 0, 40 10" stroke="#4ecdc4" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M35 5 L 40 10 L 35 15" stroke="#4ecdc4" strokeWidth="2" fill="none" />
            </svg>
          </motion.div>
          <motion.div
            className="hidden md:block absolute top-16 right-[30%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
          >
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
              <path d="M0 10 Q 20 0, 40 10" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M35 5 L 40 10 L 35 15" stroke="#ff6b6b" strokeWidth="2" fill="none" />
            </svg>
          </motion.div>

          {categories.map((category) => (
            <CardStack key={category.title} category={category} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center gap-2 mt-8 text-sm"
        >
          <StarDoodle size={12} color="#ffd54f" filled />
          <span className="font-sketch text-pencil-light">= Primary skills</span>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -left-4 top-1/4 hidden lg:block">
          <WashiTape rotation={90} color="#ffd54f" />
        </div>
        <div className="absolute -right-4 top-1/2 hidden lg:block">
          <WashiTape rotation={-90} pattern="dots" color="#ff6b6b" />
        </div>
      </div>
    </section>
  );
}
