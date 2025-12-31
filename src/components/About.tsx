"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon } from "./DoodleIcons";

// Story page doodles
const GhanaDoodle = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full" style={{ color: '#2d2d2d' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Globe */}
      <circle cx="90" cy="80" r="45" />
      <ellipse cx="90" cy="80" rx="45" ry="15" />
      <path d="M45 80 Q90 50 135 80" />
      <path d="M45 80 Q90 110 135 80" />
      {/* Africa outline (simplified) */}
      <path d="M85 50 L95 48 L100 55 L98 70 L105 85 L100 100 L90 110 L80 100 L75 85 L78 70 L82 55 Z" fill="currentColor" opacity="0.3" />
      {/* Ghana marker */}
      <circle cx="82" cy="75" r="4" fill="#ff6b6b" stroke="#ff6b6b" />
      {/* Location pin */}
      <path d="M82 60 L82 40" strokeDasharray="3 3" />
      <text x="70" y="35" fontSize="10" fill="currentColor" fontFamily="handwriting">Ghana</text>
      {/* Airplane */}
      <g transform="translate(130, 50) rotate(45)">
        <path d="M0 0 L15 5 L0 10 L3 5 Z" fill="currentColor" />
        <path d="M3 5 L-10 5" />
      </g>
      {/* Stars */}
      <g transform="translate(45, 40)">
        <path d="M0 -6 L1.5 -2 L6 -2 L2.5 1 L4 6 L0 3 L-4 6 L-2.5 1 L-6 -2 L-1.5 -2 Z" fill="#ffd54f" stroke="none" />
      </g>
      {/* Text */}
      <text x="50" y="155" fontSize="12" fill="currentColor" fontFamily="sketch" textAnchor="middle">
        Accra, Ghana
      </text>
      <text x="130" y="155" fontSize="10" fill="currentColor" fontFamily="sketch" textAnchor="middle">
        → Miami
      </text>
    </g>
  </svg>
);

const TechBioDoodle = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full" style={{ color: '#2d2d2d' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Computer/Data side */}
      <rect x="15" y="50" width="50" height="35" rx="2" />
      <path d="M25 90 L55 90 L50 100 L30 100 Z" />
      <path d="M25 60 L40 60" strokeWidth="1.5" />
      <path d="M25 67 L50 67" strokeWidth="1.5" />
      <path d="M25 74 L35 74" strokeWidth="1.5" />
      {/* Binary/Data flow */}
      <text x="70" y="60" fontSize="8" fill="currentColor" fontFamily="monospace">01</text>
      <text x="75" y="75" fontSize="8" fill="currentColor" fontFamily="monospace">10</text>
      <text x="70" y="90" fontSize="8" fill="currentColor" fontFamily="monospace">01</text>
      {/* Arrow to center */}
      <path d="M85 70 L95 70" strokeWidth="2" />
      {/* DNA/Biology side */}
      <g transform="translate(120, 40)">
        <path d="M0 0 Q15 15 0 30 Q-15 45 0 60 Q15 75 0 90" strokeWidth="2" />
        <path d="M20 0 Q5 15 20 30 Q35 45 20 60 Q5 75 20 90" strokeWidth="2" />
        <line x1="3" y1="15" x2="17" y2="15" />
        <line x1="3" y1="35" x2="17" y2="35" />
        <line x1="3" y1="55" x2="17" y2="55" />
        <line x1="3" y1="75" x2="17" y2="75" />
      </g>
      {/* Center - Intersection */}
      <circle cx="90" cy="90" r="20" fill="#4ecdc4" fillOpacity="0.2" stroke="#4ecdc4" />
      <text x="90" y="94" fontSize="10" fill="#4ecdc4" textAnchor="middle" fontWeight="bold">∩</text>
      {/* Lightbulb idea */}
      <g transform="translate(90, 140)">
        <path d="M-8 0 Q-12 -15 0 -20 Q12 -15 8 0" />
        <rect x="-5" y="0" width="10" height="5" rx="1" />
        <line x1="0" y1="-25" x2="0" y2="-30" />
        <line x1="-10" y1="-22" x2="-14" y2="-26" />
        <line x1="10" y1="-22" x2="14" y2="-26" />
      </g>
    </g>
  </svg>
);

const InterdisciplinaryDoodle = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full" style={{ color: '#2d2d2d' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Three overlapping circles - Venn diagram */}
      <circle cx="70" cy="65" r="35" fill="#ff6b6b" fillOpacity="0.15" stroke="#ff6b6b" />
      <circle cx="110" cy="65" r="35" fill="#4ecdc4" fillOpacity="0.15" stroke="#4ecdc4" />
      <circle cx="90" cy="100" r="35" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" />
      {/* Labels */}
      <text x="50" y="50" fontSize="9" fill="#ff6b6b" fontFamily="sketch">Math</text>
      <text x="115" y="50" fontSize="9" fill="#4ecdc4" fontFamily="sketch">CS</text>
      <text x="80" y="130" fontSize="9" fill="#a855f7" fontFamily="sketch">Bio</text>
      {/* Center - ME */}
      <circle cx="90" cy="75" r="15" fill="#ffd54f" fillOpacity="0.4" stroke="#ffd54f" strokeWidth="2" />
      <text x="90" y="79" fontSize="10" fill="#2d2d2d" textAnchor="middle" fontWeight="bold">ME</text>
      {/* Decorative elements */}
      <g transform="translate(25, 110)">
        <path d="M0 0 L8 4 L0 8 L2 4 Z" fill="currentColor" opacity="0.5" />
      </g>
      <g transform="translate(145, 100)">
        <path d="M0 -5 L1 -1.5 L5 -1.5 L2 1 L3 5 L0 2.5 L-3 5 L-2 1 L-5 -1.5 L-1 -1.5 Z" fill="#ffd54f" stroke="none" />
      </g>
      {/* University of Miami text */}
      <text x="90" y="165" fontSize="10" fill="currentColor" textAnchor="middle" fontFamily="handwriting">
        University of Miami
      </text>
    </g>
  </svg>
);

const VolunteerDoodle = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full" style={{ color: '#2d2d2d' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Heart with hands */}
      <path d="M90 130 L60 100 Q40 75 60 55 Q80 40 90 60 Q100 40 120 55 Q140 75 120 100 Z" fill="#ff6b6b" fillOpacity="0.2" stroke="#ff6b6b" />
      {/* Hands reaching up */}
      <g transform="translate(50, 140)">
        <path d="M0 20 L0 0 L-5 -10 M0 0 L5 -8 M0 5 L-3 -5 M0 5 L3 -3" />
      </g>
      <g transform="translate(130, 140)">
        <path d="M0 20 L0 0 L5 -10 M0 0 L-5 -8 M0 5 L3 -5 M0 5 L-3 -3" />
      </g>
      {/* People silhouettes */}
      <g transform="translate(35, 85)">
        <circle cx="0" cy="0" r="6" fill="currentColor" />
        <path d="M0 6 L0 20 M-8 12 L8 12 M0 20 L-5 30 M0 20 L5 30" />
      </g>
      <g transform="translate(145, 85)">
        <circle cx="0" cy="0" r="6" fill="currentColor" />
        <path d="M0 6 L0 20 M-8 12 L8 12 M0 20 L-5 30 M0 20 L5 30" />
      </g>
      {/* Sparkles around heart */}
      <g transform="translate(70, 40)">
        <path d="M0 -4 L1 -1 L4 0 L1 1 L0 4 L-1 1 L-4 0 L-1 -1 Z" fill="#ffd54f" stroke="none" />
      </g>
      <g transform="translate(115, 45)">
        <path d="M0 -3 L0.8 -0.8 L3 0 L0.8 0.8 L0 3 L-0.8 0.8 L-3 0 L-0.8 -0.8 Z" fill="#4ecdc4" stroke="none" />
      </g>
      {/* Service text */}
      <text x="90" y="175" fontSize="10" fill="currentColor" textAnchor="middle" fontFamily="handwriting">
        Service & Community
      </text>
    </g>
  </svg>
);

// Story pages data
const storyPages = [
  {
    id: 1,
    title: "Where It Started",
    content: "I'm an international student from Accra, Ghana. Growing up, I was always curious about how things work — from the patterns in nature to the logic in machines.",
    Doodle: GhanaDoodle,
    bgColor: "#ff6b6b",
  },
  {
    id: 2,
    title: "What Fascinates Me",
    content: "I'm fascinated by how data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
    Doodle: TechBioDoodle,
    bgColor: "#4ecdc4",
  },
  {
    id: 3,
    title: "My Approach",
    content: "At the University of Miami, I'm combining Mathematics, Computer Science, and Biology. Math sharpens my understanding, CS equips me to build tools, and Biology connects it all to living systems.",
    Doodle: InterdisciplinaryDoodle,
    bgColor: "#a855f7",
  },
  {
    id: 4,
    title: "Beyond The Books",
    content: "I love volunteering and giving back to my community. Whether it's tutoring, organizing events, or mentoring — service is a core part of who I am.",
    Doodle: VolunteerDoodle,
    bgColor: "#ffd54f",
  },
];

// What I'm Looking For section with checkboxes
const lookingForItems = [
  { id: 1, label: "Internship opportunities in tech/biotech", icon: "💼" },
  { id: 2, label: "Research collaborations", icon: "🔬" },
  { id: 3, label: "Mentorship connections", icon: "🤝" },
  { id: 4, label: "Hackathon teammates", icon: "💻" },
  { id: 5, label: "Meaningful projects", icon: "🚀" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 2]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -2]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems(prev => {
      const newChecked = prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id];

      // Show celebration when all items are checked
      if (newChecked.length === lookingForItems.length) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 3000);
      }

      return newChecked;
    });
  };

  const fillPercentage = (checkedItems.length / lookingForItems.length) * 100;

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
                stroke="#4ecdc4"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* Flipbook Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              border: '4px solid #2d2d2d',
              background: 'var(--paper-color)',
            }}
          >
            {/* Book spine shadow */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 z-10 pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%)',
              }}
            />

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
            <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
              {/* Left page - Doodle */}
              <div className="p-8 md:p-10 relative flex items-center justify-center" style={{ borderRight: '2px solid rgba(45, 45, 45, 0.2)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-[220px] aspect-square"
                  >
                    <div
                      className="w-full h-full rounded-2xl p-4 relative"
                      style={{
                        border: `3px solid ${storyPages[currentPage].bgColor}`,
                        background: `${storyPages[currentPage].bgColor}15`,
                      }}
                    >
                      {React.createElement(storyPages[currentPage].Doodle)}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right page - Story text */}
              <div className="p-8 md:p-10 relative flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-sketch mb-3"
                      style={{
                        background: `${storyPages[currentPage].bgColor}30`,
                        color: storyPages[currentPage].bgColor
                      }}
                    >
                      {currentPage + 1} / {storyPages.length}
                    </span>
                    <h3 className="font-handwriting text-3xl md:text-4xl text-pencil mb-4">
                      {storyPages[currentPage].title}
                    </h3>
                    <p className="font-sketch text-pencil-light text-lg leading-relaxed">
                      {storyPages[currentPage].content}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Page navigation dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {storyPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentPage
                          ? 'scale-125'
                          : 'opacity-50 hover:opacity-75'
                      }`}
                      style={{
                        backgroundColor: index === currentPage
                          ? storyPages[index].bgColor
                          : '#2d2d2d'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Page flip buttons */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors z-20"
              style={{ border: '2px solid #2d2d2d' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(storyPages.length - 1, prev + 1))}
              disabled={currentPage === storyPages.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors z-20"
              style={{ border: '2px solid #2d2d2d' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* What I'm Looking For Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl p-8 md:p-10"
            style={{
              border: '4px solid #2d2d2d',
              background: 'var(--paper-color)',
            }}
          >
            <h3 className="font-handwriting text-3xl md:text-4xl text-pencil mb-6 text-center">
              What I&apos;m Looking For
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Checkboxes */}
              <div className="space-y-4">
                {lookingForItems.map((item) => (
                  <motion.label
                    key={item.id}
                    className="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors"
                    style={{
                      background: checkedItems.includes(item.id) ? '#4ecdc420' : 'transparent',
                      border: '2px solid',
                      borderColor: checkedItems.includes(item.id) ? '#4ecdc4' : 'transparent',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center transition-colors cursor-pointer"
                      style={{
                        border: '2px solid #2d2d2d',
                        background: checkedItems.includes(item.id) ? '#4ecdc4' : 'white',
                      }}
                      onClick={() => handleCheckboxChange(item.id)}
                    >
                      {checkedItems.includes(item.id) && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </motion.svg>
                      )}
                    </div>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-sketch text-pencil text-lg">{item.label}</span>
                  </motion.label>
                ))}
              </div>

              {/* Progressive fill image */}
              <div className="relative">
                <div
                  className="w-full aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden relative"
                  style={{ border: '4px solid #2d2d2d' }}
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />

                  {/* Colored fill that rises based on checked items */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0"
                    initial={{ height: '0%' }}
                    animate={{ height: `${fillPercentage}%` }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    style={{
                      background: 'linear-gradient(to top, #4ecdc4, #4ecdc4cc, #4ecdc488)',
                    }}
                  />

                  {/* Rocket that rises with the fill */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 text-6xl"
                    initial={{ bottom: '5%' }}
                    animate={{ bottom: `${Math.min(fillPercentage + 5, 80)}%` }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  >
                    🚀
                  </motion.div>

                  {/* Percentage text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-handwriting text-4xl text-pencil bg-white/80 px-4 py-2 rounded-xl" style={{ border: '2px solid #2d2d2d' }}>
                      {Math.round(fillPercentage)}%
                    </span>
                  </div>
                </div>

                {/* Celebration GIF when complete */}
                <AnimatePresence>
                  {showCelebration && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <div
                        className="bg-white rounded-2xl p-6 shadow-2xl text-center"
                        style={{ border: '4px solid #ffd54f' }}
                      >
                        <div className="text-6xl mb-2">🎉</div>
                        <p className="font-handwriting text-2xl text-pencil">Let&apos;s Connect!</p>
                        <motion.a
                          href="#contact"
                          className="inline-block mt-3 px-6 py-2 bg-accent-teal text-white font-sketch rounded-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Reach Out
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education and Honors Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Card */}
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
                {/* Stamps Scholarship */}
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
      </div>
    </section>
  );
}
