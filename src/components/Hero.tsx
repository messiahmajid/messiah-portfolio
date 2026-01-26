"use client";

import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

// Floating decorative elements
function FloatingElements() {
  const elements = [
    { x: "10%", y: "20%", size: 8, delay: 0 },
    { x: "85%", y: "15%", size: 6, delay: 0.5 },
    { x: "75%", y: "70%", size: 10, delay: 1 },
    { x: "15%", y: "75%", size: 6, delay: 1.5 },
    { x: "90%", y: "45%", size: 4, delay: 2 },
    { x: "5%", y: "50%", size: 5, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: el.delay },
            scale: { duration: 0.5, delay: el.delay },
            y: { duration: 4, repeat: Infinity, delay: el.delay }
          }}
        >
          <div
            className="rounded-full border-2 border-te-orange/30"
            style={{ width: el.size * 2, height: el.size * 2 }}
          />
        </motion.div>
      ))}

      {/* Small crosses/plus signs */}
      {[
        { x: "25%", y: "30%", delay: 0.3 },
        { x: "70%", y: "25%", delay: 0.8 },
        { x: "80%", y: "60%", delay: 1.3 },
        { x: "20%", y: "65%", delay: 1.8 },
      ].map((el, i) => (
        <motion.div
          key={`cross-${i}`}
          className="absolute text-te-dark/10 font-mono text-lg"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: el.delay
          }}
        >
          +
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <FloatingElements />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative element above greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <motion.div
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-8 h-0.5 bg-te-orange/40"
          />
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 border-2 border-te-orange/50 rounded-sm"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-te-orange/60 rounded-full"
          />
          <motion.div
            animate={{ rotate: [0, -180, -360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 border-2 border-te-orange/50 rounded-sm"
          />
          <motion.div
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-8 h-0.5 bg-te-orange/40"
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-te-orange font-medium mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-te-dark mb-4"
        >
          Messiah Majid
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-secondary mb-6"
        >
          Data Scientist & Analyst
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turning complex data into actionable insights. Studying Computer Science,
          Mathematics, and Biology at the{" "}
          <span className="text-te-orange">University of Miami</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-outline inline-flex items-center gap-2"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href="https://github.com/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg text-text-muted hover:text-te-orange hover:bg-te-orange/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/messiahmajid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg text-text-muted hover:text-te-orange hover:bg-te-orange/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon size={24} />
          </motion.a>
          <motion.a
            href="mailto:messiah.majid@miami.edu"
            className="p-3 rounded-lg text-text-muted hover:text-te-orange hover:bg-te-orange/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <EmailIcon size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
