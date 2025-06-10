import { MarqueeCard } from "../marquee-card";

export default function TopCreator() {
  return (
    <div className="mb-20">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-8">
        Top Creators
      </div>
      <MarqueeCard />
    </div>
  );
}
