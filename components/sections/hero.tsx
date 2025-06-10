import { RocketIcon } from "lucide-react";
import React from "react";
import { AnimatedAvatar } from "../ui/animated-avatar";
import { AuroraText } from "../ui/aurora-text";
import { SparklesText } from "../ui/sparkle-text";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-30 h-screen px-4 text-center">
      {/* Badge + Avatar */}
      <div className="flex flex-wrap items-center justify-center gap-5 mb-4 text-[#47D67C]">
        <p className="flex items-center gap-2 whitespace-nowrap font-bold text-sm sm:text-base">
          <RocketIcon className="w-6 h-6 text-[#47D67C]" />
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
      <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl sm:max-w-2xl lg:max-w-xl px-2">
        Explore a curated collection of modern, high-quality UI components and
        templates—crafted to help you build sleek, responsive applications
        faster and with confidence.
      </p>
    </div>
  );
}
