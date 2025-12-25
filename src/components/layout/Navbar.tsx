"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-midnight-black/70 backdrop-blur-md border-b border-deep-charcoal/50 py-4"
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link to="/" className="text-2xl font-bold text-electric-violet">
          Lumina AI
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-electric-violet">
            Log In
          </Button>
          <Button className="bg-electric-violet text-white hover:bg-electric-violet/90 rounded-full px-6 py-2 font-semibold">
            Start Free
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;