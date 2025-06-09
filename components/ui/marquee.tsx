/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

type User = {
  id: string;
  name: string;
  posts: number;
  value: number;
  avatar?: string;
};

interface MarqueeProps {
  users: User[];
  initialDirection?: "forward" | "backward";
}

export default function Marquee({
  users,
  initialDirection = "forward",
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const lastTimestamp = useRef<DOMHighResTimeStamp>(0);
  // Use useRef for position to avoid frequent re-renders during animation
  const positionRef = useRef(0);
  const [direction, setDirection] = useState<"forward" | "backward">(
    initialDirection
  );
  // Store the calculated single set width to avoid re-calculating on every frame
  const singleSetWidthRef = useRef(0);

  const pixelsPerSecond = 30; // Already reduced, good for mobile

  // Removed calculateSingleSetWidth as a useCallback, it will be called once in useEffect

  const animateScroll = useCallback(
    (timestamp: DOMHighResTimeStamp) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp;
      }

      const deltaTime = (timestamp - lastTimestamp.current) / 1000;
      const distanceToMove = pixelsPerSecond * deltaTime;
      const currentSingleSetWidth = singleSetWidthRef.current;

      let newPosition = positionRef.current;

      if (direction === "forward") {
        newPosition -= distanceToMove;
        if (
          newPosition <= -currentSingleSetWidth &&
          currentSingleSetWidth > 0
        ) {
          newPosition += currentSingleSetWidth;
        }
      } else {
        newPosition += distanceToMove;
        if (newPosition >= 0 && currentSingleSetWidth > 0) {
          newPosition -= currentSingleSetWidth;
        }
      }

      positionRef.current = newPosition; // Update the ref

      // Directly update the DOM element's style
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${newPosition}px)`;
      }

      lastTimestamp.current = timestamp;
      animationFrameId.current = requestAnimationFrame(animateScroll);
    },
    [direction, pixelsPerSecond] // Dependencies reduced
  );

  useEffect(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    if (users.length > 0 && marqueeRef.current) {
      // Calculate singleSetWidth once when users or direction changes
      const firstItem = marqueeRef.current.children[0] as HTMLElement;
      if (firstItem) {
        const itemWidth =
          firstItem.offsetWidth +
          parseInt(getComputedStyle(firstItem).marginLeft) +
          parseInt(getComputedStyle(firstItem).marginRight);
        singleSetWidthRef.current = users.length * itemWidth;
      } else {
        singleSetWidthRef.current = 0; // Fallback if no items
      }

      const initialOffset =
        initialDirection === "backward" ? -singleSetWidthRef.current : 0;
      positionRef.current = initialOffset; // Set initial position in ref
      // Apply initial transform to DOM
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${initialOffset}px)`;
      }

      lastTimestamp.current = 0;
      animationFrameId.current = requestAnimationFrame(animateScroll);
    } else {
      // If no users, ensure animation is stopped and reset
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      positionRef.current = 0;
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(0px)`;
      }
      singleSetWidthRef.current = 0;
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // Removed calculateSingleSetWidth from dependencies as it's now computed inside
  }, [users, direction, animateScroll, initialDirection]);

  useEffect(() => {
    setDirection(initialDirection);
  }, [initialDirection]);

  const handleMouseEnter = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!animationFrameId.current && users.length > 0) {
      lastTimestamp.current = 0;
      animationFrameId.current = requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden py-2 rounded-xl shadow-lg bg-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        id="marquee-content"
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform" // Add will-change-transform for browser optimization hints
        // Remove style={{ transform: `translateX(${position}px)` }}
        // The transform is now applied directly in animateScroll
      >
        {users.length > 0 ? (
          // Render two sets of users for continuous looping
          // Using a fragment to avoid an extra div, though not strictly necessary for perf
          <>
            {users.map((user, index) => (
              <div
                key={`initial-${user.id}-${index}`} // Unique key for the first set
                className="flex-shrink-0 w-60 sm:w-64 md:w-72 lg:w-80 h-20 md:h-20 lg:h-22 p-3 mx-2 bg-[#111111] rounded-xl shadow-md border-2 border-[#1E1E1E]
                         transform transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      user.avatar ||
                      `https://placehold.co/40x40/4b5563/ffffff?text=${user.name.charAt(
                        0
                      )}`
                    }
                    alt={user.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/40x40/4b5563/ffffff?text=?";
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base md:text-lg text-white truncate max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
                      {user.name}
                    </span>
                    <div className="flex space-x-2 items-center justify-between">
                      <span className="text-gray-500 font-semibold text-sm md:text-base">
                        {user.posts} posts
                      </span>
                      <span className="text-base md:text-lg text-white font-semibold flex items-center justify-between gap-1">
                        <Image
                          src={"/images/astronaut.png"}
                          alt="astronaut"
                          width={20}
                          height={20}
                        />{" "}
                        {user.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate users for continuous effect */}
            {users.map((user, index) => (
              <div
                key={`duplicate-${user.id}-${index}`} // Unique key for the duplicate set
                className="flex-shrink-0 w-60 sm:w-64 md:w-72 lg:w-70 h-20 md:h-20 lg:h-22 p-3 mx-2 bg-[#111111] rounded-xl shadow-md border-2 border-[#1E1E1E]
                         transform transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      user.avatar ||
                      `https://placehold.co/40x40/4b5563/ffffff?text=${user.name.charAt(
                        0
                      )}`
                    }
                    alt={user.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/40x40/4b5563/ffffff?text=?";
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base md:text-lg text-white truncate max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
                      {user.name}
                    </span>
                    <div className="flex space-x-2 items-center justify-between">
                      <span className="text-gray-500 font-semibold text-sm md:text-base">
                        {user.posts} posts
                      </span>
                      <span className="text-base md:text-lg text-white font-semibold flex items-center justify-between gap-1">
                        <Image
                          src={"/images/astronaut.png"}
                          alt="astronaut"
                          width={20}
                          height={20}
                        />{" "}
                        {user.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-gray-500 p-4 text-center w-full">
            No items in this section.
          </div>
        )}
      </div>
    </div>
  );
}
