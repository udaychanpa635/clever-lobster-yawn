"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: "/public/placeholder.svg", alt: "Google" },
  { src: "/public/placeholder.svg", alt: "Meta" },
  { src: "/public/placeholder.svg", alt: "Netflix" },
  { src: "/public/placeholder.svg", alt: "Amazon" },
  { src: "/public/placeholder.svg", alt: "Microsoft" },
  { src: "/public/placeholder.svg", alt: "Apple" },
  { src: "/public/placeholder.svg", alt: "Spotify" },
  { src: "/public/placeholder.svg", alt: "Adobe" },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-midnight-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-lg text-gray-400">
          Leading companies leverage Lumina AI to revolutionize their video workflows.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex flex-nowrap animate-marquee whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {Array(2).fill(logos).flat().map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;