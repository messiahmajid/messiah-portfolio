"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WashiTape, StarDoodle } from "./SketchyElements";
import {
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  PaperPlaneIcon,
} from "./DoodleIcons";

// Contact links data
const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "messiah.majid@miami.edu",
    href: "mailto:messiah.majid@miami.edu",
    icon: EmailIcon,
    color: "#DC6B5A",
    description: "Drop me a line",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "/in/messiahmajid",
    href: "https://www.linkedin.com/in/messiahmajid",
    icon: LinkedInIcon,
    color: "#0077B5",
    description: "Let's connect",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "@MessiahM",
    href: "https://github.com/MessiahM",
    icon: GitHubIcon,
    color: "#333333",
    description: "Check my code",
    external: true,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yCard = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateCard = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating paper planes */}
        <motion.div
          className="absolute top-20 left-[10%] opacity-15"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <PaperPlaneIcon size={40} className="text-[#DC6B5A]" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%] opacity-15"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <PaperPlaneIcon size={32} className="text-[#4ecdc4]" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-[20%] opacity-15"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 25, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <PaperPlaneIcon size={28} className="text-[#a855f7]" />
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Section Title - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-[#DC6B5A] font-editorial-body text-lg tracking-widest uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let&apos;s Talk
          </motion.span>
          <h2 className="font-editorial text-6xl sm:text-7xl text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-[#DC6B5A] to-transparent max-w-md mx-auto"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ y: yCard, rotate: rotateCard }}
          className="relative"
        >
          <div
            className="p-8 md:p-12 relative rounded-3xl overflow-hidden"
            style={{
              background: 'var(--paper-color)',
              border: "2px solid rgba(220, 107, 90, 0.3)",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#DC6B5A] opacity-30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#DC6B5A] opacity-30 rounded-br-3xl" />

            <WashiTape className="-top-3 left-12" rotation={-3} color="#DC6B5A" />
            <WashiTape className="-top-3 right-12" rotation={5} pattern="dots" color="#4ecdc4" />

            {/* Intro text */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 10, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <PaperPlaneIcon size={48} className="text-[#DC6B5A]" />
              </motion.div>
              <p className="font-editorial-body text-xl md:text-2xl leading-relaxed max-w-lg mx-auto" style={{ color: '#3d3d3d' }}>
                I&apos;m always excited to connect with fellow developers, researchers,
                and innovators. Let&apos;s build something{" "}
                <span className="highlight-text font-semibold">amazing</span> together!
              </p>
            </div>

            {/* Contact Links Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center p-6 rounded-2xl relative overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                  style={{
                    background: "white",
                    border: `2px solid ${link.color}`,
                  }}
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${link.color}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 0.3 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${link.color}20, transparent)`,
                    }}
                  />

                  <motion.div
                    className="relative mb-4 z-10"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <link.icon size={40} style={{ color: link.color }} />
                  </motion.div>

                  <p className="font-editorial text-lg font-semibold mb-1 z-10" style={{ color: '#2d2d2d' }}>
                    {link.label}
                  </p>
                  <p className="font-editorial-body text-sm text-center z-10" style={{ color: '#666' }}>
                    {link.description}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-3 h-0.5 rounded-full z-10"
                    style={{ background: link.color }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Decorative stars */}
            <motion.div
              className="absolute -bottom-3 left-8"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <StarDoodle size={24} color="#ffd54f" filled />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 right-12"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <StarDoodle size={20} color="#DC6B5A" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
