"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function LuxeButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-12 relative px-6 py-3 font-medium text-[#f6e9cd] bg-[#1a1a1a] border border-[#B88746] rounded-xl shadow-xl overflow-hidden group hover:shadow-yellow-500/30 transition-shadow duration-300"
    >
      <span className="relative z-10 flex items-center gap-2">
        <motion.svg
          className="w-5 h-5 stroke-[#f6e9cd] fill-transparent"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          animate={
            hovered
              ? { y: [0, -2, 0], fill: "#f6e9cd" }
              : { y: 0, fill: "transparent" }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.18 1.37v8.27h8.27L10.82 22.63v-8.27H2.55L13.18 1.37z"
          />
        </motion.svg>
        Launch
      </span>

      {/* Shimmer Glimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B88746]/40 to-transparent blur-sm opacity-0 group-hover:opacity-100"
        animate={hovered ? { x: ["-100%", "100%"] } : {}}
        transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Pulse Glow */}
      <motion.div
        className="absolute -inset-px rounded-2xl border border-yellow-400/20 pointer-events-none"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
