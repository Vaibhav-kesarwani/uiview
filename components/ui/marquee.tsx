/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

// Marquee component for horizontal scrolling user profiles
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
  // Ref to hold the current animation frame ID for pausing/resuming
  const animationFrameId = useRef<number | null>(null);
  // Ref to hold the last timestamp for consistent speed across frames
  const lastTimestamp = useRef<DOMHighResTimeStamp>(0);
  // State for the current translation position (in pixels)
  const [position, setPosition] = useState(0);
  // State for the current direction (will be set from prop)
  const [direction, setDirection] = useState<"forward" | "backward">(
    initialDirection
  );

  // Define scroll speed (pixels per second)
  // Adjust this value to control the speed. Higher = faster.
  const pixelsPerSecond = 70; // A good balance for speed and smoothness.
  // Start with this, then adjust as needed (e.g., 50 to 200)

  // Calculate the total width of a single set of user cards
  const calculateSingleSetWidth = useCallback(() => {
    if (marqueeRef.current && users.length > 0) {
      const firstItem = marqueeRef.current.children[0] as HTMLElement;
      // Use clientWidth/offsetWidth for actual rendered width
      const itemWidth = firstItem
        ? firstItem.offsetWidth +
          parseInt(getComputedStyle(firstItem).marginLeft) +
          parseInt(getComputedStyle(firstItem).marginRight)
        : 280; // Account for margins
      return users.length * itemWidth;
    }
    return 0; // Return 0 if no users or ref not ready
  }, [users]);

  // Animation loop function
  const animateScroll = useCallback(
    (timestamp: DOMHighResTimeStamp) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp;
      }

      const deltaTime = (timestamp - lastTimestamp.current) / 1000; // time in seconds
      const distanceToMove = pixelsPerSecond * deltaTime;

      setPosition((prevPosition) => {
        let newPosition = prevPosition;
        const singleSetWidth = calculateSingleSetWidth();

        if (direction === "forward") {
          newPosition -= distanceToMove;
          // If we've scrolled past the first full set of users (which is the effective loop point)
          if (newPosition <= -singleSetWidth) {
            // Reset position to simulate continuous loop
            // Add singleSetWidth back to bring it to the start of the "next" set
            newPosition += singleSetWidth;
          }
        } else {
          // backward
          newPosition += distanceToMove;
          // If we've scrolled past the "start" of the first duplicate set (effectively the loop point)
          if (newPosition >= 0) {
            // Reset position to simulate continuous loop
            // Subtract singleSetWidth to bring it to the end of the "previous" set
            newPosition -= singleSetWidth;
          }
        }
        return newPosition;
      });

      lastTimestamp.current = timestamp;
      animationFrameId.current = requestAnimationFrame(animateScroll);
    },
    [direction, pixelsPerSecond, calculateSingleSetWidth]
  );

  // Start/Stop animation effect
  useEffect(() => {
    // Clear any existing animation frame to prevent multiple loops
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    // Start animation only if there are users
    if (users.length > 0) {
      // For backward direction, initialize position to start at the "end" of the duplicated content
      // so it scrolls into view naturally.
      const initialOffset =
        initialDirection === "backward" ? -calculateSingleSetWidth() : 0;
      setPosition(initialOffset);
      lastTimestamp.current = 0; // Reset timestamp to ensure smooth start
      animationFrameId.current = requestAnimationFrame(animateScroll);
    }

    // Cleanup: stop animation when component unmounts or dependencies change
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [
    users,
    direction,
    animateScroll,
    calculateSingleSetWidth,
    initialDirection,
  ]); // Re-run if users or direction changes

  // Update direction if prop changes (optional, but good for dynamic control)
  useEffect(() => {
    setDirection(initialDirection);
  }, [initialDirection]);

  // Handle hover for pause/play
  const handleMouseEnter = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!animationFrameId.current && users.length > 0) {
      lastTimestamp.current = 0; // Reset timestamp for smooth resume
      animationFrameId.current = requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden py-2 rounded-xl shadow-lg bg-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Marquee content container */}
      {/* We no longer need the CSS animation classes here. */}
      <div
        id="marquee-content"
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        // Apply transform directly via style
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Duplicate content TWICE to ensure seamless loop with JS.
            When the first set moves out, the second takes its place,
            and we reset the position behind the scenes. */}
        {users.length > 0 &&
          [...users, ...users].map((user, index) => (
            <div
              key={`${user.id}-${index}`}
              className="flex-shrink-0 w-64 md:w-72 lg:w-80 p-3 mx-2 bg-gray-800 rounded-xl shadow-md border border-gray-700
                       transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 cursor-pointer"
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
                  className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/40x40/4b5563/ffffff?text=?";
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg text-blue-300 truncate max-w-[150px]">
                    {user.name}
                  </span>
                  <div className="flex text-sm text-gray-400 space-x-2">
                    <span>{user.posts} posts</span>
                    <span className="text-yellow-300">
                      &#9733; {user.value.toLocaleString()}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        {users.length === 0 && (
          <div className="text-gray-500 p-4 text-center w-full">
            No items in this section.
          </div>
        )}
      </div>
    </div>
  );
}
