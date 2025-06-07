import { RocketIcon } from "lucide-react";
import React from "react";
import { AnimatedAvatar } from "./animated-avatar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-40 h-screen px-4 text-center">
      <div className="flex items-center gap-5 mb-4 text-[#47D67C]">
        <p className="flex items-center gap-2">
          <RocketIcon className="w-6 h-6 text-[#47D67C]" />
          <span className="underline underline-offset-4">
            20+ NEW ELEMENTS
          </span>{" "}
          THIS WEEK!
        </p>
        <AnimatedAvatar />
      </div>
      <div>
        <h1 className="text-5xl sm:text-7xl lg:text-7xl font-bold max-w-5xl leading-none text-gray-200">
          The Ultimate Library of Open-Source UI
        </h1>
      </div>
    </div>
  );
};

export default Hero;
