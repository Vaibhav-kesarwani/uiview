import { GoldenGlow } from "@/components/golden-glow";
import Feature from "@/components/sections/feature";
import Hero from "@/components/sections/hero";
import TopCreator from "@/components/sections/top-creator";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <>
      <div className="hidden lg:flex">
        <Spotlight />
      </div>
      <div className="relative lg:hidden">
        <GoldenGlow />
      </div>
      <Hero />
      <Feature />
      <TopCreator />
    </>
  );
}
