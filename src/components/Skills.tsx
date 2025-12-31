"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { WashiTape, StarDoodle } from "./SketchyElements";
import {
  PythonIcon,
  JavaIcon,
  DatabaseIcon,
  CodeIcon,
  DNAIcon,
  RLangIcon,
  MatlabIcon,
  DatabricksIcon,
  TableauIcon,
  ChartIcon,
  TensorflowIcon,
  PyTorchIcon,
  ScikitIcon,
} from "./DoodleIcons";

interface Skill {
  name: string;
  category: "language" | "framework" | "tool";
  icon: React.ReactNode;
  color: string;
  primary?: boolean;
}

const skills: Skill[] = [
  { name: "Python", category: "language", icon: <PythonIcon size={28} />, color: "#4ecdc4", primary: true },
  { name: "Java", category: "language", icon: <JavaIcon size={28} />, color: "#ff6b6b", primary: true },
  { name: "R", category: "language", icon: <RLangIcon size={28} />, color: "#a855f7", primary: true },
  { name: "SQL", category: "language", icon: <DatabaseIcon size={28} />, color: "#3b82f6", primary: true },
  { name: "MATLAB", category: "language", icon: <MatlabIcon size={28} />, color: "#f59e0b" },
  { name: "Databricks", category: "framework", icon: <DatabricksIcon size={28} />, color: "#ff6b6b" },
  { name: "Tableau", category: "framework", icon: <TableauIcon size={28} />, color: "#4ecdc4" },
  { name: "Scikit-learn", category: "framework", icon: <ScikitIcon size={28} />, color: "#f59e0b", primary: true },
  { name: "Matplotlib", category: "framework", icon: <ChartIcon size={28} />, color: "#3b82f6" },
  { name: "TensorFlow", category: "framework", icon: <TensorflowIcon size={28} />, color: "#ff6b6b", primary: true },
  { name: "PyTorch", category: "framework", icon: <PyTorchIcon size={28} />, color: "#a855f7", primary: true },
  { name: "BLAST", category: "tool", icon: <DNAIcon size={28} />, color: "#4ecdc4", primary: true },
  { name: "BioPython", category: "tool", icon: <PythonIcon size={28} />, color: "#22c55e" },
  { name: "ChimeraX", category: "tool", icon: <DNAIcon size={28} />, color: "#3b82f6" },
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
      <h3 className="font-handwriting text-3xl sm:text-4xl text-pencil mb-2">
        {title}
      </h3>

      {/* Tagline */}
      <p className="font-sketch text-base text-pencil-light mb-8 text-center italic">
        {tagline}
      </p>

      {/* Card stack container */}
      <div className="relative w-full flex flex-col items-center" style={{ minHeight: `${items.length * 70 + 60}px` }}>
        {items.map((skill, index) => {
          const totalCards = items.length;

          // Stacked state: cards pile on top with slight rotation offsets
          const stackedRotate = (index - totalCards / 2) * 2;
          const stackedX = (index % 2 === 0 ? -1 : 1) * (index * 3);
          const stackedY = index * 4;

          // Fanned out state: cards cascade vertically
          const spreadY = index * 68;
          const spreadX = (index % 2 === 0 ? -1 : 1) * 20;
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
                scale: 1.08,
                zIndex: 50,
                rotate: 0,
                x: 0,
              }}
            >
              <div
                className={`bg-white px-6 py-4 flex items-center gap-4 shadow-paper hover:shadow-paper-hover transition-all cursor-pointer relative card-sweep`}
                style={{
                  border: skill.primary ? `3px solid ${skill.color}` : "2px solid #2d2d2d",
                  borderRadius: "12px 6px 16px 6px",
                  minWidth: "180px",
                }}
              >
                {/* Primary badge - positioned on left to avoid being covered by cards above */}
                {skill.primary && (
                  <div className="absolute -top-2 -left-2">
                    <StarDoodle size={18} color={skill.color} filled />
                  </div>
                )}

                {/* Icon with background */}
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <div style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>

                {/* Skill name */}
                <p className="font-sketch text-lg text-pencil whitespace-nowrap font-medium">
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
        className="w-24 h-1.5 rounded-full mt-6"
        style={{ backgroundColor: color, opacity: 0.6 }}
      />
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for each column
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2d2d2d 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-white inline-block relative click-wiggle">
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
          <p className="font-sketch text-lg text-pencil-light mt-6 max-w-xl mx-auto">
            From data pipelines to protein structures—the tools I use to turn ideas into impact
          </p>
        </motion.div>

        {/* Card Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Decorative connecting elements between columns (desktop only) */}
          <motion.div
            className="hidden md:flex absolute top-24 left-[32%] flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <path d="M0 15 Q 30 0, 60 15" stroke="#4ecdc4" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
              <path d="M50 10 L 58 15 L 50 20" stroke="#4ecdc4" strokeWidth="2" fill="none" opacity="0.4" />
            </svg>
            <span className="font-handwriting text-xs text-pencil-light opacity-50">powers</span>
          </motion.div>

          <motion.div
            className="hidden md:flex absolute top-24 right-[32%] flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <path d="M0 15 Q 30 0, 60 15" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="4 3" opacity="0.4" />
              <path d="M50 10 L 58 15 L 50 20" stroke="#ff6b6b" strokeWidth="2" fill="none" opacity="0.4" />
            </svg>
            <span className="font-handwriting text-xs text-pencil-light opacity-50">enables</span>
          </motion.div>

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              style={{ y: index === 0 ? y1 : index === 1 ? y2 : y3 }}
            >
              <CardStack category={category} />
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center gap-3 mt-12"
        >
          <StarDoodle size={16} color="#ffd54f" filled />
          <span className="font-sketch text-base text-pencil-light">= Primary skills</span>
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
