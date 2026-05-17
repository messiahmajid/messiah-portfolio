"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LeadershipItem {
  title: string;
  organization: string;
  period: string;
  highlight: string;
  image: string;
  featured?: boolean;
  link?: string;
}

const leadershipRoles: LeadershipItem[] = [
  {
    title: "Founder & Co-President",
    organization: "ColorStack UM",
    period: "Aug 2023 - Present",
    highlight: "Founded UM's chapter, building community of 150+ minority and underrepresented students in tech",
    image: "/leadership/colorstack.jpg",
    featured: true,
    link: "https://colorstackum.org",
  },
  {
    title: "Sponsorship Chair",
    organization: "Miami Day of Service",
    period: "Mar 2024 - Present",
    highlight: "Raised $8000+, secured 20+ sponsors, coordinated 600+ students across 300 orgs for UM's largest service initiative",
    image: "/leadership/dayofservice.jpg",
    link: "https://multimedia.miami.edu/miami-dream-day-2025",
  },
  {
    title: "International Student Liaison & Assistant Director, Academic Liaison Council",
    organization: "Student Government",
    period: "Mar 2024 - April 2026",
    highlight: "Advocated for student needs and helped connect students to academic, professional, and campus resources",
    image: "/leadership/studentgov.jpg",
    link: "https://sg.miami.edu/about-us/index.html",
  },
  {
    title: "First Year Fellow",
    organization: "UM Residential Life",
    period: "Apr 2024 - Present",
    highlight: "Mentored 160+ first-year students through advising, programming, and peer support",
    image: "/leadership/reslife.jpg",
    link: "https://hrl.studentaffairs.miami.edu/employment-opportunities/student-staff-opportunities/first-year-fellow/index.html",
  },
  {
    title: "Facilitator",
    organization: "First Year U",
    period: "Aug 2023 - Present",
    highlight: "Guided first-year students through leadership programming centered on dialogue, service, and civic engagement",
    image: "/leadership/firstyearu.jpg",
    link: "https://serveandlead.studentaffairs.miami.edu/programs-and-events/leadership-programs/first-year-u/index.html",
  },
  {
    title: "Sponsorship Chair",
    organization: "African Students Union",
    period: "Aug 2023 - Present",
    highlight: "Helped raise thousands of dollars to host our annual Taste of Africa Gala showcase",
    image: "/leadership/asu.jpg",
  },
];

const extracurriculars = [
  "Google Developer Students Club",
  "National Society of Black Engineers",
  "Kappa Theta Pi Tech Fraternity",
];

function BadgeCard({ role, index }: { role: LeadershipItem; index: number }) {
  const rotation = index % 2 === 0 ? -2 : 2;
  const hoverRotation = index % 2 === 0 ? 1 : -1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ rotate: hoverRotation, y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
      className={`relative self-start ${role.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
    >
      {/* Card shadow */}
      <div className="absolute inset-0 bg-te-dark/15 rounded-xl translate-x-2 translate-y-2" />

      <div className="relative bg-white rounded-xl border-2 border-te-dark/10 overflow-hidden shadow-sm hover:shadow-xl transition-all">
        {/* Lanyard hole */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
          <div className="w-8 h-4 bg-te-surface rounded-b-full border-2 border-t-0 border-te-dark/10 flex justify-center">
            <div className="w-3 h-3 rounded-full bg-te-beige border border-te-dark/10 -mt-0.5" />
          </div>
        </div>

        {/* Photo section */}
        <div className="relative h-48 bg-te-surface overflow-hidden">
          <Image
            src={role.image}
            alt={role.organization}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Photo overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

          {/* Tape corners */}
          <div className="absolute top-3 left-3 w-8 h-3 bg-te-orange/40 rotate-[-15deg] rounded-sm" />
          <div className="absolute top-3 right-3 w-8 h-3 bg-te-orange/40 rotate-[15deg] rounded-sm" />
        </div>

        {/* Badge content */}
        <div className="p-5 pt-3">
          {/* Organization badge */}
          {role.link ? (
            <a
              href={role.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-2 py-1 bg-te-orange text-white text-[10px] font-bold uppercase tracking-wider rounded mb-3 hover:bg-te-orange/80 transition-colors"
            >
              {role.organization}
            </a>
          ) : (
            <div className="inline-block px-2 py-1 bg-te-orange text-white text-[10px] font-bold uppercase tracking-wider rounded mb-3">
              {role.organization}
            </div>
          )}

          <h3 className="text-lg font-bold text-te-dark mb-2 leading-tight">
            {role.title}
          </h3>

          <p className="text-text-muted text-xs font-mono mb-3">
            {role.period}
          </p>

          <p className="text-text-secondary text-sm leading-relaxed">
            {role.highlight}
          </p>
        </div>

        {/* Bottom stripe */}
        <div className="h-2 bg-gradient-to-r from-te-orange via-te-orange/60 to-te-orange" />
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-te-dark mb-4">
            Leadership & <span className="text-te-orange">Community</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Organizations, initiatives, and spaces I've helped grow alongside others.
          </p>
        </motion.div>

        {/* Badge Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {leadershipRoles.map((role, index) => (
            <BadgeCard key={`${role.title}-${role.organization}`} role={role} index={index} />
          ))}
        </div>

        {/* Also Part Of */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-te-dark mb-4">Also Part Of</h3>
          <div className="flex flex-wrap gap-3">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center bg-white border border-te-dark/10 rounded-lg overflow-hidden">
                  <div className="w-1.5 h-full bg-te-orange" />
                  <div className="px-4 py-2">
                    <span className="text-sm font-medium text-text-secondary">
                      {activity}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
