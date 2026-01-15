"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 px-4 bg-white">
      {/* Dramatic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, #000 50px, #000 52px), repeating-linear-gradient(90deg, transparent, transparent 50px, #000 50px, #000 52px)',
        }} />
      </div>

      {/* Animated Neon Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-neon-yellow opacity-20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-neon-lime opacity-20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* MASSIVE Name Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-12 text-center"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-neon-yellow border-8 border-black p-8 md:p-12 sherwood-shadow-brutal">
              <h1 className="sherwood-headline text-sherwood-black leading-none" style={{ fontSize: 'clamp(4rem, 18vw, 16rem)' }}>
                MESSIAH
                <br />
                MAJID
              </h1>
            </div>
          </motion.div>
        </motion.div>

        {/* Bold Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-black text-white px-8 py-6 border-4 border-black relative">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-neon-yellow border-4 border-black"></div>
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-neon-lime border-4 border-black"></div>
            <p className="sherwood-headline text-3xl md:text-5xl relative z-10">
              BUILDING AI TOOLS
              <br />
              THAT MATTER
            </p>
          </div>
        </motion.div>

        {/* Info Strip */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white border-4 border-black p-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon-yellow border-2 border-black"></div>
              <span className="sherwood-body text-lg font-bold">CS • MATH • BIO</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-black"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon-lime border-2 border-black"></div>
              <span className="sherwood-body text-lg font-bold">UNIVERSITY OF MIAMI</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-black"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon-yellow border-2 border-black"></div>
              <span className="sherwood-body text-lg font-bold">CLASS OF 2026</span>
            </div>
          </div>
        </motion.div>

        {/* BOLD Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          <motion.a
            href="mailto:messiah.majid@miami.edu"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-neon-yellow border-4 border-black transform translate-x-2 translate-y-2"></div>
            <div className="relative bg-black text-white border-4 border-black p-6 flex flex-col items-center gap-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="sherwood-headline text-2xl">EMAIL ME</span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-neon-lime border-4 border-black transform translate-x-2 translate-y-2"></div>
            <div className="relative bg-black text-white border-4 border-black p-6 flex flex-col items-center gap-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="sherwood-headline text-2xl">LINKEDIN</span>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-neon-yellow border-4 border-black transform translate-x-2 translate-y-2"></div>
            <div className="relative bg-black text-white border-4 border-black p-6 flex flex-col items-center gap-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="sherwood-headline text-2xl">GITHUB</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Bold Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {[
            { number: "2+", label: "MAJOR PROJECTS" },
            { number: "95%", label: "ML ACCURACY" },
            { number: "70%", label: "SCAM DETECTION" },
            { number: "10K+", label: "DATA PROCESSED" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
              className="bg-white border-4 border-black p-6 text-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-neon-yellow transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="sherwood-headline text-5xl text-black mb-2">{stat.number}</div>
                <div className="sherwood-body text-xs font-bold tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="border-4 border-black bg-neon-yellow p-3"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
