"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const talkDetails = {
  title: "The Prison You Built Inside Yourself",
  event: "TEDxUniversityofMiami",
};

const descriptionParts = [
  {
    type: "intro",
    text: "I was honored to be selected to give a TEDx talk, and when I thought about what I wanted to speak on, I kept coming back to something I had been noticing in myself and in the people around me.",
  },
  {
    type: "highlight",
    text: "I've seen how often we stop ourselves before anyone else has to",
  },
  {
    type: "detail",
    text: "how constant visibility, feedback, and imagined judgment teach us to rehearse our thoughts, soften our opinions, and abandon risks quietly.",
  },
  {
    type: "themes",
    tags: ["Philosophy", "Sociology", "Lived Experience"],
  },
  {
    type: "focus",
    text: "how systems shape behavior, how performance replaces sincerity, and how that shift affects creativity, relationships, and decision-making.",
  },
  {
    type: "question",
    text: "What might change if we allowed ourselves to be unfinished in public?",
  },
];

function PlayButton({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute inset-0 flex items-center justify-center bg-te-dark/40 hover:bg-te-dark/30 transition-colors group"
      initial={{ opacity: 1 }}
      animate={{ opacity: isPlaying ? 0 : 1 }}
      whileHover={{ scale: 1 }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-te-orange flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-8 h-8 text-white ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>
    </motion.button>
  );
}

export default function TEDxTalk() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="tedx" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-red-600 font-bold text-3xl tracking-tight">TEDx</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-te-dark mt-4">
            {talkDetails.title}
          </h2>
          <p className="text-text-muted mt-3 font-mono">
            {talkDetails.event}
          </p>
        </motion.div>

        {/* Video Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          {/* Video shadow */}
          <div className="absolute inset-0 bg-te-dark/20 rounded-2xl translate-x-3 translate-y-3" />

          {/* Video container */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-2 border-te-dark/10">
            <video
              ref={videoRef}
              className="w-full h-full object-contain cursor-pointer"
              onClick={handleVideoClick}
              onEnded={() => setIsPlaying(false)}
              poster="/tedx-poster.jpg"
            >
              <source src="/tedx-talk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && <PlayButton isPlaying={isPlaying} onClick={handlePlayClick} />}

            {/* TEDx watermark */}
            <div className="absolute bottom-4 right-4 text-white/20 font-bold text-lg">
              TEDx
            </div>
          </div>

          {/* Video label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-text-muted font-mono">Full Talk</span>
          </motion.div>
        </motion.div>

        {/* Description Section - Below Video */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Opening */}
            <p className="text-lg text-text-secondary leading-relaxed">
              {descriptionParts[0].text}
            </p>

            {/* Highlighted Quote */}
            <div className="relative pl-6 border-l-4 border-te-orange py-2">
              <span className="absolute -left-3 -top-1 text-5xl text-te-orange/30 font-serif">"</span>
              <p className="text-2xl font-medium text-te-dark leading-snug">
                {descriptionParts[1].text}
              </p>
            </div>

            {/* Continuation */}
            <p className="text-lg text-text-secondary leading-relaxed">
              — {descriptionParts[2].text}
            </p>

            {/* Theme Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {descriptionParts[3].tags?.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 bg-te-dark text-white text-sm font-mono rounded-lg"
                >
                  {tag}
                </motion.span>
              ))}
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
            {/* Focus areas */}
            <div className="bg-white rounded-xl p-6 border-2 border-te-dark/10">
              <p className="text-sm text-te-orange mb-3 font-mono uppercase tracking-wider font-bold">
                This talk explores
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                {descriptionParts[4].text}
              </p>
            </div>

            {/* The Question */}
            <div className="relative bg-te-dark rounded-xl p-8 text-white overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-l-2 border-b-2 border-te-orange/30 rounded-bl-xl" />

              <p className="text-sm font-mono text-te-orange uppercase tracking-wider mb-4">
                The Central Question
              </p>
              <p className="text-xl font-medium leading-relaxed">
                {descriptionParts[5].text}
              </p>

              {/* Quote mark */}
              <span className="absolute bottom-2 right-6 text-8xl text-white/5 font-serif">?</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
