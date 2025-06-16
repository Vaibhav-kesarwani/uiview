"use client";

import { ArrowRight, Star } from "lucide-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Button } from "./ui/button";
import { VelocityScroll } from "./ui/vellocity-scroll";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";

// Main Card Container
export function FeatureCard() {
  return (
    <div className="px-4 md:px-8">
      <BentoGrid className="max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch content-center">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={cn(
              "flex flex-col",
              i === 1 || i === 2 ? "md:col-span-2" : ""
            )}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Luxurious Dark Mode Theme for Skeletons

const SkeletonOne = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className={cn(
      "relative h-full min-h-64 rounded-2xl p-6",
      "flex flex-col items-center justify-center text-center",
      "bg-gradient-to-br from-[#1a1a1a] via-[#0e0e0e] to-[#1a1a1a]",
      "text-[#f5e9d6] shadow-lg border border-[#2b2b2b]"
    )}
  >
    <div className="absolute inset-0 z-0 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:16px_16px] opacity-6" />
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative z-10 space-y-3"
    >
      <Sparkles className="mx-auto text-yellow-400" size={32} />
      <h3 className="text-xl font-semibold">Easy to Use</h3>
      <p className="text-sm text-[#d1b97f]/80 max-w-sm mx-auto">
        Seamlessly integrate this component into your project.
      </p>
    </motion.div>
  </motion.div>
);

const SkeletonTwo = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative h-full rounded-2xl p-6 shadow-xl border border-[#2f2f2f] bg-gradient-to-br from-[#141414] via-[#1c1c1c] to-[#141414] text-[#f5e9d6] flex flex-col justify-center text-center"
  >
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-amber-300/20 rounded-full blur-2xl animate-pulse" />
    </div>

    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-4 z-10">
      {blogPosts.map((post, index) => (
        <motion.a
          key={index}
          href={post.link}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-xl border border-[#B88746]/50 bg-[#2c2214]/30 hover:bg-[#3b2e1b]/40 p-4 text-sm font-medium text-[#f6e9cd] text-center"
        >
          {post.title}
        </motion.a>
      ))}
    </div>

    <div className="mt-4 z-10">
      <h2 className="text-lg font-semibold">
        Exploring the Future of{" "}
        <PointerHighlight
          rectangleClassName="bg-yellow-400/10 border-yellow-500 text-yellow-300"
          pointerClassName="text-yellow-400 h-3 w-3"
          containerClassName="inline-block ml-1"
        >
          <span className="relative z-10 ml-2 mr-2">UI Design</span>
        </PointerHighlight>
      </h2>
      <p className="text-sm text-[#d1b97f]/80 max-w-md mx-auto mt-2">
        Discover trends, tools, and techniques shaping the next generation of
        user interfaces.
      </p>
    </div>

    <motion.a
      href="/blog/future-of-ui-design"
      className="mt-4 inline-flex items-center justify-center text-sm font-medium text-yellow-400 hover:underline z-10"
    >
      Read More <ArrowRight className="ml-1 h-4 w-4" />
    </motion.a>
  </motion.div>
);

const SkeletonThree = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative h-full rounded-2xl p-6 shadow-xl bg-gradient-to-br from-[#141414] via-[#1c1c1c] to-[#141414] text-[#f5e9d6] flex flex-col justify-center text-center"
  >
    <VelocityScroll>
      <span className="text-xl md:text-4xl font-semibold tracking-wide text-[#f5e9d6]">
        Build Fast. Design Beautifully.
      </span>
    </VelocityScroll>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/50 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/50 to-transparent" />
    <div className="pointer-events-none absolute bottom-0 w-[60%] h-24 rounded-full blur-3xl bg-yellow-400/10" />
  </motion.div>
);

const SkeletonFour = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="relative z-10 h-full w-full rounded-xl p-6 shadow-lg backdrop-blur-md hover:shadow-2xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#1c1c1c] via-[#131313] to-[#1c1c1c] border border-[#2b2b2b]"
  >
    <div className="absolute inset-0 z-0 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:16px_16px] opacity-6" />

    <div className="space-y-2 z-10">
      <h3 className="text-lg font-semibold text-[#f6e9cd]">
        Love this project?
      </h3>
      <p className="text-sm text-[#bba77a]/80 max-w-sm mx-auto">
        Show your support by starring us on GitHub.
      </p>
    </div>

    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="mt-4"
    >
      <Star className="w-8 h-8 text-yellow-400 drop-shadow-md" />
    </motion.div>

    <Button
      asChild
      className="z-20 mt-6 w-full gap-2 text-sm font-medium bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 rounded-xl border border-[#B88746]/50 p-4"
    >
      <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        href="https://github.com/Vaibhav-kesarwani"
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 text-[#f6e9cd] text-center w-full block"
      >
        Star on GitHub
      </motion.a>
    </Button>
  </motion.div>
);

// BentoGrid items array
const items = [
  {
    header: <SkeletonOne />,
  },
  {
    header: <SkeletonTwo />,
  },
  {
    header: <SkeletonThree />,
  },
  {
    header: <SkeletonFour />,
  },
];

const blogPosts = [
  {
    title: "Designing with Purpose",
    link: "/blog/designing-with-purpose",
  },
  {
    title: "Top 10 UI Trends in 2025",
    link: "/blog/ui-trends-2025",
  },
  {
    title: "How to Build Modular Components",
    link: "/blog/modular-components",
  },
];
