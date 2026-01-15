"use client";

import React from "react";
import { motion } from "framer-motion";

const aboutContent = [
  {
    title: "Where It Started",
    content: "I'm an international student from Accra, Ghana. Growing up, I was always curious about how things work—from the patterns in nature to the logic in machines.",
  },
  {
    title: "What Fascinates Me",
    content: "I'm fascinated by how data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
  },
  {
    title: "My Approach",
    content: "At the University of Miami, I'm combining Mathematics, Computer Science, and Biology. Math sharpens my understanding, CS equips me to build tools, and Biology connects it all to living systems.",
  },
  {
    title: "Beyond The Books",
    content: "I love volunteering and giving back to my community. Whether it's tutoring, organizing events, or mentoring—service is a core part of who I am.",
  },
];

const lookingFor = [
  "Impactful work",
  "Meaningful projects",
  "Diverse team of talented folks",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="sherwood-single-column max-w-4xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="sherwood-headline text-6xl md:text-8xl text-sherwood-black mb-4">
            ABOUT
          </h2>
          <div className="sherwood-divider" />
        </motion.div>

        {/* Story Grid */}
        <div className="space-y-12 mb-16">
          {aboutContent.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="sherwood-card p-8"
            >
              <h3 className="sherwood-headline text-3xl md:text-4xl text-sherwood-black mb-4">
                {item.title.toUpperCase()}
              </h3>
              <p className="sherwood-body text-lg text-sherwood-gray-700 leading-relaxed">
                {item.content}
              </p>
            </motion.article>
          ))}
        </div>

        {/* What I'm Looking For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="sherwood-headline text-4xl md:text-5xl text-sherwood-black mb-8">
            WHAT I'M LOOKING FOR
          </h3>
          <div className="space-y-4">
            {lookingFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 bg-neon-yellow flex items-center justify-center">
                  <span className="text-sherwood-black font-bold text-xl">✓</span>
                </div>
                <span className="sherwood-body text-xl font-medium text-sherwood-black">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sherwood-card p-8"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="neon-highlight-box px-4 py-2">
              <span className="sherwood-body text-sm font-bold uppercase">Education</span>
            </div>
          </div>
          <h3 className="sherwood-headline text-3xl md:text-4xl text-sherwood-black mb-4">
            UNIVERSITY OF MIAMI
          </h3>
          <div className="space-y-3">
            <p className="sherwood-body text-lg text-sherwood-gray-700">
              <strong>Major:</strong> Computer Science, Mathematics, Biology
            </p>
            <p className="sherwood-body text-lg text-sherwood-gray-700">
              <strong>Expected Graduation:</strong> May 2026
            </p>
            <p className="sherwood-body text-lg text-sherwood-gray-700">
              <strong>Honors:</strong> Dean's List, Foote Fellow
            </p>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="sherwood-divider mt-16" />
      </div>
    </section>
  );
}
