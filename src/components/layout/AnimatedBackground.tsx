"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 w-full h-full animated-gradient-background -z-10 opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default AnimatedBackground;