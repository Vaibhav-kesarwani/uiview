"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <span className="text-[#D4AF37] font-semibold text-5xl">
            This view doesn&apos;t exist in the Uiview.
          </span>
          <br />
          <span className="text-gray-400 text-2xl font-bold mt-2">
            Let&apos;s get you back to golden ground...
          </span>
        </motion.p>

        <div className="-mb-25 mt-20">
          <TextHoverEffect text="404" />
        </div>
      </main>
      <SiteFooter />
      <div className="pointer-events-none absolute inset-0 h-24 w-full before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-4/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:opacity-20 before:[filter:blur(calc(4*1rem))]" />
    </>
  );
}
