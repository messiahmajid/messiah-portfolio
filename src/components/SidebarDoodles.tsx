"use client";

import React from "react";
import { motion } from "framer-motion";

// Japanese/Asian-inspired detailed doodle icons for sidebar boxes
// Based on the reference image with intricate stamp-like designs

const AsianCharacterDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    {/* Japanese-style character stamp */}
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    <path d="M12 10 L18 8 L24 10" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 8 L18 16" stroke="#1A1A1A" strokeWidth="1.5" />
    <path d="M10 14 L26 14" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 18 L12 26 Q18 30 24 26 L24 18" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 21 L21 21" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M18 18 L18 24" stroke="#1A1A1A" strokeWidth="1" />
  </svg>
);

const BirdOnBranchDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Branch */}
    <path d="M6 24 Q18 20 30 24" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 21 Q22 18 25 19" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    {/* Bird body */}
    <ellipse cx="14" cy="17" rx="5" ry="4" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Bird head */}
    <circle cx="18" cy="14" r="3" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Eye */}
    <circle cx="19" cy="13" r="0.8" fill="#1A1A1A" />
    {/* Beak */}
    <path d="M21 14 L24 13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Tail */}
    <path d="M9 17 L6 15" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 17 L6 19" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Legs */}
    <path d="M13 21 L13 24" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M15 21 L15 24" stroke="#1A1A1A" strokeWidth="1" />
    {/* Leaves */}
    <ellipse cx="26" cy="18" rx="2" ry="4" stroke="#1A1A1A" strokeWidth="1" transform="rotate(-20 26 18)" />
    <ellipse cx="8" cy="20" rx="2" ry="3" stroke="#1A1A1A" strokeWidth="1" transform="rotate(30 8 20)" />
  </svg>
);

const OwlDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Body */}
    <path d="M10 28 L10 18 Q10 10 18 10 Q26 10 26 18 L26 28" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Eyes */}
    <circle cx="13" cy="16" r="3" stroke="#1A1A1A" strokeWidth="1.5" />
    <circle cx="23" cy="16" r="3" stroke="#1A1A1A" strokeWidth="1.5" />
    <circle cx="13" cy="16" r="1.2" fill="#1A1A1A" />
    <circle cx="23" cy="16" r="1.2" fill="#1A1A1A" />
    {/* Beak */}
    <path d="M18 18 L16 21 L18 22 L20 21 Z" stroke="#1A1A1A" strokeWidth="1" fill="none" />
    {/* Ear tufts */}
    <path d="M10 12 L8 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M26 12 L28 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Chest pattern */}
    <path d="M14 24 Q18 26 22 24" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <path d="M15 27 Q18 28 21 27" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    {/* Branch */}
    <path d="M8 28 L28 28" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 28 Q4 26 6 24" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M30 28 Q32 26 30 24" stroke="#1A1A1A" strokeWidth="1" />
  </svg>
);

const DiamondFlowerDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    {/* Rotated diamond frame */}
    <rect x="6" y="6" width="24" height="24" stroke="#1A1A1A" strokeWidth="1.5" transform="rotate(45 18 18)" />
    {/* Center flower */}
    <circle cx="18" cy="18" r="3" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Petals */}
    <ellipse cx="18" cy="11" rx="2" ry="3" stroke="#1A1A1A" strokeWidth="1" />
    <ellipse cx="18" cy="25" rx="2" ry="3" stroke="#1A1A1A" strokeWidth="1" />
    <ellipse cx="11" cy="18" rx="3" ry="2" stroke="#1A1A1A" strokeWidth="1" />
    <ellipse cx="25" cy="18" rx="3" ry="2" stroke="#1A1A1A" strokeWidth="1" />
    {/* Diagonal petals */}
    <ellipse cx="13" cy="13" rx="2" ry="2.5" stroke="#1A1A1A" strokeWidth="1" transform="rotate(-45 13 13)" />
    <ellipse cx="23" cy="13" rx="2" ry="2.5" stroke="#1A1A1A" strokeWidth="1" transform="rotate(45 23 13)" />
    <ellipse cx="13" cy="23" rx="2" ry="2.5" stroke="#1A1A1A" strokeWidth="1" transform="rotate(45 13 23)" />
    <ellipse cx="23" cy="23" rx="2" ry="2.5" stroke="#1A1A1A" strokeWidth="1" transform="rotate(-45 23 23)" />
  </svg>
);

const FynbosPlantDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Stem */}
    <path d="M18 30 L18 12" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Protea-like flower */}
    <ellipse cx="18" cy="10" rx="6" ry="4" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Petals radiating */}
    <path d="M12 10 Q10 6 12 4" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <path d="M15 8 Q14 4 16 2" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <path d="M18 7 L18 2" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <path d="M21 8 Q22 4 20 2" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <path d="M24 10 Q26 6 24 4" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M18 20 Q10 18 8 22" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 24 Q26 22 28 26" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Leaf veins */}
    <path d="M18 20 L12 19" stroke="#1A1A1A" strokeWidth="0.5" />
    <path d="M18 24 L24 23" stroke="#1A1A1A" strokeWidth="0.5" />
  </svg>
);

const CursorDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Cursor arrow */}
    <path d="M10 8 L10 26 L15 21 L20 28 L23 26 L18 19 L24 19 Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Click circles */}
    <circle cx="28" cy="10" r="2" stroke="#1A1A1A" strokeWidth="1" />
    <circle cx="28" cy="10" r="4" stroke="#1A1A1A" strokeWidth="0.8" strokeDasharray="2 2" />
  </svg>
);

const DecorativeBowlDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Bowl */}
    <path d="M8 16 Q8 28 18 28 Q28 28 28 16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bowl decorative band */}
    <path d="M8 18 Q18 20 28 18" stroke="#1A1A1A" strokeWidth="1" />
    {/* Contents/decoration */}
    <circle cx="14" cy="14" r="2" stroke="#1A1A1A" strokeWidth="1" />
    <circle cx="22" cy="14" r="2" stroke="#1A1A1A" strokeWidth="1" />
    <circle cx="18" cy="12" r="2" stroke="#1A1A1A" strokeWidth="1" />
    {/* Pattern around */}
    <circle cx="18" cy="22" r="1" fill="#1A1A1A" />
    <circle cx="14" cy="24" r="0.8" fill="#1A1A1A" />
    <circle cx="22" cy="24" r="0.8" fill="#1A1A1A" />
    {/* Stand */}
    <path d="M14 28 L14 30 L22 30 L22 28" stroke="#1A1A1A" strokeWidth="1.5" />
  </svg>
);

const FishDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Fish body */}
    <ellipse cx="18" cy="18" rx="10" ry="6" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Eye */}
    <circle cx="24" cy="17" r="1.5" fill="#1A1A1A" />
    {/* Mouth */}
    <path d="M28 18 L30 17 L28 19" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    {/* Tail */}
    <path d="M8 18 L4 14 L4 22 Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Fins */}
    <path d="M18 12 Q20 8 22 12" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <path d="M16 24 Q18 28 20 24" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    {/* Scales pattern */}
    <path d="M12 16 Q14 15 16 16" stroke="#1A1A1A" strokeWidth="0.8" />
    <path d="M14 18 Q16 17 18 18" stroke="#1A1A1A" strokeWidth="0.8" />
    <path d="M12 20 Q14 19 16 20" stroke="#1A1A1A" strokeWidth="0.8" />
    {/* Bubbles */}
    <circle cx="31" cy="12" r="1" stroke="#1A1A1A" strokeWidth="0.8" />
    <circle cx="32" cy="16" r="0.8" stroke="#1A1A1A" strokeWidth="0.8" />
  </svg>
);

const CircularPatternDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Outer circle */}
    <circle cx="18" cy="18" r="12" stroke="#1A1A1A" strokeWidth="1" />
    {/* Inner circles */}
    <circle cx="18" cy="18" r="8" stroke="#1A1A1A" strokeWidth="1" />
    <circle cx="18" cy="18" r="4" stroke="#1A1A1A" strokeWidth="1" />
    <circle cx="18" cy="18" r="1.5" fill="#1A1A1A" />
    {/* Radial lines */}
    <path d="M18 6 L18 10" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M18 26 L18 30" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M6 18 L10 18" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M26 18 L30 18" stroke="#1A1A1A" strokeWidth="1" />
    {/* Diagonal lines */}
    <path d="M9.5 9.5 L12.3 12.3" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M26.5 9.5 L23.7 12.3" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M9.5 26.5 L12.3 23.7" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M26.5 26.5 L23.7 23.7" stroke="#1A1A1A" strokeWidth="1" />
    {/* Dots */}
    <circle cx="18" cy="14" r="1" fill="#1A1A1A" />
    <circle cx="18" cy="22" r="1" fill="#1A1A1A" />
    <circle cx="14" cy="18" r="1" fill="#1A1A1A" />
    <circle cx="22" cy="18" r="1" fill="#1A1A1A" />
  </svg>
);

const BranchLeavesDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Main branch */}
    <path d="M6 30 Q18 20 30 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Leaves */}
    <ellipse cx="10" cy="24" rx="3" ry="5" stroke="#1A1A1A" strokeWidth="1" transform="rotate(-30 10 24)" />
    <path d="M10 24 L8 22" stroke="#1A1A1A" strokeWidth="0.5" />
    <ellipse cx="16" cy="18" rx="3" ry="5" stroke="#1A1A1A" strokeWidth="1" transform="rotate(-40 16 18)" />
    <path d="M16 18 L14 15" stroke="#1A1A1A" strokeWidth="0.5" />
    <ellipse cx="22" cy="14" rx="3" ry="4" stroke="#1A1A1A" strokeWidth="1" transform="rotate(-45 22 14)" />
    <path d="M22 14 L20 11" stroke="#1A1A1A" strokeWidth="0.5" />
    <ellipse cx="27" cy="10" rx="2.5" ry="4" stroke="#1A1A1A" strokeWidth="1" transform="rotate(-50 27 10)" />
    {/* Small buds */}
    <circle cx="8" cy="27" r="1.5" stroke="#1A1A1A" strokeWidth="1" />
    <circle cx="30" cy="6" r="1.5" stroke="#1A1A1A" strokeWidth="1" />
  </svg>
);

const MoonStarsDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Crescent moon */}
    <path d="M12 8 Q8 18 12 28 Q22 24 22 18 Q22 12 12 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Decorative swirl inside moon */}
    <path d="M14 14 Q16 16 14 20 Q12 22 14 24" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    {/* Stars */}
    <path d="M26 10 L27 12 L29 12 L27.5 13.5 L28 16 L26 14.5 L24 16 L24.5 13.5 L23 12 L25 12 Z" fill="#1A1A1A" />
    <path d="M28 22 L28.5 23 L30 23 L29 24 L29.5 25.5 L28 24.5 L26.5 25.5 L27 24 L26 23 L27.5 23 Z" fill="#1A1A1A" />
    <circle cx="24" cy="28" r="1" fill="#1A1A1A" />
    <circle cx="30" cy="18" r="0.8" fill="#1A1A1A" />
  </svg>
);

const JuiceBoxDoodle = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="2" y="2" width="32" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Box body */}
    <rect x="10" y="12" width="16" height="20" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
    {/* Straw */}
    <path d="M20 12 L20 6 Q20 4 22 4 L24 4" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Label area */}
    <rect x="12" y="18" width="12" height="10" rx="1" stroke="#1A1A1A" strokeWidth="1" />
    {/* Fruit icon */}
    <circle cx="18" cy="22" r="3" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M18 19 Q20 17 22 19" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    {/* Top fold */}
    <path d="M10 14 L26 14" stroke="#1A1A1A" strokeWidth="1" />
    <path d="M18 12 L18 14" stroke="#1A1A1A" strokeWidth="1" />
  </svg>
);

// All doodle components array
const doodleComponents = [
  AsianCharacterDoodle,
  DecorativeBowlDoodle,
  CursorDoodle,
  FynbosPlantDoodle,
  OwlDoodle,
  DiamondFlowerDoodle,
  BranchLeavesDoodle,
  FishDoodle,
  AsianCharacterDoodle,
  CircularPatternDoodle,
  BirdOnBranchDoodle,
  FynbosPlantDoodle,
  MoonStarsDoodle,
  JuiceBoxDoodle,
];

interface SidebarDoodlesProps {
  position: "left" | "right";
  count?: number;
}

export default function SidebarDoodles({ position, count = 12 }: SidebarDoodlesProps) {
  // Select different doodles based on position
  const startIndex = position === "left" ? 0 : 7;
  const doodles = Array.from({ length: count }, (_, i) => {
    const DoodleComponent = doodleComponents[(startIndex + i) % doodleComponents.length];
    return { Component: DoodleComponent, id: i };
  });

  return (
    <div className={`sidebar-doodles sidebar-${position}`}>
      {doodles.map((doodle, index) => (
        <motion.div
          key={doodle.id}
          className="doodle-box"
          initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.4,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.1,
            rotate: position === "left" ? -5 : 5,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2.5 + (index % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <doodle.Component />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
