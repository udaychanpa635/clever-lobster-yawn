"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-charcoal to-midnight-black text-white text-center relative overflow-hidden">
      {/* Background glowing orb effect */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-electric-violet/20 blur-3xl opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-52 h-52 rounded-full bg-cyber-lime/20 blur-3xl opacity-40"
        animate={{
          scale: [1, 0.9, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to Transform Your Video Editing?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the future of content creation. Experience the power of AI-driven video editing today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <Button
            className="relative bg-electric-violet text-white hover:bg-electric-violet/90 rounded-full px-10 py-4 text-xl font-semibold overflow-hidden
                       before:content-[''] before:absolute before:inset-0 before:bg-[length:200%_100%] before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
          >
            Start Editing Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;