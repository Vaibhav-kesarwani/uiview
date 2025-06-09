// components/TripleMarquee.tsx
"use client"; // This component will also use client-side hooks

import React from "react";
import Marquee from "./ui/marquee";

// Define the User type (can be shared from Marquee.tsx or defined here)
type User = {
  id: string;
  name: string;
  posts: number;
  value: number;
  avatar?: string;
};

interface TripleMarqueeProps {
  allUsers: User[];
}

export default function TripleMarquee({ allUsers }: TripleMarqueeProps) {
  // Function to split the array into roughly equal parts
  const splitArray = (arr: User[], parts: number): User[][] => {
    const result: User[][] = [];
    const chunkSize = Math.ceil(arr.length / parts);
    for (let i = 0; i < parts; i++) {
      result.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return result;
  };

  const [usersPart1, usersPart2, usersPart3] = splitArray(allUsers, 3);

  // Check if any part is empty to avoid rendering empty marquees
  if (!usersPart1.length && !usersPart2.length && !usersPart3.length) {
    return (
      <div className="text-gray-400 text-center py-8">
        No users to display in marquees.
      </div>
    );
  }

  return (
    // Use responsive margin: mb-8 for mobile, mb-25 for larger screens
    <div className="flex flex-col mb-8 md:mb-25">
      {usersPart1.length > 0 && (
        <Marquee users={usersPart1} initialDirection="forward" />
      )}
      {usersPart2.length > 0 && (
        <Marquee users={usersPart2} initialDirection="backward" />
      )}
      {usersPart3.length > 0 && (
        <Marquee users={usersPart3} initialDirection="forward" />
      )}
    </div>
  );
}
