// components/golden-glow.tsx
"use client";

import React from "react";

export function GoldenGlow() {
  return (
    <div
      className="absolute w-full left-1/2 -translate-x-1/2 -top-12 h-20 rounded-full blur-[100px] opacity-50 z-0 animate-[goldPulse_4s_ease-in-out_infinite]"
      style={{
        background:
          "radial-gradient(ellipse at center, #B88746 20%, #FDF5A6 70%, transparent 100%)",
      }}
    />
  );
}