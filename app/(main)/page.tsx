"use client";

import { GoldenGlow } from "@/components/golden-glow";
import Feature from "@/components/sections/feature";
import Hero from "@/components/sections/hero";
import TopCreator from "@/components/sections/top-creator";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex"
      >
        <Spotlight />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative lg:hidden"
      >
        <GoldenGlow />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <Feature />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <TopCreator />
      </motion.div>
    </>
  );
}
