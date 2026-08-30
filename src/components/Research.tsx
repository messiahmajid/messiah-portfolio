"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Research() {

  return (
    <section id="research" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-te-dark">
            Library Research <span className="text-te-orange">Scholar</span>
          </h2>
          <p className="text-text-muted mt-3 font-mono">
            University of Miami Libraries
          </p>
          <p className="text-xl text-text-secondary mt-4">
            Technocolonialism &amp; the AI Supremacy Race
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-te-dark/20 rounded-2xl translate-x-3 translate-y-3" />

          <div className="relative rounded-2xl overflow-hidden border-2 border-te-dark/10">
            <Image
              src="/research/library-scholar-1.jpg"
              alt="Library Research Scholar"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Description Section - Below Images */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              Over the past academic year, I was one of five students selected for the University of Miami Library Research Scholars program, which gave me the opportunity to spend a year designing and developing my own unique research project.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              My project focused on technocolonialism and the AI supremacy race — specifically how modern AI systems can reproduce older patterns of extraction and unequal power across Africa.
            </p>

            {/* Highlighted Quote */}
            <div className="relative pl-6 border-l-4 border-te-orange py-2">
              <span className="absolute -left-3 -top-1 text-5xl text-te-orange/30 font-serif">&ldquo;</span>
              <p className="text-2xl font-medium text-te-dark leading-snug">
                If AI depends on minerals, data, labor, and infrastructure from around the world, who actually benefits from the systems being built?
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 border-2 border-te-dark/10">
              <p className="text-sm text-te-orange mb-3 font-mono uppercase tracking-wider font-bold">
                The Work
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Over the course of the year, I wrote a long-form research paper, developed a research poster, and presented the work at the University of Miami Research, Creativity, and Innovation Forum and to university leadership.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-te-dark/10">
              <p className="text-lg text-text-secondary leading-relaxed">
                I&apos;m incredibly grateful for the mentorship, support, and freedom the program gave me, and I hope to continue expanding on the research moving forward.
              </p>
              <p className="text-sm text-te-dark font-medium mt-4">
                The final paper and poster are now hosted in the University of Miami&apos;s Scholarship@Miami repository.
              </p>
              <a
                href="https://scholarship.miami.edu/esploro/outputs/991033051934002976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-te-orange text-white text-sm font-medium rounded-lg hover:bg-te-orange/80 transition-colors"
              >
                View on Scholarship@Miami →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
