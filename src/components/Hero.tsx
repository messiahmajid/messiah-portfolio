"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScribbleUnderline, StarDoodle, DoodleArrow } from "./SketchyElements";
import { LinkedInIcon, EmailIcon, GitHubIcon } from "./DoodleIcons";

// Cycling words for the animation
const cyclingWords = ["thoughtful", "natural", "easy", "honest"];

// Corner decoration - plants/leaves
const CornerDecoration = ({ position }: { position: 'bottom-left' | 'bottom-right' }) => (
  <svg
    viewBox="0 0 150 150"
    className={`absolute ${position === 'bottom-left' ? 'bottom-0 left-0' : 'bottom-0 right-0 scale-x-[-1]'} w-28 h-28 pointer-events-none`}
    style={{ color: '#DC6B5A' }}
  >
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
      <path d="M0 150 Q30 120 40 80 Q45 50 60 20" />
      <ellipse cx="25" cy="110" rx="15" ry="25" transform="rotate(-30 25 110)" fill="currentColor" fillOpacity="0.15" />
      <ellipse cx="50" cy="70" rx="12" ry="20" transform="rotate(20 50 70)" fill="currentColor" fillOpacity="0.15" />
      <ellipse cx="35" cy="45" rx="10" ry="18" transform="rotate(-25 35 45)" fill="currentColor" fillOpacity="0.15" />
      <path d="M40 80 Q60 90 80 75" />
      <ellipse cx="85" cy="70" rx="12" ry="18" transform="rotate(40 85 70)" fill="currentColor" fillOpacity="0.15" />
    </g>
  </svg>
);

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 px-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scattered doodles */}
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <StarDoodle size={40} color="#ffd54f" filled />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 opacity-20"
          animate={{ rotate: [0, -10, 0], y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <StarDoodle size={32} color="#DC6B5A" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 opacity-20"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <StarDoodle size={28} color="#5BA3D0" filled />
        </motion.div>

        {/* Grid paper lines in background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#5BA3D0 1px, transparent 1px), linear-gradient(90deg, #5BA3D0 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Greeting with tape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block font-sketch text-xl sm:text-2xl text-pencil-light bg-highlight-yellow px-4 py-1 rounded transform -rotate-1 click-wiggle hover-wiggle">
            Hey there! I&apos;m
          </span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-handwriting text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 leading-tight click-wiggle"
          style={{ color: 'var(--cream-text)' }}
        >
          <ScribbleUnderline color="#DC6B5A">
            Messiah Majid
          </ScribbleUnderline>
        </motion.h1>

        {/* Subtitle with arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8"
        >
          <span className="font-sketch text-2xl sm:text-3xl click-wiggle hover-wiggle" style={{ color: 'var(--cream-text)' }}>
            Computer Science
          </span>
          <span className="hidden sm:inline font-handwriting text-3xl click-wiggle" style={{ color: '#5BA3D0' }}>+</span>
          <span className="font-sketch text-2xl sm:text-3xl click-wiggle hover-wiggle" style={{ color: 'var(--cream-text)' }}>
            Math
          </span>
          <span className="hidden sm:inline font-handwriting text-3xl click-wiggle" style={{ color: '#DC6B5A' }}>+</span>
          <span className="font-sketch text-2xl sm:text-3xl click-wiggle hover-wiggle" style={{ color: 'var(--cream-text)' }}>
            Biology
          </span>
        </motion.div>

        {/* Software Should Feel Card - Smaller, centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-2xl mx-auto mb-10"
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{
              background: 'var(--paper-color)',
              border: '6px solid #DC6B5A',
            }}
          >
            {/* Grid background inside card */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: 'linear-gradient(#5BA3D0 1px, transparent 1px), linear-gradient(90deg, #5BA3D0 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />

            <div className="relative grid md:grid-cols-2 gap-4 p-6 md:p-8">
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center z-10">
                {/* Name label */}
                <p className="font-handwriting text-3xl sm:text-4xl mb-2" style={{ color: '#DC6B5A' }}>
                  Messiah
                </p>

                {/* Cycling headline */}
                <div className="mb-4">
                  <p className="font-marker text-xl sm:text-2xl leading-tight" style={{ color: '#DC6B5A' }}>
                    Software should
                  </p>
                  <p className="font-marker text-xl sm:text-2xl leading-tight" style={{ color: '#DC6B5A' }}>
                    feel{' '}
                    <span className="relative inline-block">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentWordIndex}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.35 }}
                          className="font-handwriting italic"
                          style={{
                            color: '#DC6B5A',
                            textDecoration: 'underline',
                            textDecorationStyle: 'wavy',
                            textUnderlineOffset: '3px',
                          }}
                        >
                          {cyclingWords[currentWordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </p>
                </div>

                {/* Location */}
                <p className="font-sketch text-sm" style={{ color: '#DC6B5A', opacity: 0.7 }}>
                  Coral Gables, FL • EST
                </p>
              </div>

              {/* Right side - Doodle Image Placeholder */}
              <div className="flex items-center justify-center">
                {/* Replace this with your actual image */}
                <div className="w-full max-w-[250px] aspect-square relative">
                  {/* Placeholder - replace src with your doodle image */}
                  <img
                    src="/images/hero-doodle.png"
                    alt="Doodle illustration"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden absolute inset-0 flex items-center justify-center border-2 border-dashed border-[#DC6B5A] rounded-lg opacity-30">
                    <span className="font-sketch text-sm text-[#DC6B5A]">Add doodle image</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner ribbons */}
            <div
              className="absolute -bottom-1 -left-1 w-16 h-16 transform rotate-45 translate-y-8 -translate-x-8"
              style={{ background: '#DC6B5A', opacity: 0.85 }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-16 h-16 transform -rotate-45 translate-y-8 translate-x-8"
              style={{ background: '#DC6B5A', opacity: 0.85 }}
            />
          </div>

          {/* Tape decoration on top */}
          <div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 -rotate-2 w-16 h-6 opacity-80"
            style={{
              background: "repeating-linear-gradient(45deg, #DC6B5A, #DC6B5A 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 8px)",
              boxShadow: "1px 2px 3px rgba(0,0,0,0.1)",
            }}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <motion.a
            href="mailto:messiah.majid@miami.edu"
            className="group flex items-center gap-2 px-4 py-2 rounded-full shadow-paper hover:shadow-paper-hover transition-all hover-scale"
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
            className="group flex items-center gap-2 px-4 py-2 rounded-full shadow-paper hover:shadow-paper-hover transition-all hover-scale"
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
            className="group flex items-center gap-2 px-4 py-2 rounded-full shadow-paper hover:shadow-paper-hover transition-all hover-scale"
            style={{ background: 'var(--paper-color)', border: "3px solid #333333" }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon size={20} className="text-[#333333]" />
            <span className="font-sketch text-sm sm:text-base hidden sm:inline" style={{ color: '#1A1A1A' }}>GitHub</span>
          </motion.a>
        </motion.div>

        {/* 3 Things I Strongly Believe In Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl p-6 md:p-8"
          style={{
            background: 'var(--paper-color)',
            border: '5px solid #DC6B5A',
          }}
        >
          {/* Corner decorations */}
          <CornerDecoration position="bottom-left" />
          <CornerDecoration position="bottom-right" />

          {/* Title - clearer font */}
          <h3 className="font-sketch text-xl sm:text-2xl mb-8 text-left" style={{ color: '#3d3d3d' }}>
            3 things I strongly believe in
          </h3>

          {/* Stacked paper cards */}
          <div className="flex flex-col gap-5 relative z-10">
            {/* Card 1 - Lined notebook paper */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="relative p-5 rounded-sm shadow-md transform -rotate-1"
              style={{
                background: '#faf8f5',
                backgroundImage: `
                  linear-gradient(#e8e0d5 1px, transparent 1px),
                  linear-gradient(90deg, #c75d4a 1px, transparent 1px)
                `,
                backgroundSize: '100% 26px, 32px 100%',
                backgroundPosition: '0 12px, 28px 0',
                boxShadow: '3px 3px 8px rgba(0,0,0,0.12), -1px -1px 2px rgba(255,255,255,0.5)',
              }}
            >
              {/* Torn edge effect */}
              <div className="absolute -top-1 left-0 right-0 h-3 overflow-hidden">
                <svg width="100%" height="12" preserveAspectRatio="none" viewBox="0 0 100 12">
                  <path d="M0 12 L0 6 Q5 3 10 6 Q15 9 20 6 Q25 3 30 6 Q35 9 40 6 Q45 3 50 6 Q55 9 60 6 Q65 3 70 6 Q75 9 80 6 Q85 3 90 6 Q95 9 100 6 L100 12 Z" fill="#faf8f5" />
                </svg>
              </div>
              <p className="font-handwriting text-2xl sm:text-3xl leading-snug pl-8" style={{ color: '#2a2a2a' }}>
                tirelessly<br />pursue<br />clarity.
              </p>
            </motion.div>

            {/* Card 2 - Grid/graph paper */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ rotate: 1, scale: 1.02 }}
              className="relative p-5 rounded-sm shadow-md transform rotate-2 self-end"
              style={{
                background: '#d5d0c8',
                backgroundImage: 'linear-gradient(#a5a098 1px, transparent 1px), linear-gradient(90deg, #a5a098 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                boxShadow: '3px 3px 8px rgba(0,0,0,0.15), -1px -1px 2px rgba(255,255,255,0.3)',
              }}
            >
              <p className="font-mono text-lg sm:text-xl leading-snug" style={{ color: '#3a3a3a' }}>
                Software<br />should<br />empower.
              </p>
            </motion.div>

            {/* Card 3 - Plain craft paper with paperclip */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ rotate: -0.5, scale: 1.02 }}
              className="relative p-5 rounded-sm shadow-md transform -rotate-1"
              style={{
                background: '#c9bba8',
                boxShadow: '3px 3px 8px rgba(0,0,0,0.12), -1px -1px 2px rgba(255,255,255,0.2)',
              }}
            >
              {/* Paperclip decoration */}
              <svg className="absolute -top-2 left-8 w-6 h-10" viewBox="0 0 24 40" fill="none" stroke="#888" strokeWidth="2">
                <path d="M12 2 L12 30 Q12 36 6 36 Q0 36 0 30 L0 10 Q0 4 6 4 L18 4 Q24 4 24 10 L24 32" />
              </svg>
              <p className="font-serif italic text-2xl sm:text-3xl leading-snug" style={{ color: '#4a4a4a' }}>
                Design for<br />moments
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
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
