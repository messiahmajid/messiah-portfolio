"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bioLines = [
  { prefix: "name:", value: "Messiah Godfred Majid" },
  { prefix: "role:", value: "Data Scientist & Analyst" },
  { prefix: "location:", value: "University of Miami" },
  { prefix: "studying:", value: "Computer Science, Mathematics, Biology" },
  { prefix: "focus:", value: "Data Science, ML, Bioinformatics" },
  { prefix: "status:", value: "Turning data into decisions" },
];

function TypingLine({
  prefix,
  value,
  delay
}: {
  prefix: string;
  value: string;
  delay: number;
}) {
  const [displayedValue, setDisplayedValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsTyping(true);
      setShowCursor(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= value.length) {
        setDisplayedValue(value.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [isTyping, value]);

  return (
    <div className="flex items-start gap-2 font-mono text-sm md:text-base">
      <span className="text-te-orange shrink-0">{prefix}</span>
      <span className="text-white/70">
        {displayedValue}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-te-orange ml-0.5 align-middle"
          />
        )}
      </span>
    </div>
  );
}

export default function About() {
  const [isInView, setIsInView] = useState(false);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-te-dark mb-4">
            About <span className="text-te-orange">Me</span>
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-te-dark/20 rounded-xl translate-x-2 translate-y-2" />

          <div className="relative bg-te-dark rounded-xl overflow-hidden border border-te-dark">
            <div className="flex items-center gap-2 px-4 py-3 bg-te-dark/80 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-white/40 text-xs font-mono">messiah@portfolio ~ </span>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-green-400">$</span>
                <span className="text-white/80">cat about.json</span>
              </div>

              <div className="pl-4 border-l-2 border-te-orange/30 space-y-2 py-2">
                {isInView && bioLines.map((line, index) => (
                  <TypingLine
                    key={line.prefix}
                    prefix={line.prefix}
                    value={line.value}
                    delay={index * 600}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: bioLines.length * 0.6 + 0.5 }}
                className="flex items-center gap-2 font-mono text-sm pt-2"
              >
                <span className="text-green-400">$</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-4 bg-white/60"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "GPA", value: "4.0" },
            { label: "Year", value: "Junior" },
            { label: "Graduation", value: "2027" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="text-center p-4 rounded-lg bg-white border border-te-dark/10"
            >
              <p className="text-2xl font-bold text-te-orange">{fact.value}</p>
              <p className="text-sm text-text-muted">{fact.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
