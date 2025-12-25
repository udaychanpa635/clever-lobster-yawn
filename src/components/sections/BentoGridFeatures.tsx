"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Captions, Scissors, Palette } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => {
  return (
    <motion.div
      className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-deep-charcoal/50 overflow-hidden cursor-pointer
                  flex flex-col justify-between group ${className}`}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/10 to-cyber-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10">
        <Icon className="w-10 h-10 text-electric-violet mb-4 group-hover:text-cyber-lime transition-colors duration-300" />
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

const BentoGridFeatures = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-midnight-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unleash Your Creative Potential
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 }}>
            <FeatureCard
              title="Auto-Captions"
              description="Generate accurate, stylish captions in seconds, perfectly synced to your dialogue."
              icon={Captions}
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.2 }}>
            <FeatureCard
              title="Magic Cut"
              description="Intelligently remove silences and filler words, creating a tighter, more engaging edit."
              icon={Scissors}
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.3 }}>
            <FeatureCard
              title="Neural Color Grade"
              description="Achieve cinematic looks with AI-powered color correction and grading, effortlessly."
              icon={Palette}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGridFeatures;