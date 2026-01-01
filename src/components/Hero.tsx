"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DoodleArrow } from "./SketchyElements";
import { LinkedInIcon, EmailIcon, GitHubIcon } from "./DoodleIcons";

// Cycling words for the animation
const cyclingWords = ["thoughtful", "natural", "easy", "honest"];

// Main Hero Doodle Illustration - person with computer, birds, plants, goat
const HeroDoodleIllustration = () => (
  <svg viewBox="0 0 500 450" className="w-full h-full" style={{ color: '#DC6B5A' }}>
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Computer Window */}
      <g transform="translate(180, 40)">
        {/* Window frame */}
        <rect x="0" y="0" width="200" height="180" rx="8" strokeWidth="3" />
        {/* Title bar */}
        <rect x="0" y="0" width="200" height="28" rx="8" strokeWidth="2" />
        <line x1="0" y1="28" x2="200" y2="28" strokeWidth="2" />
        {/* Window buttons - left */}
        <circle cx="15" cy="14" r="5" strokeWidth="2" />
        {/* Title text "UNTITLED" */}
        <text x="70" y="19" fontSize="11" fill="currentColor" fontFamily="monospace" strokeWidth="0">UNTITLED</text>
        {/* Window buttons - right */}
        <g transform="translate(160, 8)">
          <rect x="0" y="0" width="14" height="12" rx="2" strokeWidth="1.5" />
          <rect x="18" y="0" width="14" height="12" rx="2" strokeWidth="1.5" />
          <line x1="18" y1="6" x2="32" y2="6" strokeWidth="1" />
        </g>
        {/* Content inside window */}
        <g transform="translate(20, 50)">
          {/* Search/input bar */}
          <rect x="0" y="0" width="120" height="30" rx="5" strokeWidth="2" />
          <path d="M15 15 Q25 12 35 15 Q45 18 55 15" strokeWidth="2" />
          {/* Arrow button */}
          <circle cx="105" cy="15" r="10" strokeWidth="1.5" />
          <path d="M102 15 L108 15 M106 12 L109 15 L106 18" strokeWidth="1.5" />
        </g>
        {/* Squiggly lines as content */}
        <path d="M30 100 Q50 95 70 100 Q90 105 110 100" strokeWidth="2" />
        <path d="M30 120 Q60 115 90 120 Q120 125 150 120" strokeWidth="2" />
        <path d="M30 140 Q45 135 60 140" strokeWidth="2" />
        {/* Vertical line decoration on right */}
        <line x1="195" y1="35" x2="195" y2="170" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>

      {/* Birds sitting on top of window */}
      {/* Bird 1 - left */}
      <g transform="translate(220, 25)">
        <ellipse cx="0" cy="5" rx="12" ry="10" strokeWidth="2" />
        <circle cx="-5" cy="0" r="8" strokeWidth="2" />
        <circle cx="-8" cy="-2" r="1.5" fill="currentColor" />
        <path d="M-12 0 L-16 -1" strokeWidth="2" />
        <path d="M5 12 L3 20" strokeWidth="2" />
        <path d="M-3 13 L-5 20" strokeWidth="2" />
      </g>
      {/* Bird 2 - middle */}
      <g transform="translate(260, 20)">
        <ellipse cx="0" cy="8" rx="14" ry="12" strokeWidth="2" />
        <circle cx="-6" cy="2" r="9" strokeWidth="2" />
        <circle cx="-9" cy="0" r="1.5" fill="currentColor" />
        <path d="M-14 2 L-19 0" strokeWidth="2" />
        <path d="M6 17 L4 25" strokeWidth="2" />
        <path d="M-4 18 L-6 25" strokeWidth="2" />
        {/* Wing detail */}
        <path d="M-2 8 Q5 5 8 10" strokeWidth="1.5" />
      </g>
      {/* Bird 3 - right (smaller) */}
      <g transform="translate(360, 30)">
        <ellipse cx="0" cy="4" rx="10" ry="8" strokeWidth="2" />
        <circle cx="-4" cy="-1" r="7" strokeWidth="2" />
        <circle cx="-7" cy="-3" r="1.5" fill="currentColor" />
        <path d="M-10 -2 L-14 -3" strokeWidth="2" />
        <path d="M4 10 L2 16" strokeWidth="2" />
        <path d="M-3 10 L-5 16" strokeWidth="2" />
      </g>

      {/* Person sitting and holding sign */}
      <g transform="translate(220, 230)">
        {/* Sign/board being held */}
        <rect x="0" y="-60" width="55" height="70" rx="6" strokeWidth="2.5" fill="currentColor" fillOpacity="0.05" />

        {/* Body/torso */}
        <ellipse cx="30" cy="40" rx="28" ry="35" strokeWidth="2.5" />

        {/* Head */}
        <circle cx="30" cy="-5" r="25" strokeWidth="2.5" />

        {/* Hair/curly top */}
        <path d="M10 -15 Q5 -30 15 -35 Q25 -40 35 -35 Q45 -40 50 -30 Q55 -15 50 -10" strokeWidth="2.5" />

        {/* Face */}
        <circle cx="22" cy="-8" r="3" fill="currentColor" />
        <circle cx="38" cy="-8" r="3" fill="currentColor" />
        {/* Smile */}
        <path d="M22 8 Q30 16 38 8" strokeWidth="2.5" />

        {/* Ears */}
        <ellipse cx="5" cy="-5" rx="5" ry="7" strokeWidth="2" />
        <ellipse cx="55" cy="-5" rx="5" ry="7" strokeWidth="2" />

        {/* Arms holding sign */}
        <path d="M0 20 Q-15 0 0 -30" strokeWidth="3" />
        <path d="M60 20 Q75 0 55 -30" strokeWidth="3" />

        {/* Legs */}
        <path d="M15 70 L5 110" strokeWidth="4" />
        <path d="M45 70 L55 110" strokeWidth="4" />

        {/* Seat/block */}
        <rect x="5" y="65" width="50" height="25" rx="3" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      </g>

      {/* Goat/lamb on the right */}
      <g transform="translate(380, 300)">
        {/* Body */}
        <ellipse cx="30" cy="30" rx="35" ry="25" strokeWidth="2.5" />
        {/* Head */}
        <ellipse cx="70" cy="15" rx="20" ry="18" strokeWidth="2.5" />
        {/* Ear */}
        <ellipse cx="85" cy="0" rx="8" ry="12" strokeWidth="2" transform="rotate(20 85 0)" />
        {/* Eye */}
        <circle cx="75" cy="12" r="3" fill="currentColor" />
        {/* Nose/snout */}
        <ellipse cx="88" cy="20" rx="5" ry="4" strokeWidth="2" />
        {/* Mouth with flower */}
        <path d="M85 28 Q90 32 95 28" strokeWidth="1.5" />
        <g transform="translate(95, 30)">
          <circle cx="0" cy="0" r="3" fill="currentColor" fillOpacity="0.4" />
          <circle cx="5" cy="-2" r="2" fill="currentColor" fillOpacity="0.3" />
          <circle cx="5" cy="3" r="2" fill="currentColor" fillOpacity="0.3" />
          <path d="M5 3 L8 15" strokeWidth="1.5" />
        </g>
        {/* Legs */}
        <path d="M10 50 L8 85" strokeWidth="2.5" />
        <path d="M25 52 L23 85" strokeWidth="2.5" />
        <path d="M40 50 L42 80" strokeWidth="2.5" />
        <path d="M52 48 L56 78" strokeWidth="2.5" />
        {/* Tail */}
        <path d="M-5 30 Q-15 25 -10 15" strokeWidth="2" />
      </g>

      {/* Large decorative plant - left side */}
      <g transform="translate(30, 200)">
        {/* Main large leaf */}
        <path d="M40 200 Q30 150 50 100 Q40 80 60 50 Q50 30 70 0" strokeWidth="2.5" />
        <path d="M50 100 Q70 110 85 90" strokeWidth="2" />
        <path d="M50 100 Q30 110 15 90" strokeWidth="2" />
        <path d="M55 60 Q75 65 85 50" strokeWidth="2" />
        <path d="M55 60 Q35 65 25 50" strokeWidth="2" />
        {/* Leaf shapes */}
        <ellipse cx="85" cy="85" rx="20" ry="35" strokeWidth="2" transform="rotate(30 85 85)" fill="currentColor" fillOpacity="0.1" />
        <ellipse cx="15" cy="85" rx="18" ry="30" strokeWidth="2" transform="rotate(-30 15 85)" fill="currentColor" fillOpacity="0.1" />
        <ellipse cx="90" cy="45" rx="15" ry="25" strokeWidth="2" transform="rotate(40 90 45)" fill="currentColor" fillOpacity="0.1" />
        <ellipse cx="20" cy="50" rx="15" ry="22" strokeWidth="2" transform="rotate(-35 20 50)" fill="currentColor" fillOpacity="0.1" />
      </g>

      {/* Bushes at bottom */}
      <g transform="translate(120, 380)">
        <path d="M0 50 Q-15 30 10 20 Q5 5 25 10 Q40 -5 55 10 Q70 5 75 25 Q95 20 90 40 Q110 50 85 60 Q60 70 30 60 Q0 65 0 50" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      </g>
      <g transform="translate(280, 370)">
        <path d="M0 60 Q-20 40 15 25 Q10 5 35 12 Q55 -5 75 15 Q95 8 100 30 Q125 25 115 50 Q140 65 105 75 Q70 85 35 75 Q0 80 0 60" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      </g>

      {/* Small plants and grass */}
      <g transform="translate(100, 400)">
        <path d="M0 30 Q5 15 10 0 Q15 15 20 30" strokeWidth="2" />
        <path d="M25 30 Q30 10 35 -5 Q40 10 45 30" strokeWidth="2" />
      </g>
      <g transform="translate(200, 410)">
        <path d="M0 20 Q3 10 6 0 Q9 10 12 20" strokeWidth="1.5" />
        <path d="M15 20 Q18 5 21 -5 Q24 5 27 20" strokeWidth="1.5" />
      </g>
      <g transform="translate(340, 400)">
        <path d="M0 30 Q5 15 10 0 Q15 15 20 30" strokeWidth="2" />
      </g>

      {/* Vine/plant going up the right side of computer */}
      <g transform="translate(385, 100)">
        <path d="M0 200 Q10 180 5 160 Q0 140 10 120 Q5 100 15 80 Q10 60 20 40 Q15 20 25 0" strokeWidth="2" />
        {/* Leaves on vine */}
        <ellipse cx="15" cy="170" rx="12" ry="8" strokeWidth="1.5" transform="rotate(-20 15 170)" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="5" cy="130" rx="10" ry="6" strokeWidth="1.5" transform="rotate(25 5 130)" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="18" cy="90" rx="11" ry="7" strokeWidth="1.5" transform="rotate(-15 18 90)" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="8" cy="50" rx="9" ry="5" strokeWidth="1.5" transform="rotate(30 8 50)" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="22" cy="20" rx="10" ry="6" strokeWidth="1.5" transform="rotate(-25 22 20)" fill="currentColor" fillOpacity="0.15" />
      </g>

      {/* Cactus on far left */}
      <g transform="translate(10, 350)">
        {/* Main cactus body */}
        <ellipse cx="25" cy="50" rx="15" ry="40" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        {/* Left arm */}
        <path d="M10 40 Q-5 35 -5 20 Q-5 5 5 5" strokeWidth="2" />
        <ellipse cx="0" cy="5" rx="8" ry="15" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        {/* Right arm */}
        <path d="M40 50 Q55 45 55 30" strokeWidth="2" />
        <ellipse cx="55" cy="20" rx="7" ry="12" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        {/* Pot */}
        <path d="M5 90 L10 110 L40 110 L45 90" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      </g>

      {/* Mushrooms */}
      <g transform="translate(70, 420)">
        <ellipse cx="10" cy="5" rx="12" ry="8" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="7" y="5" width="6" height="15" strokeWidth="1.5" />
        <circle cx="6" cy="3" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="14" cy="2" r="1.5" fill="currentColor" fillOpacity="0.3" />
      </g>
      <g transform="translate(85, 425)">
        <ellipse cx="8" cy="4" rx="9" ry="6" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <rect x="6" y="4" width="4" height="10" strokeWidth="1.5" />
      </g>

      {/* Small scattered grass tufts */}
      <g transform="translate(160, 430)">
        <path d="M0 10 L3 0 L6 10" strokeWidth="1.5" />
        <path d="M8 10 L11 -2 L14 10" strokeWidth="1.5" />
      </g>
      <g transform="translate(250, 435)">
        <path d="M0 8 L2 0 L4 8" strokeWidth="1.5" />
      </g>
      <g transform="translate(320, 425)">
        <path d="M0 15 L4 0 L8 15" strokeWidth="1.5" />
        <path d="M10 15 L13 3 L16 15" strokeWidth="1.5" />
      </g>

      {/* Decorative dots/pebbles */}
      <circle cx="140" cy="440" r="3" fill="currentColor" fillOpacity="0.3" />
      <circle cx="155" cy="438" r="2" fill="currentColor" fillOpacity="0.25" />
      <circle cx="300" cy="442" r="2.5" fill="currentColor" fillOpacity="0.3" />
      <circle cx="380" cy="435" r="2" fill="currentColor" fillOpacity="0.25" />
    </g>
  </svg>
);

// Corner decoration - plants/leaves
const CornerDecoration = ({ position }: { position: 'bottom-left' | 'bottom-right' }) => (
  <svg
    viewBox="0 0 150 150"
    className={`absolute ${position === 'bottom-left' ? 'bottom-0 left-0' : 'bottom-0 right-0 scale-x-[-1]'} w-32 h-32 pointer-events-none`}
    style={{ color: '#DC6B5A' }}
  >
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
      {/* Main stem */}
      <path d="M0 150 Q30 120 40 80 Q45 50 60 20" />
      {/* Leaves */}
      <ellipse cx="25" cy="110" rx="15" ry="25" transform="rotate(-30 25 110)" fill="currentColor" fillOpacity="0.15" />
      <ellipse cx="50" cy="70" rx="12" ry="20" transform="rotate(20 50 70)" fill="currentColor" fillOpacity="0.15" />
      <ellipse cx="35" cy="45" rx="10" ry="18" transform="rotate(-25 35 45)" fill="currentColor" fillOpacity="0.15" />
      {/* Small branch */}
      <path d="M40 80 Q60 90 80 75" />
      <ellipse cx="85" cy="70" rx="12" ry="18" transform="rotate(40 85 70)" fill="currentColor" fillOpacity="0.15" />
      {/* Decorative elements */}
      <circle cx="70" cy="40" r="4" fill="currentColor" fillOpacity="0.3" />
      <path d="M75 55 Q85 50 90 60" />
    </g>
  </svg>
);

// Scrap paper card component
const ScrapPaperCard = ({
  children,
  variant,
  rotation
}: {
  children: React.ReactNode;
  variant: 'lined' | 'grid' | 'plain';
  rotation: number;
}) => {
  const getBackground = () => {
    switch (variant) {
      case 'lined':
        return {
          background: '#f5f0e8',
          backgroundImage: `
            linear-gradient(#d4c4b0 1px, transparent 1px),
            linear-gradient(90deg, #c75d4a 1px, transparent 1px)
          `,
          backgroundSize: '100% 28px, 35px 100%',
          backgroundPosition: '0 10px, 30px 0',
        };
      case 'grid':
        return {
          background: '#c5c0b8',
          backgroundImage: 'linear-gradient(#9a958d 1px, transparent 1px), linear-gradient(90deg, #9a958d 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        };
      case 'plain':
        return {
          background: '#b8a99a',
        };
    }
  };

  const getTornEdge = () => {
    if (variant === 'lined') {
      return (
        <div className="absolute -top-2 left-0 right-0 h-4 overflow-hidden">
          <svg width="100%" height="16" preserveAspectRatio="none">
            <path
              d="M0 16 L0 8 Q5 4 10 8 Q15 12 20 8 Q25 4 30 8 Q35 12 40 8 Q45 4 50 8 Q55 12 60 8 Q65 4 70 8 Q75 12 80 8 Q85 4 90 8 Q95 12 100 8 L100 16 Z"
              fill="#f5f0e8"
              transform="scale(3, 1)"
            />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      className="relative p-6 rounded-sm shadow-lg"
      style={{
        ...getBackground(),
        transform: `rotate(${rotation}deg)`,
        boxShadow: '4px 4px 12px rgba(0,0,0,0.15)',
      }}
      whileHover={{ scale: 1.02, rotate: rotation * 0.5 }}
    >
      {getTornEdge()}
      {children}
    </motion.div>
  );
};

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden pt-20 pb-12 px-4">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(#DC6B5A 1px, transparent 1px), linear-gradient(90deg, #DC6B5A 1px, transparent 1px)',
          backgroundSize: '25px 25px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
          style={{
            background: 'var(--paper-color)',
            border: '8px solid #DC6B5A',
          }}
        >
          {/* Grid background inside card */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'linear-gradient(#5BA3D0 1px, transparent 1px), linear-gradient(90deg, #5BA3D0 1px, transparent 1px)',
              backgroundSize: '25px 25px',
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-8 p-8 md:p-12 min-h-[500px]">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center z-10">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-handwriting text-5xl sm:text-6xl md:text-7xl mb-6"
                style={{ color: '#DC6B5A' }}
              >
                Messiah
              </motion.h1>

              {/* Cycling headline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="font-marker text-3xl sm:text-4xl md:text-5xl leading-tight" style={{ color: '#DC6B5A' }}>
                  Software should
                </h2>
                <h2 className="font-marker text-3xl sm:text-4xl md:text-5xl leading-tight" style={{ color: '#DC6B5A' }}>
                  feel{' '}
                  <span className="relative inline-block min-w-[200px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWordIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="font-handwriting italic"
                        style={{
                          color: '#DC6B5A',
                          textDecoration: 'underline',
                          textDecorationStyle: 'wavy',
                          textUnderlineOffset: '4px',
                        }}
                      >
                        {cyclingWords[currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h2>
              </motion.div>

              {/* Location */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="font-sketch text-lg"
                style={{ color: '#DC6B5A', opacity: 0.8 }}
              >
                Coral Gables, FL • EST
              </motion.p>
            </div>

            {/* Right side - Doodle illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="w-full max-w-[450px] aspect-square">
                <HeroDoodleIllustration />
              </div>
            </motion.div>
          </div>

          {/* Decorative ribbon/tape on corner */}
          <div
            className="absolute -bottom-2 -left-2 w-24 h-24 transform rotate-45 translate-y-12 -translate-x-12"
            style={{ background: '#DC6B5A', opacity: 0.9 }}
          />
          <div
            className="absolute -bottom-2 -right-2 w-24 h-24 transform -rotate-45 translate-y-12 translate-x-12"
            style={{ background: '#DC6B5A', opacity: 0.9 }}
          />
        </motion.div>

        {/* Social Links - Below main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <motion.a
            href="mailto:messiah.majid@miami.edu"
            className="group flex items-center gap-2 px-4 py-2 rounded-full shadow-paper hover:shadow-paper-hover transition-all"
            style={{ background: 'var(--paper-color)', border: "3px solid #DC6B5A" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <EmailIcon size={20} className="text-[#DC6B5A]" />
            <span className="font-sketch text-sm sm:text-base hidden sm:inline" style={{ color: '#1A1A1A' }}>Email</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full shadow-paper hover:shadow-paper-hover transition-all"
            style={{ background: 'var(--paper-color)', border: "3px solid #0077B5" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon size={20} className="text-[#0077B5]" />
            <span className="font-sketch text-sm sm:text-base hidden sm:inline" style={{ color: '#1A1A1A' }}>LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://github.com/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full shadow-paper hover:shadow-paper-hover transition-all"
            style={{ background: 'var(--paper-color)', border: "3px solid #333333" }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon size={20} className="text-[#333333]" />
            <span className="font-sketch text-sm sm:text-base hidden sm:inline" style={{ color: '#1A1A1A' }}>GitHub</span>
          </motion.a>
        </motion.div>

        {/* Beliefs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative rounded-3xl overflow-hidden shadow-xl p-8 md:p-12"
          style={{
            background: 'var(--paper-color)',
            border: '6px solid #DC6B5A',
          }}
        >
          {/* Corner decorations */}
          <CornerDecoration position="bottom-left" />
          <CornerDecoration position="bottom-right" />

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-handwriting text-2xl sm:text-3xl mb-12"
            style={{ color: '#DC6B5A' }}
          >
            3 things I strongly believe in
          </motion.h3>

          {/* Scrap paper cards */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-4 relative z-10 min-h-[300px]">
            {/* Card 1 - Lined paper */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full sm:w-64 md:absolute md:left-[10%] md:top-[20%]"
            >
              <ScrapPaperCard variant="lined" rotation={-8}>
                <p className="font-handwriting text-2xl sm:text-3xl leading-tight" style={{ color: '#2a2a2a' }}>
                  tirelessly<br />pursue<br />clarity.
                </p>
              </ScrapPaperCard>
            </motion.div>

            {/* Card 2 - Grid paper */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full sm:w-56 md:absolute md:right-[15%] md:top-[5%]"
            >
              <ScrapPaperCard variant="grid" rotation={5}>
                <p className="font-mono text-xl sm:text-2xl leading-tight" style={{ color: '#3a3a3a' }}>
                  Software<br />should<br />empower.
                </p>
              </ScrapPaperCard>
            </motion.div>

            {/* Card 3 - Plain paper */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="w-full sm:w-60 md:absolute md:left-[30%] md:bottom-[10%]"
            >
              <ScrapPaperCard variant="plain" rotation={2}>
                <p className="font-serif italic text-2xl sm:text-3xl leading-tight" style={{ color: '#DC6B5A' }}>
                  Design for<br />moments
                </p>
              </ScrapPaperCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center mt-12"
        >
          <span className="font-handwriting text-lg mb-2" style={{ color: 'var(--cream-text)', opacity: 0.7 }}>
            scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <DoodleArrow direction="down" color="var(--cream-text)" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
