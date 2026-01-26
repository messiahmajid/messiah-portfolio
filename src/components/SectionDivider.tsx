"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "dots" | "line" | "wave" | "brackets";
}

export default function SectionDivider({ variant = "dots" }: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div className="flex justify-center items-center gap-4 py-10">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-12 h-0.5 bg-te-orange/30"
        />
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="w-3 h-3 rounded-full bg-te-orange/60"
          />
        ))}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-12 h-0.5 bg-te-orange/30"
        />
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="flex justify-center items-center py-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-te-orange/50" />
          <div className="w-2 h-2 rotate-45 bg-te-orange/60" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-te-orange/50" />
        </motion.div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className="flex justify-center items-center py-10 gap-1.5">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: { duration: 1.5, repeat: Infinity, delay: i * 0.1 },
              opacity: { delay: i * 0.05 }
            }}
            className="w-1.5 h-6 rounded-full bg-te-orange/50"
          />
        ))}
      </div>
    );
  }

  if (variant === "brackets") {
    return (
      <div className="flex justify-center items-center py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 text-te-dark/30 font-mono text-xl"
        >
          <span>{"<"}</span>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-te-orange/60"
            />
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="w-16 h-0.5 bg-te-orange/50"
            />
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="w-3 h-3 rounded-full bg-te-orange/60"
            />
          </div>
          <span>{"/>"}</span>
        </motion.div>
      </div>
    );
  }

  return null;
}
