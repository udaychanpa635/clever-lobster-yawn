"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ opacity, y }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-midnight-black text-white overflow-hidden p-4"
    >
      {/* Glowing Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-electric-violet/30 blur-3xl opacity-50"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          background: 'radial-gradient(circle, var(--electric-violet) 0%, transparent 70%)',
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-cyber-lime/30 blur-3xl opacity-50"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
        style={{
          background: 'radial-gradient(circle, var(--cyber-lime) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 font-sans">
          Edit Videos at the Speed of Thought.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Automate cuts, captions, and color grading with one click, powered by advanced AI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            className="relative bg-electric-violet text-white hover:bg-electric-violet/90 rounded-full px-8 py-3 text-lg font-semibold overflow-hidden
                       before:content-[''] before:absolute before:inset-0 before:bg-[length:200%_100%] before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
          >
            Get Started
          </Button>
          <Button variant="ghost" className="text-white hover:text-cyber-lime flex items-center space-x-2 text-lg">
            <PlayCircle className="w-6 h-6" />
            <span>Watch Demo</span>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;