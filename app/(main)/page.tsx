import Feature from "@/components/sections/feature";
import Hero from "@/components/sections/hero";
import TopCreator from "@/components/sections/top-creator";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <>
      <Spotlight />
      <Hero />
      <Feature />
      <TopCreator />
    </>
  );
}
