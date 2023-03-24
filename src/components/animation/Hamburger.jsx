import React, { useState } from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative items-center flex">
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
      <ul
        className={`flex justify-center gap-x-8 max-md:gap-x-5 max-sm:gap-y-10 max-sm:bg-slate-700 max-sm:fixed max-sm:flex-col max-sm:h-screen max-sm:top-0 max-sm:items-center max-sm:w-4/6 max-sm:z-20   ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <NavItem letter="Home" />
        <NavItem letter="About" />
        <NavItem letter="Skills" />
        <NavItem letter="Projects" />
        <NavItem letter="Contact" />
      </ul>
    </div>
  );
}

export default Hamburger;
