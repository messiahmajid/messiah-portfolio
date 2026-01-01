"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-50 bg-transparent"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="font-handwriting text-2xl sm:text-3xl hover:text-accent-coral transition-colors"
              style={{ color: 'var(--cream-text)' }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Messiah
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 font-sketch text-lg transition-colors click-ripple squiggle-click"
                  style={{
                    color: activeSection === item.href.slice(1)
                      ? '#DC6B5A'
                      : 'var(--cream-text)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.svg
                      layoutId="navCircle"
                      className="absolute inset-0 pointer-events-none"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                      style={{ overflow: "visible", width: "100%", height: "100%" }}
                    >
                      {/* Hand-drawn sketchy circle path */}
                      <motion.path
                        d="M8 20
                           C 5 8, 25 2, 50 4
                           C 75 2, 98 10, 95 20
                           C 98 32, 72 38, 50 36
                           C 28 38, 2 30, 8 20
                           C 6 18, 10 15, 12 18"
                        fill="none"
                        stroke="#DC6B5A"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          opacity: 1,
                          rotate: [0, 1, -1, 0],
                        }}
                        transition={{
                          pathLength: { duration: 0.4, ease: "easeOut" },
                          opacity: { duration: 0.2 },
                          rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{ transformOrigin: "center" }}
                      />
                      {/* Small wobble line for extra sketchiness */}
                      <motion.path
                        d="M15 22 Q 20 24, 25 21"
                        fill="none"
                        stroke="#DC6B5A"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        opacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.3, duration: 0.2 }}
                      />
                    </motion.svg>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 flex flex-col items-center justify-center space-y-1.5">
                <motion.span
                  className="w-full h-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--cream-text)' }}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--cream-text)' }}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--cream-text)' }}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full z-40 md:hidden"
          >
            <div
              className="fixed inset-0 bg-pencil/20 backdrop-blur-sm -z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 w-64 bg-paper shadow-paper-hover rounded-l-2xl p-6"
              style={{
                border: "3px solid #DC6B5A",
                borderRight: "none",
              }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sketch text-xl py-2 px-4 rounded-lg transition-all click-ripple ${
                      activeSection === item.href.slice(1)
                        ? "bg-highlight-yellow text-pencil"
                        : "text-pencil-light hover:bg-paper-dark"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
