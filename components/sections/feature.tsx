import { FeatureCard } from "../feature-card";

export default function Feature() {
  return (
    <div className="mt-10 lg:mt-20 mb-20 p-8 lg:p-0">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-8">
        Standout Features
      </div>
      <FeatureCard />
    </div>
  );
}
