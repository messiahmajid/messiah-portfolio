"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScribbleUnderline, StarDoodle, DoodleArrow } from "./SketchyElements";
import { LinkedInIcon, EmailIcon, GitHubIcon } from "./DoodleIcons";

// Cycling words for the animation
const cyclingWords = ["thoughtful", "natural", "easy", "honest"];

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

        {/* Software Should Feel Card - Larger, more prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-4xl mx-auto mb-10"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'var(--paper-color)',
              border: '8px solid #DC6B5A',
            }}
          >
            {/* Grid background inside card */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: 'linear-gradient(#5BA3D0 1px, transparent 1px), linear-gradient(90deg, #5BA3D0 1px, transparent 1px)',
                backgroundSize: '26px 26px',
              }}
            />

            <div className="relative grid md:grid-cols-2 gap-6 p-8 md:p-12">
              {/* Left side - Text content */}
              <div className="flex flex-col justify-center z-10">
                {/* Philosophy phrase that ties into software should feel */}
                <p className="font-sketch text-lg sm:text-xl mb-4" style={{ color: '#5a4a42' }}>
                  I believe in building things that
                </p>

                {/* Cycling headline - LARGER */}
                <div className="mb-6">
                  <p className="font-marker text-3xl sm:text-4xl md:text-5xl leading-tight font-bold" style={{ color: '#DC6B5A' }}>
                    Software should
                  </p>
                  <p className="font-marker text-3xl sm:text-4xl md:text-5xl leading-tight font-bold" style={{ color: '#DC6B5A' }}>
                    feel{' '}
                    <span className="relative inline-block">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentWordIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.35 }}
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
                  </p>
                </div>

                {/* Location - LARGER and more visible */}
                <p className="font-sketch text-lg sm:text-xl font-semibold" style={{ color: '#DC6B5A' }}>
                  Coral Gables, FL • EST
                </p>
              </div>

              {/* Right side - Doodle Image Placeholder */}
              <div className="flex items-center justify-center">
                {/* Replace this with your actual image */}
                <div className="w-full max-w-[320px] aspect-square relative">
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
              className="absolute -bottom-1 -left-1 w-20 h-20 transform rotate-45 translate-y-10 -translate-x-10"
              style={{ background: '#DC6B5A', opacity: 0.85 }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-20 h-20 transform -rotate-45 translate-y-10 translate-x-10"
              style={{ background: '#DC6B5A', opacity: 0.85 }}
            />
          </div>

          {/* Tape decoration on top */}
          <div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 -rotate-2 w-20 h-7 opacity-80"
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
          className="flex items-center justify-center gap-4 sm:gap-6 mb-8"
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
