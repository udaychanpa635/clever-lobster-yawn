"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-deep-charcoal text-gray-400 py-10 border-t border-deep-charcoal/50"
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-6">
          <Link to="/" className="text-2xl font-bold text-electric-violet hover:text-cyber-lime transition-colors duration-300">
            Lumina AI
          </Link>
        </div>
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Lumina AI. All rights reserved.
        </p>
        <p className="text-xs">
          <a
            href="https://www.dyad.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Made with Dyad
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;