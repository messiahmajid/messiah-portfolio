"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon } from "./DoodleIcons";

// Sketchy hand-drawn doodle for Ghana/Journey - scattered around edges
const JourneyDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#c75d4a' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Airplane - top right */}
      <g transform="translate(230, 30)">
        <path d="M0 15 Q5 10 15 12 L35 8 Q40 10 38 15 L20 18 Q15 25 10 22 L15 17 L5 18 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M10 22 L8 28" />
        <path d="M38 15 L45 12" strokeDasharray="4 3" />
      </g>
      {/* Globe with heart - left side */}
      <g transform="translate(20, 100)">
        <circle cx="25" cy="25" r="22" strokeWidth="2" />
        <path d="M3 25 Q25 15 47 25" strokeWidth="1.5" />
        <path d="M3 25 Q25 35 47 25" strokeWidth="1.5" />
        <ellipse cx="25" cy="25" rx="22" ry="8" strokeWidth="1.5" />
        {/* Small heart on globe */}
        <path d="M20 20 Q18 15 22 15 Q25 15 25 20 Q25 15 28 15 Q32 15 30 20 L25 28 Z" fill="currentColor" fillOpacity="0.5" />
      </g>
      {/* Stars scattered */}
      <g transform="translate(260, 80)">
        <path d="M0 -10 L3 -3 L10 -3 L5 2 L7 10 L0 5 L-7 10 L-5 2 L-10 -3 L-3 -3 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
      <g transform="translate(40, 40)">
        <path d="M0 -6 L2 -2 L6 -2 L3 1 L4 6 L0 3 L-4 6 L-3 1 L-6 -2 L-2 -2 Z" fill="currentColor" fillOpacity="0.3" />
      </g>
      {/* Cloud */}
      <g transform="translate(150, 20)">
        <path d="M0 15 Q-5 15 -5 10 Q-8 5 -3 3 Q0 -2 8 0 Q15 -2 18 5 Q22 8 18 12 Q20 18 12 17 Q5 20 0 15" fill="white" fillOpacity="0.5" stroke="currentColor" strokeWidth="2" />
      </g>
      {/* Dotted path */}
      <path d="M60 140 Q100 120 140 130 Q180 140 220 100" strokeDasharray="5 5" strokeWidth="2" opacity="0.5" />
      {/* Arrow */}
      <g transform="translate(220, 95)">
        <path d="M0 0 L10 5 L0 10" fill="currentColor" fillOpacity="0.5" />
      </g>
      {/* Small flower bottom */}
      <g transform="translate(270, 200)">
        <circle cx="0" cy="0" r="5" fill="currentColor" fillOpacity="0.4" />
        <path d="M0 -12 Q3 -8 0 -5 Q-3 -8 0 -12" fill="currentColor" fillOpacity="0.3" />
        <path d="M0 5 Q3 8 0 12 Q-3 8 0 5" fill="currentColor" fillOpacity="0.3" />
        <path d="M-7 0 Q-5 3 -2 0 Q-5 -3 -7 0" fill="currentColor" fillOpacity="0.3" />
        <path d="M7 0 Q5 3 2 0 Q5 -3 7 0" fill="currentColor" fillOpacity="0.3" />
      </g>
    </g>
  </svg>
);

// Tech & Bio doodles - scattered style
const TechBioDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#c75d4a' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* DNA helix - left */}
      <g transform="translate(25, 60)">
        <path d="M0 0 Q12 15 0 30 Q-12 45 0 60 Q12 75 0 90" strokeWidth="2.5" />
        <path d="M15 0 Q3 15 15 30 Q27 45 15 60 Q3 75 15 90" strokeWidth="2.5" />
        <line x1="2" y1="15" x2="13" y2="15" strokeWidth="2" />
        <line x1="2" y1="45" x2="13" y2="45" strokeWidth="2" />
        <line x1="2" y1="75" x2="13" y2="75" strokeWidth="2" />
      </g>
      {/* Laptop - top right */}
      <g transform="translate(200, 25)">
        <rect x="0" y="0" width="50" height="35" rx="3" strokeWidth="2.5" />
        <path d="M-5 35 L55 35 L50 42 L0 42 Z" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        {/* Code lines */}
        <path d="M8 10 L20 10" strokeWidth="2" />
        <path d="M8 17 L35 17" strokeWidth="2" />
        <path d="M8 24 L25 24" strokeWidth="2" />
      </g>
      {/* Lightbulb - middle */}
      <g transform="translate(140, 100)">
        <path d="M0 0 Q-15 -10 -12 -25 Q-8 -40 0 -45 Q8 -40 12 -25 Q15 -10 0 0" strokeWidth="2.5" />
        <path d="M-6 5 L6 5" strokeWidth="2" />
        <path d="M-5 10 L5 10" strokeWidth="2" />
        <path d="M-3 15 L3 15" strokeWidth="2" />
        {/* Rays */}
        <path d="M0 -50 L0 -58" strokeWidth="2" />
        <path d="M-15 -45 L-22 -52" strokeWidth="2" />
        <path d="M15 -45 L22 -52" strokeWidth="2" />
      </g>
      {/* Microscope - bottom right */}
      <g transform="translate(230, 150)">
        <path d="M15 0 L15 30 L25 35 L5 35 L15 30" strokeWidth="2.5" />
        <circle cx="15" cy="-8" r="10" strokeWidth="2" />
        <path d="M0 35 L30 35" strokeWidth="2.5" />
        <path d="M5 35 L5 45" strokeWidth="2" />
        <path d="M25 35 L25 45" strokeWidth="2" />
      </g>
      {/* Binary scattered */}
      <text x="80" y="40" fontSize="14" fill="currentColor" fontFamily="monospace" opacity="0.6">01</text>
      <text x="260" y="100" fontSize="12" fill="currentColor" fontFamily="monospace" opacity="0.5">10</text>
      {/* Atom symbol */}
      <g transform="translate(70, 180)">
        <ellipse cx="0" cy="0" rx="20" ry="8" strokeWidth="2" transform="rotate(-30)" />
        <ellipse cx="0" cy="0" rx="20" ry="8" strokeWidth="2" transform="rotate(30)" />
        <circle cx="0" cy="0" r="4" fill="currentColor" fillOpacity="0.5" />
      </g>
      {/* Sparkles */}
      <g transform="translate(180, 180)">
        <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
    </g>
  </svg>
);

// Interdisciplinary doodles
const StudyDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#c75d4a' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Open book - center top */}
      <g transform="translate(120, 30)">
        <path d="M30 0 Q0 5 0 40 L30 35 L60 40 Q60 5 30 0" strokeWidth="2.5" />
        <path d="M30 0 L30 35" strokeWidth="2" />
        {/* Page lines */}
        <path d="M8 12 L25 10" strokeWidth="1.5" />
        <path d="M8 20 L25 18" strokeWidth="1.5" />
        <path d="M35 10 L52 12" strokeWidth="1.5" />
        <path d="M35 18 L52 20" strokeWidth="1.5" />
      </g>
      {/* Venn diagram - bottom left */}
      <g transform="translate(40, 130)">
        <circle cx="20" cy="15" r="25" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="45" cy="15" r="25" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="32" cy="38" r="25" strokeWidth="2" strokeDasharray="4 3" />
        <text x="8" y="8" fontSize="8" fill="currentColor">M</text>
        <text x="52" y="8" fontSize="8" fill="currentColor">CS</text>
        <text x="28" y="58" fontSize="8" fill="currentColor">Bio</text>
      </g>
      {/* Pencil - right side */}
      <g transform="translate(230, 80) rotate(30)">
        <path d="M0 0 L50 0 L50 12 L0 12 Z" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
        <path d="M50 0 L60 6 L50 12" fill="currentColor" fillOpacity="0.3" strokeWidth="2" />
        <path d="M0 0 L-8 6 L0 12" strokeWidth="2" />
      </g>
      {/* Calculator - top right */}
      <g transform="translate(240, 20)">
        <rect x="0" y="0" width="35" height="50" rx="3" strokeWidth="2" />
        <rect x="5" y="5" width="25" height="12" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="10" cy="25" r="3" fill="currentColor" fillOpacity="0.3" />
        <circle cx="25" cy="25" r="3" fill="currentColor" fillOpacity="0.3" />
        <circle cx="10" cy="38" r="3" fill="currentColor" fillOpacity="0.3" />
        <circle cx="25" cy="38" r="3" fill="currentColor" fillOpacity="0.3" />
      </g>
      {/* Brain sketch - bottom right */}
      <g transform="translate(200, 170)">
        <path d="M20 0 Q35 5 40 20 Q45 40 30 50 Q15 55 5 45 Q-5 35 0 20 Q5 5 20 0" strokeWidth="2.5" />
        <path d="M10 15 Q20 20 30 15" strokeWidth="1.5" />
        <path d="M8 30 Q18 35 28 30" strokeWidth="1.5" />
        <path d="M20 10 L20 45" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>
      {/* Stars */}
      <g transform="translate(100, 100)">
        <path d="M0 -6 L2 -2 L6 -2 L3 1 L4 6 L0 3 L-4 6 L-3 1 L-6 -2 L-2 -2 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
    </g>
  </svg>
);

// Service/Volunteer doodles
const ServiceDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#c75d4a' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Big heart - center */}
      <g transform="translate(120, 50)">
        <path d="M30 70 L5 45 Q-15 20 5 0 Q25 -15 30 10 Q35 -15 55 0 Q75 20 55 45 Z" strokeWidth="3" fill="currentColor" fillOpacity="0.15" />
      </g>
      {/* Hands holding - bottom */}
      <g transform="translate(100, 160)">
        <path d="M0 30 L0 10 Q-5 0 0 -5 L10 -5 Q15 0 15 8 L15 20" strokeWidth="2.5" />
        <path d="M15 10 Q18 5 22 8" strokeWidth="2" />
        <path d="M15 15 Q18 12 22 15" strokeWidth="2" />
        {/* Other hand */}
        <path d="M80 30 L80 10 Q85 0 80 -5 L70 -5 Q65 0 65 8 L65 20" strokeWidth="2.5" />
        <path d="M65 10 Q62 5 58 8" strokeWidth="2" />
        <path d="M65 15 Q62 12 58 15" strokeWidth="2" />
        {/* Connection */}
        <path d="M22 20 Q40 10 58 20" strokeWidth="2" strokeDasharray="4 4" />
      </g>
      {/* People icons - scattered */}
      <g transform="translate(30, 80)">
        <circle cx="10" cy="0" r="8" strokeWidth="2" />
        <path d="M10 8 L10 28 M0 15 L20 15 M10 28 L2 45 M10 28 L18 45" strokeWidth="2" />
      </g>
      <g transform="translate(240, 100)">
        <circle cx="10" cy="0" r="8" strokeWidth="2" />
        <path d="M10 8 L10 28 M0 15 L20 15 M10 28 L2 45 M10 28 L18 45" strokeWidth="2" />
      </g>
      {/* Speech bubbles */}
      <g transform="translate(50, 30)">
        <path d="M0 0 Q-5 0 -5 8 Q-5 16 0 16 L15 16 L10 24 L12 16 L25 16 Q30 16 30 8 Q30 0 25 0 Z" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
      </g>
      <g transform="translate(220, 40)">
        <path d="M25 0 Q30 0 30 8 Q30 16 25 16 L10 16 L15 24 L13 16 L0 16 Q-5 16 -5 8 Q-5 0 0 0 Z" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
      </g>
      {/* Sparkles */}
      <g transform="translate(180, 80)">
        <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="currentColor" fillOpacity="0.5" />
      </g>
      <g transform="translate(90, 130)">
        <path d="M0 -5 L1.5 -1.5 L5 0 L1.5 1.5 L0 5 L-1.5 1.5 L-5 0 L-1.5 -1.5 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
    </g>
  </svg>
);

// Cute scene illustration for "What I look for" - like the reference with characters
const CuteSceneIllustration = ({ fillLevel }: { fillLevel: number }) => (
  <svg viewBox="0 0 280 280" className="w-full h-full" style={{ color: '#c75d4a' }}>
    <defs>
      <clipPath id="fillClip">
        <rect x="0" y={280 - (280 * fillLevel / 100)} width="280" height={280 * fillLevel / 100} />
      </clipPath>
    </defs>

    {/* Background elements - always visible */}
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
      {/* Mountains */}
      <path d="M0 220 L50 140 L80 180 L130 100 L180 160 L220 120 L280 200 L280 280 L0 280 Z" />
      {/* Sun */}
      <circle cx="230" cy="50" r="25" />
      <path d="M230 15 L230 5" />
      <path d="M230 95 L230 85" />
      <path d="M195 50 L185 50" />
      <path d="M275 50 L265 50" />
    </g>

    {/* Filled version - clips based on fill level */}
    <g clipPath="url(#fillClip)">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Mountains filled */}
        <path d="M0 220 L50 140 L80 180 L130 100 L180 160 L220 120 L280 200 L280 280 L0 280 Z" fill="currentColor" fillOpacity="0.15" />
        {/* Sun filled */}
        <circle cx="230" cy="50" r="25" fill="currentColor" fillOpacity="0.2" />
        <path d="M230 15 L230 5" />
        <path d="M230 95 L230 85" />
        <path d="M195 50 L185 50" />
        <path d="M275 50 L265 50" />
        {/* Trees */}
        <g transform="translate(40, 180)">
          <path d="M15 40 L15 20" strokeWidth="3" />
          <path d="M0 25 L15 0 L30 25 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M3 35 L15 10 L27 35 Z" fill="currentColor" fillOpacity="0.25" />
        </g>
        <g transform="translate(200, 160)">
          <path d="M15 50 L15 25" strokeWidth="3" />
          <path d="M0 30 L15 5 L30 30 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M3 42 L15 15 L27 42 Z" fill="currentColor" fillOpacity="0.25" />
        </g>
        {/* Flowers */}
        <g transform="translate(100, 230)">
          <circle cx="0" cy="0" r="8" fill="currentColor" fillOpacity="0.4" />
          <circle cx="0" cy="-12" r="5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="10" cy="-5" r="5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="-10" cy="-5" r="5" fill="currentColor" fillOpacity="0.3" />
          <path d="M0 8 L0 30" strokeWidth="2" />
        </g>
        <g transform="translate(160, 240)">
          <circle cx="0" cy="0" r="6" fill="currentColor" fillOpacity="0.4" />
          <circle cx="0" cy="-10" r="4" fill="currentColor" fillOpacity="0.3" />
          <circle cx="8" cy="-4" r="4" fill="currentColor" fillOpacity="0.3" />
          <circle cx="-8" cy="-4" r="4" fill="currentColor" fillOpacity="0.3" />
          <path d="M0 6 L0 25" strokeWidth="2" />
        </g>
        {/* Cute character - person with backpack */}
        <g transform="translate(120, 140)">
          {/* Body */}
          <ellipse cx="20" cy="50" rx="15" ry="20" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
          {/* Head */}
          <circle cx="20" cy="20" r="18" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
          {/* Face */}
          <circle cx="14" cy="18" r="2" fill="currentColor" />
          <circle cx="26" cy="18" r="2" fill="currentColor" />
          <path d="M16 26 Q20 30 24 26" strokeWidth="2" />
          {/* Hair */}
          <path d="M5 15 Q10 0 20 2 Q30 0 35 15" strokeWidth="2" />
          {/* Backpack */}
          <rect x="30" y="35" width="15" height="25" rx="3" fill="currentColor" fillOpacity="0.25" strokeWidth="2" />
          {/* Legs */}
          <path d="M12 68 L8 90" strokeWidth="3" />
          <path d="M28 68 L32 90" strokeWidth="3" />
          {/* Arms */}
          <path d="M5 45 L-5 60" strokeWidth="2.5" />
          <path d="M35 50 L45 45" strokeWidth="2.5" />
        </g>
        {/* Stars */}
        <g transform="translate(60, 60)">
          <path d="M0 -10 L3 -3 L10 -3 L5 2 L7 10 L0 5 L-7 10 L-5 2 L-10 -3 L-3 -3 Z" fill="currentColor" fillOpacity="0.5" />
        </g>
        <g transform="translate(180, 40)">
          <path d="M0 -8 L2 -2 L8 -2 L4 2 L5 8 L0 4 L-5 8 L-4 2 L-8 -2 L-2 -2 Z" fill="currentColor" fillOpacity="0.4" />
        </g>
        {/* Clouds */}
        <g transform="translate(30, 30)">
          <path d="M0 15 Q-8 15 -8 8 Q-10 0 -2 0 Q2 -5 10 -3 Q18 -5 22 2 Q28 5 25 12 Q28 18 20 18 Q10 22 0 15" fill="white" fillOpacity="0.6" stroke="currentColor" strokeWidth="2" />
        </g>
      </g>
    </g>
  </svg>
);

// Story pages data
const storyPages = [
  {
    id: 1,
    title: "Where It Started",
    content: "I'm an international student from Accra, Ghana. Growing up, I was always curious about how things work - from the patterns in nature to the logic in machines.",
    Doodles: JourneyDoodles,
    accentColor: "#c75d4a",
  },
  {
    id: 2,
    title: "What Fascinates Me",
    content: "I'm fascinated by how data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
    Doodles: TechBioDoodles,
    accentColor: "#c75d4a",
  },
  {
    id: 3,
    title: "My Approach",
    content: "At the University of Miami, I'm combining Mathematics, Computer Science, and Biology. Math sharpens my understanding, CS equips me to build tools, and Biology connects it all to living systems.",
    Doodles: StudyDoodles,
    accentColor: "#c75d4a",
  },
  {
    id: 4,
    title: "Beyond The Books",
    content: "I love volunteering and giving back to my community. Whether it's tutoring, organizing events, or mentoring - service is a core part of who I am.",
    Doodles: ServiceDoodles,
    accentColor: "#c75d4a",
  },
];

// What I'm Looking For items - no emojis, simpler labels
const lookingForItems = [
  { id: 1, label: "Impactful work" },
  { id: 2, label: "Meaningful projects" },
  { id: 3, label: "Diverse team of talented folks" },
];

// Animated handwritten checkmark component
const HandwrittenCheck = ({ isChecked }: { isChecked: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="3"
      fill="none"
      stroke="#c75d4a"
      strokeWidth="2"
    />
    {isChecked && (
      <motion.path
        d="M6 12 L10 16 L18 8"
        fill="none"
        stroke="#c75d4a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    )}
  </svg>
);

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
                stroke="#c75d4a"
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
              border: '3px solid #c75d4a',
              background: 'var(--paper-color)',
            }}
          >
            {/* Book spine shadow */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 z-10 pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.08) 100%)',
              }}
            />

            {/* Book content */}
            <div className="grid md:grid-cols-2 gap-0 min-h-[420px]">
              {/* Left page - Doodles scattered around */}
              <div className="p-6 md:p-8 relative" style={{ borderRight: '2px solid rgba(199, 93, 74, 0.2)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    {React.createElement(storyPages[currentPage].Doodles)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right page - Story text */}
              <div className="p-6 md:p-8 relative flex flex-col justify-center">
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
                        background: 'rgba(199, 93, 74, 0.15)',
                        color: '#c75d4a'
                      }}
                    >
                      {currentPage + 1} / {storyPages.length}
                    </span>
                    <h3 className="font-handwriting text-3xl md:text-4xl mb-4" style={{ color: '#c75d4a' }}>
                      {storyPages[currentPage].title}
                    </h3>
                    <p className="font-sketch text-lg leading-relaxed" style={{ color: '#5a4a42' }}>
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
                          : 'opacity-40 hover:opacity-60'
                      }`}
                      style={{
                        backgroundColor: '#c75d4a'
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
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors z-20"
              style={{ background: 'var(--paper-color)', border: '2px solid #c75d4a' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c75d4a" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(storyPages.length - 1, prev + 1))}
              disabled={currentPage === storyPages.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors z-20"
              style={{ background: 'var(--paper-color)', border: '2px solid #c75d4a' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c75d4a" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* What I Look For Section - Tilted card with paper lines */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{
              border: '3px solid #c75d4a',
              background: 'var(--paper-color)',
              transform: 'rotate(-1deg)',
            }}
          >
            {/* Torn paper edge effect - top */}
            <div className="absolute top-0 left-0 right-0 h-3 overflow-hidden">
              <svg width="100%" height="12" preserveAspectRatio="none">
                <path d="M0 12 Q10 8 20 12 T40 12 T60 12 T80 12 T100 12 T120 12 T140 12 T160 12 T180 12 T200 12 T220 12 T240 12 T260 12 T280 12 T300 12 L300 0 L0 0 Z" fill="var(--paper-color)" />
              </svg>
            </div>

            <div className="p-8 md:p-10">
              {/* Title */}
              <h3 className="font-handwriting text-3xl md:text-4xl mb-8" style={{ color: '#c75d4a' }}>
                What I look for
              </h3>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Checkboxes with paper lines */}
                <div className="space-y-0">
                  {lookingForItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="relative py-4 cursor-pointer"
                      style={{
                        borderBottom: index < lookingForItems.length - 1 ? '1px dashed rgba(199, 93, 74, 0.3)' : 'none',
                      }}
                      onClick={() => handleCheckboxChange(item.id)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        <HandwrittenCheck isChecked={checkedItems.includes(item.id)} />
                        <span
                          className="font-handwriting text-xl"
                          style={{
                            color: '#c75d4a',
                            textDecoration: checkedItems.includes(item.id) ? 'line-through' : 'none',
                            opacity: checkedItems.includes(item.id) ? 0.7 : 1,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Let's chat button */}
                  <motion.a
                    href="#contact"
                    className="inline-block mt-6 px-8 py-3 font-handwriting text-xl rounded-lg transition-colors"
                    style={{
                      border: '2px solid #c75d4a',
                      color: '#c75d4a',
                      background: 'transparent',
                    }}
                    whileHover={{ scale: 1.05, background: 'rgba(199, 93, 74, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    let&apos;s chat!
                  </motion.a>
                </div>

                {/* Illustration that fills up */}
                <div className="relative">
                  <div
                    className="w-full aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden relative"
                    style={{ border: '3px solid #c75d4a' }}
                  >
                    <CuteSceneIllustration fillLevel={fillPercentage} />
                  </div>

                  {/* Celebration popup */}
                  <AnimatePresence>
                    {showCelebration && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        className="absolute inset-0 flex items-center justify-center z-10"
                      >
                        <div
                          className="bg-white rounded-2xl p-6 shadow-2xl text-center"
                          style={{ border: '3px solid #c75d4a' }}
                        >
                          <p className="font-handwriting text-2xl mb-3" style={{ color: '#c75d4a' }}>Perfect match!</p>
                          <motion.a
                            href="#contact"
                            className="inline-block px-6 py-2 text-white font-sketch rounded-xl"
                            style={{ background: '#c75d4a' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Let&apos;s Connect
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
                border: "2px solid #c75d4a",
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, rgba(199, 93, 74, 0.15) 31px, rgba(199, 93, 74, 0.15) 32px)",
              }}
            >
              <NotebookSpiral />
              <WashiTape className="-top-3 left-8" rotation={-3} color="#c75d4a" />

              <div className="flex items-center gap-3 mb-4">
                <GraduationCapIcon size={32} className="text-[#c75d4a]" />
                <h3 className="font-marker text-2xl click-wiggle" style={{ color: '#c75d4a' }}>Education</h3>
              </div>

              <div className="space-y-3 font-sketch text-lg">
                <p className="font-semibold" style={{ color: '#5a4a42' }}>
                  The University of Miami
                </p>
                <p style={{ color: '#7a6a62' }}>Coral Gables, FL</p>
                <p style={{ color: '#5a4a42' }}>
                  B.S. in{" "}
                  <span className="highlight-text">Computer Science</span>,{" "}
                  <span className="highlight-pink">Math</span> and{" "}
                  <span className="highlight-blue">Biology</span>
                </p>
                <p className="flex items-center gap-2 font-semibold" style={{ color: '#c75d4a' }}>
                  <StarDoodle size={20} color="#c75d4a" filled />
                  GPA: 4.0
                </p>
                <p className="text-base" style={{ color: '#7a6a62' }}>Expected May 2027</p>
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
                border: "3px solid #c75d4a",
              }}
            >
              <WashiTape className="-top-3 right-8" rotation={5} pattern="dots" color="#c75d4a" />

              <div className="flex items-center gap-3 mb-6">
                <TrophyIcon size={32} className="text-[#c75d4a]" />
                <h3 className="font-marker text-2xl click-wiggle" style={{ color: '#c75d4a' }}>Honors & Awards</h3>
              </div>

              <div className="space-y-5">
                {/* Stamps Scholarship */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md relative overflow-hidden"
                  style={{ background: 'rgba(199, 93, 74, 0.1)', border: "2px solid #c75d4a" }}
                >
                  <div className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl" style={{ background: '#c75d4a', color: 'white' }}>
                    MOST PRESTIGIOUS
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon size={24} className="text-[#c75d4a] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg" style={{ color: '#5a4a42' }}>
                        Stamps Excellence Scholarship
                      </p>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#7a6a62' }}>
                        UM&apos;s most prestigious merit award
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Robert Bates Cole Award */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(199, 93, 74, 0.08)', border: "2px solid rgba(199, 93, 74, 0.5)" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#c75d4a" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg" style={{ color: '#5a4a42' }}>
                        Robert Bates Cole Award
                      </p>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#7a6a62' }}>
                        For Volunteer Leadership
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* President's Honor Roll */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(199, 93, 74, 0.08)', border: "2px solid rgba(199, 93, 74, 0.5)" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#c75d4a" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-marker text-lg" style={{ color: '#5a4a42' }}>
                          President&apos;s Honor Roll
                        </p>
                        <span className="text-white text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#c75d4a' }}>
                          5x
                        </span>
                      </div>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#7a6a62' }}>
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
