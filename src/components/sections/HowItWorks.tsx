"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Sparkles, Share2 } from 'lucide-react';

interface StepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard = ({ icon: Icon, title, description, stepNumber }: StepProps) => {
  return (
    <motion.div
      className="relative flex items-start md:items-center gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-deep-charcoal/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: stepNumber * 0.1 }}
    >
      <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-electric-violet/20 border border-electric-violet text-electric-violet font-bold text-lg">
        {stepNumber}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Icon className="absolute right-4 bottom-4 w-16 h-16 text-electric-violet/10 opacity-30" />
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: UploadCloud,
      title: "Upload Your Footage",
      description: "Securely upload your raw video files to our cloud platform. We support all major formats.",
    },
    {
      icon: Sparkles,
      title: "AI Magic at Work",
      description: "Our advanced AI analyzes your video, automating cuts, captions, and color grading based on your preferences.",
    },
    {
      icon: Share2,
      title: "Review & Export",
      description: "Review the AI-generated edit, make any final tweaks, and export your polished video in stunning quality.",
    },
  ];

  return (
    <section className="py-20 bg-midnight-black text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Workflow, Supercharged.
        </motion.h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Glowing connecting lines */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-violet/0 via-electric-violet/50 to-electric-violet/0 z-0"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-lime/0 via-cyber-lime/50 to-cyber-lime/0 animate-pulse duration-1000 z-0"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;