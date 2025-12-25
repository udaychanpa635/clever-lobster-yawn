"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import HowItWorks from "@/components/sections/HowItWorks";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer"; // Import the new Footer component

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <BentoGridFeatures />
      <HowItWorks />
      <CallToAction />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Index;