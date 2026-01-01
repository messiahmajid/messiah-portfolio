"use client";

import React from "react";
import { motion } from "framer-motion";

// SVG doodle icons for the sidebar boxes
const PlantDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M14 22V12" strokeLinecap="round" />
    <path d="M14 12C14 8 10 6 8 8C10 8 12 10 14 12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 14C14 10 18 8 20 10C18 10 16 12 14 14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 16C14 13 11 12 9 13C11 13 13 15 14 16" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="14" cy="24" rx="4" ry="2" />
  </svg>
);

const FlowerDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <circle cx="14" cy="10" r="3" />
    <circle cx="10" cy="8" r="2.5" />
    <circle cx="18" cy="8" r="2.5" />
    <circle cx="10" cy="13" r="2.5" />
    <circle cx="18" cy="13" r="2.5" />
    <circle cx="14" cy="10" r="1.5" fill="#1A1A1A" />
    <path d="M14 15V24" strokeLinecap="round" />
    <path d="M14 18L11 20" strokeLinecap="round" />
    <path d="M14 20L17 22" strokeLinecap="round" />
  </svg>
);

const CircleDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <circle cx="14" cy="14" r="8" />
    <circle cx="14" cy="14" r="4" />
    <circle cx="14" cy="14" r="1" fill="#1A1A1A" />
  </svg>
);

const DiamondDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M14 4L24 14L14 24L4 14L14 4Z" strokeLinejoin="round" />
    <path d="M8 14H20" />
    <path d="M14 8V20" />
  </svg>
);

const StarDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M14 4L16.5 10.5L23 11.5L18 16L19.5 23L14 19.5L8.5 23L10 16L5 11.5L11.5 10.5L14 4Z" strokeLinejoin="round" />
  </svg>
);

const LeafDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M14 24C14 24 6 18 6 12C6 6 14 4 14 4C14 4 22 6 22 12C22 18 14 24 14 24Z" strokeLinejoin="round" />
    <path d="M14 8V20" strokeLinecap="round" />
    <path d="M14 12L10 10" strokeLinecap="round" />
    <path d="M14 15L18 13" strokeLinecap="round" />
  </svg>
);

const CursorDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M6 6L12 22L14 15L21 13L6 6Z" strokeLinejoin="round" />
    <path d="M14 15L20 21" strokeLinecap="round" />
  </svg>
);

const BookDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M6 6H14V22H8C6.9 22 6 21.1 6 20V6Z" strokeLinejoin="round" />
    <path d="M14 6H22V20C22 21.1 21.1 22 20 22H14V6Z" strokeLinejoin="round" />
    <path d="M9 10H12" strokeLinecap="round" />
    <path d="M16 10H19" strokeLinecap="round" />
    <path d="M9 14H12" strokeLinecap="round" />
    <path d="M16 14H19" strokeLinecap="round" />
  </svg>
);

const SwirlDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M14 4C18 4 22 8 22 14C22 18 18 22 14 22C10 22 8 20 8 16C8 12 12 10 14 12C16 14 16 16 14 16" strokeLinecap="round" />
  </svg>
);

const HeartDoodle = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
    <path d="M14 8C12 4 6 4 6 10C6 14 14 22 14 22C14 22 22 14 22 10C22 4 16 4 14 8Z" strokeLinejoin="round" />
  </svg>
);

const doodleComponents = [
  PlantDoodle,
  FlowerDoodle,
  CircleDoodle,
  DiamondDoodle,
  StarDoodle,
  LeafDoodle,
  CursorDoodle,
  BookDoodle,
  SwirlDoodle,
  HeartDoodle,
];

interface SidebarDoodlesProps {
  position: "left" | "right";
  count?: number;
}

export default function SidebarDoodles({ position, count = 8 }: SidebarDoodlesProps) {
  // Select different doodles based on position
  const startIndex = position === "left" ? 0 : 5;
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
            delay: index * 0.1,
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
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <doodle.Component />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
