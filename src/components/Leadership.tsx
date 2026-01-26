"use client";

import React from "react";
import { motion } from "framer-motion";

interface LeadershipItem {
  title: string;
  organization: string;
  period: string;
  highlight: string;
  featured?: boolean;
}

const leadershipRoles: LeadershipItem[] = [
  {
    title: "Founder & Co-President",
    organization: "ColorStack UM",
    period: "Aug 2023 - Present",
    highlight: "Founded UM's chapter, built community of 50+ Black & Latinx CS students",
    featured: true,
  },
  {
    title: "Sponsorship Chair",
    organization: "Miami Day of Service",
    period: "Mar 2024 - Present",
    highlight: "Secured 20+ sponsors, coordinated 6,000 students across 300 orgs",
  },
  {
    title: "International Student Liaison",
    organization: "Student Government",
    period: "Mar 2024 - Present",
    highlight: "Connected 200+ international students to career resources",
  },
  {
    title: "First Year Fellow",
    organization: "UM Residential Life",
    period: "Apr 2024 - Present",
    highlight: "Mentored 78 students, led 12 coding workshops",
  },
  {
    title: "Tech Mentor",
    organization: "Foote Fellows Honors",
    period: "Aug 2024 - Present",
    highlight: "Increased mentee research participation by 40%",
  },
  {
    title: "Facilitator",
    organization: "First Year U",
    period: "Aug 2023 - Present",
    highlight: "Led seminars on civic engagement and public health",
  },
];

const extracurriculars = [
  "Google Developer Students Club",
  "National Society of Black Engineers",
  "Kappa Theta Pi Tech Fraternity",
];

function BadgeCard({ role, index }: { role: LeadershipItem; index: number }) {
  const rotation = index % 2 === 0 ? -1.5 : 1.5;
  const hoverRotation = index % 2 === 0 ? 0.5 : -0.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ rotate: hoverRotation, y: -5, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`relative ${role.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative bg-white rounded-xl border-2 border-te-dark/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {/* Top bar with badge holes */}
        <div className="relative h-6 bg-te-orange">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 w-3 h-3 rounded-full bg-white/30" />
          <div className="absolute top-1/2 right-4 -translate-y-1/2 w-3 h-3 rounded-full bg-white/30" />
        </div>

        {/* Lanyard slot */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-2 rounded-full border-2 border-te-dark/10 bg-te-beige" />

        <div className="p-5 pt-4">
          {/* Badge number */}
          <div className="text-xs font-mono text-text-muted mb-3">
            #{String(index + 1).padStart(2, '0')}
          </div>

          <h3 className={`font-bold text-te-dark mb-1 ${role.featured ? 'text-xl' : 'text-lg'}`}>
            {role.title}
          </h3>

          <p className="text-te-orange font-medium text-sm mb-1">
            {role.organization}
          </p>

          <p className="text-text-muted text-xs font-mono mb-3">
            {role.period}
          </p>

          <p className="text-text-secondary text-sm leading-relaxed">
            {role.highlight}
          </p>
        </div>

        {/* Bottom barcode */}
        <div className="px-5 pb-3">
          <div className="flex gap-0.5 h-4 opacity-15">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="bg-te-dark"
                style={{ width: i % 3 === 0 ? '3px' : '1px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  const featured = leadershipRoles.find((role) => role.featured);
  const others = leadershipRoles.filter((role) => !role.featured);

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
            Leadership & <span className="text-te-orange">Impact</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Roles where I built communities and mentored others.
          </p>
        </motion.div>

        {/* TEDx Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative overflow-hidden rounded-xl bg-te-dark p-6 text-white">
            <div className="absolute top-2 right-4 text-5xl font-bold opacity-10">
              TEDx
            </div>
            <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-te-orange rounded mb-2">
              Coming Soon
            </span>
            <h3 className="text-lg font-bold">Upcoming TEDx Talk</h3>
            <p className="text-white/60 text-sm mt-1">
              Speaking on technology, identity, and community.
            </p>
          </div>
        </motion.div>

        {/* Badge Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured && <BadgeCard role={featured} index={0} />}
          {others.map((role, index) => (
            <BadgeCard key={role.title} role={role} index={index + 1} />
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
