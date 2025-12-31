"use client";

import React from "react";
import { motion } from "framer-motion";
import { WashiTape, StarDoodle, PaperClip } from "./SketchyElements";
import { UsersIcon, LightbulbIcon, HeartIcon, CodeIcon, RocketIcon, GlobeIcon } from "./DoodleIcons";
import { SectionPhotoStack } from "./PhotoStack";

interface LeadershipItem {
  title: string;
  organization: string;
  period: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  highlights: string[];
  photos: { id: string; color: string; label?: string }[];
  featured?: boolean;
}

const leadershipRoles: LeadershipItem[] = [
  {
    title: "Founder & Co-President",
    organization: "ColorStack UM",
    period: "Aug 2023 - Present",
    icon: <CodeIcon size={32} />,
    color: "#a855f7",
    featured: true,
    description: "Building the bridge between underrepresented students and tech industry success—one connection at a time.",
    highlights: [
      "Founded UM's chapter from scratch, growing a thriving community of Black and Latinx technologists united by ambition",
      "Architecting partnerships with major tech companies to unlock career pathways that were once out of reach",
      "Creating a culture where technical excellence meets authentic belonging—because representation matters in every line of code",
    ],
    photos: [
      { id: "cs-1", color: "#a855f7", label: "Chapter launch" },
      { id: "cs-2", color: "#9333ea", label: "Tech workshop" },
      { id: "cs-3", color: "#b865f7", label: "Community event" },
      { id: "cs-4", color: "#7c22ce", label: "Industry panel" },
    ],
  },
  {
    title: "Sponsorship Chair",
    organization: "Miami Day of Service Executive Board",
    period: "March 2024 - Present",
    icon: <HeartIcon size={32} />,
    color: "#ff6b6b",
    description: "Turning corporate partnerships into community impact—connecting resources to causes that matter.",
    highlights: [
      "Crafted sponsorship narratives that resonated with 20+ organizations, transforming cold outreach into meaningful partnerships",
      "Orchestrating a service ecosystem of 6,000+ students across 300 organizations—generating over 900 hours of hands-on community impact",
      "Building bridges between campus and community that last beyond single-day events",
    ],
    photos: [
      { id: "dos-1", color: "#ff6b6b", label: "Service day" },
      { id: "dos-2", color: "#e85555", label: "Team planning" },
      { id: "dos-3", color: "#ff8080", label: "Community work" },
      { id: "dos-4", color: "#cc4444", label: "Volunteer impact" },
    ],
  },
  {
    title: "International Student Liaison",
    organization: "Student Government Academic Liaison Council",
    period: "March 2024 - Present",
    icon: <GlobeIcon size={32} />,
    color: "#3b82f6",
    description: "Making Miami home for students from every corner of the world.",
    highlights: [
      "Designing cultural transition experiences that transform first-week anxiety into genuine belonging",
      "Connecting 200+ international students to career resources they didn't know existed—through strategic Toppel Career Center collaboration",
      "Building mentorship bridges where upperclass students guide freshmen through the maze of American university life",
    ],
    photos: [
      { id: "sg-1", color: "#3b82f6", label: "Orientation" },
      { id: "sg-2", color: "#2563eb", label: "Cultural event" },
      { id: "sg-3", color: "#60a5fa", label: "Mentorship" },
      { id: "sg-4", color: "#1d4ed8", label: "Career workshop" },
    ],
  },
  {
    title: "Facilitator",
    organization: "First Year U",
    period: "August 2023 - Present",
    icon: <LightbulbIcon size={32} />,
    color: "#22c55e",
    description: "Shaping future leaders through the lens of public health, civic engagement, and environmental stewardship.",
    highlights: [
      "Guiding first-years through transformative discussions that challenge assumptions and expand worldviews",
      "Collaborating with faculty to design experiential learning that bridges theory and real-world impact",
      "Cultivating the next generation of responsible citizens through mentorship and strategic dialogue",
    ],
    photos: [
      { id: "fyu-1", color: "#22c55e", label: "Facilitation" },
      { id: "fyu-2", color: "#16a34a", label: "Group discussion" },
      { id: "fyu-3", color: "#4ade80", label: "Project work" },
      { id: "fyu-4", color: "#15803d", label: "Community event" },
    ],
  },
  {
    title: "First Year Fellow",
    organization: "University of Miami Residential Life",
    period: "Apr 2024 - Present",
    icon: <UsersIcon size={32} />,
    color: "#f59e0b",
    description: "Helping 78 first-years discover that college is more than classes—it's finding your tribe and your trajectory.",
    highlights: [
      "Boosting student confidence by 30% through personalized academic guidance and research exploration pathways",
      "Running 12 coding workshops that turned Python and Java from intimidating to empowering—improving programming confidence by 35%",
    ],
    photos: [
      { id: "fyf-1", color: "#f59e0b", label: "Mentoring" },
      { id: "fyf-2", color: "#d97706", label: "Workshop" },
      { id: "fyf-3", color: "#fbbf24", label: "Community" },
      { id: "fyf-4", color: "#b45309", label: "Coding session" },
    ],
  },
  {
    title: "Computing & Technology Mentor",
    organization: "Foote Fellows Honors Program",
    period: "Aug 2024 - Present",
    icon: <RocketIcon size={32} />,
    color: "#4ecdc4",
    description: "Elevating honors students from learners to researchers—one algorithm at a time.",
    highlights: [
      "Accelerating research engagement by 40% through dedicated one-on-one mentorship with ambitious honors students",
      "Demystifying data structures and bioinformatics through seminars that translate complexity into capability",
    ],
    photos: [
      { id: "ff-1", color: "#4ecdc4", label: "Mentoring" },
      { id: "ff-2", color: "#3dbdb4", label: "Research" },
      { id: "ff-3", color: "#5dede4", label: "Seminar" },
      { id: "ff-4", color: "#2dadad", label: "Collaboration" },
    ],
  },
];

// TED Talk Feature
const tedTalk = {
  title: "Upcoming TEDx Talk",
  description: "Sharing insights on the intersection of technology, identity, and community building on a global stage.",
  color: "#e11d48",
};

interface ExtracurricularItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const extracurriculars: ExtracurricularItem[] = [
  { name: "Google Developer Students Club", icon: <RocketIcon size={20} />, color: "#4285f4" },
  { name: "National Society of Black Engineers", icon: <UsersIcon size={20} />, color: "#ff6b6b" },
  { name: "Kappa Theta Pi Technology Fraternity", icon: <CodeIcon size={20} />, color: "#a855f7" },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-pencil inline-block relative">
            Leadership & Impact
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
                d="M0 6 Q 40 0, 80 8 T 160 4 T 200 8"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* TED Talk Feature Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="relative bg-gradient-to-r from-red-500 to-red-600 p-8 text-white overflow-hidden"
            style={{
              border: "3px solid #2d2d2d",
              borderRadius: "12px",
            }}
          >
            {/* TED Logo styled decoration */}
            <div className="absolute top-4 right-4 opacity-20">
              <span className="font-bold text-6xl tracking-tighter">TEDx</span>
            </div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-white text-red-600 px-3 py-1 font-bold text-sm rounded">
                  COMING SOON
                </span>
              </div>
              <h3 className="font-marker text-3xl mb-2">{tedTalk.title}</h3>
              <p className="font-sketch text-lg opacity-90 max-w-2xl">
                {tedTalk.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Role - ColorStack */}
        {leadershipRoles.filter(role => role.featured).map((role, index) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div
              className="relative bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg"
              style={{
                border: "3px solid #a855f7",
                borderRadius: "16px",
              }}
            >
              {/* Featured badge */}
              <div className="absolute -top-3 left-8 bg-purple-500 text-white px-4 py-1 font-sketch text-sm rounded-full">
                Founder Spotlight
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mt-4">
                <div className="flex justify-center">
                  <SectionPhotoStack photos={role.photos} size="large" interval={3000} />
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-4 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: `${role.color}20` }}
                    >
                      <span style={{ color: role.color }}>{role.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-marker text-2xl text-pencil">{role.title}</h3>
                      <p className="font-sketch text-xl text-purple-600 font-semibold">{role.organization}</p>
                      <p className="font-handwriting text-lg text-pencil-light">{role.period}</p>
                    </div>
                  </div>

                  <p className="font-sketch text-pencil mb-4 italic text-lg">
                    {role.description}
                  </p>

                  <ul className="space-y-3">
                    {role.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <StarDoodle
                          size={18}
                          color={role.color}
                          filled
                          className="flex-shrink-0 mt-1"
                        />
                        <p className="font-sketch text-pencil leading-relaxed">
                          {highlight}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Leadership Roles */}
        <div className="space-y-12 mb-16">
          {leadershipRoles.filter(role => !role.featured).map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Photo Stack - alternating sides */}
                <motion.div
                  className={`flex justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <SectionPhotoStack photos={role.photos} size="large" interval={3500 + index * 200} />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <PaperClip
                    className={`absolute ${index % 2 === 0 ? "-left-2" : "-right-2"} -top-4 z-10`}
                    color="#888"
                    rotation={index % 2 === 0 ? -15 : 15}
                  />

                  <div
                    className="bg-white p-6 shadow-paper relative"
                    style={{
                      border: "2px solid #2d2d2d",
                      borderRadius: "4px 8px 4px 8px",
                      transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                    }}
                  >
                    <WashiTape
                      className="-top-3 right-8"
                      rotation={index % 2 === 0 ? 3 : -3}
                      pattern="dots"
                      color={role.color}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: `${role.color}20` }}
                      >
                        <span style={{ color: role.color }}>{role.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-marker text-xl text-pencil">{role.title}</h3>
                        <p className="font-sketch text-pencil-light">{role.organization}</p>
                        <p className="font-handwriting text-lg text-pencil-light">
                          {role.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sketch text-pencil mb-4 italic">
                      {role.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {role.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <StarDoodle
                            size={16}
                            color={role.color}
                            filled
                            className="flex-shrink-0 mt-1"
                          />
                          <p className="font-sketch text-sm text-pencil leading-relaxed">
                            {highlight}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <HeartIcon size={28} className="text-accent-coral" />
            <h3 className="font-marker text-2xl text-pencil">Also Part Of</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: (index - 1) * 3 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.15)",
                }}
                className="px-6 py-4 bg-white shadow-paper cursor-default"
                style={{
                  border: "2px solid #2d2d2d",
                  borderRadius: "4px 8px 4px 8px",
                }}
              >
                <p className="font-sketch text-pencil flex items-center gap-3">
                  <span style={{ color: activity.color }}>{activity.icon}</span>
                  {activity.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
