"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon } from "./DoodleIcons";
import Image from "next/image";

// Story pages data - now using images instead of SVG components
const storyPages = [
  {
    id: 1,
    title: "Where It Started",
    content: "I'm an international student from Accra, Ghana. Growing up, I was always curious about how things work - from the patterns in nature to the logic in machines.",
    image: "/images/flipbook/journey-doodle.png",
    accentColor: "#DC6B5A",
  },
  {
    id: 2,
    title: "What Fascinates Me",
    content: "I'm fascinated by how data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
    image: "/images/flipbook/tech-doodle.png",
    accentColor: "#DC6B5A",
  },
  {
    id: 3,
    title: "My Approach",
    content: "At the University of Miami, I'm combining Mathematics, Computer Science, and Biology. Math sharpens my understanding, CS equips me to build tools, and Biology connects it all to living systems.",
    image: "/images/flipbook/study-doodle.png",
    accentColor: "#DC6B5A",
  },
  {
    id: 4,
    title: "Beyond The Books",
    content: "I love volunteering and giving back to my community. Whether it's tutoring, organizing events, or mentoring - service is a core part of who I am.",
    image: "/images/flipbook/service-doodle.png",
    accentColor: "#DC6B5A",
  },
];

// Cute scene illustration for "What I look for" - detailed with many elements and varied colors
const CuteSceneIllustration = ({ fillLevel }: { fillLevel: number }) => (
  <svg viewBox="0 0 280 280" className="w-full h-full">
    <defs>
      <clipPath id="fillClip">
        <rect x="0" y={280 - (280 * fillLevel / 100)} width="280" height={280 * fillLevel / 100} />
      </clipPath>
    </defs>

    {/* Background elements - always visible */}
    <g fill="none" stroke="#5BA3D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
      {/* Landscape outline */}
      <path d="M0 240 Q70 200 140 220 Q210 240 280 210 L280 280 L0 280 Z" />
      {/* Leaves scattered */}
      <ellipse cx="20" cy="120" rx="8" ry="15" transform="rotate(-20 20 120)" />
      <ellipse cx="260" cy="100" rx="10" ry="18" transform="rotate(15 260 100)" />
      <ellipse cx="250" cy="60" rx="6" ry="12" transform="rotate(-30 250 60)" />
      {/* More background elements */}
      <circle cx="140" cy="30" r="4" />
      <path d="M100 20 Q110 15 120 22" strokeWidth="1" />
      <path d="M200 40 Q210 35 220 42" strokeWidth="1" />
    </g>

    {/* Filled version - clips based on fill level */}
    <g clipPath="url(#fillClip)">
      <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground/landscape - teal green */}
        <path d="M0 240 Q70 200 140 220 Q210 240 280 210 L280 280 L0 280 Z" fill="#4ecdc4" fillOpacity="0.2" stroke="#4ecdc4" />

        {/* Left bush with flowers - varied colors */}
        <g transform="translate(10, 200)">
          <path d="M0 40 Q-10 20 10 15 Q5 0 25 5 Q40 -5 45 15 Q60 10 55 30 Q70 45 50 50 Q30 60 10 50 Q-10 55 0 40" fill="#4ecdc4" fillOpacity="0.25" stroke="#4ecdc4" strokeWidth="1.5" />
          {/* Small flowers in coral */}
          <circle cx="20" cy="25" r="5" fill="#DC6B5A" fillOpacity="0.5" stroke="#DC6B5A" />
          <circle cx="35" cy="20" r="4" fill="#5BA3D0" fillOpacity="0.45" stroke="#5BA3D0" />
          <circle cx="15" cy="35" r="4" fill="#DC6B5A" fillOpacity="0.4" stroke="#DC6B5A" />
          <circle cx="45" cy="35" r="3" fill="#5BA3D0" fillOpacity="0.4" stroke="#5BA3D0" />
        </g>

        {/* Right bush - teal */}
        <g transform="translate(200, 180)">
          <path d="M0 50 Q-15 30 15 20 Q10 0 35 10 Q55 -5 60 20 Q80 15 75 40 Q90 55 65 60 Q40 70 15 60 Q-10 65 0 50" fill="#4ecdc4" fillOpacity="0.25" stroke="#4ecdc4" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="5" fill="#DC6B5A" fillOpacity="0.5" stroke="#DC6B5A" />
          <circle cx="50" cy="25" r="4" fill="#5BA3D0" fillOpacity="0.4" stroke="#5BA3D0" />
          <circle cx="20" cy="40" r="3" fill="#DC6B5A" fillOpacity="0.4" stroke="#DC6B5A" />
        </g>

        {/* Main character - person holding sign */}
        <g transform="translate(100, 90)">
          {/* Sign/board being held - blue accent */}
          <rect x="25" y="-20" width="40" height="55" rx="5" fill="white" fillOpacity="0.9" stroke="#5BA3D0" strokeWidth="2" />
          <path d="M35 5 L55 5" stroke="#5BA3D0" strokeWidth="1.5" />
          <path d="M35 15 L55 15" stroke="#DC6B5A" strokeWidth="1.5" />
          <path d="M35 25 L50 25" stroke="#4ecdc4" strokeWidth="1.5" />

          {/* Body - coral shirt */}
          <ellipse cx="40" cy="80" rx="20" ry="25" fill="#DC6B5A" fillOpacity="0.25" stroke="#DC6B5A" strokeWidth="2" />
          {/* Head */}
          <circle cx="40" cy="45" r="20" fill="#D2B48C" fillOpacity="0.3" stroke="#8B7355" strokeWidth="2" />
          {/* Hair/curls - dark */}
          <path d="M22 40 Q18 30 25 25 Q35 18 45 25 Q55 20 58 30 Q62 40 55 45" strokeWidth="2" fill="#333" fillOpacity="0.4" stroke="#333" />
          {/* Face */}
          <circle cx="33" cy="43" r="2.5" fill="#333" />
          <circle cx="47" cy="43" r="2.5" fill="#333" />
          <path d="M35 52 Q40 57 45 52" stroke="#333" strokeWidth="2" />
          {/* Rosy cheeks */}
          <circle cx="28" cy="48" r="3" fill="#DC6B5A" fillOpacity="0.3" stroke="none" />
          <circle cx="52" cy="48" r="3" fill="#DC6B5A" fillOpacity="0.3" stroke="none" />
          {/* Ears */}
          <circle cx="20" cy="45" r="4" fill="#D2B48C" fillOpacity="0.2" stroke="#8B7355" strokeWidth="1.5" />
          <circle cx="60" cy="45" r="4" fill="#D2B48C" fillOpacity="0.2" stroke="#8B7355" strokeWidth="1.5" />
          {/* Arms holding sign */}
          <path d="M20 65 Q15 50 25 35" stroke="#D2B48C" strokeWidth="2.5" />
          <path d="M60 65 Q65 50 55 35" stroke="#D2B48C" strokeWidth="2.5" />
          {/* Legs - blue pants */}
          <path d="M30 102 L25 130" stroke="#5BA3D0" strokeWidth="4" />
          <path d="M50 102 L55 130" stroke="#5BA3D0" strokeWidth="4" />
        </g>

        {/* Cute animal - small lamb/goat on right - teal */}
        <g transform="translate(200, 140)">
          <ellipse cx="30" cy="35" rx="20" ry="15" fill="#f5f5f5" fillOpacity="0.6" stroke="#5BA3D0" strokeWidth="1.5" />
          <circle cx="45" cy="25" r="12" fill="#f5f5f5" fillOpacity="0.6" stroke="#5BA3D0" strokeWidth="1.5" />
          {/* Curly wool texture */}
          <circle cx="20" cy="32" r="4" fill="#f5f5f5" fillOpacity="0.5" stroke="#5BA3D0" strokeWidth="0.5" />
          <circle cx="30" cy="28" r="3" fill="#f5f5f5" fillOpacity="0.5" stroke="#5BA3D0" strokeWidth="0.5" />
          <circle cx="38" cy="32" r="3" fill="#f5f5f5" fillOpacity="0.5" stroke="#5BA3D0" strokeWidth="0.5" />
          {/* Ear - pink */}
          <ellipse cx="55" cy="18" rx="6" ry="4" fill="#DC6B5A" fillOpacity="0.3" stroke="#DC6B5A" strokeWidth="1" transform="rotate(30 55 18)" />
          {/* Eye */}
          <circle cx="50" cy="24" r="2" fill="#333" />
          {/* Nose - coral */}
          <ellipse cx="56" cy="28" rx="2" ry="1.5" fill="#DC6B5A" fillOpacity="0.6" stroke="#DC6B5A" />
          {/* Legs */}
          <path d="M18 48 L18 60" stroke="#5BA3D0" strokeWidth="2" />
          <path d="M28 48 L28 60" stroke="#5BA3D0" strokeWidth="2" />
          <path d="M35 48 L35 58" stroke="#5BA3D0" strokeWidth="2" />
          <path d="M42 46 L44 56" stroke="#5BA3D0" strokeWidth="2" />
          {/* Bell - coral */}
          <circle cx="38" cy="38" r="4" fill="#DC6B5A" fillOpacity="0.4" stroke="#DC6B5A" strokeWidth="1" />
        </g>

        {/* Large flower on left - coral center, teal petals */}
        <g transform="translate(30, 150)">
          <path d="M15 80 L15 40" stroke="#4ecdc4" strokeWidth="2.5" />
          {/* Petals in varied colors */}
          <circle cx="15" cy="15" r="9" fill="#5BA3D0" fillOpacity="0.35" stroke="#5BA3D0" strokeWidth="1" />
          <circle cx="3" cy="27" r="8" fill="#4ecdc4" fillOpacity="0.35" stroke="#4ecdc4" strokeWidth="1" />
          <circle cx="27" cy="27" r="8" fill="#5BA3D0" fillOpacity="0.35" stroke="#5BA3D0" strokeWidth="1" />
          <circle cx="6" cy="42" r="7" fill="#4ecdc4" fillOpacity="0.35" stroke="#4ecdc4" strokeWidth="1" />
          <circle cx="24" cy="42" r="7" fill="#5BA3D0" fillOpacity="0.35" stroke="#5BA3D0" strokeWidth="1" />
          {/* Center - coral */}
          <circle cx="15" cy="30" r="7" fill="#DC6B5A" fillOpacity="0.6" stroke="#DC6B5A" strokeWidth="1.5" />
          {/* Stamens */}
          <circle cx="12" cy="28" r="1.5" fill="#333" />
          <circle cx="18" cy="28" r="1.5" fill="#333" />
          <circle cx="15" cy="33" r="1.5" fill="#333" />
          {/* Leaves on stem - teal */}
          <ellipse cx="6" cy="60" rx="7" ry="12" fill="#4ecdc4" fillOpacity="0.3" stroke="#4ecdc4" strokeWidth="1" transform="rotate(-20 6 60)" />
          <ellipse cx="24" cy="70" rx="6" ry="10" fill="#4ecdc4" fillOpacity="0.3" stroke="#4ecdc4" strokeWidth="1" transform="rotate(25 24 70)" />
        </g>

        {/* Butterfly - near flower */}
        <g transform="translate(60, 130)">
          <ellipse cx="0" cy="0" rx="8" ry="5" fill="#5BA3D0" fillOpacity="0.4" stroke="#5BA3D0" transform="rotate(-30)" />
          <ellipse cx="8" cy="5" rx="6" ry="4" fill="#DC6B5A" fillOpacity="0.4" stroke="#DC6B5A" transform="rotate(30)" />
          <path d="M4 2 L4 10" stroke="#333" strokeWidth="1" />
          <path d="M2 0 Q0 -5 -2 -3" stroke="#333" strokeWidth="0.5" />
          <path d="M6 0 Q8 -5 10 -3" stroke="#333" strokeWidth="0.5" />
        </g>

        {/* Small mouse/creature at bottom - light gray with coral ear */}
        <g transform="translate(170, 250)">
          <ellipse cx="15" cy="12" rx="12" ry="8" fill="#ddd" fillOpacity="0.5" stroke="#999" strokeWidth="1.5" />
          <circle cx="25" cy="8" r="6" fill="#ddd" fillOpacity="0.5" stroke="#999" strokeWidth="1.5" />
          {/* Ears - coral */}
          <circle cx="22" cy="2" r="3.5" fill="#DC6B5A" fillOpacity="0.4" stroke="#DC6B5A" strokeWidth="1" />
          <circle cx="30" cy="4" r="3.5" fill="#DC6B5A" fillOpacity="0.4" stroke="#DC6B5A" strokeWidth="1" />
          {/* Eye */}
          <circle cx="27" cy="7" r="1.5" fill="#333" />
          {/* Nose - coral */}
          <circle cx="31" cy="9" r="1" fill="#DC6B5A" />
          {/* Whiskers */}
          <path d="M30 10 L38 8" stroke="#999" strokeWidth="0.5" />
          <path d="M30 11 L38 12" stroke="#999" strokeWidth="0.5" />
          {/* Tail */}
          <path d="M3 12 Q-5 5 -2 0" stroke="#999" strokeWidth="1.5" />
        </g>

        {/* Grass tufts - teal */}
        <g transform="translate(80, 260)" stroke="#4ecdc4">
          <path d="M0 0 Q2 -15 5 -22 Q8 -15 10 0" strokeWidth="1.5" />
          <path d="M8 0 Q12 -12 15 -20 Q18 -12 20 0" strokeWidth="1.5" />
          <path d="M-5 0 Q-2 -10 0 -15 Q3 -10 5 0" strokeWidth="1.5" />
        </g>
        <g transform="translate(150, 255)" stroke="#4ecdc4">
          <path d="M0 0 Q3 -10 6 -18 Q9 -10 12 0" strokeWidth="1.5" />
          <path d="M10 0 Q14 -8 17 -14 Q20 -8 22 0" strokeWidth="1.5" />
        </g>
        <g transform="translate(230, 260)" stroke="#4ecdc4">
          <path d="M0 0 Q2 -12 5 -17 Q8 -12 10 0" strokeWidth="1.5" />
        </g>

        {/* Decorative leaves top - teal */}
        <g transform="translate(0, 50)">
          <ellipse cx="20" cy="30" rx="12" ry="25" fill="#4ecdc4" fillOpacity="0.25" stroke="#4ecdc4" strokeWidth="1.5" transform="rotate(-30 20 30)" />
          <path d="M20 30 L10 15" stroke="#4ecdc4" strokeWidth="1" />
          <ellipse cx="5" cy="60" rx="10" ry="20" fill="#5BA3D0" fillOpacity="0.22" stroke="#5BA3D0" strokeWidth="1.5" transform="rotate(-15 5 60)" />
        </g>

        {/* Top right decorative leaves - teal */}
        <g transform="translate(240, 20)">
          <ellipse cx="20" cy="40" rx="15" ry="30" fill="#4ecdc4" fillOpacity="0.25" stroke="#4ecdc4" strokeWidth="1.5" transform="rotate(20 20 40)" />
          <path d="M20 40 L30 20" stroke="#4ecdc4" strokeWidth="1" />
          <ellipse cx="35" cy="70" rx="12" ry="22" fill="#5BA3D0" fillOpacity="0.22" stroke="#5BA3D0" strokeWidth="1.5" transform="rotate(35 35 70)" />
        </g>

        {/* Sun in corner - coral */}
        <g transform="translate(250, 25)">
          <circle cx="0" cy="0" r="12" fill="#DC6B5A" fillOpacity="0.4" stroke="#DC6B5A" strokeWidth="1.5" />
          <path d="M0 -18 L0 -22" stroke="#DC6B5A" strokeWidth="2" />
          <path d="M13 -13 L16 -16" stroke="#DC6B5A" strokeWidth="2" />
          <path d="M18 0 L22 0" stroke="#DC6B5A" strokeWidth="2" />
          <path d="M13 13 L16 16" stroke="#DC6B5A" strokeWidth="2" />
          <path d="M-13 -13 L-16 -16" stroke="#DC6B5A" strokeWidth="2" />
        </g>

        {/* Stars/sparkles - varied colors */}
        <g transform="translate(70, 40)">
          <path d="M0 -10 L2.5 -3 L10 -3 L4 2 L6 10 L0 5 L-6 10 L-4 2 L-10 -3 L-2.5 -3 Z" fill="#5BA3D0" fillOpacity="0.5" stroke="#5BA3D0" />
        </g>
        <g transform="translate(220, 130)">
          <path d="M0 -7 L2 -2 L7 -2 L3 1.5 L4 7 L0 4 L-4 7 L-3 1.5 L-7 -2 L-2 -2 Z" fill="#DC6B5A" fillOpacity="0.45" stroke="#DC6B5A" />
        </g>
        <g transform="translate(50, 120)">
          <path d="M0 -6 L1.5 -1.5 L6 -1.5 L2.5 1 L3.5 6 L0 3 L-3.5 6 L-2.5 1 L-6 -1.5 L-1.5 -1.5 Z" fill="#4ecdc4" fillOpacity="0.4" stroke="#4ecdc4" />
        </g>
        <g transform="translate(160, 60)">
          <path d="M0 -5 L1 -1 L5 -1 L2 1 L3 5 L0 2.5 L-3 5 L-2 1 L-5 -1 L-1 -1 Z" fill="#5BA3D0" fillOpacity="0.35" stroke="#5BA3D0" />
        </g>

        {/* Small clouds */}
        <g transform="translate(100, 20)">
          <path d="M0 8 Q-5 8 -5 4 Q-7 0 -2 0 Q0 -4 6 -2 Q12 -4 14 2 Q18 4 15 7 Q18 11 10 10 Q5 14 0 8" fill="white" fillOpacity="0.6" stroke="#5BA3D0" strokeWidth="1" />
        </g>
        <g transform="translate(180, 35)">
          <path d="M0 6 Q-4 6 -4 3 Q-5 0 -1 0 Q0 -3 4 -1 Q8 -3 10 1 Q13 3 11 5 Q13 8 7 7 Q3 10 0 6" fill="white" fillOpacity="0.5" stroke="#5BA3D0" strokeWidth="0.8" />
        </g>
      </g>
    </g>
  </svg>
);

// What I'm Looking For items - no emojis, simpler labels
const lookingForItems = [
  { id: 1, label: "Impactful work" },
  { id: 2, label: "Meaningful projects" },
  { id: 3, label: "Diverse team of talented folks" },
];

// Animated handwritten checkmark component with fill effect
const HandwrittenCheck = ({ isChecked }: { isChecked: boolean }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0">
    {/* Background fill when checked */}
    <motion.rect
      x="3"
      y="3"
      width="26"
      height="26"
      rx="4"
      fill="#DC6B5A"
      initial={{ opacity: 0 }}
      animate={{ opacity: isChecked ? 0.15 : 0 }}
      transition={{ duration: 0.3 }}
    />
    {/* Border */}
    <rect
      x="3"
      y="3"
      width="26"
      height="26"
      rx="4"
      fill="none"
      stroke="#DC6B5A"
      strokeWidth="3"
    />
    {isChecked && (
      <motion.path
        d="M8 16 L13 21 L24 10"
        fill="none"
        stroke="#DC6B5A"
        strokeWidth="4"
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

// Scattered doodles for What I Look For section - many more elements with varied colors
const WhatILookForDoodles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
    <g fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35">
      {/* Top left corner - flower in teal */}
      <g transform="translate(50, 40)" stroke="#5BA3D0">
        <circle cx="0" cy="0" r="6" fill="#5BA3D0" fillOpacity="0.3" />
        <ellipse cx="0" cy="-12" rx="5" ry="8" fill="#5BA3D0" fillOpacity="0.25" />
        <ellipse cx="10" cy="-6" rx="5" ry="8" fill="#5BA3D0" fillOpacity="0.25" transform="rotate(72)" />
        <ellipse cx="6" cy="10" rx="5" ry="8" fill="#5BA3D0" fillOpacity="0.25" transform="rotate(144)" />
        <ellipse cx="-6" cy="10" rx="5" ry="8" fill="#5BA3D0" fillOpacity="0.25" transform="rotate(216)" />
        <ellipse cx="-10" cy="-6" rx="5" ry="8" fill="#5BA3D0" fillOpacity="0.25" transform="rotate(288)" />
      </g>
      {/* Top right - stars cluster in coral */}
      <g transform="translate(720, 50)" stroke="#DC6B5A">
        <path d="M0 -10 L2.5 -2.5 L10 -2.5 L5 2.5 L6 10 L0 5 L-6 10 L-5 2.5 L-10 -2.5 L-2.5 -2.5 Z" fill="#DC6B5A" fillOpacity="0.35" />
      </g>
      <g transform="translate(750, 85)" stroke="#5BA3D0">
        <path d="M0 -6 L1.5 -1.5 L6 -1.5 L3 1 L4 6 L0 3 L-4 6 L-3 1 L-6 -1.5 L-1.5 -1.5 Z" fill="#5BA3D0" fillOpacity="0.3" />
      </g>
      <g transform="translate(690, 75)" stroke="#4ecdc4">
        <path d="M0 -5 L1 -1 L5 -1 L2 1 L3 5 L0 2.5 L-3 5 L-2 1 L-5 -1 L-1 -1 Z" fill="#4ecdc4" fillOpacity="0.3" />
      </g>
      {/* Left side - decorative vine/swirl in teal */}
      <g stroke="#5BA3D0">
        <path d="M25 180 Q15 160 35 150 Q55 140 45 170 Q35 190 50 200" strokeWidth="2" />
        <circle cx="35" cy="145" r="4" fill="#5BA3D0" fillOpacity="0.25" />
        <circle cx="50" cy="165" r="3" fill="#5BA3D0" fillOpacity="0.2" />
        <path d="M40 155 Q50 150 45 140" strokeWidth="1.5" />
      </g>
      {/* Bottom left - heart in coral */}
      <g transform="translate(80, 350)" stroke="#DC6B5A">
        <path d="M0 8 L-12 -5 Q-12 -15 0 -8 Q12 -15 12 -5 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
      {/* Additional heart nearby */}
      <g transform="translate(120, 340)" stroke="#4ecdc4">
        <path d="M0 5 L-8 -3 Q-8 -10 0 -5 Q8 -10 8 -3 Z" fill="#4ecdc4" fillOpacity="0.2" />
      </g>
      {/* Bottom middle - dots trail in varied colors */}
      <circle cx="280" cy="375" r="3" fill="#DC6B5A" fillOpacity="0.35" stroke="#DC6B5A" />
      <circle cx="300" cy="368" r="2" fill="#5BA3D0" fillOpacity="0.3" stroke="#5BA3D0" />
      <circle cx="320" cy="372" r="2.5" fill="#4ecdc4" fillOpacity="0.3" stroke="#4ecdc4" />
      <circle cx="340" cy="365" r="2" fill="#DC6B5A" fillOpacity="0.25" stroke="#DC6B5A" />
      <circle cx="360" cy="370" r="3" fill="#5BA3D0" fillOpacity="0.3" stroke="#5BA3D0" />
      <circle cx="380" cy="368" r="1.5" fill="#4ecdc4" fillOpacity="0.25" stroke="#4ecdc4" />
      {/* Right side - sparkles in teal */}
      <g transform="translate(770, 280)" stroke="#5BA3D0">
        <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#5BA3D0" fillOpacity="0.4" />
      </g>
      <g transform="translate(755, 320)" stroke="#DC6B5A">
        <path d="M0 -5 L1.5 -1.5 L5 0 L1.5 1.5 L0 5 L-1.5 1.5 L-5 0 L-1.5 -1.5 Z" fill="#DC6B5A" fillOpacity="0.3" />
      </g>
      {/* Middle top - small cloud in light gray/blue */}
      <g transform="translate(380, 30)" stroke="#5BA3D0">
        <path d="M0 12 Q-8 12 -8 6 Q-10 0 -3 0 Q1 -5 9 -3 Q17 -5 19 3 Q25 5 21 10 Q25 16 15 15 Q8 20 0 12" fill="#5BA3D0" fillOpacity="0.12" />
      </g>
      {/* Left middle - wavy lines */}
      <g stroke="#4ecdc4">
        <path d="M20 260 Q35 250 25 240 Q15 230 30 220" strokeWidth="2" />
        <path d="M35 275 Q45 265 40 255" strokeWidth="1.5" />
      </g>
      {/* Top middle decorations - circles in teal */}
      <g transform="translate(550, 55)" stroke="#5BA3D0">
        <circle cx="0" cy="0" r="4" fill="#5BA3D0" fillOpacity="0.25" />
        <circle cx="18" cy="6" r="3" fill="#4ecdc4" fillOpacity="0.2" stroke="#4ecdc4" />
        <circle cx="10" cy="15" r="3.5" fill="#DC6B5A" fillOpacity="0.2" stroke="#DC6B5A" />
      </g>
      {/* Bottom right - decorative leaf in teal */}
      <g transform="translate(680, 355)" stroke="#4ecdc4">
        <path d="M0 0 Q12 -12 24 0 Q12 12 0 0" fill="#4ecdc4" fillOpacity="0.25" />
        <path d="M0 0 L24 0" strokeWidth="1.5" />
        <path d="M6 -3 L6 3" strokeWidth="1" />
        <path d="M12 -5 L12 5" strokeWidth="1" />
        <path d="M18 -3 L18 3" strokeWidth="1" />
      </g>
      {/* Additional leaf */}
      <g transform="translate(720, 370)" stroke="#5BA3D0">
        <path d="M0 0 Q8 -8 16 0 Q8 8 0 0" fill="#5BA3D0" fillOpacity="0.2" />
        <path d="M0 0 L16 0" strokeWidth="1" />
      </g>
      {/* Scattered decorative lines - top area */}
      <g stroke="#DC6B5A" opacity="0.4">
        <path d="M150 50 Q160 45 170 52" strokeWidth="1.5" />
        <path d="M180 45 L195 50" strokeWidth="1.5" />
        <path d="M200 42 Q210 48 220 44" strokeWidth="1.5" />
      </g>
      {/* Right edge decorations */}
      <g stroke="#5BA3D0">
        <path d="M780 180 Q785 170 780 160" strokeWidth="2" />
        <circle cx="778" cy="200" r="3" fill="#5BA3D0" fillOpacity="0.25" />
        <path d="M775 220 Q785 230 780 240" strokeWidth="1.5" />
      </g>
      {/* Middle area scattered elements */}
      <g transform="translate(600, 180)" stroke="#4ecdc4">
        <circle cx="0" cy="0" r="5" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="2" fill="#4ecdc4" fillOpacity="0.3" />
      </g>
      <g transform="translate(650, 150)" stroke="#DC6B5A">
        <path d="M0 -4 L4 0 L0 4 L-4 0 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
      {/* Left edge - more doodles */}
      <g transform="translate(40, 120)" stroke="#DC6B5A">
        <path d="M0 0 Q10 -5 15 5 Q20 15 10 20" strokeWidth="1.5" />
      </g>
      <g transform="translate(25, 320)" stroke="#5BA3D0">
        <circle cx="0" cy="0" r="4" fill="#5BA3D0" fillOpacity="0.2" />
        <circle cx="12" cy="5" r="3" fill="#4ecdc4" fillOpacity="0.2" stroke="#4ecdc4" />
      </g>
      {/* Top area - more stars */}
      <g transform="translate(250, 45)" stroke="#5BA3D0">
        <path d="M0 -6 L1.5 -1.5 L6 -1.5 L2.5 1 L3.5 6 L0 3 L-3.5 6 L-2.5 1 L-6 -1.5 L-1.5 -1.5 Z" fill="#5BA3D0" fillOpacity="0.25" />
      </g>
      <g transform="translate(480, 60)" stroke="#DC6B5A">
        <path d="M0 -5 L1 -1 L5 -1 L2 1 L3 5 L0 2.5 L-3 5 L-2 1 L-5 -1 L-1 -1 Z" fill="#DC6B5A" fillOpacity="0.2" />
      </g>
      {/* Bottom edge decorations */}
      <g transform="translate(500, 380)" stroke="#4ecdc4">
        <path d="M0 0 Q8 -5 16 0 Q8 5 0 0" fill="#4ecdc4" fillOpacity="0.2" />
      </g>
      <g transform="translate(580, 375)" stroke="#5BA3D0">
        <circle cx="0" cy="0" r="3" fill="#5BA3D0" fillOpacity="0.25" />
        <circle cx="10" cy="-3" r="2" fill="#DC6B5A" fillOpacity="0.2" stroke="#DC6B5A" />
      </g>
      {/* Decorative squiggles throughout */}
      <path d="M450 380 Q460 375 470 382 Q480 388 490 380" stroke="#DC6B5A" strokeWidth="1.5" opacity="0.4" />
      <path d="M200 380 Q210 372 220 378" stroke="#5BA3D0" strokeWidth="1.5" opacity="0.4" />
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

            {/* Book content - with 3D perspective for page flip */}
            <div className="grid md:grid-cols-2 gap-0 min-h-[420px]" style={{ perspective: '1500px' }}>
              {/* Left page - Doodle images with page flip */}
              <div
                className="p-6 md:p-8 relative overflow-hidden"
                style={{
                  borderRight: '2px solid rgba(199, 93, 74, 0.2)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{
                      rotateY: -90,
                      opacity: 0,
                      transformOrigin: 'right center',
                    }}
                    animate={{
                      rotateY: 0,
                      opacity: 1,
                      transformOrigin: 'right center',
                    }}
                    exit={{
                      rotateY: 90,
                      opacity: 0,
                      transformOrigin: 'right center',
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="w-full h-full relative"
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Page shadow during flip */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-10"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0.3 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 30%)',
                      }}
                    />
                    <Image
                      src={storyPages[currentPage].image}
                      alt={storyPages[currentPage].title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right page - Story text with coordinated flip */}
              <div
                className="p-6 md:p-8 relative flex flex-col justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background doodles */}
                <RightPageDoodles />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{
                      rotateY: 90,
                      opacity: 0,
                      transformOrigin: 'left center',
                    }}
                    animate={{
                      rotateY: 0,
                      opacity: 1,
                      transformOrigin: 'left center',
                    }}
                    exit={{
                      rotateY: -90,
                      opacity: 0,
                      transformOrigin: 'left center',
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.1,
                    }}
                    style={{ backfaceVisibility: 'hidden' }}
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

            <div className="p-10 md:p-14 relative z-10">
              {/* Title - LARGER and BOLDER */}
              <h3 className="font-handwriting text-4xl md:text-5xl lg:text-6xl mb-10 font-bold" style={{ color: '#2d2d2d' }}>
                What I look for
              </h3>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Checkboxes with paper lines */}
                <div className="space-y-2">
                  {lookingForItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="relative py-5 cursor-pointer"
                      style={{
                        borderBottom: index < lookingForItems.length - 1 ? '2px dashed rgba(199, 93, 74, 0.3)' : 'none',
                      }}
                      onClick={() => handleCheckboxChange(item.id)}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-5">
                        <HandwrittenCheck isChecked={checkedItems.includes(item.id)} />
                        <span
                          className="font-handwriting text-2xl md:text-3xl font-bold"
                          style={{
                            color: '#2d2d2d',
                            textDecoration: checkedItems.includes(item.id) ? 'line-through' : 'none',
                            opacity: checkedItems.includes(item.id) ? 0.7 : 1,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Let's connect button - LARGER and BOLDER */}
                  <motion.a
                    href="#contact"
                    className="inline-block mt-8 px-10 py-4 font-handwriting text-2xl md:text-3xl font-bold rounded-xl transition-colors"
                    style={{
                      border: '4px solid #DC6B5A',
                      color: '#DC6B5A',
                      background: 'transparent',
                    }}
                    whileHover={{ scale: 1.05, background: 'rgba(199, 93, 74, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    let&apos;s connect!
                  </motion.a>
                </div>

                {/* Stacked images that appear as checkboxes are checked */}
                <div className="relative">
                  <div
                    className="w-full aspect-square max-w-[350px] mx-auto rounded-2xl overflow-hidden relative"
                    style={{ border: '4px solid #DC6B5A' }}
                  >
                    {/* Base image - always visible but faded */}
                    <div className="absolute inset-0">
                      <Image
                        src="/images/what-i-look-for/base.png"
                        alt="Base illustration"
                        fill
                        className="object-cover"
                        style={{ opacity: 0.3 }}
                      />
                    </div>
                    {/* Image 1 - appears when first checkbox is checked */}
                    <AnimatePresence>
                      {checkedItems.length >= 1 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src="/images/what-i-look-for/layer-1.png"
                            alt="First layer"
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Image 2 - appears when second checkbox is checked */}
                    <AnimatePresence>
                      {checkedItems.length >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src="/images/what-i-look-for/layer-2.png"
                            alt="Second layer"
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Image 3 - appears when third checkbox is checked */}
                    <AnimatePresence>
                      {checkedItems.length >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src="/images/what-i-look-for/layer-3.png"
                            alt="Third layer"
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Sliding GIF tray - slides out from bottom of the card like a drawer */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="relative z-10 mx-auto w-full max-w-md overflow-hidden"
              style={{ marginTop: "-24px" }}
            >
              {/* Cover strip to hide the gap */}
              <div
                className="absolute top-0 left-0 right-0 h-8 z-20"
                style={{
                  background: 'var(--paper-color)',
                  borderLeft: '3px solid #DC6B5A',
                  borderRight: '3px solid #DC6B5A',
                }}
              />
              <div
                className="bg-white rounded-b-2xl overflow-hidden shadow-xl pt-6"
                style={{
                  border: '4px solid #DC6B5A',
                  borderTop: 'none',
                }}
              >
                {/* User-provided GIF placeholder */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src="/images/celebration.gif"
                    alt="Celebration"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
                {/* Stamps Scholarship - coral accent */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md relative overflow-hidden"
                  style={{ background: 'rgba(199, 93, 74, 0.08)', border: "2px solid #DC6B5A" }}
                >
                  <div className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl" style={{ background: '#DC6B5A', color: 'white' }}>
                    MOST PRESTIGIOUS
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon size={24} className="text-[#DC6B5A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg" style={{ color: '#3d3d3d' }}>
                        Stamps Excellence Scholarship
                      </p>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#5a5a5a' }}>
                        UM&apos;s most prestigious merit award
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Robert Bates Cole Award - blue accent */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(91, 163, 208, 0.08)', border: "2px solid #5BA3D0" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#5BA3D0" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg" style={{ color: '#3d3d3d' }}>
                        Robert Bates Cole Award
                      </p>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#5a5a5a' }}>
                        For Volunteer Leadership
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* President's Honor Roll - teal accent */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(78, 205, 196, 0.08)', border: "2px solid #4ecdc4" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#4ecdc4" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-marker text-lg" style={{ color: '#3d3d3d' }}>
                          President&apos;s Honor Roll
                        </p>
                        <span className="text-white text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#4ecdc4' }}>
                          5x
                        </span>
                      </div>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#5a5a5a' }}>
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
