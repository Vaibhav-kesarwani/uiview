/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "alexruix",
    img: "https://avatar.vercel.sh/alexruix",
    posts: 40,
    score: 216370,
  },
  {
    name: "vinodjangid07",
    img: "https://avatar.vercel.sh/vinodjangid07",
    posts: 157,
    score: 525570,
  },
  {
    name: "Yaya12085",
    img: "https://avatar.vercel.sh/yaya",
    posts: 139,
    score: 325630,
  },
  {
    name: "andrew-demchenk0",
    img: "https://avatar.vercel.sh/andrew",
    posts: 119,
    score: 285640,
  },
  {
    name: "Praashoo7",
    img: "https://avatar.vercel.sh/praashoo",
    posts: 48,
    score: 203840,
  },
  {
    name: "mrhyddenn",
    img: "https://avatar.vercel.sh/hyddenn",
    posts: 49,
    score: 182810,
  },
  {
    name: "adamgiebl",
    img: "https://avatar.vercel.sh/adamgiebl",
    posts: 89,
    score: 180390,
  },
  {
    name: "Smit-Prajapati",
    img: "https://avatar.vercel.sh/smit",
    posts: 28,
    score: 164500,
  },
  {
    name: "Galahhad",
    img: "https://avatar.vercel.sh/galahhad",
    posts: 22,
    score: 148160,
  },
  {
    name: "JkHluger",
    img: "https://avatar.vercel.sh/jkh",
    posts: 51,
    score: 145040,
  },
  {
    name: "cssbuttons-io",
    img: "https://avatar.vercel.sh/css",
    posts: 18,
    score: 133290,
  },
  {
    name: "Pradeepsaranbishnoi",
    img: "https://avatar.vercel.sh/pradeep",
    posts: 42,
    score: 132850,
  },
  {
    name: "Javierroca",
    img: "https://avatar.vercel.sh/javier",
    posts: 131,
    score: 125890,
  },
  {
    name: "barisdogansutcu",
    img: "https://avatar.vercel.sh/baris",
    posts: 29,
    score: 129130,
  },
];

const chunkSize = Math.ceil(reviews.length / 3);

const firstRow = reviews.slice(0, chunkSize);
const secondRow = reviews.slice(chunkSize, chunkSize * 2);
const thirdRow = reviews.slice(chunkSize * 2);

const ReviewCard = ({
  img,
  name,
  posts,
  score = 216370,
}: {
  img: string;
  name: string;
  posts?: number;
  score?: number;
}) => {
  return (
    <figure
      className={cn(
        "relative flex flex-col items-start justify-between rounded-xl border-2 p-4 shadow-md transition-all duration-300",
        "min-w-max flex-shrink-0",
        // Light mode
        "bg-[#111111] border-[#1E1E1E]",
        // Dark mode
        "dark:bg-[#111111] dark:border-[#1E1E1E]"
      )}
    >
      <div className="flex items-center space-x-5">
        <img className="rounded-xl w-12 h-12" src={img} alt={name} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-white truncate">
            {name}
          </figcaption>
          <div className="flex items-center space-x-2 mt-2 text-gray-400 text-md font-semibold truncate">
            <div>
              <span>{posts}</span> posts
            </div>
            <div className="text-indigo-400 font-semibold flex items-center gap-1">
              <img
                src="/images/astronaut.png"
                alt="astronaut"
                className="w-8 h-8"
              />
              <span>{score.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeCard() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
