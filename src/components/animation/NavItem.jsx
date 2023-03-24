import React,{ useState } from "react";
import { motion } from "framer-motion";

const NavItem = ({ letter }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => setHovered(!hovered);

  const variants = {
    start: { scaleX: 0, originX: "50%" },
    end: { scaleX: 1, originX: "50%" },
  };

  return (
    <li className="relative p-0">
      <a
        href="#"
        className="opacity-90 hover:text-blue-500 font-medium uppercase tracking-wide text-sm"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <span className="relative z-1">{letter}</span>
        <motion.div
          className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0"
          initial="start"
          animate={hovered ? "end" : "start"}
          variants={variants}
          transition={{ duration: 0.3 }}
        />
      </a>
    </li>
  );
};

export default NavItem;
