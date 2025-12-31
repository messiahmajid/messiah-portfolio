"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WashiTape } from "./SketchyElements";
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
}

const skills: Skill[] = [
  { name: "Python", category: "language", icon: <PythonIcon size={20} />, color: "#4ecdc4" },
  { name: "Java", category: "language", icon: <JavaIcon size={20} />, color: "#ff6b6b" },
  { name: "R", category: "language", color: "#a855f7" },
  { name: "SQL", category: "language", icon: <DatabaseIcon size={20} />, color: "#3b82f6" },
  { name: "MATLAB", category: "language", color: "#f59e0b" },
  { name: "Databricks", category: "framework", color: "#ff6b6b" },
  { name: "Tableau", category: "framework", color: "#4ecdc4" },
  { name: "Scikit-learn", category: "framework", icon: <BrainIcon size={20} />, color: "#f59e0b" },
  { name: "Matplotlib", category: "framework", color: "#3b82f6" },
  { name: "TensorFlow", category: "framework", icon: <BrainIcon size={20} />, color: "#ff6b6b" },
  { name: "PyTorch", category: "framework", icon: <BrainIcon size={20} />, color: "#a855f7" },
  { name: "BLAST", category: "tool", icon: <DNAIcon size={20} />, color: "#4ecdc4" },
  { name: "BioPython", category: "tool", icon: <DNAIcon size={20} />, color: "#22c55e" },
  { name: "ChimeraX", category: "tool", icon: <DNAIcon size={20} />, color: "#3b82f6" },
];

const languages = skills.filter((s) => s.category === "language");
const frameworks = skills.filter((s) => s.category === "framework");
const tools = skills.filter((s) => s.category === "tool");

interface CardStackProps {
  items: Skill[];
  title: string;
}

function CardStack({ items, title }: CardStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h3 className="font-handwriting text-2xl sm:text-3xl text-pencil mb-6">
        {title}
      </h3>
      <div className="relative w-full flex flex-col items-center" style={{ minHeight: `${items.length * 50 + 100}px` }}>
        {items.map((skill, index) => {
          const totalCards = items.length;

          // Stacked state: cards pile on top with slight rotation offsets
          const stackedRotate = (index - totalCards / 2) * 2;
          const stackedX = (index % 2 === 0 ? -1 : 1) * (index * 2);
          const stackedY = index * 3;

          // Fanned out state: cards cascade vertically
          const spreadY = index * 55;
          const spreadX = (index % 2 === 0 ? -1 : 1) * 15;
          const spreadRotate = (index % 2 === 0 ? -3 : 3);

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
                className="bg-white px-6 py-3 flex items-center gap-3 shadow-paper hover:shadow-paper-hover transition-shadow cursor-pointer"
                style={{
                  border: "2px solid #2d2d2d",
                  borderRadius: "8px 4px 12px 4px",
                  minWidth: "140px",
                }}
              >
                {/* Colored circle decoration */}
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Icon */}
                <div style={{ color: skill.color }} className="flex-shrink-0">
                  {skill.icon || <CodeIcon size={20} />}
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
          className="text-center mb-16"
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
        </motion.div>

        {/* Card Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <CardStack items={languages} title="Languages" />
          <CardStack items={frameworks} title="Frameworks" />
          <CardStack items={tools} title="Bio Tools" />
        </div>

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
