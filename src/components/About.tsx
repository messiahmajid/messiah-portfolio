"use client";

import React from "react";
import { motion } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon, BookIcon } from "./DoodleIcons";

export default function About() {
  const courses = [
    "Data Structures & Algorithms",
    "Python Programming",
    "Java Programming I & II",
    "Computer Organization",
    "Probability and Statistics",
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-pencil inline-block relative click-wiggle">
            About Me
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
                d="M0 6 Q 50 0, 100 6 T 200 6"
                stroke="#ff6b6b"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* Main Content - Notebook Style */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Card - Like a notebook page */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="bg-white p-8 pl-12 relative shadow-paper card-float hover-jitter"
              style={{
                border: "2px solid #2d2d2d",
                borderRadius: "4px 8px 8px 4px",
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)",
              }}
            >
              <NotebookSpiral />
              <WashiTape className="-top-3 left-8" rotation={-3} color="#ff6b6b" />

              <div className="flex items-center gap-3 mb-4">
                <GraduationCapIcon size={32} className="text-accent-coral" />
                <h3 className="font-marker text-2xl text-pencil click-wiggle">Education</h3>
              </div>

              <div className="space-y-3 font-sketch text-lg">
                <p className="text-pencil font-semibold">
                  The University of Miami
                </p>
                <p className="text-pencil-light">Coral Gables, FL</p>
                <p className="text-pencil">
                  B.S. in{" "}
                  <span className="highlight-text">Computer Science</span>,{" "}
                  <span className="highlight-pink">Math</span> and{" "}
                  <span className="highlight-blue">Biology</span>
                </p>
                <p className="flex items-center gap-2 text-accent-coral font-semibold">
                  <StarDoodle size={20} color="#ffd54f" filled />
                  GPA: 4.0
                </p>
                <p className="text-pencil-light text-base">Expected May 2027</p>
              </div>
            </div>
          </motion.div>

          {/* Honors Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="bg-gradient-to-br from-amber-50 to-white p-8 relative shadow-paper card-float hover-jitter"
              style={{
                border: "3px solid #2d2d2d",
                borderRadius: "8px 4px 4px 8px",
                animationDelay: "0.3s",
              }}
            >
              <WashiTape className="-top-3 right-8" rotation={5} pattern="dots" color="#ffd54f" />

              <div className="flex items-center gap-3 mb-6">
                <TrophyIcon size={32} className="text-yellow-500" />
                <h3 className="font-marker text-2xl text-pencil click-wiggle">Honors & Awards</h3>
              </div>

              <div className="space-y-5">
                {/* Stamps Scholarship - Featured */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-yellow-50 to-amber-50 p-5 rounded-lg shadow-md relative overflow-hidden"
                  style={{ border: "2px solid #ffd54f" }}
                >
                  <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold text-pencil px-2 py-1 rounded-bl">
                    MOST PRESTIGIOUS
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon size={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg text-pencil">
                        Stamps Excellence Scholarship
                      </p>
                      <p className="font-sketch text-sm text-pencil-light mt-1">
                        UM&apos;s most prestigious merit award, recognizing exceptional academic achievement and leadership potential.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Robert Bates Cole Award */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-teal-50 to-cyan-50 p-5 rounded-lg shadow-md"
                  style={{ border: "2px solid #4ecdc4" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#4ecdc4" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg text-pencil">
                        Robert Bates Cole Award
                      </p>
                      <p className="font-sketch text-sm text-pencil-light mt-1">
                        For Volunteer Leadership—honoring integrity and dedication through exceptional community service.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* President's Honor Roll */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-lg shadow-md"
                  style={{ border: "2px solid #a855f7" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#a855f7" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-marker text-lg text-pencil">
                          President&apos;s Honor Roll
                        </p>
                        <span className="bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          5x CONSECUTIVE
                        </span>
                      </div>
                      <p className="font-sketch text-sm text-pencil-light mt-1">
                        Highest scholastic achievement every semester since enrollment—maintaining a perfect 4.0 GPA.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Relevant Courses - Sticky Notes Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookIcon size={28} className="text-accent-purple" />
            <h3 className="font-marker text-2xl text-pencil">Relevant Courses</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, y: 20, rotate: (index % 2 === 0 ? -3 : 3) }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: (index % 2 === 0 ? -2 : 2),
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.15)",
                }}
                className="px-5 py-3 shadow-paper cursor-default"
                style={{
                  background:
                    index % 3 === 0
                      ? "#fff59d"
                      : index % 3 === 1
                      ? "#f8bbd9"
                      : "#b3e5fc",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "2px",
                }}
              >
                <p className="font-sketch text-pencil whitespace-nowrap click-wiggle">
                  {course}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
