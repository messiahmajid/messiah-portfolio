"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutStories = [
  {
    id: 1,
    tag: "Origins",
    title: "WHERE IT STARTED",
    content: "International student from Accra, Ghana. Always curious about how things work—from the patterns in nature to the logic in machines.",
    emoji: "🌍",
  },
  {
    id: 2,
    tag: "Fascination",
    title: "WHAT DRIVES ME",
    content: "How data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
    emoji: "✨",
  },
  {
    id: 3,
    tag: "Approach",
    title: "MY METHOD",
    content: "Combining Mathematics, Computer Science, and Biology at University of Miami. Math sharpens understanding, CS builds tools, Biology connects to living systems.",
    emoji: "🔬",
  },
  {
    id: 4,
    tag: "Service",
    title: "BEYOND THE BOOKS",
    content: "Volunteering and giving back to community through tutoring, organizing events, and mentoring. Service is core to who I am.",
    emoji: "🤝",
  },
];

const lookingFor = [
  { text: "Impactful work that matters", icon: "🎯" },
  { text: "Meaningful projects with purpose", icon: "💡" },
  { text: "Diverse team of talented folks", icon: "🌟" },
];

export default function About() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section id="about" className="py-20 px-4 bg-sherwood-gray-50">
      <div className="sherwood-single-column max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="sherwood-headline text-7xl md:text-9xl text-sherwood-black mb-2">
            ABOUT
          </h2>
          <p className="sherwood-body text-xl text-sherwood-gray-600 mt-4">
            My journey, passion, and what I'm building toward
          </p>
          <div className="sherwood-divider" />
        </motion.div>

        {/* Interactive Story Tabs */}
        <div className="mb-16">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {aboutStories.map((story, index) => (
              <motion.button
                key={story.id}
                onClick={() => setActiveStory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 sherwood-body text-sm font-bold uppercase tracking-wider transition-all ${
                  activeStory === index
                    ? "bg-neon-yellow text-sherwood-black shadow-neon-glow"
                    : "bg-white text-sherwood-gray-600 hover:bg-sherwood-gray-100"
                }`}
              >
                {story.emoji} {story.tag}
              </motion.button>
            ))}
          </motion.div>

          {/* Story Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-12 shadow-sherwood-strong border-l-8 border-neon-yellow"
            >
              <h3 className="sherwood-headline text-4xl md:text-6xl text-sherwood-black mb-6">
                {aboutStories[activeStory].title}
              </h3>
              <p className="sherwood-body text-xl md:text-2xl text-sherwood-gray-700 leading-relaxed">
                {aboutStories[activeStory].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* What I'm Looking For - More Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-sherwood-black text-white p-8 md:p-12"
        >
          <h3 className="sherwood-headline text-5xl md:text-7xl mb-8">
            WHAT I'M LOOKING FOR
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {lookingFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/10 p-6 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <p className="sherwood-body text-lg font-semibold">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left: Highlight Box */}
            <motion.div
              className="bg-neon-yellow p-8 md:p-12 flex items-center justify-center"
              whileHover={{ backgroundColor: "#C7FF00" }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="sherwood-headline text-4xl md:text-5xl text-sherwood-black">
                  EDUCATION
                </h3>
              </div>
            </motion.div>

            {/* Right: Details */}
            <div className="p-8 md:p-12 bg-white">
              <h4 className="sherwood-headline text-3xl md:text-4xl text-sherwood-black mb-6">
                UNIVERSITY OF MIAMI
              </h4>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="sherwood-body text-sm uppercase tracking-wide text-sherwood-gray-500 mb-1">Major</div>
                  <div className="sherwood-body text-lg font-semibold text-sherwood-black">
                    Computer Science • Mathematics • Biology
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="sherwood-body text-sm uppercase tracking-wide text-sherwood-gray-500 mb-1">Graduation</div>
                  <div className="sherwood-body text-lg font-semibold text-sherwood-black">
                    May 2026
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="sherwood-body text-sm uppercase tracking-wide text-sherwood-gray-500 mb-1">Honors</div>
                  <div className="sherwood-body text-lg font-semibold text-sherwood-black">
                    Dean's List • Foote Fellow
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="sherwood-divider mt-16" />
      </div>
    </section>
  );
}
