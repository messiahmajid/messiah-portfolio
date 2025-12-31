"use client";

import React from "react";
import { motion } from "framer-motion";

// Collection of hand-drawn style decorative doodles
export const FloatingDoodles: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`pointer-events-none ${className}`}>
      {/* Floating stars - multiple */}
      <motion.svg
        className="absolute top-20 left-[5%] w-8 h-8 opacity-20"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <path
          d="M12 2L14 8L20 9L15.5 14L17 20L12 17L7 20L8.5 14L4 9L10 8L12 2Z"
          stroke="#ffd54f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[45%] left-[3%] w-6 h-6 opacity-15"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <path
          d="M12 2L14 8L20 9L15.5 14L17 20L12 17L7 20L8.5 14L4 9L10 8L12 2Z"
          stroke="#4ecdc4"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[70%] right-[4%] w-7 h-7 opacity-20"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 20, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <path
          d="M12 2L14 8L20 9L15.5 14L17 20L12 17L7 20L8.5 14L4 9L10 8L12 2Z"
          stroke="#ff6b6b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Spiral doodles */}
      <motion.svg
        className="absolute top-40 right-[8%] w-10 h-10 opacity-15"
        viewBox="0 0 32 32"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M16 8C20 8 24 12 24 16C24 20 20 24 16 24C12 24 10 22 10 18C10 14 14 12 16 14C18 16 18 18 16 18"
          stroke="#ff6b6b"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[55%] left-[7%] w-8 h-8 opacity-12"
        viewBox="0 0 32 32"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M16 8C20 8 24 12 24 16C24 20 20 24 16 24C12 24 10 22 10 18C10 14 14 12 16 14C18 16 18 18 16 18"
          stroke="#a855f7"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </motion.svg>

      {/* Multiple hearts */}
      <motion.svg
        className="absolute bottom-32 left-[10%] w-6 h-6 opacity-20"
        viewBox="0 0 24 24"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <path
          d="M12 6C10 2 4 2 4 8C4 12 12 20 12 20C12 20 20 12 20 8C20 2 14 2 12 6Z"
          stroke="#ff6b6b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[25%] right-[6%] w-5 h-5 opacity-15"
        viewBox="0 0 24 24"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        <path
          d="M12 6C10 2 4 2 4 8C4 12 12 20 12 20C12 20 20 12 20 8C20 2 14 2 12 6Z"
          stroke="#ff6b6b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Squiggle lines */}
      <motion.svg
        className="absolute top-1/3 right-[5%] w-16 h-8 opacity-10"
        viewBox="0 0 60 20"
      >
        <motion.path
          d="M2 10 Q 15 2, 30 10 T 58 10"
          stroke="#4ecdc4"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[80%] left-[8%] w-20 h-8 opacity-12"
        viewBox="0 0 80 20"
      >
        <motion.path
          d="M2 10 Q 20 2, 40 10 T 78 10"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </motion.svg>

      {/* Circle clusters */}
      <motion.svg
        className="absolute bottom-1/4 right-[12%] w-12 h-12 opacity-15"
        viewBox="0 0 40 40"
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <circle cx="12" cy="12" r="6" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <circle cx="28" cy="16" r="4" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="28" r="5" stroke="#a855f7" strokeWidth="1.5" fill="none" />
      </motion.svg>

      <motion.svg
        className="absolute top-[15%] left-[12%] w-10 h-10 opacity-12"
        viewBox="0 0 40 40"
        animate={{ rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <circle cx="10" cy="20" r="5" stroke="#4ecdc4" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="12" r="4" stroke="#4ecdc4" strokeWidth="1.5" fill="none" />
        <circle cx="28" cy="28" r="6" stroke="#4ecdc4" strokeWidth="1.5" fill="none" />
      </motion.svg>

      {/* Arrow doodles */}
      <motion.svg
        className="absolute top-2/3 left-[6%] w-10 h-10 opacity-15"
        viewBox="0 0 40 40"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path
          d="M5 20 C 15 18, 25 22, 35 20"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M28 14 L 35 20 L 28 26"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[40%] right-[10%] w-8 h-8 opacity-12"
        viewBox="0 0 40 40"
        animate={{ x: [0, -5, 0], y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
      >
        <path
          d="M35 20 C 25 18, 15 22, 5 20"
          stroke="#ffd54f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 14 L 5 20 L 12 26"
          stroke="#ffd54f"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Floating plus signs */}
      <motion.svg
        className="absolute top-[30%] left-[15%] w-6 h-6 opacity-15"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <path d="M12 4V20M4 12H20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[35%] right-[15%] w-5 h-5 opacity-12"
        viewBox="0 0 24 24"
        animate={{ rotate: [45, 135, 45] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <path d="M12 4V20M4 12H20" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      {/* Floating triangles */}
      <motion.svg
        className="absolute top-[60%] right-[3%] w-8 h-8 opacity-12"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <path d="M12 4L20 20H4L12 4Z" stroke="#a855f7" strokeWidth="2" fill="none" strokeLinejoin="round" />
      </motion.svg>

      <motion.svg
        className="absolute top-[10%] right-[20%] w-6 h-6 opacity-10"
        viewBox="0 0 24 24"
        animate={{ rotate: [180, 190, 170, 180] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <path d="M12 4L20 20H4L12 4Z" stroke="#ff6b6b" strokeWidth="2" fill="none" strokeLinejoin="round" />
      </motion.svg>

      {/* Wavy lines */}
      <motion.svg
        className="absolute top-[85%] right-[25%] w-24 h-6 opacity-10"
        viewBox="0 0 100 20"
      >
        <motion.path
          d="M0 10 Q 12.5 2, 25 10 T 50 10 T 75 10 T 100 10"
          stroke="#4ecdc4"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.svg>

      {/* Dotted circles */}
      <motion.svg
        className="absolute top-[50%] left-[2%] w-10 h-10 opacity-15"
        viewBox="0 0 40 40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="20" cy="20" r="15" stroke="#ff6b6b" strokeWidth="2" fill="none" strokeDasharray="4 4" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[20%] right-[8%] w-8 h-8 opacity-12"
        viewBox="0 0 40 40"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="20" cy="20" r="12" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="3 3" />
      </motion.svg>

      {/* Zigzag lines */}
      <motion.svg
        className="absolute top-[75%] left-[20%] w-16 h-8 opacity-10"
        viewBox="0 0 60 20"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <path d="M2 10 L12 2 L22 18 L32 2 L42 18 L52 2 L58 10" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>

      {/* Asterisks */}
      <motion.svg
        className="absolute top-[20%] left-[25%] w-6 h-6 opacity-12"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      {/* Diamond shapes */}
      <motion.svg
        className="absolute bottom-[45%] left-[5%] w-6 h-6 opacity-12"
        viewBox="0 0 24 24"
        animate={{ rotate: [45, 55, 45], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <rect x="6" y="6" width="12" height="12" stroke="#4ecdc4" strokeWidth="2" fill="none" transform="rotate(45 12 12)" />
      </motion.svg>

      <motion.svg
        className="absolute top-[35%] right-[18%] w-5 h-5 opacity-10"
        viewBox="0 0 24 24"
        animate={{ rotate: [45, 35, 45] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <rect x="6" y="6" width="12" height="12" stroke="#ffd54f" strokeWidth="2" fill="none" transform="rotate(45 12 12)" />
      </motion.svg>
    </div>
  );
};

// Doodle border decoration
export const DoodleBorder: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#2d2d2d"
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <rect
        x="4"
        y="4"
        width="calc(100% - 8px)"
        height="calc(100% - 8px)"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="8 6"
        rx="4"
        opacity="0.3"
      />
    </svg>
  );
};

// Decorative corner doodles
export const CornerDoodle: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}> = ({ position, className = "" }) => {
  const rotations = {
    "top-left": 0,
    "top-right": 90,
    "bottom-right": 180,
    "bottom-left": 270,
  };

  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <svg
      className={`absolute w-12 h-12 opacity-20 ${positions[position]} ${className}`}
      viewBox="0 0 40 40"
      style={{ transform: `rotate(${rotations[position]}deg)` }}
    >
      <path
        d="M2 2 Q 2 20, 20 20 Q 20 38, 38 38"
        stroke="#2d2d2d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="2" fill="#ffd54f" />
    </svg>
  );
};

// Scattered dots pattern - more dots with varied animations
export const ScatteredDots: React.FC<{ className?: string }> = ({ className = "" }) => {
  const dots = [
    { x: 5, y: 12, size: 3, color: "#ff6b6b", delay: 0 },
    { x: 15, y: 8, size: 2, color: "#4ecdc4", delay: 0.3 },
    { x: 25, y: 18, size: 4, color: "#ffd54f", delay: 0.6 },
    { x: 35, y: 5, size: 2, color: "#a855f7", delay: 0.9 },
    { x: 45, y: 15, size: 3, color: "#3b82f6", delay: 1.2 },
    { x: 55, y: 10, size: 2, color: "#ff6b6b", delay: 0.2 },
    { x: 65, y: 20, size: 3, color: "#22c55e", delay: 0.5 },
    { x: 75, y: 8, size: 2, color: "#f59e0b", delay: 0.8 },
    { x: 85, y: 14, size: 4, color: "#4ecdc4", delay: 1.1 },
    { x: 92, y: 6, size: 2, color: "#a855f7", delay: 0.4 },
    // Bottom dots
    { x: 8, y: 88, size: 2, color: "#4ecdc4", delay: 0.7 },
    { x: 18, y: 92, size: 3, color: "#ffd54f", delay: 1.0 },
    { x: 28, y: 85, size: 2, color: "#ff6b6b", delay: 0.1 },
    { x: 42, y: 90, size: 4, color: "#a855f7", delay: 0.4 },
    { x: 58, y: 87, size: 2, color: "#3b82f6", delay: 0.7 },
    { x: 72, y: 93, size: 3, color: "#22c55e", delay: 1.0 },
    { x: 88, y: 86, size: 2, color: "#f59e0b", delay: 0.3 },
    // Middle scattered
    { x: 3, y: 35, size: 2, color: "#ff6b6b", delay: 0.5 },
    { x: 7, y: 55, size: 3, color: "#4ecdc4", delay: 0.8 },
    { x: 4, y: 72, size: 2, color: "#a855f7", delay: 1.1 },
    { x: 93, y: 30, size: 3, color: "#ffd54f", delay: 0.2 },
    { x: 96, y: 50, size: 2, color: "#3b82f6", delay: 0.6 },
    { x: 94, y: 68, size: 4, color: "#22c55e", delay: 0.9 },
  ];

  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={`${dot.x}%`}
          cy={`${dot.y}%`}
          r={dot.size}
          fill={dot.color}
          opacity={0.25}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 2 + (i % 3),
            delay: dot.delay,
            repeat: Infinity
          }}
        />
      ))}
    </svg>
  );
};

// Wavy line divider
export const WavyDivider: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#e5e5e5"
}) => {
  return (
    <svg
      className={`w-full h-4 ${className}`}
      viewBox="0 0 400 16"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 8 Q 50 2, 100 8 T 200 8 T 300 8 T 400 8"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </svg>
  );
};

// Tape strip decoration
export const TapeStrip: React.FC<{
  className?: string;
  color?: string;
  rotation?: number;
}> = ({ className = "", color = "#ffd54f", rotation = -3 }) => {
  return (
    <motion.div
      className={`w-20 h-6 opacity-60 ${className}`}
      style={{
        background: `repeating-linear-gradient(45deg, ${color}, ${color} 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 8px)`,
        transform: `rotate(${rotation}deg)`,
        boxShadow: "1px 2px 3px rgba(0,0,0,0.1)",
      }}
      animate={{ rotate: [rotation, rotation + 2, rotation] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  );
};

// Coffee ring stain - now animated
export const CoffeeRing: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 60
}) => {
  return (
    <motion.svg
      className={`opacity-[0.08] ${className}`}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      animate={{ rotate: [0, 5, 0], scale: [1, 1.02, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
    >
      <circle
        cx="30"
        cy="30"
        r="25"
        fill="none"
        stroke="rgba(139, 90, 43, 0.5)"
        strokeWidth="4"
      />
      <circle
        cx="30"
        cy="30"
        r="20"
        fill="none"
        stroke="rgba(139, 90, 43, 0.3)"
        strokeWidth="2"
      />
    </motion.svg>
  );
};

// Pencil scribble
export const PencilScribble: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={`w-24 h-8 opacity-20 ${className}`}
      viewBox="0 0 100 30"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <path
        d="M5 15 C 20 5, 30 25, 50 15 S 80 5, 95 15"
        stroke="#2d2d2d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

// NEW: Floating notebook paper lines
export const NotebookLines: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={`w-32 h-24 opacity-10 ${className}`}
      viewBox="0 0 120 80"
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <line x1="10" y1="20" x2="110" y2="20" stroke="#3b82f6" strokeWidth="1" />
      <line x1="10" y1="35" x2="110" y2="35" stroke="#3b82f6" strokeWidth="1" />
      <line x1="10" y1="50" x2="110" y2="50" stroke="#3b82f6" strokeWidth="1" />
      <line x1="10" y1="65" x2="110" y2="65" stroke="#3b82f6" strokeWidth="1" />
      <line x1="25" y1="10" x2="25" y2="75" stroke="#ff6b6b" strokeWidth="1.5" />
    </motion.svg>
  );
};

// NEW: Floating checkmark
export const FloatingCheck: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#22c55e"
}) => {
  return (
    <motion.svg
      className={`w-8 h-8 opacity-20 ${className}`}
      viewBox="0 0 24 24"
      animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <motion.path
        d="M4 12L9 17L20 6"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.svg>
  );
};

// NEW: Bracket decorations
export const FloatingBrackets: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.svg
      className={`w-12 h-16 opacity-15 ${className}`}
      viewBox="0 0 40 60"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <path d="M15 5 Q 5 5, 5 30 Q 5 55, 15 55" stroke="#a855f7" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M25 5 Q 35 5, 35 30 Q 35 55, 25 55" stroke="#a855f7" strokeWidth="2" fill="none" strokeLinecap="round" />
    </motion.svg>
  );
};

// ============================================
// SPIDER-VERSE STYLE ELEMENTS
// ============================================

// Halftone dot pattern overlay
export const HalftoneOverlay: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="halftone" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#2d2d2d" />
            <circle cx="9" cy="9" r="1" fill="#2d2d2d" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone)" />
      </svg>
    </div>
  );
};

// Ben-Day dots (colored comic dots)
export const BenDayDots: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="benday-cyan" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2" fill="#00ffff" />
          </pattern>
          <pattern id="benday-magenta" x="5" y="5" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2" fill="#ff0066" />
          </pattern>
          <pattern id="benday-yellow" x="10" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.5" fill="#ffd54f" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#benday-cyan)" />
        <rect width="100%" height="100%" fill="url(#benday-magenta)" style={{ mixBlendMode: 'multiply' }} />
        <rect width="100%" height="100%" fill="url(#benday-yellow)" style={{ mixBlendMode: 'multiply' }} />
      </svg>
    </div>
  );
};

// Speed/action lines radiating from center
export const SpeedLines: React.FC<{ className?: string }> = ({ className = "" }) => {
  const lines = Array.from({ length: 24 }, (_, i) => ({
    angle: i * 15,
    length: 150 + Math.random() * 100,
    opacity: 0.02 + Math.random() * 0.03,
  }));

  return (
    <motion.svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      {lines.map((line, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + Math.cos((line.angle * Math.PI) / 180) * line.length}
          y2={50 + Math.sin((line.angle * Math.PI) / 180) * line.length}
          stroke="#2d2d2d"
          strokeWidth="0.3"
          opacity={line.opacity}
        />
      ))}
    </motion.svg>
  );
};

// Comic-style floating onomatopoeia
export const ComicText: React.FC<{
  text: string;
  className?: string;
  color?: string;
}> = ({ text, className = "", color = "#ff6b6b" }) => {
  return (
    <motion.div
      className={`font-bangers text-2xl pointer-events-none select-none ${className}`}
      style={{
        fontFamily: "'Bangers', cursive",
        color: color,
        textShadow: `2px 2px 0 #fff, 3px 3px 0 #2d2d2d`,
        WebkitTextStroke: '1px #2d2d2d',
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [-5, 5, -5],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {text}
    </motion.div>
  );
};

// Motion blur streaks
export const MotionStreaks: React.FC<{ className?: string }> = ({ className = "" }) => {
  const streaks = [
    { top: '15%', left: '-5%', width: '30%', color: '#ff6b6b', delay: 0 },
    { top: '35%', right: '-5%', width: '25%', color: '#4ecdc4', delay: 0.5 },
    { top: '55%', left: '-5%', width: '20%', color: '#a855f7', delay: 1 },
    { top: '75%', right: '-5%', width: '35%', color: '#ffd54f', delay: 1.5 },
    { top: '25%', left: '-5%', width: '15%', color: '#3b82f6', delay: 2 },
    { top: '85%', left: '-5%', width: '25%', color: '#ff6b6b', delay: 0.3 },
  ];

  return (
    <div className={`pointer-events-none ${className}`}>
      {streaks.map((streak, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5"
          style={{
            top: streak.top,
            left: streak.left,
            right: streak.right,
            width: streak.width,
            background: `linear-gradient(90deg, transparent, ${streak.color}40, transparent)`,
          }}
          animate={{
            x: streak.left ? [0, 100, 0] : [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            delay: streak.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
    </div>
  );
};

// Comic panel frame effect
export const ComicFrame: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className = "",
  children
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Offset colored borders for 3D comic effect */}
      <div
        className="absolute inset-0 border-2 border-cyan-400 opacity-50 pointer-events-none"
        style={{ transform: 'translate(-3px, -3px)' }}
      />
      <div
        className="absolute inset-0 border-2 border-pink-500 opacity-50 pointer-events-none"
        style={{ transform: 'translate(3px, 3px)' }}
      />
      <div className="relative border-3 border-pencil">
        {children}
      </div>
    </div>
  );
};

// Floating comic speech bubble
export const SpeechBubble: React.FC<{ className?: string; text?: string }> = ({
  className = "",
  text = "!"
}) => {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <svg width="60" height="50" viewBox="0 0 60 50" className="opacity-20">
        <path
          d="M5 5 Q 5 0, 10 0 L 50 0 Q 55 0, 55 5 L 55 30 Q 55 35, 50 35 L 25 35 L 15 45 L 18 35 L 10 35 Q 5 35, 5 30 Z"
          fill="white"
          stroke="#2d2d2d"
          strokeWidth="2"
        />
        <text
          x="30"
          y="22"
          textAnchor="middle"
          fontFamily="'Bangers', cursive"
          fontSize="16"
          fill="#2d2d2d"
        >
          {text}
        </text>
      </svg>
    </motion.div>
  );
};

// Glitch flicker overlay
export const GlitchOverlay: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      animate={{
        opacity: [0, 0, 0.03, 0, 0, 0.02, 0],
        x: [0, -2, 0, 2, 0],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 4,
        times: [0, 0.1, 0.15, 0.2, 0.4, 0.45, 1],
      }}
      style={{
        background: 'linear-gradient(90deg, transparent 0%, #00ffff 25%, transparent 50%, #ff0066 75%, transparent 100%)',
      }}
    />
  );
};

// Burst/explosion effect
export const BurstEffect: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#ffd54f"
}) => {
  return (
    <motion.svg
      className={`w-24 h-24 opacity-15 ${className}`}
      viewBox="0 0 100 100"
      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <polygon
        points="50,5 58,35 90,35 65,55 75,90 50,70 25,90 35,55 10,35 42,35"
        fill={color}
        stroke="#2d2d2d"
        strokeWidth="1"
      />
    </motion.svg>
  );
};

// Chromatic aberration text effect wrapper
export const ChromaticText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        className="absolute inset-0 text-cyan-400 opacity-70"
        style={{ mixBlendMode: 'multiply' }}
        animate={{ x: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-pink-500 opacity-70"
        style={{ mixBlendMode: 'multiply' }}
        animate={{ x: [2, -2, 2] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
      <span className="relative">{children}</span>
    </span>
  );
};

// Complete Spider-Verse background
export const SpiderVerseBackground: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Base halftone pattern */}
      <HalftoneOverlay />

      {/* Colored Ben-Day dots */}
      <BenDayDots />

      {/* Rotating speed lines */}
      <SpeedLines />

      {/* Motion streaks */}
      <MotionStreaks />

      {/* Glitch effect */}
      <GlitchOverlay />

      {/* Floating comic elements */}
      <SpeechBubble className="absolute top-[20%] right-[10%]" text="WOW" />
      <SpeechBubble className="absolute top-[60%] left-[5%]" text="!" />
      <ComicText text="POW!" className="absolute top-[15%] left-[8%] opacity-10" color="#ff6b6b" />
      <ComicText text="ZAP!" className="absolute bottom-[25%] right-[12%] opacity-10" color="#4ecdc4" />
      <BurstEffect className="absolute top-[40%] right-[5%]" color="#ffd54f" />
      <BurstEffect className="absolute bottom-[15%] left-[10%]" color="#ff6b6b" />
    </div>
  );
};
