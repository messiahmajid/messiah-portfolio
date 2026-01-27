"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Honors() {
  return (
    <section id="honors" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-te-dark mb-4">
            Honors & <span className="text-te-orange">Recognition</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Awards and scholarships that have shaped my journey.
          </p>
        </motion.div>

        {/* Top Row - Stamps Scholar + ODK */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Stamps Scholar Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-te-dark/15 rounded-xl translate-x-2 translate-y-2" />

            <div className="relative bg-white rounded-xl border-2 border-te-dark/10 overflow-hidden h-full">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/honors/stamps-scholar.jpg"
                  alt="Stamps Scholar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <div className="px-2 py-1 bg-te-orange text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    UM&apos;s Most Prestigious
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-te-dark mb-3">
                  Stamps Scholarship
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Being named a Stamps Scholar is one of the honors I&apos;m most grateful for.
                  It gave me not just financial support, but a community of driven peers who
                  push me to think bigger every day.
                </p>

                <div className="bg-te-surface rounded-lg p-3 border-l-4 border-te-orange">
                  <p className="text-xs text-text-muted italic">
                    Awarded to exceptional high school seniors who demonstrate academic
                    excellence and leadership potential.
                  </p>
                </div>

                <a
                  href="https://admissions.miami.edu/undergraduate/financial-aid/scholarships/stamps/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-te-orange hover:underline mt-4"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Omicron Delta Kappa Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-te-dark/15 rounded-xl translate-x-2 translate-y-2" />

            <div className="relative bg-white rounded-xl border-2 border-te-dark/10 overflow-hidden h-full">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/honors/odk.jpg"
                  alt="Omicron Delta Kappa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <div className="px-2 py-1 bg-te-dark text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    Honor Society
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-te-dark mb-3">
                  Omicron Delta Kappa
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Being inducted into ODK was a moment of reflection—recognizing that leadership
                  isn&apos;t just about what you do, but how you bring people together across
                  different backgrounds and perspectives.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Scholarship", "Service"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-te-surface text-text-muted text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Robert Bates Cole Award - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-te-dark/15 rounded-2xl translate-x-3 translate-y-3" />

            <div className="relative bg-te-dark rounded-2xl overflow-hidden text-white">
              <div className="grid md:grid-cols-5">
                {/* Content side */}
                <div className="md:col-span-3 p-8 md:p-10 order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-te-orange text-white text-xs font-bold uppercase tracking-wider rounded mb-6">
                    Volunteer Leadership Award
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Robert Bates Cole Award
                  </h3>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-white/80 leading-relaxed">
                      Winning this award meant more to me than I expected. It&apos;s not just about
                      logging volunteer hours—it&apos;s about the quiet, consistent work of showing
                      up for your community.
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      This award recognizes students who exemplify integrity and dedication through
                      exceptional participation in community service. For me, service has never been
                      about recognition—it&apos;s about the people you help along the way.
                    </p>
                  </div>

                  {/* Award criteria */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Integrity", desc: "Leading with honesty" },
                      { label: "Dedication", desc: "Consistent commitment" },
                      { label: "Service", desc: "Community impact" },
                      { label: "Leadership", desc: "Organizing initiatives" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-te-orange/20 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-te-orange" />
                        </div>
                        <div>
                          <p className="font-medium text-white text-sm">{item.label}</p>
                          <p className="text-white/50 text-xs">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <div className="md:col-span-2 relative h-64 md:h-auto min-h-[280px] order-1 md:order-2">
                  <Image
                    src="/honors/robert-bales-cole.jpg"
                    alt="Robert Bales Cole Award"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-te-dark/30 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-te-dark/50 to-transparent md:hidden" />

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-te-orange/60 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
