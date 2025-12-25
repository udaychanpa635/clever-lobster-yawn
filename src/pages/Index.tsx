"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BentoGridFeatures from "@/components/sections/BentoGridFeatures";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials"; // Import the new component
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/layout/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-midnight-black text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <SocialProof />
      <BentoGridFeatures />
      <HowItWorks />
      <Testimonials /> {/* Add the Testimonials component here */}
      <NewsletterSignup />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;