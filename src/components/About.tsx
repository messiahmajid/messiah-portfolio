"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NotebookSpiral, WashiTape, StarDoodle } from "./SketchyElements";
import { GraduationCapIcon, TrophyIcon, GitHubIcon, LinkedInIcon, EmailIcon } from "./DoodleIcons";
import Image from "next/image";

// Story pages data
const storyPages = [
  {
    id: 1,
    title: "Where It Started",
    content: "I'm an international student from Accra, Ghana. Growing up, I was always curious about how things work — from the patterns in nature to the logic in machines.",
    image: "/images/flipbook/journey-doodle.png",
  },
  {
    id: 2,
    title: "What Fascinates Me",
    content: "I'm fascinated by how data and technology can decode the complexities of life and inspire real-world solutions. The intersection of science and tech is where magic happens.",
    image: "/images/flipbook/tech-doodle.png",
  },
  {
    id: 3,
    title: "My Approach",
    content: "At the University of Miami, I'm combining Mathematics, Computer Science, and Biology. Math sharpens my understanding, CS equips me to build tools, and Biology connects it all to living systems.",
    image: "/images/flipbook/study-doodle.png",
  },
  {
    id: 4,
    title: "Beyond The Books",
    content: "I love volunteering and giving back to my community. Whether it's tutoring, organizing events, or mentoring — service is a core part of who I am.",
    image: "/images/flipbook/service-doodle.png",
  },
];

// Social links data
const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/MessiahM",
    icon: GitHubIcon,
    color: "#333333",
    hoverColor: "rgba(51, 51, 51, 0.1)",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/messiahmajid",
    icon: LinkedInIcon,
    color: "#0077B5",
    hoverColor: "rgba(0, 119, 181, 0.1)",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:messiah.majid@miami.edu",
    icon: EmailIcon,
    color: "#DC6B5A",
    hoverColor: "rgba(220, 107, 90, 0.1)",
  },
];

// Animated line component for visual interest
const AnimatedLine = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="h-px bg-gradient-to-r from-transparent via-[#DC6B5A] to-transparent"
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 0.3 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
  />
);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHoveringStory, setIsHoveringStory] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

  // Auto-flip the flipbook every 5 seconds (pause on hover)
  useEffect(() => {
    if (isHoveringStory) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % storyPages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHoveringStory]);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Title - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-[#DC6B5A] font-editorial-body text-lg tracking-widest uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get to Know
          </motion.span>
          <h2 className="font-editorial text-6xl sm:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            About Me
          </h2>
          <AnimatedLine delay={0.4} />
        </motion.div>

        {/* Social Links - Prominent & Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 mb-20"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.id !== "email" ? "_blank" : undefined}
              rel={link.id !== "email" ? "noopener noreferrer" : undefined}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ background: link.color }}
              />

              {/* Button */}
              <div
                className="relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 group-hover:border-transparent"
                style={{
                  borderColor: link.color,
                  background: "rgba(33, 33, 33, 0.8)",
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <link.icon size={28} style={{ color: link.color }} />
                </motion.div>
                <span
                  className="font-editorial text-lg font-medium hidden sm:block"
                  style={{ color: link.color }}
                >
                  {link.label}
                </span>
              </div>

              {/* Animated underline on hover */}
              <motion.div
                className="absolute -bottom-1 left-1/2 h-0.5 rounded-full"
                style={{ background: link.color }}
                initial={{ width: 0, x: "-50%" }}
                whileHover={{ width: "80%", x: "-50%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Story Flipbook - Clean Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
          onMouseEnter={() => setIsHoveringStory(true)}
          onMouseLeave={() => setIsHoveringStory(false)}
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: '2px solid rgba(220, 107, 90, 0.3)',
              background: 'var(--paper-color)',
            }}
          >
            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#DC6B5A] opacity-30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#DC6B5A] opacity-30 rounded-br-3xl" />

            {/* Book content */}
            <div className="grid md:grid-cols-2 gap-0 min-h-[450px]">
              {/* Left page - Image */}
              <div className="p-8 md:p-12 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#f5e6da] to-[#F2DCCB]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-full h-[300px] md:h-[350px]"
                  >
                    <Image
                      src={storyPages[currentPage].image}
                      alt={storyPages[currentPage].title}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right page - Content */}
              <div className="p-8 md:p-12 relative flex flex-col justify-center border-l border-[#DC6B5A]/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Page indicator */}
                    <motion.span
                      className="inline-block font-editorial-body text-sm tracking-widest uppercase mb-4"
                      style={{ color: '#DC6B5A' }}
                    >
                      Chapter {currentPage + 1}
                    </motion.span>

                    {/* Title */}
                    <h3 className="font-editorial text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight" style={{ color: '#2d2d2d' }}>
                      {storyPages[currentPage].title}
                    </h3>

                    {/* Content */}
                    <p className="font-editorial-body text-lg md:text-xl leading-relaxed" style={{ color: '#4a4a4a' }}>
                      {storyPages[currentPage].content}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10">
                  {/* Dots */}
                  <div className="flex items-center gap-3">
                    {storyPages.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          className="w-3 h-3 rounded-full transition-colors duration-300"
                          style={{
                            backgroundColor: index === currentPage ? '#DC6B5A' : 'transparent',
                            border: '2px solid #DC6B5A',
                          }}
                          animate={{
                            scale: index === currentPage ? 1 : 0.8,
                          }}
                        />
                      </motion.button>
                    ))}
                  </div>

                  {/* Arrows */}
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => setCurrentPage(prev => (prev - 1 + storyPages.length) % storyPages.length)}
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#DC6B5A] text-[#DC6B5A] hover:bg-[#DC6B5A] hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </motion.button>
                    <motion.button
                      onClick={() => setCurrentPage(prev => (prev + 1) % storyPages.length)}
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#DC6B5A] text-[#DC6B5A] hover:bg-[#DC6B5A] hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education and Honors Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ y: y1, rotate: rotate1 }}
            className="relative group"
          >
            <motion.div
              className="p-8 pl-12 relative rounded-2xl overflow-hidden"
              style={{
                background: '#FFFFFF',
                border: "2px solid #DC6B5A",
              }}
              whileHover={{
                boxShadow: "0 20px 40px rgba(220, 107, 90, 0.15)",
                y: -4
              }}
              transition={{ duration: 0.3 }}
            >
              <NotebookSpiral />
              <WashiTape className="-top-3 left-8" rotation={-3} color="#DC6B5A" />

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-[#DC6B5A] border-l-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />

              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCapIcon size={32} className="text-[#DC6B5A]" />
                </motion.div>
                <h3 className="font-editorial text-2xl" style={{ color: '#DC6B5A' }}>Education</h3>
              </div>

              <div className="space-y-3">
                <p className="font-editorial text-xl font-semibold" style={{ color: '#2d2d2d' }}>
                  The University of Miami
                </p>
                <p className="font-editorial-body text-base" style={{ color: '#666' }}>Coral Gables, FL</p>
                <p className="font-editorial-body text-base" style={{ color: '#4a4a4a' }}>
                  B.S. in <span className="highlight-text font-semibold">Computer Science</span>, <span className="highlight-pink font-semibold">Math</span> and <span className="highlight-blue font-semibold">Biology</span>
                </p>
                <motion.p
                  className="flex items-center gap-2 font-editorial text-lg"
                  style={{ color: '#DC6B5A' }}
                  whileHover={{ x: 5 }}
                >
                  <StarDoodle size={20} color="#DC6B5A" filled />
                  <span className="font-bold">GPA: 4.0</span>
                </motion.p>
                <p className="font-editorial-body text-sm" style={{ color: '#888' }}>Expected May 2027</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Honors Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ y: y2, rotate: rotate2 }}
            className="relative group"
          >
            <motion.div
              className="p-8 relative rounded-2xl overflow-hidden"
              style={{ background: '#FFFFFF', border: "2px solid #DC6B5A" }}
              whileHover={{
                boxShadow: "0 20px 40px rgba(220, 107, 90, 0.15)",
                y: -4
              }}
              transition={{ duration: 0.3 }}
            >
              <WashiTape className="-top-3 right-8" rotation={5} pattern="dots" color="#DC6B5A" />

              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TrophyIcon size={32} className="text-[#DC6B5A]" />
                </motion.div>
                <h3 className="font-editorial text-2xl" style={{ color: '#DC6B5A' }}>Honors & Awards</h3>
              </div>

              <div className="space-y-4">
                {/* Stamps Scholarship */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-4 rounded-xl relative overflow-hidden cursor-pointer"
                  style={{ background: 'rgba(220, 107, 90, 0.08)', border: "2px solid #DC6B5A" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#DC6B5A]/0 via-[#DC6B5A]/5 to-[#DC6B5A]/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-0 right-0 text-xs font-editorial font-bold px-2 py-1 rounded-bl" style={{ background: '#DC6B5A', color: 'white' }}>
                    MOST PRESTIGIOUS
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon size={24} className="text-[#DC6B5A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-editorial text-lg font-semibold" style={{ color: '#2d2d2d' }}>Stamps Excellence Scholarship</p>
                      <p className="font-editorial-body text-sm mt-1" style={{ color: '#666' }}>UM&apos;s most prestigious merit award</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bates Cole Award */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-4 rounded-xl cursor-pointer"
                  style={{ background: 'rgba(91, 163, 208, 0.08)', border: "2px solid #5BA3D0" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#5BA3D0" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-editorial text-lg font-semibold" style={{ color: '#2d2d2d' }}>Robert Bates Cole Award</p>
                      <p className="font-editorial-body text-sm mt-1" style={{ color: '#666' }}>For Volunteer Leadership</p>
                    </div>
                  </div>
                </motion.div>

                {/* Honor Roll */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-4 rounded-xl cursor-pointer"
                  style={{ background: 'rgba(78, 205, 196, 0.08)', border: "2px solid #4ecdc4" }}
                >
                  <div className="flex items-start gap-3">
                    <StarDoodle size={24} color="#4ecdc4" filled className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-editorial text-lg font-semibold" style={{ color: '#2d2d2d' }}>President&apos;s Honor Roll</p>
                        <motion.span
                          className="text-white text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: '#4ecdc4' }}
                          whileHover={{ scale: 1.1 }}
                        >
                          5x
                        </motion.span>
                      </div>
                      <p className="font-editorial-body text-sm mt-1" style={{ color: '#666' }}>Consecutive semesters with 4.0 GPA</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
