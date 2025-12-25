"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import HowItWorks from "@/components/sections/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <BentoGridFeatures />
      <HowItWorks />
      {/* Other sections will be added here */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;