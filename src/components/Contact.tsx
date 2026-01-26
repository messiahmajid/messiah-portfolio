"use client";

import React from "react";
import { motion } from "framer-motion";
import { EmailIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-te-dark mb-4">
            Get In <span className="text-te-orange">Touch</span>
          </h2>
          <p className="text-text-secondary">
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        {/* Postcard */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          whileHover={{ rotate: 0, y: -5 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          {/* Postcard shadow */}
          <div className="absolute inset-0 bg-te-dark/10 rounded-xl translate-x-2 translate-y-2" />

          {/* Main postcard */}
          <div className="relative bg-white rounded-xl border-2 border-te-dark/10 overflow-hidden">
            {/* Stamp area */}
            <div className="absolute top-4 right-4 w-16 h-20 border-2 border-dashed border-te-orange/50 rounded flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl">📮</span>
                <p className="text-[8px] text-te-orange font-bold mt-1">2025</p>
              </div>
            </div>

            {/* Postcard content */}
            <div className="p-8 md:p-10">
              {/* To/From */}
              <div className="mb-8 pr-24">
                <p className="text-text-muted text-sm font-mono mb-1">TO:</p>
                <p className="text-te-dark font-bold text-lg mb-4">You, Future Collaborator</p>

                <p className="text-text-muted text-sm font-mono mb-1">FROM:</p>
                <p className="text-te-dark font-bold text-lg">Messiah Majid</p>
                <p className="text-text-secondary text-sm">University of Miami</p>
              </div>

              {/* Divider line */}
              <div className="border-t border-dashed border-te-dark/20 my-6" />

              {/* Message */}
              <div className="mb-8">
                <p className="text-text-secondary leading-relaxed italic">
                  &ldquo;I&apos;m always excited to connect with fellow developers,
                  researchers, and innovators. Whether you have a project idea,
                  research opportunity, or just want to chat about tech—I&apos;d love
                  to hear from you!&rdquo;
                </p>
              </div>

              {/* Contact buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:messiah.majid@miami.edu"
                  className="group flex items-center gap-4 p-4 rounded-lg border-2 border-te-dark/10 hover:border-te-orange hover:bg-te-orange/5 transition-all"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-full bg-te-orange/10 flex items-center justify-center group-hover:bg-te-orange/20 transition-colors">
                    <EmailIcon size={20} className="text-te-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-te-dark text-sm">Email</p>
                    <p className="text-text-muted text-xs font-mono">messiah.majid@miami.edu</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/messiahmajid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border-2 border-te-dark/10 hover:border-te-orange hover:bg-te-orange/5 transition-all"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-full bg-te-orange/10 flex items-center justify-center group-hover:bg-te-orange/20 transition-colors">
                    <LinkedInIcon size={20} className="text-te-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-te-dark text-sm">LinkedIn</p>
                    <p className="text-text-muted text-xs font-mono">/in/messiahmajid</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Bottom wave pattern */}
            <div className="h-4 bg-te-surface flex">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r border-te-dark/5"
                  style={{ height: `${8 + Math.sin(i) * 8}px` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
