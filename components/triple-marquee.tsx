"use client";

import Marquee from "./ui/marquee";

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
  const splitArray = (arr: User[], parts: number): User[][] => {
    const result: User[][] = [];
    const chunkSize = Math.ceil(arr.length / parts);
    for (let i = 0; i < parts; i++) {
      result.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return result;
  };

  const [usersPart1, usersPart2, usersPart3] = splitArray(allUsers, 3);

  if (!usersPart1.length && !usersPart2.length && !usersPart3.length) {
    return (
      <div className="text-gray-400 text-center py-8">
        No users to display in marquees.
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-25">
      <h1 className="mb-10 font-bold text-4xl md:text-5xl flex items-center justify-center text-center w-full">
        Top Creators
      </h1>

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
