"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon, BookIcon } from "./DoodleIcons";

// Personal doodle illustration - a simple self-portrait doodle
const PersonalDoodle = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    style={{ color: 'var(--accent-red)' }}
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

  // Parallax transforms
  const yBook = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotateBook = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);

  const courses = [
    "Data Structures & Algorithms",
    "Python Programming",
    "Java Programming I & II",
    "Computer Organization",
    "Probability and Statistics",
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

        {/* Open Book Style Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ y: yBook, rotate: rotateBook }}
          className="relative"
        >
          {/* Book container with red border */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              border: '8px solid #d35f5f',
              background: 'var(--paper-color)',
            }}
          >
            {/* Tape decorations */}
            <div className="absolute -top-2 left-[15%] z-20 transform -rotate-12">
              <div
                className="w-20 h-8 opacity-80"
                style={{
                  background: 'linear-gradient(135deg, #d35f5f 0%, #c44d4d 100%)',
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                }}
              />
            </div>
            <div className="absolute -bottom-2 right-[15%] z-20 transform rotate-12">
              <div
                className="w-20 h-8 opacity-80"
                style={{
                  background: 'linear-gradient(135deg, #d35f5f 0%, #c44d4d 100%)',
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                }}
              />
            </div>

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(#d35f5f 1px, transparent 1px),
                  linear-gradient(90deg, #d35f5f 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />

            {/* Book content */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left page - Education info */}
              <div className="p-8 md:p-10 relative" style={{ borderRight: '2px solid rgba(211, 95, 95, 0.3)' }}>
                {/* Red top line */}
                <div className="absolute top-6 left-6 right-6 h-0.5" style={{ background: '#d35f5f' }} />

                <div className="pt-6">
                  <h3
                    className="font-handwriting text-3xl mb-6"
                    style={{ color: '#d35f5f' }}
                  >
                    Education
                  </h3>

                  <div className="space-y-4 font-sketch" style={{ color: '#d35f5f' }}>
                    <div className="flex items-start gap-3">
                      <GraduationCapIcon size={24} style={{ color: '#d35f5f' }} />
                      <div>
                        <p className="text-lg font-semibold">The University of Miami</p>
                        <p className="opacity-70">Coral Gables, FL</p>
                      </div>
                    </div>

                    <p className="text-lg">
                      B.S. in Computer Science, Math & Biology
                    </p>

                    <div className="flex items-center gap-2">
                      <StarDoodle size={18} color="#d35f5f" filled />
                      <p className="font-semibold">GPA: 4.0</p>
                    </div>

                    <p className="opacity-70">Expected May 2027</p>

                    {/* Checkbox list like in reference */}
                    <div className="mt-6 space-y-3">
                      <p className="font-handwriting text-xl mb-3">What I&apos;m looking for:</p>
                      {['Impactful work', 'Meaningful research', 'Diverse team of talented folks'].map((item, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                          <div
                            className="w-5 h-5 rounded border-2 flex items-center justify-center"
                            style={{ borderColor: '#d35f5f' }}
                          >
                          </div>
                          <span className="group-hover:opacity-80 transition-opacity">{item}</span>
                        </label>
                      ))}
                    </div>

                    {/* Let's chat button */}
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-4 px-6 py-2 font-sketch rounded-lg transition-colors"
                      style={{
                        border: '2px solid #d35f5f',
                        color: '#d35f5f',
                      }}
                    >
                      let&apos;s chat!
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Right page - Personal doodle illustration */}
              <div className="p-8 md:p-10 relative flex items-center justify-center">
                {/* Doodle frame */}
                <div
                  className="w-full aspect-square max-w-[280px] rounded-2xl p-4 relative"
                  style={{
                    border: '4px solid #d35f5f',
                    background: 'var(--paper-color)',
                  }}
                >
                  <PersonalDoodle />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Honors Section - Below the book */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {/* Stamps Scholarship */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-6 rounded-2xl shadow-lg"
            style={{
              background: 'var(--paper-color)',
              border: '3px solid #ffd54f',
            }}
          >
            <div className="flex items-start gap-3">
              <TrophyIcon size={28} className="text-yellow-500 flex-shrink-0" />
              <div>
                <p className="font-marker text-lg text-pencil">Stamps Excellence Scholarship</p>
                <p className="font-sketch text-sm text-pencil-light mt-2">
                  UM&apos;s most prestigious merit award
                </p>
              </div>
            </div>
          </motion.div>

          {/* Robert Bates Cole Award */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-6 rounded-2xl shadow-lg"
            style={{
              background: 'var(--paper-color)',
              border: '3px solid #4ecdc4',
            }}
          >
            <div className="flex items-start gap-3">
              <StarDoodle size={28} color="#4ecdc4" filled className="flex-shrink-0" />
              <div>
                <p className="font-marker text-lg text-pencil">Robert Bates Cole Award</p>
                <p className="font-sketch text-sm text-pencil-light mt-2">
                  For Volunteer Leadership
                </p>
              </div>
            </div>
          </motion.div>

          {/* President's Honor Roll */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-6 rounded-2xl shadow-lg"
            style={{
              background: 'var(--paper-color)',
              border: '3px solid #a855f7',
            }}
          >
            <div className="flex items-start gap-3">
              <StarDoodle size={28} color="#a855f7" filled className="flex-shrink-0" />
              <div>
                <p className="font-marker text-lg text-pencil">President&apos;s Honor Roll</p>
                <p className="font-sketch text-sm text-pencil-light mt-2">
                  5x Consecutive Semesters
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Relevant Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookIcon size={28} className="text-accent-purple" />
            <h3 className="font-marker text-2xl text-white">Relevant Courses</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, y: 20, rotate: (index % 2 === 0 ? -3 : 3) }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: (index % 2 === 0 ? -2 : 2),
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                }}
                className="px-5 py-3 shadow-paper cursor-default rounded-xl"
                style={{
                  background: 'var(--paper-color)',
                  border: '2px solid rgba(0,0,0,0.1)',
                }}
              >
                <p className="font-sketch text-pencil whitespace-nowrap click-wiggle">
                  {course}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
