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
