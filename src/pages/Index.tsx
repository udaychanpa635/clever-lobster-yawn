"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import HowItWorks from "@/components/sections/HowItWorks";
import NewsletterSignup from "@/components/sections/NewsletterSignup"; // Import the new component
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <BentoGridFeatures />
      <HowItWorks />
      <NewsletterSignup /> {/* Add the NewsletterSignup component here */}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;