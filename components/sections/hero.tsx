import { RocketIcon } from "lucide-react";
import React from "react";
import { AnimatedAvatar } from "../ui/animated-avatar";
import { AuroraText } from "../ui/aurora-text";
import { SparklesText } from "../ui/sparkle-text";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-30 px-4 text-center overflow-hidden">
      {/* Badge + Avatar */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-5 mb-4 text-[#D4AF37]">
        <p className="flex items-center gap-2 whitespace-nowrap font-bold text-sm sm:text-base">
          <RocketIcon className="w-6 h-6 text-[#D4AF37]" />
          <span className="underline underline-offset-4">
            20+ NEW ELEMENTS
          </span>{" "}
          THIS WEEK!
        </p>
        <AnimatedAvatar />
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold max-w-5xl leading-none text-gray-200 break-words">
        The <AuroraText>Ultimate</AuroraText> Library of{" "}
        <SparklesText className="text-3xl sm:text-6xl lg:text-7xl">
          Open-Source UI
        </SparklesText>
      </h1>

      {/* Subtext */}
      <p className="mt-5 text-wrap text-base font-medium sm:text-lg text-gray-400 max-w-xl">
        Explore a curated collection of modern, high quality UI components and
        templates crafted to help you build sleek, responsive applications
        faster and with confidence.
      </p>
    </div>
  );
}
