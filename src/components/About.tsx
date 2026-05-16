"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "command", text: "whoami --verbose" },
  { type: "name", text: "Messiah Godfred Majid" },
  { type: "tagline", text: "University of Miami · Computer Science & Mathematics · 4.0 GPA" },
  { type: "body", text: "" },
  { type: "body", text: "I like working with data — especially when there's a lot of it, it's imperfect, or nobody really knows what to do with it yet." },
  { type: "body", text: "" },
  { type: "body", text: "Lately I've been interested in machine learning, analytics, biological systems, forecasting, and the ways people make decisions under uncertainty." },
  { type: "body", text: "" },
  { type: "body", text: "Most of the projects I gravitate toward involve trying to understand patterns, test assumptions, or make complicated information easier to reason about." },
  { type: "spacer", text: "" },
  { type: "command", text: "ls ~/interests" },
  { type: "dir", text: "machine-learning/" },
  { type: "dir", text: "data-analysis/" },
  { type: "dir", text: "forecasting/" },
  { type: "dir", text: "computational-biology/" },
  { type: "dir", text: "prediction-markets/" },
  { type: "dir", text: "distributed-systems/" },
  { type: "dir", text: "human-behavior/" },
  { type: "dir", text: "philosophy/" },
  { type: "dir", text: "community-building/" },
  { type: "dir", text: "design/" },
];

function TypingTerminal({ lines, isInView }: { lines: typeof terminalLines; isInView: boolean }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleLines(current);
      if (current >= lines.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [isInView, lines.length]);

  return (
    <div className="space-y-0">
      {lines.slice(0, visibleLines).map((line, i) => {
        if (line.type === "command") {
          return (
            <div key={i} className={`flex items-center gap-2 ${i > 0 ? "pt-3" : ""}`}>
              <span className="text-green-400">$</span>
              <span className="text-white/80">{line.text}</span>
            </div>
          );
        }
        if (line.type === "name") {
          return (
            <div key={i} className="pl-4 pt-2 text-white font-semibold text-base md:text-lg">
              {line.text}
            </div>
          );
        }
        if (line.type === "tagline") {
          return (
            <div key={i} className="pl-4 text-te-orange/90">
              {line.text}
            </div>
          );
        }
        if (line.type === "spacer") {
          return <div key={i} className="h-3" />;
        }
        if (line.type === "dir") {
          return (
            <div key={i} className="pl-4 text-blue-300/80">
              {line.text}
            </div>
          );
        }
        if (line.text === "") {
          return <div key={i} className="h-2" />;
        }
        return (
          <div key={i} className="pl-4 text-white/70 leading-relaxed">
            {line.text}
          </div>
        );
      })}

      {visibleLines >= lines.length && (
        <div className="flex items-center gap-2 pt-3">
          <span className="text-green-400">$</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-white/60 inline-block"
          />
        </div>
      )}
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

            <div className="p-6 font-mono text-sm md:text-base">
              <TypingTerminal lines={terminalLines} isInView={isInView} />
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid sm:grid-cols-2 gap-5"
        >
          <motion.div
            whileHover={{ y: -4, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-te-dark/15 rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <div className="relative p-6 rounded-xl bg-white border border-te-dark/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-te-orange/10 rounded-full -translate-y-10 translate-x-10" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-te-orange/5 rounded-full translate-y-8 -translate-x-8" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-te-orange font-mono text-xs">~/</span>
                  <span className="text-lg font-bold text-te-dark">Where I&apos;m headed</span>
                </div>
                <div className="h-px bg-gradient-to-r from-te-orange/60 via-te-orange/20 to-transparent mb-4" />
                <p className="text-sm text-text-muted leading-relaxed">
                  I&apos;m still exploring, but I know I enjoy work that involves data, inference, systems thinking, and learning quickly. Right now I&apos;m especially interested in applied ML, intelligent systems, analytics, and problems where computation can help people make better decisions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-te-orange/20 to-te-orange/5 rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <div className="relative p-6 rounded-xl bg-te-dark border border-te-dark overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-te-orange/10 rounded-full -translate-y-6 -translate-x-6" />
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-te-orange/5 rounded-full translate-y-10 translate-x-10" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-te-orange font-mono text-xs">~/</span>
                  <span className="text-lg font-bold text-white">What I believe</span>
                </div>
                <div className="h-px bg-gradient-to-r from-te-orange/60 via-te-orange/20 to-transparent mb-4" />
                <p className="text-sm text-white/70 leading-relaxed">
                  Good technical work isn&apos;t just about building things — it&apos;s about understanding what matters, what doesn&apos;t, and being able to explain the difference clearly.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
