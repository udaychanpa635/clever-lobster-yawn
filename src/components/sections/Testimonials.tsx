"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, title, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md border border-deep-charcoal/50 rounded-xl p-8 flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-cyber-lime fill-cyber-lime" />
        ))}
      </div>
      <p className="text-lg text-gray-200 mb-6 flex-grow">"{quote}"</p>
      <div>
        <p className="font-semibold text-white text-xl">{author}</p>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "Lumina AI has revolutionized our video production workflow. What used to take days now takes hours!",
      author: "Alex Chen",
      title: "Head of Content, InnovateCorp",
    },
    {
      quote: "The AI-powered editing features are incredibly intuitive and powerful. Our engagement rates have skyrocketed.",
      author: "Maria Rodriguez",
      title: "Creative Director, Visionary Studios",
    },
    {
      quote: "I can't imagine going back to manual editing after experiencing the speed and precision of Lumina AI.",
      author: "Samira Khan",
      title: "Freelance Videographer",
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
          What Our Users Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;