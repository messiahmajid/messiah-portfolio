"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon } from "./DoodleIcons";
import Image from "next/image";

// Story pages data - now using images instead of SVG components
const storyPages = [
  {
    id: 1,
    title: "Where It Started",
    content: "I'm an international student from Accra, Ghana. Growing up, I was always curious about how things work - from the patterns in nature to the logic in machines.",
    image: "/images/flipbook/journey-doodle.png",
    accentColor: "#DC6B5A",
  },
  {
    id: 2,
    title: "What Fascinates Me",
    content: "I'm fascinated by how data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
    image: "/images/flipbook/tech-doodle.png",
    accentColor: "#DC6B5A",
  },
  {
    id: 3,
    title: "My Approach",
    content: "At the University of Miami, I'm combining Mathematics, Computer Science, and Biology. Math sharpens my understanding, CS equips me to build tools, and Biology connects it all to living systems.",
    image: "/images/flipbook/study-doodle.png",
    accentColor: "#DC6B5A",
  },
  {
    id: 4,
    title: "Beyond The Books",
    content: "I love volunteering and giving back to my community. Whether it's tutoring, organizing events, or mentoring - service is a core part of who I am.",
    image: "/images/flipbook/service-doodle.png",
    accentColor: "#DC6B5A",
  },
];

// What I'm Looking For items - no emojis, simpler labels
const lookingForItems = [
  { id: 1, label: "Impactful work" },
  { id: 2, label: "Meaningful projects" },
  { id: 3, label: "Diverse team of talented folks" },
];

// Animated handwritten checkmark component with fill effect
const HandwrittenCheck = ({ isChecked }: { isChecked: boolean }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0">
    {/* Background fill when checked */}
    <motion.rect
      x="3"
      y="3"
      width="26"
      height="26"
      rx="4"
      fill="#DC6B5A"
      initial={{ opacity: 0 }}
      animate={{ opacity: isChecked ? 0.15 : 0 }}
      transition={{ duration: 0.3 }}
    />
    {/* Border */}
    <rect
      x="3"
      y="3"
      width="26"
      height="26"
      rx="4"
      fill="none"
      stroke="#DC6B5A"
      strokeWidth="3"
    />
    {isChecked && (
      <motion.path
        d="M8 16 L13 21 L24 10"
        fill="none"
        stroke="#DC6B5A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    )}
  </svg>
);

// Scattered decorative doodles for right page
const RightPageDoodles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 450" preserveAspectRatio="none">
    <g fill="none" stroke="#DC6B5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
      {/* Top right corner - star */}
      <g transform="translate(350, 30)">
        <path d="M0 -8 L2 -2 L8 -2 L4 2 L5 8 L0 4 L-5 8 L-4 2 L-8 -2 L-2 -2 Z" fill="#DC6B5A" fillOpacity="0.3" />
      </g>
      {/* Top left - small flower */}
      <g transform="translate(30, 50)">
        <circle cx="0" cy="0" r="4" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M0 -8 Q2 -5 0 -4 Q-2 -5 0 -8" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M0 4 Q2 7 0 8 Q-2 7 0 4" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M-5 0 Q-3 2 -4 0 Q-3 -2 -5 0" fill="#DC6B5A" fillOpacity="0.2" />
        <path d="M5 0 Q3 2 4 0 Q3 -2 5 0" fill="#DC6B5A" fillOpacity="0.2" />
      </g>
      {/* Middle right - squiggle */}
      <path d="M370 180 Q380 170 375 160 Q370 150 380 145" strokeWidth="2" />
      {/* Bottom left - sparkle */}
      <g transform="translate(40, 380)">
        <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#DC6B5A" fillOpacity="0.3" />
      </g>
      {/* Bottom right - tiny heart */}
      <g transform="translate(360, 400)">
        <path d="M0 4 L-6 -2 Q-6 -8 0 -4 Q6 -8 6 -2 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
      {/* Middle left - dots */}
      <circle cx="25" cy="200" r="2" fill="#DC6B5A" fillOpacity="0.3" />
      <circle cx="35" cy="210" r="1.5" fill="#DC6B5A" fillOpacity="0.2" />
      <circle cx="20" cy="220" r="2.5" fill="#DC6B5A" fillOpacity="0.25" />
      {/* Top middle - small cloud */}
      <g transform="translate(200, 25)">
        <path d="M0 8 Q-4 8 -4 4 Q-5 0 -1 0 Q1 -3 5 -2 Q9 -3 11 1 Q14 3 12 6 Q14 10 8 9 Q4 12 0 8" fill="#DC6B5A" fillOpacity="0.15" stroke="none" />
      </g>
      {/* Right side - wavy line */}
      <path d="M385 250 Q390 260 385 270 Q380 280 385 290" strokeWidth="1.5" opacity="0.3" />
      {/* Bottom middle - small star */}
      <g transform="translate(180, 420)">
        <path d="M0 -5 L1.5 -1.5 L5 -1.5 L2.5 1 L3.5 5 L0 2.5 L-3.5 5 L-2.5 1 L-5 -1.5 L-1.5 -1.5 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
    </g>
  </svg>
);

// Scattered doodles for What I Look For section
const WhatILookForDoodles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
    <g fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35">
      <g transform="translate(50, 40)" stroke="#5BA3D0">
        <circle cx="0" cy="0" r="6" fill="#5BA3D0" fillOpacity="0.3" />
      </g>
      <g transform="translate(720, 50)" stroke="#DC6B5A">
        <path d="M0 -10 L2.5 -2.5 L10 -2.5 L5 2.5 L6 10 L0 5 L-6 10 L-5 2.5 L-10 -2.5 L-2.5 -2.5 Z" fill="#DC6B5A" fillOpacity="0.35" />
      </g>
      <g transform="translate(80, 350)" stroke="#DC6B5A">
        <path d="M0 8 L-12 -5 Q-12 -15 0 -8 Q12 -15 12 -5 Z" fill="#DC6B5A" fillOpacity="0.25" />
      </g>
      <g transform="translate(770, 280)" stroke="#5BA3D0">
        <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#5BA3D0" fillOpacity="0.4" />
      </g>
    </g>
  </svg>
);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 2]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -2]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems(prev => {
      const newChecked = prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id];

      // Show GIF when all checked, hide when any unchecked
      setShowCelebration(newChecked.length === lookingForItems.length);

      return newChecked;
    });
  };

  // Auto-flip the flipbook every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % storyPages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-5xl sm:text-6xl text-white inline-block relative click-wiggle">
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
                stroke="#DC6B5A"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
        </motion.div>

        {/* Flipbook Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              border: '3px solid #DC6B5A',
              background: 'var(--paper-color)',
            }}
          >
            {/* Book spine shadow */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 z-10 pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.08) 100%)',
              }}
            />

            {/* Book content */}
            <div className="grid md:grid-cols-2 gap-0 min-h-[420px]" style={{ perspective: '1500px' }}>
              {/* Left page */}
              <div
                className="p-6 md:p-8 relative overflow-hidden"
                style={{
                  borderRight: '2px solid rgba(199, 93, 74, 0.2)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ rotateY: -90, opacity: 0, transformOrigin: 'right center' }}
                    animate={{ rotateY: 0, opacity: 1, transformOrigin: 'right center' }}
                    exit={{ rotateY: 90, opacity: 0, transformOrigin: 'right center' }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                  >
                    <Image
                      src={storyPages[currentPage].image}
                      alt={storyPages[currentPage].title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right page */}
              <div
                className="p-6 md:p-8 relative flex flex-col justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ rotateY: 90, opacity: 0, transformOrigin: 'left center' }}
                    animate={{ rotateY: 0, opacity: 1, transformOrigin: 'left center' }}
                    exit={{ rotateY: -90, opacity: 0, transformOrigin: 'left center' }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-sketch mb-3"
                      style={{ background: 'rgba(199, 93, 74, 0.15)', color: '#DC6B5A' }}
                    >
                      {currentPage + 1} / {storyPages.length}
                    </span>
                    <h3 className="font-handwriting text-3xl md:text-4xl mb-4 font-bold" style={{ color: '#DC6B5A' }}>
                      {storyPages[currentPage].title}
                    </h3>
                    <p className="font-sketch text-lg leading-relaxed font-semibold" style={{ color: '#5a4a42' }}>
                      {storyPages[currentPage].content}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Page navigation dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {storyPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentPage ? 'scale-125' : 'opacity-40 hover:opacity-60'}`}
                      style={{ backgroundColor: '#DC6B5A' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Page flip buttons */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors z-20"
              style={{ background: 'var(--paper-color)', border: '2px solid #DC6B5A' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC6B5A" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(storyPages.length - 1, prev + 1))}
              disabled={currentPage === storyPages.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors z-20"
              style={{ background: 'var(--paper-color)', border: '2px solid #DC6B5A' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC6B5A" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* What I Look For Section - Compact and centered */}
        <div className="mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{
                border: '3px solid #DC6B5A',
                background: 'var(--paper-color)',
                transform: 'rotate(-1deg)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-3 overflow-hidden">
                <svg width="100%" height="12" preserveAspectRatio="none">
                  <path d="M0 12 Q10 8 20 12 T40 12 T60 12 T80 12 T100 12 T120 12 T140 12 T160 12 T180 12 T200 12 T220 12 T240 12 T260 12 T280 12 T300 12 L300 0 L0 0 Z" fill="var(--paper-color)" />
                </svg>
              </div>

              <div className="p-8 md:p-12 relative z-10 text-center">
                <h3 className="font-handwriting text-4xl md:text-5xl mb-10 font-bold" style={{ color: '#2d2d2d' }}>
                  What I look for
                </h3>

                <div className="max-w-md mx-auto space-y-2">
                  {lookingForItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="relative py-4 cursor-pointer"
                      style={{
                        borderBottom: index < lookingForItems.length - 1 ? '2px dashed rgba(199, 93, 74, 0.3)' : 'none',
                      }}
                      onClick={() => handleCheckboxChange(item.id)}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-5 justify-center">
                        <HandwrittenCheck isChecked={checkedItems.includes(item.id)} />
                        <span
                          className="font-handwriting text-2xl md:text-3xl font-bold"
                          style={{
                            color: '#2d2d2d',
                            textDecoration: checkedItems.includes(item.id) ? 'line-through' : 'none',
                            opacity: checkedItems.includes(item.id) ? 0.7 : 1,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  <motion.a
                    href="#contact"
                    className="inline-block mt-8 px-10 py-4 font-handwriting text-2xl md:text-3xl font-bold rounded-xl transition-colors"
                    style={{
                      border: '4px solid #DC6B5A',
                      color: '#DC6B5A',
                      background: 'transparent',
                    }}
                    whileHover={{ scale: 1.05, background: 'rgba(199, 93, 74, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    let&apos;s connect!
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Celebration GIF tray */}
          <AnimatePresence>
            {showCelebration && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="relative z-0 w-full max-w-2xl overflow-hidden"
                style={{ marginTop: "-3px" }}
              >
                <div
                  className="rounded-b-2xl overflow-hidden"
                  style={{
                    border: '3px solid #DC6B5A',
                    borderTop: 'none',
                  }}
                >
                  <div className="relative w-full aspect-video">
                    <Image
                      src="/images/celebration.gif"
                      alt="Celebration"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Education and Honors Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ y: y1, rotate: rotate1 }}
            className="relative"
          >
            <div
              className="p-8 pl-12 relative shadow-paper card-sweep rounded-2xl"
              style={{
                background: '#FFFFFF',
                border: "2px solid #DC6B5A",
                backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(199, 93, 74, 0.15) 31px, rgba(199, 93, 74, 0.15) 32px)",
              }}
            >
              <NotebookSpiral />
              <WashiTape className="-top-3 left-8" rotation={-3} color="#DC6B5A" />
              <div className="flex items-center gap-3 mb-4">
                <GraduationCapIcon size={32} className="text-[#DC6B5A]" />
                <h3 className="font-marker text-2xl" style={{ color: '#DC6B5A' }}>Education</h3>
              </div>
              <div className="space-y-3 font-sketch text-lg">
                <p className="font-semibold" style={{ color: '#5a4a42' }}>The University of Miami</p>
                <p style={{ color: '#7a6a62' }}>Coral Gables, FL</p>
                <p style={{ color: '#5a4a42' }}>B.S. in <span className="highlight-text">Computer Science</span>, <span className="highlight-pink">Math</span> and <span className="highlight-blue">Biology</span></p>
                <p className="flex items-center gap-2 font-semibold" style={{ color: '#DC6B5A' }}>
                  <StarDoodle size={20} color="#DC6B5A" filled /> GPA: 4.0
                </p>
                <p className="text-base" style={{ color: '#7a6a62' }}>Expected May 2027</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: y2, rotate: rotate2 }}
            className="relative"
          >
            <div
              className="p-8 relative shadow-paper card-sweep rounded-2xl"
              style={{ background: '#FFFFFF', border: "3px solid #DC6B5A" }}
            >
              <WashiTape className="-top-3 right-8" rotation={5} pattern="dots" color="#DC6B5A" />
              <div className="flex items-center gap-3 mb-6">
                <TrophyIcon size={32} className="text-[#DC6B5A]" />
                <h3 className="font-marker text-2xl" style={{ color: '#DC6B5A' }}>Honors & Awards</h3>
              </div>
              <div className="space-y-5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md relative overflow-hidden"
                  style={{ background: 'rgba(199, 93, 74, 0.08)', border: "2px solid #DC6B5A" }}
                >
                  <div className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl" style={{ background: '#DC6B5A', color: 'white' }}>MOST PRESTIGIOUS</div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon size={24} className="text-[#DC6B5A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg" style={{ color: '#3d3d3d' }}>Stamps Excellence Scholarship</p>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#5a5a5a' }}>UM&apos;s most prestigious merit award</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(91, 163, 208, 0.08)', border: "2px solid #5BA3D0" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#5BA3D0" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-marker text-lg" style={{ color: '#3d3d3d' }}>Robert Bates Cole Award</p>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#5a5a5a' }}>For Volunteer Leadership</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl shadow-md"
                  style={{ background: 'rgba(78, 205, 196, 0.08)', border: "2px solid #4ecdc4" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#4ecdc4" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-marker text-lg" style={{ color: '#3d3d3d' }}>President&apos;s Honor Roll</p>
                        <span className="text-white text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#4ecdc4' }}>5x</span>
                      </div>
                      <p className="font-sketch text-sm mt-1" style={{ color: '#5a5a5a' }}>Consecutive semesters with 4.0 GPA</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}