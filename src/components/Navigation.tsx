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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (href: string) => {
    const section = href.slice(1);
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-sherwood-gray-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="sherwood-headline text-2xl text-sherwood-black hover:opacity-70 transition-opacity"
              whileHover={{ scale: 1.02 }}
            >
              MESSIAH
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`sherwood-body text-sm font-semibold uppercase tracking-wide transition-all ${
                      isActive
                        ? "text-sherwood-black"
                        : "text-sherwood-gray-500 hover:text-sherwood-black"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="h-0.5 bg-neon-yellow mt-1"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 flex flex-col items-center justify-center space-y-1.5">
                <motion.span
                  className="w-full h-0.5 bg-sherwood-black"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-sherwood-black"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-sherwood-black"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-sherwood-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-white z-50 shadow-sherwood-strong md:hidden border-l border-sherwood-gray-200"
            >
              <div className="flex flex-col p-6 space-y-1">
                <div className="mb-8 pb-4 border-b border-sherwood-gray-200">
                  <span className="sherwood-headline text-2xl text-sherwood-black">MENU</span>
                </div>
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`sherwood-body text-base font-semibold py-3 px-4 transition-colors ${
                        isActive
                          ? "bg-neon-yellow text-sherwood-black"
                          : "text-sherwood-gray-600 hover:bg-sherwood-gray-100 hover:text-sherwood-black"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
