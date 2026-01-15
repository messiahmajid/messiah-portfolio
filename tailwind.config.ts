import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sherwood News Color System
        "sherwood-black": "#000000",
        "sherwood-white": "#FFFFFF",
        "sherwood-gray": {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Neon highlight colors
        "neon-yellow": "#EAFF00",
        "neon-green": "#C7FF00",
        "neon-lime": "#D4FF00",
        // Legacy accent colors (keeping for backward compatibility)
        "dark-bg": "#000000",
        pencil: "#000000",
        paper: "#FFFFFF",
        highlight: {
          yellow: "#EAFF00",
          green: "#C7FF00",
          lime: "#D4FF00",
        },
      },
      fontFamily: {
        // Sherwood News Typography
        headline: ["Impact", "Arial Black", "sans-serif-condensed", "sans-serif"],
        "headline-alt": ["Arial Black", "Arial", "Helvetica", "sans-serif"],
        body: ["Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["Courier New", "Courier", "monospace"],
        // Legacy fonts (keeping for backward compatibility)
        handwriting: ["Caveat", "cursive"],
        sketch: ["Lexend", "sans-serif"],
      },
      animation: {
        // Sherwood News Animations
        "sherwood-lift": "sherwoodLift 0.3s ease-out forwards",
        "sherwood-glow": "sherwoodGlow 0.4s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "zoom-in": "zoomIn 0.3s ease-out forwards",
        "highlight-expand": "highlightExpand 0.3s ease-out forwards",
        // Legacy animations
        "wiggle": "wiggle 0.5s ease-in-out",
        "float": "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        // Sherwood News Keyframes
        sherwoodLift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
        sherwoodGlow: {
          "0%": { boxShadow: "0 0 0 0 rgba(234, 255, 0, 0)" },
          "100%": { boxShadow: "0 0 20px 5px rgba(234, 255, 0, 0.3)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        highlightExpand: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        // Legacy keyframes
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        // Sherwood News Shadows
        "sherwood": "0 2px 8px rgba(0, 0, 0, 0.08)",
        "sherwood-hover": "0 8px 24px rgba(0, 0, 0, 0.12)",
        "sherwood-strong": "0 12px 32px rgba(0, 0, 0, 0.15)",
        "neon-glow": "0 0 20px rgba(234, 255, 0, 0.3)",
        // Legacy shadows
        "paper": "2px 2px 8px rgba(0, 0, 0, 0.1)",
        "polaroid": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        // Sherwood News Gradients
        "fade-black": "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)",
        "fade-black-sides": "linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)",
        "fade-black-radial": "radial-gradient(circle, transparent 0%, rgba(0,0,0,0.5) 100%)",
        "neon-highlight": "linear-gradient(104deg, rgba(234, 255, 0, 0) 0%, rgba(234, 255, 0, 0.8) 2%, rgba(234, 255, 0, 0.4) 5%, rgba(234, 255, 0, 0) 98%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
