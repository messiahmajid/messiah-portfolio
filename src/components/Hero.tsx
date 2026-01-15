"use client";

import React from "react";
import { motion } from "framer-motion";
import { LinkedInIcon, EmailIcon, GitHubIcon } from "./DoodleIcons";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 px-4 bg-white">
      <div className="sherwood-single-column max-w-5xl text-left">
        {/* Timestamp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="sherwood-timestamp">Today</span>
        </motion.div>

        {/* Main Headline - MASSIVE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sherwood-headline-huge text-sherwood-black mb-8 leading-[0.85]"
          style={{ fontSize: 'clamp(3rem, 12vw, 9rem)' }}
        >
          MESSIAH MAJID
        </motion.h1>

        {/* Subtitle with Neon Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <p className="sherwood-body text-2xl md:text-3xl text-sherwood-black mb-6 font-medium">
            Computer Science, Math, and Biology student crafting software that feels{" "}
            <span className="neon-highlight-box">thoughtful and natural</span>
          </p>
          <p className="sherwood-body text-lg text-sherwood-gray-600">
            Coral Gables, FL • EST
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="sherwood-divider"
        />

        {/* Featured Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <div className="sherwood-card p-8">
            <h2 className="sherwood-headline text-3xl md:text-5xl text-sherwood-black mb-4">
              BUILDING THE FUTURE OF AI-POWERED TOOLS
            </h2>
            <p className="sherwood-body text-lg text-sherwood-gray-600 leading-relaxed">
              From fraud detection systems that protect thousands to computational biology tools that advance research,
              I create technology that makes a meaningful impact.
            </p>
          </div>
        </motion.div>

        {/* Social Links - Minimal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center gap-6 flex-wrap"
        >
          <a
            href="mailto:messiah.majid@miami.edu"
            className="sherwood-hover-underline sherwood-body text-lg font-semibold text-sherwood-black"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            className="sherwood-hover-underline sherwood-body text-lg font-semibold text-sherwood-black"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            className="sherwood-hover-underline sherwood-body text-lg font-semibold text-sherwood-black"
          >
            GitHub
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sherwood-gray-400"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
