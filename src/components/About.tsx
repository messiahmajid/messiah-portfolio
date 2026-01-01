"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon } from "./DoodleIcons";

// Sketchy hand-drawn doodle for Ghana/Journey - scattered around edges
const JourneyDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#DC6B5A' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Airplane - top right */}
      <g transform="translate(230, 30)">
        <path d="M0 15 Q5 10 15 12 L35 8 Q40 10 38 15 L20 18 Q15 25 10 22 L15 17 L5 18 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M10 22 L8 28" />
        <path d="M38 15 L45 12" strokeDasharray="4 3" />
      </g>
      {/* Globe with heart - left side */}
      <g transform="translate(20, 80)">
        <circle cx="25" cy="25" r="22" strokeWidth="2" />
        <path d="M3 25 Q25 15 47 25" strokeWidth="1.5" />
        <path d="M3 25 Q25 35 47 25" strokeWidth="1.5" />
        <ellipse cx="25" cy="25" rx="22" ry="8" strokeWidth="1.5" />
        <path d="M20 20 Q18 15 22 15 Q25 15 25 20 Q25 15 28 15 Q32 15 30 20 L25 28 Z" fill="currentColor" fillOpacity="0.5" />
      </g>
      {/* Stars scattered */}
      <g transform="translate(260, 80)">
        <path d="M0 -10 L3 -3 L10 -3 L5 2 L7 10 L0 5 L-7 10 L-5 2 L-10 -3 L-3 -3 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
      <g transform="translate(40, 40)">
        <path d="M0 -6 L2 -2 L6 -2 L3 1 L4 6 L0 3 L-4 6 L-3 1 L-6 -2 L-2 -2 Z" fill="currentColor" fillOpacity="0.3" />
      </g>
      <g transform="translate(120, 60)">
        <path d="M0 -5 L1.5 -1.5 L5 -1.5 L2.5 1 L3.5 5 L0 2.5 L-3.5 5 L-2.5 1 L-5 -1.5 L-1.5 -1.5 Z" fill="currentColor" fillOpacity="0.35" />
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
      {/* Ghana flag inspired element */}
      <g transform="translate(80, 180)">
        <rect x="0" y="0" width="40" height="8" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
        <rect x="0" y="8" width="40" height="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
        <rect x="0" y="16" width="40" height="8" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
        <path d="M20 12 L22 16 L26 16 L23 19 L24 23 L20 20 L16 23 L17 19 L14 16 L18 16 Z" fill="currentColor" fillOpacity="0.5" />
      </g>
      {/* Passport stamp style */}
      <g transform="translate(200, 160)">
        <circle cx="25" cy="25" r="22" strokeWidth="2" strokeDasharray="4 2" />
        <text x="25" y="22" fontSize="8" fill="currentColor" textAnchor="middle" fontFamily="serif">ACCRA</text>
        <text x="25" y="32" fontSize="6" fill="currentColor" textAnchor="middle" fontFamily="serif" opacity="0.7">GH</text>
      </g>
      {/* Small flower bottom left */}
      <g transform="translate(30, 200)">
        <circle cx="0" cy="0" r="5" fill="currentColor" fillOpacity="0.4" />
        <path d="M0 -12 Q3 -8 0 -5 Q-3 -8 0 -12" fill="currentColor" fillOpacity="0.3" />
        <path d="M0 5 Q3 8 0 12 Q-3 8 0 5" fill="currentColor" fillOpacity="0.3" />
        <path d="M-7 0 Q-5 3 -2 0 Q-5 -3 -7 0" fill="currentColor" fillOpacity="0.3" />
        <path d="M7 0 Q5 3 2 0 Q5 -3 7 0" fill="currentColor" fillOpacity="0.3" />
      </g>
      {/* Palm tree */}
      <g transform="translate(280, 140)">
        <path d="M0 50 L0 20" strokeWidth="3" />
        <path d="M0 20 Q-15 10 -20 15" strokeWidth="2" />
        <path d="M0 20 Q15 10 20 15" strokeWidth="2" />
        <path d="M0 20 Q-10 5 -15 10" strokeWidth="2" />
        <path d="M0 20 Q10 5 15 10" strokeWidth="2" />
        <path d="M0 20 L0 8" strokeWidth="2" />
      </g>
      {/* Suitcase */}
      <g transform="translate(140, 200)">
        <rect x="0" y="5" width="25" height="18" rx="2" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M8 5 L8 2 Q8 0 10 0 L15 0 Q17 0 17 2 L17 5" strokeWidth="1.5" />
        <path d="M0 10 L25 10" strokeWidth="1.5" />
      </g>
      {/* Decorative swirls */}
      <path d="M100 30 Q110 35 105 45 Q100 55 110 50" strokeWidth="1.5" opacity="0.4" />
      <path d="M180 90 Q185 100 175 105" strokeWidth="1.5" opacity="0.4" />
    </g>
  </svg>
);

// Tech & Bio doodles - scattered style
const TechBioDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#DC6B5A' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* DNA helix - left */}
      <g transform="translate(25, 40)">
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
        <path d="M8 10 L20 10" strokeWidth="2" />
        <path d="M8 17 L35 17" strokeWidth="2" />
        <path d="M8 24 L25 24" strokeWidth="2" />
      </g>
      {/* Lightbulb - middle */}
      <g transform="translate(140, 85)">
        <path d="M0 0 Q-15 -10 -12 -25 Q-8 -40 0 -45 Q8 -40 12 -25 Q15 -10 0 0" strokeWidth="2.5" />
        <path d="M-6 5 L6 5" strokeWidth="2" />
        <path d="M-5 10 L5 10" strokeWidth="2" />
        <path d="M-3 15 L3 15" strokeWidth="2" />
        <path d="M0 -50 L0 -58" strokeWidth="2" />
        <path d="M-15 -45 L-22 -52" strokeWidth="2" />
        <path d="M15 -45 L22 -52" strokeWidth="2" />
      </g>
      {/* Microscope - bottom right */}
      <g transform="translate(230, 130)">
        <path d="M15 0 L15 30 L25 35 L5 35 L15 30" strokeWidth="2.5" />
        <circle cx="15" cy="-8" r="10" strokeWidth="2" />
        <path d="M0 35 L30 35" strokeWidth="2.5" />
        <path d="M5 35 L5 45" strokeWidth="2" />
        <path d="M25 35 L25 45" strokeWidth="2" />
      </g>
      {/* Binary scattered */}
      <text x="80" y="30" fontSize="14" fill="currentColor" fontFamily="monospace" opacity="0.6">01</text>
      <text x="260" y="90" fontSize="12" fill="currentColor" fontFamily="monospace" opacity="0.5">10</text>
      <text x="170" y="200" fontSize="10" fill="currentColor" fontFamily="monospace" opacity="0.4">1101</text>
      {/* Atom symbol */}
      <g transform="translate(70, 180)">
        <ellipse cx="0" cy="0" rx="20" ry="8" strokeWidth="2" transform="rotate(-30)" />
        <ellipse cx="0" cy="0" rx="20" ry="8" strokeWidth="2" transform="rotate(30)" />
        <ellipse cx="0" cy="0" rx="20" ry="8" strokeWidth="2" transform="rotate(90)" />
        <circle cx="0" cy="0" r="4" fill="currentColor" fillOpacity="0.5" />
      </g>
      {/* Cell/Petri dish */}
      <g transform="translate(140, 180)">
        <ellipse cx="20" cy="15" rx="25" ry="20" strokeWidth="2" />
        <circle cx="15" cy="12" r="4" fill="currentColor" fillOpacity="0.3" />
        <circle cx="28" cy="18" r="3" fill="currentColor" fillOpacity="0.25" />
        <circle cx="18" cy="22" r="2" fill="currentColor" fillOpacity="0.2" />
      </g>
      {/* Code brackets */}
      <g transform="translate(100, 120)">
        <path d="M0 0 L-8 10 L0 20" strokeWidth="2" />
        <path d="M25 0 L33 10 L25 20" strokeWidth="2" />
      </g>
      {/* Sparkles */}
      <g transform="translate(200, 200)">
        <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
      <g transform="translate(280, 180)">
        <path d="M0 -5 L1 -1 L5 0 L1 1 L0 5 L-1 1 L-5 0 L-1 -1 Z" fill="currentColor" fillOpacity="0.35" />
      </g>
      {/* Beaker */}
      <g transform="translate(260, 200)">
        <path d="M0 0 L0 25 Q0 35 10 35 Q20 35 20 25 L20 0" strokeWidth="2" />
        <path d="M-3 0 L23 0" strokeWidth="2" />
        <path d="M5 15 Q10 18 15 15" strokeWidth="1.5" opacity="0.6" />
      </g>
      {/* Wi-Fi symbol */}
      <g transform="translate(60, 30)">
        <path d="M0 10 Q10 0 20 10" strokeWidth="2" />
        <path d="M4 6 Q10 0 16 6" strokeWidth="2" />
        <circle cx="10" cy="12" r="2" fill="currentColor" />
      </g>
    </g>
  </svg>
);

// Interdisciplinary doodles
const StudyDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#DC6B5A' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Open book - center top */}
      <g transform="translate(120, 30)">
        <path d="M30 0 Q0 5 0 40 L30 35 L60 40 Q60 5 30 0" strokeWidth="2.5" />
        <path d="M30 0 L30 35" strokeWidth="2" />
        <path d="M8 12 L25 10" strokeWidth="1.5" />
        <path d="M8 20 L25 18" strokeWidth="1.5" />
        <path d="M35 10 L52 12" strokeWidth="1.5" />
        <path d="M35 18 L52 20" strokeWidth="1.5" />
      </g>
      {/* Venn diagram - bottom left */}
      <g transform="translate(40, 120)">
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
      <g transform="translate(250, 20)">
        <rect x="0" y="0" width="35" height="50" rx="3" strokeWidth="2" />
        <rect x="5" y="5" width="25" height="12" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="10" cy="25" r="3" fill="currentColor" fillOpacity="0.3" />
        <circle cx="25" cy="25" r="3" fill="currentColor" fillOpacity="0.3" />
        <circle cx="10" cy="38" r="3" fill="currentColor" fillOpacity="0.3" />
        <circle cx="25" cy="38" r="3" fill="currentColor" fillOpacity="0.3" />
      </g>
      {/* Brain sketch - bottom right */}
      <g transform="translate(200, 160)">
        <path d="M20 0 Q35 5 40 20 Q45 40 30 50 Q15 55 5 45 Q-5 35 0 20 Q5 5 20 0" strokeWidth="2.5" />
        <path d="M10 15 Q20 20 30 15" strokeWidth="1.5" />
        <path d="M8 30 Q18 35 28 30" strokeWidth="1.5" />
        <path d="M20 10 L20 45" strokeWidth="1.5" strokeDasharray="3 3" />
      </g>
      {/* Graduation cap - top left */}
      <g transform="translate(20, 40)">
        <path d="M0 15 L25 0 L50 15 L25 30 Z" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
        <path d="M25 30 L25 45" strokeWidth="2" />
        <path d="M18 32 L18 42 Q25 48 32 42 L32 32" strokeWidth="1.5" />
        <circle cx="45" cy="18" r="3" fill="currentColor" fillOpacity="0.4" />
        <path d="M45 21 L45 38" strokeWidth="1.5" />
      </g>
      {/* Formula/equation */}
      <g transform="translate(100, 85)">
        <text fontSize="12" fill="currentColor" opacity="0.7">∫</text>
        <text x="10" y="0" fontSize="10" fill="currentColor" opacity="0.6">f(x)dx</text>
      </g>
      {/* Lightbulb small */}
      <g transform="translate(180, 100)">
        <path d="M10 20 Q-2 12 0 2 Q2 -8 10 -10 Q18 -8 20 2 Q22 12 10 20" strokeWidth="2" />
        <path d="M6 23 L14 23" strokeWidth="1.5" />
        <path d="M7 26 L13 26" strokeWidth="1.5" />
      </g>
      {/* Stars */}
      <g transform="translate(100, 180)">
        <path d="M0 -6 L2 -2 L6 -2 L3 1 L4 6 L0 3 L-4 6 L-3 1 L-6 -2 L-2 -2 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
      <g transform="translate(280, 130)">
        <path d="M0 -5 L1.5 -1.5 L5 -1.5 L2.5 1 L3.5 5 L0 2.5 L-3.5 5 L-2.5 1 L-5 -1.5 L-1.5 -1.5 Z" fill="currentColor" fillOpacity="0.35" />
      </g>
      {/* Coffee cup */}
      <g transform="translate(140, 190)">
        <path d="M0 0 L0 25 Q0 35 15 35 Q30 35 30 25 L30 0" strokeWidth="2" />
        <path d="M30 8 Q40 8 40 18 Q40 28 30 28" strokeWidth="2" />
        <path d="M5 -5 Q8 -12 11 -5" strokeWidth="1.5" opacity="0.5" />
        <path d="M15 -5 Q18 -15 21 -5" strokeWidth="1.5" opacity="0.5" />
      </g>
      {/* Decorative swirl */}
      <path d="M70, 80 Q80 70 75 60" strokeWidth="1.5" opacity="0.4" />
      {/* Plus signs for math */}
      <g transform="translate(260, 200)">
        <path d="M0 -6 L0 6 M-6 0 L6 0" strokeWidth="2" opacity="0.5" />
      </g>
    </g>
  </svg>
);

// Service/Volunteer doodles
const ServiceDoodles = () => (
  <svg viewBox="0 0 300 250" className="w-full h-full" style={{ color: '#DC6B5A' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Big heart - center */}
      <g transform="translate(120, 40)">
        <path d="M30 70 L5 45 Q-15 20 5 0 Q25 -15 30 10 Q35 -15 55 0 Q75 20 55 45 Z" strokeWidth="3" fill="currentColor" fillOpacity="0.15" />
      </g>
      {/* Hands holding - bottom */}
      <g transform="translate(100, 150)">
        <path d="M0 30 L0 10 Q-5 0 0 -5 L10 -5 Q15 0 15 8 L15 20" strokeWidth="2.5" />
        <path d="M15 10 Q18 5 22 8" strokeWidth="2" />
        <path d="M15 15 Q18 12 22 15" strokeWidth="2" />
        <path d="M80 30 L80 10 Q85 0 80 -5 L70 -5 Q65 0 65 8 L65 20" strokeWidth="2.5" />
        <path d="M65 10 Q62 5 58 8" strokeWidth="2" />
        <path d="M65 15 Q62 12 58 15" strokeWidth="2" />
        <path d="M22 20 Q40 10 58 20" strokeWidth="2" strokeDasharray="4 4" />
      </g>
      {/* People icons - scattered */}
      <g transform="translate(30, 70)">
        <circle cx="10" cy="0" r="8" strokeWidth="2" />
        <path d="M10 8 L10 28 M0 15 L20 15 M10 28 L2 45 M10 28 L18 45" strokeWidth="2" />
      </g>
      <g transform="translate(240, 90)">
        <circle cx="10" cy="0" r="8" strokeWidth="2" />
        <path d="M10 8 L10 28 M0 15 L20 15 M10 28 L2 45 M10 28 L18 45" strokeWidth="2" />
      </g>
      {/* Speech bubbles */}
      <g transform="translate(50, 30)">
        <path d="M0 0 Q-5 0 -5 8 Q-5 16 0 16 L15 16 L10 24 L12 16 L25 16 Q30 16 30 8 Q30 0 25 0 Z" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
      </g>
      <g transform="translate(220, 30)">
        <path d="M25 0 Q30 0 30 8 Q30 16 25 16 L10 16 L15 24 L13 16 L0 16 Q-5 16 -5 8 Q-5 0 0 0 Z" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
      </g>
      {/* Community circle */}
      <g transform="translate(140, 200)">
        <circle cx="20" cy="15" r="25" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="7" cy="8" r="4" fill="currentColor" fillOpacity="0.3" />
        <circle cx="33" cy="8" r="4" fill="currentColor" fillOpacity="0.3" />
        <circle cx="20" cy="30" r="4" fill="currentColor" fillOpacity="0.3" />
        <circle cx="7" cy="22" r="3" fill="currentColor" fillOpacity="0.25" />
        <circle cx="33" cy="22" r="3" fill="currentColor" fillOpacity="0.25" />
      </g>
      {/* Gift box */}
      <g transform="translate(20, 180)">
        <rect x="0" y="10" width="30" height="25" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M-3 10 L33 10 L33 0 L-3 0 Z" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M15 0 L15 35" strokeWidth="2" />
        <path d="M5 0 Q15 -10 15 0" strokeWidth="1.5" />
        <path d="M25 0 Q15 -10 15 0" strokeWidth="1.5" />
      </g>
      {/* Helping hand reaching up */}
      <g transform="translate(260, 160)">
        <path d="M10 40 L10 25 Q5 20 10 15 L15 15 Q20 20 20 25 L20 40" strokeWidth="2" />
        <circle cx="15" cy="5" r="8" strokeWidth="2" />
      </g>
      {/* Small hearts scattered */}
      <g transform="translate(80, 80)">
        <path d="M0 4 L-4 0 Q-4 -4 0 -2 Q4 -4 4 0 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
      <g transform="translate(200, 170)">
        <path d="M0 3 L-3 0 Q-3 -3 0 -1.5 Q3 -3 3 0 Z" fill="currentColor" fillOpacity="0.35" />
      </g>
      {/* Sparkles */}
      <g transform="translate(180, 70)">
        <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="currentColor" fillOpacity="0.5" />
      </g>
      <g transform="translate(90, 130)">
        <path d="M0 -5 L1.5 -1.5 L5 0 L1.5 1.5 L0 5 L-1.5 1.5 L-5 0 L-1.5 -1.5 Z" fill="currentColor" fillOpacity="0.4" />
      </g>
      <g transform="translate(270, 220)">
        <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="currentColor" fillOpacity="0.35" />
      </g>
      {/* Ribbon */}
      <g transform="translate(70, 200)">
        <path d="M0 0 Q5 5 0 10 L8 15 L0 20 Q5 15 0 10" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      </g>
    </g>
  </svg>
);

// Cute scene illustration for "What I look for" - detailed with many elements
const CuteSceneIllustration = ({ fillLevel }: { fillLevel: number }) => (
  <svg viewBox="0 0 280 280" className="w-full h-full" style={{ color: '#DC6B5A' }}>
    <defs>
      <clipPath id="fillClip">
        <rect x="0" y={280 - (280 * fillLevel / 100)} width="280" height={280 * fillLevel / 100} />
      </clipPath>
    </defs>

    {/* Background elements - always visible */}
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
      {/* Landscape outline */}
      <path d="M0 240 Q70 200 140 220 Q210 240 280 210 L280 280 L0 280 Z" />
      {/* Leaves scattered */}
      <ellipse cx="20" cy="120" rx="8" ry="15" transform="rotate(-20 20 120)" />
      <ellipse cx="260" cy="100" rx="10" ry="18" transform="rotate(15 260 100)" />
      <ellipse cx="250" cy="60" rx="6" ry="12" transform="rotate(-30 250 60)" />
    </g>

    {/* Filled version - clips based on fill level */}
    <g clipPath="url(#fillClip)">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground/landscape */}
        <path d="M0 240 Q70 200 140 220 Q210 240 280 210 L280 280 L0 280 Z" fill="currentColor" fillOpacity="0.12" />

        {/* Left bush with flowers */}
        <g transform="translate(10, 200)">
          <path d="M0 40 Q-10 20 10 15 Q5 0 25 5 Q40 -5 45 15 Q60 10 55 30 Q70 45 50 50 Q30 60 10 50 Q-10 55 0 40" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
          {/* Small flowers */}
          <circle cx="20" cy="25" r="4" fill="currentColor" fillOpacity="0.4" />
          <circle cx="35" cy="20" r="3" fill="currentColor" fillOpacity="0.35" />
          <circle cx="15" cy="35" r="3" fill="currentColor" fillOpacity="0.35" />
        </g>

        {/* Right bush */}
        <g transform="translate(200, 180)">
          <path d="M0 50 Q-15 30 15 20 Q10 0 35 10 Q55 -5 60 20 Q80 15 75 40 Q90 55 65 60 Q40 70 15 60 Q-10 65 0 50" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="4" fill="currentColor" fillOpacity="0.4" />
          <circle cx="50" cy="25" r="3" fill="currentColor" fillOpacity="0.35" />
        </g>

        {/* Main character - person holding sign */}
        <g transform="translate(100, 90)">
          {/* Sign/board being held */}
          <rect x="25" y="-20" width="40" height="55" rx="5" fill="white" fillOpacity="0.8" strokeWidth="2" />
          <path d="M35 5 L55 5" strokeWidth="1.5" />
          <path d="M35 15 L55 15" strokeWidth="1.5" />
          <path d="M35 25 L50 25" strokeWidth="1.5" />

          {/* Body */}
          <ellipse cx="40" cy="80" rx="20" ry="25" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
          {/* Head */}
          <circle cx="40" cy="45" r="20" fill="currentColor" fillOpacity="0.12" strokeWidth="2" />
          {/* Hair/curls */}
          <path d="M22 40 Q18 30 25 25 Q35 18 45 25 Q55 20 58 30 Q62 40 55 45" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
          {/* Face */}
          <circle cx="33" cy="43" r="2.5" fill="currentColor" />
          <circle cx="47" cy="43" r="2.5" fill="currentColor" />
          <path d="M35 52 Q40 57 45 52" strokeWidth="2" />
          {/* Ears */}
          <circle cx="20" cy="45" r="4" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
          <circle cx="60" cy="45" r="4" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
          {/* Arms holding sign */}
          <path d="M20 65 Q15 50 25 35" strokeWidth="2.5" />
          <path d="M60 65 Q65 50 55 35" strokeWidth="2.5" />
          {/* Legs */}
          <path d="M30 102 L25 130" strokeWidth="3" />
          <path d="M50 102 L55 130" strokeWidth="3" />
        </g>

        {/* Cute animal - small lamb/goat on right */}
        <g transform="translate(200, 140)">
          <ellipse cx="30" cy="35" rx="20" ry="15" fill="currentColor" fillOpacity="0.15" strokeWidth="1.5" />
          <circle cx="45" cy="25" r="12" fill="currentColor" fillOpacity="0.12" strokeWidth="1.5" />
          {/* Ear */}
          <ellipse cx="55" cy="18" rx="6" ry="4" fill="currentColor" fillOpacity="0.15" strokeWidth="1" transform="rotate(30 55 18)" />
          {/* Eye */}
          <circle cx="50" cy="24" r="2" fill="currentColor" />
          {/* Nose */}
          <ellipse cx="56" cy="28" rx="2" ry="1.5" fill="currentColor" fillOpacity="0.5" />
          {/* Legs */}
          <path d="M18 48 L18 60" strokeWidth="2" />
          <path d="M28 48 L28 60" strokeWidth="2" />
          <path d="M35 48 L35 58" strokeWidth="2" />
          <path d="M42 46 L44 56" strokeWidth="2" />
          {/* Bell */}
          <circle cx="38" cy="38" r="3" fill="currentColor" fillOpacity="0.3" strokeWidth="1" />
        </g>

        {/* Large flower on left */}
        <g transform="translate(30, 150)">
          <path d="M15 80 L15 40" strokeWidth="2" />
          <circle cx="15" cy="30" r="12" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
          <circle cx="15" cy="15" r="8" fill="currentColor" fillOpacity="0.25" strokeWidth="1" />
          <circle cx="5" cy="25" r="7" fill="currentColor" fillOpacity="0.25" strokeWidth="1" />
          <circle cx="25" cy="25" r="7" fill="currentColor" fillOpacity="0.25" strokeWidth="1" />
          <circle cx="8" cy="38" r="6" fill="currentColor" fillOpacity="0.25" strokeWidth="1" />
          <circle cx="22" cy="38" r="6" fill="currentColor" fillOpacity="0.25" strokeWidth="1" />
          {/* Center */}
          <circle cx="15" cy="30" r="5" fill="currentColor" fillOpacity="0.5" />
          {/* Stamens */}
          <circle cx="12" cy="28" r="1" fill="currentColor" />
          <circle cx="18" cy="28" r="1" fill="currentColor" />
          <circle cx="15" cy="32" r="1" fill="currentColor" />
          {/* Leaves on stem */}
          <ellipse cx="8" cy="60" rx="6" ry="10" fill="currentColor" fillOpacity="0.2" strokeWidth="1" transform="rotate(-20 8 60)" />
          <ellipse cx="22" cy="70" rx="5" ry="8" fill="currentColor" fillOpacity="0.2" strokeWidth="1" transform="rotate(25 22 70)" />
        </g>

        {/* Small mouse/creature at bottom */}
        <g transform="translate(170, 250)">
          <ellipse cx="15" cy="12" rx="12" ry="8" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
          <circle cx="25" cy="8" r="6" fill="currentColor" fillOpacity="0.15" strokeWidth="1.5" />
          {/* Ears */}
          <circle cx="22" cy="2" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="1" />
          <circle cx="30" cy="4" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="1" />
          {/* Eye */}
          <circle cx="27" cy="7" r="1.5" fill="currentColor" />
          {/* Tail */}
          <path d="M3 12 Q-5 5 -2 0" strokeWidth="1.5" />
        </g>

        {/* Grass tufts */}
        <g transform="translate(80, 260)">
          <path d="M0 0 Q2 -15 5 -20 Q8 -15 10 0" strokeWidth="1.5" />
          <path d="M8 0 Q12 -12 15 -18 Q18 -12 20 0" strokeWidth="1.5" />
        </g>
        <g transform="translate(150, 255)">
          <path d="M0 0 Q3 -10 6 -15 Q9 -10 12 0" strokeWidth="1.5" />
        </g>

        {/* Decorative leaves top */}
        <g transform="translate(0, 50)">
          <ellipse cx="20" cy="30" rx="12" ry="25" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" transform="rotate(-30 20 30)" />
          <path d="M20 30 L10 15" strokeWidth="1" />
          <ellipse cx="5" cy="60" rx="10" ry="20" fill="currentColor" fillOpacity="0.18" strokeWidth="1.5" transform="rotate(-15 5 60)" />
        </g>

        {/* Top right decorative leaves */}
        <g transform="translate(240, 20)">
          <ellipse cx="20" cy="40" rx="15" ry="30" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" transform="rotate(20 20 40)" />
          <path d="M20 40 L30 20" strokeWidth="1" />
          <ellipse cx="35" cy="70" rx="12" ry="22" fill="currentColor" fillOpacity="0.18" strokeWidth="1.5" transform="rotate(35 35 70)" />
        </g>

        {/* Stars/sparkles */}
        <g transform="translate(70, 40)">
          <path d="M0 -8 L2 -2 L8 -2 L3 2 L5 8 L0 4 L-5 8 L-3 2 L-8 -2 L-2 -2 Z" fill="currentColor" fillOpacity="0.5" />
        </g>
        <g transform="translate(220, 130)">
          <path d="M0 -6 L1.5 -1.5 L6 -1.5 L2.5 1 L3.5 6 L0 3 L-3.5 6 L-2.5 1 L-6 -1.5 L-1.5 -1.5 Z" fill="currentColor" fillOpacity="0.4" />
        </g>
        <g transform="translate(50, 120)">
          <path d="M0 -5 L1 -1 L5 -1 L2 1 L3 5 L0 2.5 L-3 5 L-2 1 L-5 -1 L-1 -1 Z" fill="currentColor" fillOpacity="0.35" />
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
    accentColor: "#DC6B5A",
  },
  {
    id: 2,
    title: "What Fascinates Me",
    content: "I'm fascinated by how data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
    Doodles: TechBioDoodles,
    accentColor: "#DC6B5A",
  },
  {
    id: 3,
    title: "My Approach",
    content: "At the University of Miami, I'm combining Mathematics, Computer Science, and Biology. Math sharpens my understanding, CS equips me to build tools, and Biology connects it all to living systems.",
    Doodles: StudyDoodles,
    accentColor: "#DC6B5A",
  },
  {
    id: 4,
    title: "Beyond The Books",
    content: "I love volunteering and giving back to my community. Whether it's tutoring, organizing events, or mentoring - service is a core part of who I am.",
    Doodles: ServiceDoodles,
    accentColor: "#DC6B5A",
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
      stroke="#DC6B5A"
      strokeWidth="2"
    />
    {isChecked && (
      <motion.path
        d="M6 12 L10 16 L18 8"
        fill="none"
        stroke="#DC6B5A"
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

// Scattered decorative doodles for right page
const RightPageDoodles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 450" preserveAspectRatio="none">
    <g fill="none" stroke="#DC6B5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
      {/* Top right corner - star */}
      <g transform="translate(350, 30)">
        <path d="M0 -8 L2 -2 L8 -2 L4 2 L5 8 L0 4 L-5 8 L-4 2 L-8 -2 L-2 -2 Z" fill="#DC6B5A" fillOpacity="0.3" />
      </g>
      {/* Top left - small flower */}
      <g transform="translate(30, 50)">
        <circle cx="0" cy="0" r="4" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M0 -8 Q2 -5 0 -4 Q-2 -5 0 -8" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M0 4 Q2 7 0 8 Q-2 7 0 4" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M-5 0 Q-3 2 -4 0 Q-3 -2 -5 0" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M5 0 Q3 2 4 0 Q3 -2 5 0" fill="#DC6B5A" fillOpacity="0.2" />
      </g>
      {/* Middle right - squiggle */}
      <path d="M370 180 Q380 170 375 160 Q370 150 380 145" strokeWidth="2" />
      {/* Bottom left - sparkle */}
      <g transform="translate(40, 380)">
        <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#DC6B5A" fillOpacity="0.3" />
      </g>
      {/* Bottom right - tiny heart */}
      <g transform="translate(360, 400)">
        <path d="M0 4 L-6 -2 Q-6 -8 0 -4 Q6 -8 6 -2 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
      {/* Middle left - dots */}
      <circle cx="25" cy="200" r="2" fill="#DC6B5A" fillOpacity="0.3" />
      <circle cx="35" cy="210" r="1.5" fill="#DC6B5A" fillOpacity="0.2" />
      <circle cx="20" cy="220" r="2.5" fill="#DC6B5A" fillOpacity="0.25" />
      {/* Top middle - small cloud */}
      <g transform="translate(200, 25)">
        <path d="M0 8 Q-4 8 -4 4 Q-5 0 -1 0 Q1 -3 5 -2 Q9 -3 11 1 Q14 3 12 6 Q14 10 8 9 Q4 12 0 8" fill="#DC6B5A" fillOpacity="0.15" stroke="none" />
      </g>
      {/* Right side - wavy line */}
      <path d="M385 250 Q390 260 385 270 Q380 280 385 290" strokeWidth="1.5" opacity="0.3" />
      {/* Bottom middle - small star */}
      <g transform="translate(180, 420)">
        <path d="M0 -5 L1.5 -1.5 L5 -1.5 L2.5 1 L3.5 5 L0 2.5 L-3.5 5 L-2.5 1 L-5 -1.5 L-1.5 -1.5 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
    </g>
  </svg>
);

// Scattered doodles for What I Look For section
const WhatILookForDoodles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
    <g fill="none" stroke="#DC6B5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
      {/* Top left corner - flower */}
      <g transform="translate(50, 40)">
        <circle cx="0" cy="0" r="5" fill="#DC6B5A" fillOpacity="0.3" />
        <ellipse cx="0" cy="-10" rx="4" ry="6" fill="#DC6B5A" fillOpacity="0.2" />
        <ellipse cx="8" cy="-5" rx="4" ry="6" fill="#DC6B5A" fillOpacity="0.2" transform="rotate(60)" />
        <ellipse cx="-8" cy="-5" rx="4" ry="6" fill="#DC6B5A" fillOpacity="0.2" transform="rotate(-60)" />
      </g>
      {/* Top right - stars cluster */}
      <g transform="translate(720, 50)">
        <path d="M0 -8 L2 -2 L8 -2 L4 2 L5 8 L0 4 L-5 8 L-4 2 L-8 -2 L-2 -2 Z" fill="#DC6B5A" fillOpacity="0.3" />
      </g>
      <g transform="translate(750, 80)">
        <path d="M0 -5 L1.5 -1.5 L5 -1.5 L2.5 1 L3.5 5 L0 2.5 L-3.5 5 L-2.5 1 L-5 -1.5 L-1.5 -1.5 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
      {/* Left side - swirl */}
      <path d="M30 200 Q20 180 40 170 Q60 160 50 190 Q40 210 55 220" strokeWidth="2" />
      {/* Bottom left - heart */}
      <g transform="translate(80, 350)">
        <path d="M0 6 L-10 -4 Q-10 -12 0 -6 Q10 -12 10 -4 Z" fill="#DC6B5A" fillOpacity="0.2" />
      </g>
      {/* Bottom middle - dots trail */}
      <circle cx="300" cy="370" r="2" fill="#DC6B5A" fillOpacity="0.3" />
      <circle cx="320" cy="365" r="1.5" fill="#DC6B5A" fillOpacity="0.25" />
      <circle cx="340" cy="372" r="2.5" fill="#DC6B5A" fillOpacity="0.3" />
      <circle cx="360" cy="368" r="1.5" fill="#DC6B5A" fillOpacity="0.2" />
      {/* Right side - sparkles */}
      <g transform="translate(770, 300)">
        <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#DC6B5A" fillOpacity="0.35" />
      </g>
      {/* Middle top - small cloud */}
      <g transform="translate(400, 30)">
        <path d="M0 10 Q-6 10 -6 5 Q-8 0 -2 0 Q1 -4 7 -2 Q13 -4 15 2 Q20 4 17 8 Q20 13 12 12 Q6 16 0 10" fill="#DC6B5A" fillOpacity="0.1" />
      </g>
      {/* Left middle - squiggle */}
      <path d="M20 280 Q30 270 25 260 Q20 250 30 245 Q40 240 35 230" strokeWidth="1.5" />
      {/* Top middle decorations */}
      <g transform="translate(550, 60)">
        <circle cx="0" cy="0" r="3" fill="#DC6B5A" fillOpacity="0.2" />
        <circle cx="15" cy="5" r="2" fill="#DC6B5A" fillOpacity="0.15" />
        <circle cx="8" cy="12" r="2.5" fill="#DC6B5A" fillOpacity="0.2" />
      </g>
      {/* Bottom right - leaf */}
      <g transform="translate(680, 360)">
        <path d="M0 0 Q10 -10 20 0 Q10 10 0 0" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M0 0 L20 0" strokeWidth="1" />
      </g>
    </g>
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

  // Auto-flip the flipbook every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % storyPages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
                stroke="#DC6B5A"
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
              border: '3px solid #DC6B5A',
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
                {/* Background doodles */}
                <RightPageDoodles />
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
                        color: '#DC6B5A'
                      }}
                    >
                      {currentPage + 1} / {storyPages.length}
                    </span>
                    <h3 className="font-handwriting text-3xl md:text-4xl mb-4 font-bold" style={{ color: '#DC6B5A' }}>
                      {storyPages[currentPage].title}
                    </h3>
                    <p className="font-sketch text-lg leading-relaxed font-semibold" style={{ color: '#5a4a42' }}>
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
                        backgroundColor: '#DC6B5A'
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
              style={{ background: 'var(--paper-color)', border: '2px solid #DC6B5A' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC6B5A" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(storyPages.length - 1, prev + 1))}
              disabled={currentPage === storyPages.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors z-20"
              style={{ background: 'var(--paper-color)', border: '2px solid #DC6B5A' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC6B5A" strokeWidth="2.5">
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
              border: '3px solid #DC6B5A',
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

            {/* Background doodles */}
            <WhatILookForDoodles />

            <div className="p-8 md:p-10 relative z-10">
              {/* Title */}
              <h3 className="font-handwriting text-3xl md:text-4xl mb-8" style={{ color: '#DC6B5A' }}>
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
                            color: '#DC6B5A',
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
                      border: '2px solid #DC6B5A',
                      color: '#DC6B5A',
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
                    style={{ border: '3px solid #DC6B5A' }}
                  >
                    <CuteSceneIllustration fillLevel={fillPercentage} />
                  </div>

                  {/* Celebration popup with GIF */}
                  <AnimatePresence>
                    {showCelebration && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-[320px]"
                      >
                        <div
                          className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                          style={{ border: '4px solid #DC6B5A' }}
                        >
                          {/* GIF image - "We have much to discuss" style */}
                          <div className="relative w-full aspect-video bg-gradient-to-b from-teal-500 to-teal-700 overflow-hidden">
                            {/* Stylized character silhouette */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg viewBox="0 0 200 120" className="w-full h-full">
                                {/* Teal gradient background */}
                                <defs>
                                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#14b8a6" />
                                    <stop offset="100%" stopColor="#0d9488" />
                                  </linearGradient>
                                </defs>
                                <rect fill="url(#bgGrad)" width="200" height="120" />
                                {/* Character with beard silhouette */}
                                <ellipse cx="100" cy="85" rx="35" ry="30" fill="#8B4513" opacity="0.9" />
                                <circle cx="100" cy="50" r="25" fill="#D2691E" />
                                {/* Hair */}
                                <ellipse cx="100" cy="35" rx="28" ry="15" fill="#1a1a1a" />
                                <ellipse cx="75" cy="55" rx="8" ry="15" fill="#1a1a1a" />
                                <ellipse cx="125" cy="55" rx="8" ry="15" fill="#1a1a1a" />
                                {/* Eyes */}
                                <circle cx="90" cy="48" r="3" fill="#1a1a1a" />
                                <circle cx="110" cy="48" r="3" fill="#1a1a1a" />
                                {/* Beard */}
                                <path d="M85 60 Q100 80 115 60 Q120 75 100 85 Q80 75 85 60" fill="#1a1a1a" />
                                {/* Sweater pattern */}
                                <path d="M70 85 Q100 75 130 85 L135 110 L65 110 Z" fill="#D4A017" />
                                <path d="M75 90 L80 100" stroke="#B8860B" strokeWidth="2" />
                                <path d="M85 88 L88 98" stroke="#B8860B" strokeWidth="2" />
                                <path d="M115 88 L112 98" stroke="#B8860B" strokeWidth="2" />
                                <path d="M125 90 L120 100" stroke="#B8860B" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                          {/* Caption */}
                          <div className="p-4 text-center bg-black">
                            <p className="font-sketch text-white text-lg">We have much to discuss.</p>
                          </div>
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
                background: '#FFFFFF',
                border: "2px solid #DC6B5A",
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, rgba(199, 93, 74, 0.15) 31px, rgba(199, 93, 74, 0.15) 32px)",
              }}
            >
              <NotebookSpiral />
              <WashiTape className="-top-3 left-8" rotation={-3} color="#DC6B5A" />

              <div className="flex items-center gap-3 mb-4">
                <GraduationCapIcon size={32} className="text-[#DC6B5A]" />
                <h3 className="font-marker text-2xl click-wiggle" style={{ color: '#DC6B5A' }}>Education</h3>
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
                <p className="flex items-center gap-2 font-semibold" style={{ color: '#DC6B5A' }}>
                  <StarDoodle size={20} color="#DC6B5A" filled />
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
                background: '#FFFFFF',
                border: "3px solid #DC6B5A",
              }}
            >
              <WashiTape className="-top-3 right-8" rotation={5} pattern="dots" color="#DC6B5A" />

              <div className="flex items-center gap-3 mb-6">
                <TrophyIcon size={32} className="text-[#DC6B5A]" />
                <h3 className="font-marker text-2xl click-wiggle" style={{ color: '#DC6B5A' }}>Honors & Awards</h3>
              </div>

              <div className="space-y-5">
                {/* Stamps Scholarship */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md relative overflow-hidden"
                  style={{ background: 'rgba(199, 93, 74, 0.1)', border: "2px solid #DC6B5A" }}
                >
                  <div className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl" style={{ background: '#DC6B5A', color: 'white' }}>
                    MOST PRESTIGIOUS
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon size={24} className="text-[#DC6B5A] flex-shrink-0 mt-1" />
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
                    <StarDoodle size={24} color="#DC6B5A" filled className="flex-shrink-0 mt-1" />
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
                    <StarDoodle size={24} color="#DC6B5A" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-marker text-lg" style={{ color: '#5a4a42' }}>
                          President&apos;s Honor Roll
                        </p>
                        <span className="text-white text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#DC6B5A' }}>
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
