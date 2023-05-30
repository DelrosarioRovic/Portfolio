import React, { useState } from "react";
import { motion } from "framer-motion";

function Hamburger({ isOpen, toggleMenu }) {
  return (
      <button onClick={toggleMenu} className="absolute right-0 z-30 sm:hidden">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="h-0.5 bg-white w-6 block mb-1.5 opacity-90"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="h-0.5 bg-white w-6 block mb-1.5 opacity-90"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="h-0.5 bg-white w-6 block mb-1.5 opacity-90"
        />
      </button>
  );
}

export default Hamburger;
