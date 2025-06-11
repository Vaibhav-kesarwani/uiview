import { Star } from "lucide-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Button } from "./ui/button";
import { VelocityScroll } from "./ui/vellocity-scroll";

// Main Card Container
export function FeatureCard() {
  return (
    <BentoGrid className="max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={i === 1 || i === 2 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// Minimal placeholder component
const SkeletonOne = () => (
  <div className="h-48 rounded-xl bg-muted/20 border border-border backdrop-blur-sm p-6 flex items-center justify-center text-muted-foreground">
    Coming soon...
  </div>
);

// Hero animation bar
const SkeletonTwo = () => (
  <div className="h-48 rounded-xl border border-border backdrop-blur-sm bg-card p-6 shadow-md flex flex-col items-center justify-center text-center">
    <h2 className="text-xl font-semibold text-foreground">Tech Stack</h2>
    <p className="text-sm text-muted-foreground mt-2">
      Modern tools used in our projects.
    </p>
    <div className="mt-4 w-full max-w-sm">
      <VelocityScroll>
        <span className="text-base sm:text-lg font-medium text-primary">
          Next.js · Tailwind CSS · shadcn/ui ·
        </span>
      </VelocityScroll>
    </div>
  </div>
);

// Visual animation background
const SkeletonThree = () => (
  <div className="relative h-full w-full rounded-xl overflow-hidden border border-border bg-gradient-to-br from-background via-muted to-background shadow-md p-6 flex flex-col items-center justify-center">
    <VelocityScroll>
      <span className="text-xl md:text-4xl font-semibold tracking-wide text-foreground text-center">
        Build Fast. Design Beautifully.
      </span>
    </VelocityScroll>

    {/* Aesthetic background gradients */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/80 to-transparent" />
    <div className="pointer-events-none absolute bottom-0 w-[60%] h-24 rounded-full blur-3xl bg-blue-500/10" />
  </div>
);

// GitHub Star Card
const SkeletonFour = () => (
  <div className="relative h-full w-full rounded-xl border border-border bg-card p-6 shadow-lg backdrop-blur-md transition hover:shadow-2xl flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          Love this project?
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Show your support by starring us on GitHub.
        </p>
      </div>

      <Star className="w-8 h-8 text-yellow-400 animate-pulse drop-shadow-md" />
    </div>

    <Button
      asChild
      variant="default"
      className="mt-4 w-full gap-2 text-sm font-medium"
    >
      <a
        href="https://github.com/your-repo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Star className="w-4 h-4" />
        Star on GitHub
      </a>
    </Button>
  </div>
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
