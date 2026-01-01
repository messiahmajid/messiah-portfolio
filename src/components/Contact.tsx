"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WashiTape, StarDoodle } from "./SketchyElements";
import {
  EmailIcon,
  LinkedInIcon,
  PaperPlaneIcon,
} from "./DoodleIcons";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yCard = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateCard = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating paper planes */}
        <motion.div
          className="absolute top-20 left-[10%] opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <PaperPlaneIcon size={40} className="text-accent-coral" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%] opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <PaperPlaneIcon size={32} className="text-accent-teal" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-[20%] opacity-20"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 25, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <PaperPlaneIcon size={28} className="text-accent-purple" />
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-white inline-block relative click-wiggle">
            Get In Touch
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <path
                d="M0 8 Q 50 0, 100 8 T 200 4"
                stroke="#ff6b6b"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          style={{ y: yCard, rotate: rotateCard }}
          className="relative"
        >
          <div
            className="p-8 md:p-12 shadow-paper relative rounded-2xl"
            style={{
              background: 'var(--paper-color)',
              border: "3px solid #DC6B5A",
            }}
          >
            <WashiTape className="-top-3 left-12" rotation={-3} color="#ff6b6b" />
            <WashiTape className="-top-3 right-12" rotation={5} pattern="dots" color="#4ecdc4" />

            {/* Intro text - MORE LEGIBLE */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 10, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <PaperPlaneIcon size={48} className="text-accent-coral" />
              </motion.div>
              <p className="font-sketch text-xl md:text-2xl font-semibold leading-relaxed max-w-lg mx-auto" style={{ color: '#3d3d3d' }}>
                I&apos;m always excited to connect with fellow developers, researchers,
                and innovators. Let&apos;s build something{" "}
                <span className="highlight-text font-bold">amazing</span> together!
              </p>
            </div>

            {/* Contact Links - 2 columns only (no phone) */}
            <div className="grid sm:grid-cols-2 gap-8 max-w-md mx-auto">
              {/* Email */}
              <motion.a
                href="mailto:messiah.majid@miami.edu"
                initial={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(220, 107, 90, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group flex flex-col items-center p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: "var(--paper-color)",
                  border: "3px solid #DC6B5A",
                }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, rgba(220, 107, 90, 0.15) 0%, transparent 70%)",
                  }}
                />
                <motion.div
                  className="relative mb-3 z-10"
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <EmailIcon size={40} className="text-[#DC6B5A]" />
                </motion.div>
                <p className="font-marker text-xl font-bold mb-1 z-10" style={{ color: '#2d2d2d' }}>Email</p>
                <p className="font-sketch text-base font-semibold text-center break-all z-10" style={{ color: '#5a5a5a' }}>
                  messiah.majid@miami.edu
                </p>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/messiahmajid"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 119, 181, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group flex flex-col items-center p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: "var(--paper-color)",
                  border: "3px solid #0077B5",
                }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, rgba(0, 119, 181, 0.15) 0%, transparent 70%)",
                  }}
                />
                <motion.div
                  className="relative mb-3 z-10"
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <LinkedInIcon size={40} className="text-[#0077B5]" />
                </motion.div>
                <p className="font-marker text-xl font-bold mb-1 z-10" style={{ color: '#2d2d2d' }}>LinkedIn</p>
                <p className="font-sketch text-base font-semibold z-10" style={{ color: '#5a5a5a' }}>
                  /in/messiahmajid
                </p>
              </motion.a>
            </div>

            {/* Decorative stars */}
            <div className="absolute -bottom-3 left-8">
              <StarDoodle size={24} color="#ffd54f" filled />
            </div>
            <div className="absolute -bottom-2 right-12">
              <StarDoodle size={20} color="#DC6B5A" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
