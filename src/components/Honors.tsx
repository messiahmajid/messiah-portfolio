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
            honors & <span className="text-te-orange">recognition.</span>
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

                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  Omicron Delta Kappa is a national leadership honor society recognizing students for scholarship, leadership, service, and campus involvement.
                </p>

                <p className="text-text-secondary text-sm leading-relaxed">
                  What meant the most to me about joining ODK was being surrounded by people at UM doing genuinely impressive things — building organizations, conducting research, creating opportunities for others, and pushing their fields forward in different ways.
                </p>
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

                  <div className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      This award recognized students involved in service and leadership across the University of Miami community.
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      A lot of the opportunities I&apos;ve had in college came from people who were willing to give their time, open doors for others, and help without expecting recognition for it. Being part of communities built by people like that shaped how I think about leadership and service.
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      Most of the work behind strong communities is steady and largely invisible. I&apos;m grateful to have learned from people who showed me what that looks like.
                    </p>
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

        {/* Jenkins Legacy Leadership Award */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-te-dark/15 rounded-2xl translate-x-3 translate-y-3" />

            <div className="relative bg-te-dark rounded-2xl overflow-hidden text-white">
              <div className="grid md:grid-cols-5">
                {/* Image side - left */}
                <div className="md:col-span-2 relative h-64 md:h-auto min-h-[280px]">
                  <Image
                    src="/honors/first-gen-canes-legacy.jpg"
                    alt="First Gen Canes Legacy Leadership Award"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-te-dark/30 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-te-dark/50 to-transparent md:hidden" />

                  <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-te-orange/60 rounded-full" />
                  </div>
                </div>

                {/* Content side */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="inline-block px-3 py-1 bg-te-orange text-white text-xs font-bold uppercase tracking-wider rounded mb-6">
                    First Gen Canes
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    First Gen Canes Legacy Leadership Award
                  </h3>

                  <div className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      Receiving this award made me reflect a lot on what being first-generation has actually meant in my life.
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      For a long time, I thought being first-gen was mostly about pressure — translating things for my parents, figuring things out alone, feeling like every opportunity had to count for something bigger than myself. But over time I realized it was also about community.
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      A lot of the opportunities, confidence, and direction I&apos;ve found in college came from people who took the time to help me, guide me, or simply make space for me when I needed it. This award reminded me how important that kind of support really is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vivian Berger Giller Endowed Impact Award */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-te-dark/15 rounded-2xl translate-x-3 translate-y-3" />

            <div className="relative bg-te-dark rounded-2xl overflow-hidden text-white">
              <div className="grid md:grid-cols-5">
                {/* Content side */}
                <div className="md:col-span-3 p-8 md:p-10 order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-te-orange text-white text-xs font-bold uppercase tracking-wider rounded mb-6">
                    Impact Award
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Vivian Berger Giller Endowed Impact Award
                  </h3>

                  <div className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      This award recognized students who created meaningful impact through leadership, service, and campus initiatives.
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      A lot of the work I&apos;ve done in college has been collaborative by nature — helping organize programs, working alongside student organizations, contributing to projects that improve student experiences, and trying to leave spaces better than I found them.
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      I&apos;ve been lucky to work with people who care deeply about building things that genuinely help others, and this recognition felt representative of that collective effort more than anything individual.
                    </p>
                  </div>
                </div>

                {/* Image side - right */}
                <div className="md:col-span-2 relative h-64 md:h-auto min-h-[280px] order-1 md:order-2">
                  <Image
                    src="/honors/vivian-berger-giller.jpg"
                    alt="Vivian Berger Giller Endowed Impact Award"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-te-dark/30 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-te-dark/50 to-transparent md:hidden" />

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
