"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ============================================
// Sidebar PhotoStack - Fixed position polaroid stack
// ============================================

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
  rotation: number;
}

interface PhotoStackProps {
  photos?: Photo[];
  position: "left" | "right";
  className?: string;
}

// Placeholder photos - these will use placeholder images until real ones are added
const defaultPhotos: Photo[] = [
  { id: 1, src: "/images/photo1.jpg", alt: "Photo 1", caption: "Hackathon 2025", rotation: -5 },
  { id: 2, src: "/images/photo2.jpg", alt: "Photo 2", caption: "Lab work", rotation: 3 },
  { id: 3, src: "/images/photo3.jpg", alt: "Photo 3", caption: "Team project", rotation: -2 },
  { id: 4, src: "/images/photo4.jpg", alt: "Photo 4", caption: "Graduation", rotation: 4 },
];

export default function PhotoStack({
  photos = defaultPhotos,
  position,
  className = ""
}: PhotoStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cyclePhoto = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };

  // Auto-flip every 4 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, photos.length]);

  return (
    <div
      className={`fixed ${position === "left" ? "left-20 xl:left-24" : "right-20 xl:right-24"} top-1/2 -translate-y-1/2 z-30 hidden lg:block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-32 h-40 cursor-pointer"
        onClick={cyclePhoto}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Stack of polaroids */}
        <AnimatePresence mode="popLayout">
          {photos.map((photo, index) => {
            const isActive = index === activeIndex;
            const stackOffset = (index - activeIndex + photos.length) % photos.length;

            return (
              <motion.div
                key={photo.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: stackOffset < 3 ? 1 - stackOffset * 0.2 : 0,
                  scale: 1 - stackOffset * 0.05,
                  y: stackOffset * 4,
                  rotate: photo.rotation + (isHovered && isActive ? 0 : 0),
                  zIndex: photos.length - stackOffset,
                }}
                exit={{ opacity: 0, scale: 0.8, y: -20, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                  transformOrigin: "center bottom",
                }}
              >
                <div
                  className="w-full h-full bg-white p-2 pb-8 shadow-polaroid"
                  style={{
                    border: "2px solid #2d2d2d",
                  }}
                >
                  {/* Photo placeholder with gradient */}
                  <div
                    className="w-full h-24 rounded-sm flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg,
                        ${index % 4 === 0 ? '#ff6b6b' : index % 4 === 1 ? '#4ecdc4' : index % 4 === 2 ? '#ffd54f' : '#a855f7'}20 0%,
                        ${index % 4 === 0 ? '#ff6b6b' : index % 4 === 1 ? '#4ecdc4' : index % 4 === 2 ? '#ffd54f' : '#a855f7'}40 100%)`,
                    }}
                  >
                    {/* Placeholder icon */}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-gray-400"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>

                    {/* Add your photo text */}
                    <p className="absolute bottom-1 font-handwriting text-xs text-gray-500">
                      add photo
                    </p>
                  </div>

                  {/* Caption */}
                  {photo.caption && (
                    <p className="font-handwriting text-sm text-pencil text-center mt-2 truncate">
                      {photo.caption}
                    </p>
                  )}
                </div>

                {/* Tape on active photo */}
                {isActive && (
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 opacity-70"
                    style={{
                      background: "repeating-linear-gradient(45deg, #ffd54f, #ffd54f 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)",
                      transform: "translateX(-50%) rotate(-3deg)",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Click hint */}
        <motion.p
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-handwriting text-xs text-pencil-light whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          click to flip
        </motion.p>
      </motion.div>
    </div>
  );
}

// ============================================
// Section PhotoStack - Auto-swiping inline stack for sections
// ============================================

interface SectionPhotoStackProps {
  photos: {
    id: string;
    color: string;
    label?: string;
  }[];
  autoSwipe?: boolean;
  interval?: number;
  size?: "small" | "medium" | "large";
}

export function SectionPhotoStack({
  photos,
  autoSwipe = true,
  interval = 3000,
  size = "medium",
}: SectionPhotoStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const sizeClasses = {
    small: "w-32 h-40",
    medium: "w-48 h-56",
    large: "w-64 h-72",
  };

  useEffect(() => {
    if (!autoSwipe || !isInView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoSwipe, interval, photos.length, isInView]);

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <div className={`relative ${sizeClasses[size]}`}>
        {photos.map((photo, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          const normalizedOffset =
            offset < -photos.length / 2
              ? offset + photos.length
              : offset > photos.length / 2
              ? offset - photos.length
              : offset;

          return (
            <motion.div
              key={photo.id}
              className={`absolute inset-0 ${sizeClasses[size]} cursor-pointer`}
              initial={false}
              animate={{
                x: normalizedOffset * 8,
                y: Math.abs(normalizedOffset) * 4,
                rotate: normalizedOffset * 5,
                scale: 1 - Math.abs(normalizedOffset) * 0.05,
                zIndex: photos.length - Math.abs(normalizedOffset),
                opacity: Math.abs(normalizedOffset) > 2 ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={() => setCurrentIndex(index)}
              whileHover={isActive ? { scale: 1.05, rotate: 0 } : {}}
            >
              <div
                className="w-full h-full shadow-paper flex items-center justify-center"
                style={{
                  backgroundColor: photo.color,
                  border: "3px solid #2d2d2d",
                  borderRadius: "4px",
                }}
              >
                {/* Placeholder for actual photos - shows colored card with label */}
                <div className="absolute inset-2 border-2 border-white/30 rounded flex items-center justify-center">
                  {photo.label && (
                    <p className="font-handwriting text-white/80 text-center text-sm px-2">
                      {photo.label}
                    </p>
                  )}
                </div>

                {/* Photo corner decorations */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/40" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-white/40" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/40" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-pencil scale-125"
                : "bg-pencil/30 hover:bg-pencil/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================
// Inline Polaroid - Simple single polaroid for use in sections
// ============================================

export function InlinePolaroid({
  caption,
  rotation = -3,
  color = "#ff6b6b",
  className = ""
}: {
  caption: string;
  rotation?: number;
  color?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="bg-white p-2 pb-6 shadow-paper cursor-pointer"
        style={{ border: "2px solid #2d2d2d" }}
      >
        <div
          className="w-20 h-16 rounded-sm flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}30 0%, ${color}50 100%)` }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-400"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <p className="font-handwriting text-xs text-pencil text-center mt-1">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}
