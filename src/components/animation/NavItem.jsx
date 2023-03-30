import React, { useState } from "react";
import { motion } from "framer-motion";

const NavItem = ({ label, href, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered((prevState) => !prevState);

  const variants = {
    start: { scaleX: 0, originX: "50%" },
    end: { scaleX: 1, originX: "50%" },
  };

  return (
    <li className="relative p-0">
      <a
        href={href}
        className="bg-opacity-90 hover:text-blue-500 font-medium uppercase tracking-wide text-sm"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={onClick}
      >
        <span className="relative z-1">{label}</span>
        <motion.div
          className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0"
          initial="start"
          animate={isHovered || isActive ? "end" : "start"}
          variants={variants}
          transition={{ duration: 0.3 }}
        />
      </a>
    </li>
  );
};

export default NavItem;
