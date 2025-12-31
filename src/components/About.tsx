"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon, BookIcon } from "./DoodleIcons";

// Personal doodle illustration - a simple self-portrait doodle
const PersonalDoodle = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    style={{ color: '#2d2d2d' }}
  >
    {/* Simple person at computer doodle */}
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Desk */}
      <path d="M30 160 L170 160" />
      <path d="M40 160 L40 180" />
      <path d="M160 160 L160 180" />

      {/* Computer monitor */}
      <rect x="70" y="100" width="60" height="45" rx="3" />
      <path d="M85 145 L115 145 L110 160 L90 160 Z" />
      {/* Screen content - code lines */}
      <path d="M78 112 L95 112" strokeWidth="1.5" />
      <path d="M78 120 L105 120" strokeWidth="1.5" />
      <path d="M78 128 L90 128" strokeWidth="1.5" />

      {/* Person - head */}
      <circle cx="100" cy="60" r="20" />
      {/* Face */}
      <circle cx="93" cy="55" r="2" fill="currentColor" />
      <circle cx="107" cy="55" r="2" fill="currentColor" />
      <path d="M95 68 Q100 73 105 68" />
      {/* Hair */}
      <path d="M82 50 Q85 35 100 35 Q115 35 118 50" />
      <path d="M85 42 Q90 38 95 42" />
      <path d="M105 42 Q110 38 115 42" />

      {/* Body */}
      <path d="M100 80 L100 110" />
      {/* Arms */}
      <path d="M100 90 L70 105" />
      <path d="M100 90 L130 105" />

      {/* Chair */}
      <path d="M85 115 L115 115 L120 160" />
      <path d="M80 160 L85 115" />

      {/* Floating elements - DNA helix */}
      <g transform="translate(150, 40)">
        <path d="M0 0 Q10 10 0 20 Q-10 30 0 40" />
        <path d="M10 0 Q0 10 10 20 Q20 30 10 40" />
        <line x1="0" y1="5" x2="10" y2="5" />
        <line x1="0" y1="15" x2="10" y2="15" />
        <line x1="0" y1="25" x2="10" y2="25" />
        <line x1="0" y1="35" x2="10" y2="35" />
      </g>

      {/* Floating code symbols */}
      <text x="30" y="50" fontSize="14" fill="currentColor" fontFamily="monospace">{"{ }"}</text>
      <text x="25" y="90" fontSize="12" fill="currentColor" fontFamily="monospace">01</text>

      {/* Stars */}
      <g transform="translate(45, 120)">
        <path d="M0 -8 L2 -2 L8 -2 L3 2 L5 8 L0 4 L-5 8 L-3 2 L-8 -2 L-2 -2 Z" fill="currentColor" />
      </g>
      <g transform="translate(155, 90)" opacity="0.6">
        <path d="M0 -5 L1.5 -1.5 L5 -1.5 L2 1.5 L3 5 L0 2.5 L-3 5 L-2 1.5 L-5 -1.5 L-1.5 -1.5 Z" fill="currentColor" />
      </g>
    </g>
  </svg>
);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for cards
  const yBook = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 2]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -2]);

  const courses = [
    { name: "Data Structures & Algorithms", icon: "🌳", color: "#4ecdc4" },
    { name: "Python Programming", icon: "🐍", color: "#ffd54f" },
    { name: "Java Programming I & II", icon: "☕", color: "#ff6b6b" },
    { name: "Computer Organization", icon: "🖥️", color: "#a855f7" },
    { name: "Probability and Statistics", icon: "📊", color: "#3b82f6" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-white inline-block relative click-wiggle">
            About Me
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
                d="M0 6 Q 50 0, 100 6 T 200 6"
                stroke="#d35f5f"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* Open Book Style Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ y: yBook }}
          className="mb-16"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              border: '4px solid #2d2d2d',
              background: 'var(--paper-color)',
            }}
          >
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(#2d2d2d 1px, transparent 1px),
                  linear-gradient(90deg, #2d2d2d 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />

            {/* Book content */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left page - Intro text */}
              <div className="p-8 md:p-10 relative" style={{ borderRight: '2px solid rgba(45, 45, 45, 0.2)' }}>
                <div className="pt-4">
                  <h3 className="font-handwriting text-4xl md:text-5xl text-pencil mb-4">
                    Messiah Majid
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mb-6 font-sketch text-lg">
                    <span className="text-pencil">Computer Science</span>
                    <span className="text-accent-coral">+</span>
                    <span className="text-pencil">Math</span>
                    <span className="text-accent-teal">+</span>
                    <span className="text-pencil">Biology</span>
                  </div>

                  <p className="font-sketch text-pencil-light text-lg leading-relaxed mb-6">
                    Building impactful software at the intersection of{" "}
                    <span className="highlight-text">technology</span> and{" "}
                    <span className="highlight-pink">life sciences</span>.
                    Currently studying at the{" "}
                    <span className="highlight-blue">University of Miami</span>.
                  </p>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 font-sketch rounded-xl transition-colors"
                    style={{
                      border: '2px solid #2d2d2d',
                      color: '#2d2d2d',
                      background: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    let&apos;s connect!
                  </motion.a>
                </div>
              </div>

              {/* Right page - Personal doodle */}
              <div className="p-8 md:p-10 relative flex items-center justify-center">
                <div
                  className="w-full aspect-square max-w-[250px] rounded-2xl p-4 relative"
                  style={{
                    border: '3px solid #2d2d2d',
                    background: 'rgba(255,255,255,0.5)',
                  }}
                >
                  <PersonalDoodle />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education and Honors Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Card - Like a notebook page */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ y: y1, rotate: rotate1 }}
            className="relative"
          >
            <div
              className="p-8 pl-12 relative shadow-paper card-sweep rounded-2xl"
              style={{
                background: 'var(--paper-color)',
                border: "2px solid #2d2d2d",
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)",
              }}
            >
              <NotebookSpiral />
              <WashiTape className="-top-3 left-8" rotation={-3} color="#ff6b6b" />

              <div className="flex items-center gap-3 mb-4">
                <GraduationCapIcon size={32} className="text-accent-coral" />
                <h3 className="font-marker text-2xl text-pencil click-wiggle">Education</h3>
              </div>

              <div className="space-y-3 font-sketch text-lg">
                <p className="text-pencil font-semibold">
                  The University of Miami
                </p>
                <p className="text-pencil-light">Coral Gables, FL</p>
                <p className="text-pencil">
                  B.S. in{" "}
                  <span className="highlight-text">Computer Science</span>,{" "}
                  <span className="highlight-pink">Math</span> and{" "}
                  <span className="highlight-blue">Biology</span>
                </p>
                <p className="flex items-center gap-2 text-accent-coral font-semibold">
                  <StarDoodle size={20} color="#ffd54f" filled />
                  GPA: 4.0
                </p>
                <p className="text-pencil-light text-base">Expected May 2027</p>
              </div>
            </div>
          </motion.div>

          {/* Honors Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: y2, rotate: rotate2 }}
            className="relative"
          >
            <div
              className="p-8 relative shadow-paper card-sweep rounded-2xl"
              style={{
                background: 'var(--paper-color)',
                border: "3px solid #2d2d2d",
              }}
            >
              <WashiTape className="-top-3 right-8" rotation={5} pattern="dots" color="#ffd54f" />

              <div className="flex items-center gap-3 mb-6">
                <TrophyIcon size={32} className="text-yellow-500" />
                <h3 className="font-marker text-2xl text-pencil click-wiggle">Honors & Awards</h3>
              </div>

              <div className="space-y-5">
                {/* Stamps Scholarship - Featured */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md relative overflow-hidden"
                  style={{ background: 'rgba(255, 213, 79, 0.2)', border: "2px solid #ffd54f" }}
                >
                  <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold text-pencil px-2 py-1 rounded-bl">
                    MOST PRESTIGIOUS
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg text-pencil">
                        Stamps Excellence Scholarship
                      </p>
                      <p className="font-sketch text-sm text-pencil-light mt-1">
                        UM&apos;s most prestigious merit award
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Robert Bates Cole Award */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(78, 205, 196, 0.2)', border: "2px solid #4ecdc4" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#4ecdc4" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg text-pencil">
                        Robert Bates Cole Award
                      </p>
                      <p className="font-sketch text-sm text-pencil-light mt-1">
                        For Volunteer Leadership
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* President's Honor Roll */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(168, 85, 247, 0.2)', border: "2px solid #a855f7" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#a855f7" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-marker text-lg text-pencil">
                          President&apos;s Honor Roll
                        </p>
                        <span className="bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          5x
                        </span>
                      </div>
                      <p className="font-sketch text-sm text-pencil-light mt-1">
                        Consecutive semesters with 4.0 GPA
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Relevant Courses - Creative Spiral/Orbit Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <BookIcon size={28} className="text-accent-purple" />
            <h3 className="font-marker text-2xl text-white">Relevant Courses</h3>
          </div>

          {/* Orbital course display */}
          <div className="relative h-80 flex items-center justify-center">
            {/* Center element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border-2 border-dashed opacity-20"
              style={{ borderColor: '#fff' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 h-40 rounded-full border-2 border-dashed opacity-20"
              style={{ borderColor: '#fff' }}
            />

            {/* Central badge */}
            <div
              className="absolute z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: 'var(--paper-color)', border: '3px solid #2d2d2d' }}
            >
              <span className="font-handwriting text-3xl">📚</span>
            </div>

            {/* Orbiting course cards */}
            {courses.map((course, index) => {
              const angle = (index * 360) / courses.length;
              const radius = 120;
              return (
                <motion.div
                  key={course.name}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * radius,
                      Math.cos(((angle + 10) * Math.PI) / 180) * radius,
                      Math.cos((angle * Math.PI) / 180) * radius,
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * radius,
                      Math.sin(((angle + 10) * Math.PI) / 180) * radius,
                      Math.sin((angle * Math.PI) / 180) * radius,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  whileHover={{ scale: 1.15, zIndex: 20 }}
                  style={{
                    transform: `translate(${Math.cos((angle * Math.PI) / 180) * radius}px, ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
                  }}
                >
                  <div
                    className="px-4 py-3 rounded-xl shadow-lg cursor-pointer flex items-center gap-2 whitespace-nowrap"
                    style={{
                      background: 'var(--paper-color)',
                      border: `2px solid ${course.color}`,
                    }}
                  >
                    <span className="text-lg">{course.icon}</span>
                    <span className="font-sketch text-sm text-pencil">{course.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
