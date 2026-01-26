"use client";

import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

function CornerMarker({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  const rotationClasses = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-left": "-rotate-90",
    "bottom-right": "rotate-180",
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-8 h-8`}>
      {/* Circle */}
      <div className="absolute top-0 left-0 w-3 h-3 rounded-full border-2 border-te-dark/20" />
      {/* Diagonal crosshair */}
      <svg
        className={`absolute top-0 left-0 w-8 h-8 ${rotationClasses[position]}`}
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
      >
        <line x1="6" y1="6" x2="16" y2="16" />
        <line x1="6" y1="16" x2="6" y2="6" />
        <line x1="16" y1="6" x2="6" y2="6" />
      </svg>
    </div>
  );
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="relative rounded-3xl border-4 border-te-dark/10 bg-te-beige shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        {/* Corner decorations */}
        <CornerMarker position="top-left" />
        <CornerMarker position="top-right" />
        <CornerMarker position="bottom-left" />
        <CornerMarker position="bottom-right" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
