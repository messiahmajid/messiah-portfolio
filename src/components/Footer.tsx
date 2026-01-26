"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-12 px-4 relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-te-dark/10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-te-dark">
              Messiah<span className="text-te-orange">.</span>
            </span>
            <p className="text-text-muted text-sm">
              {currentYear} Messiah Godfred Majid
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/messiahmajid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-te-orange hover:bg-te-orange/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubIcon size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/messiahmajid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-te-orange hover:bg-te-orange/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon size={20} />
            </motion.a>
            <motion.a
              href="mailto:messiah.majid@miami.edu"
              className="p-2 rounded-lg text-text-muted hover:text-te-orange hover:bg-te-orange/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <EmailIcon size={20} />
            </motion.a>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <p className="text-text-muted text-sm">
              Built with{" "}
              <span className="text-text-secondary">Next.js</span>
              {" & "}
              <span className="text-text-secondary">Framer Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
