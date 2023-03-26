import { defaults } from "autoprefixer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingAnimation = ({ yValues, wrapperClassName, children, whileHover, whileTap, whileExit, delay }) => {
  const [isReloaded, setIsReloaded] = useState(false);

  useEffect(() => {
    setIsReloaded(true);
    setTimeout(() => {
      setIsReloaded(false);
    }, 3000);
  }, []);

  const upAndDown = {
    y: yValues,
    opacity: 1,
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  const fade = {
    opacity: [0, 1 , 1],
    transition: {
      duration: 2.5,
      delay:delay
    },
  };

  const hover = {
    scale: 1.3,
    transition: { duration: 0.3 },
  };

  const tap = { scale: 0.8 };
  const defaultS = {scale :1};
  return (
    <motion.div
      className={wrapperClassName}
      animate={isReloaded ? fade : upAndDown}
      whileHover={whileHover ? hover : {}}
      whileTap={whileTap ? tap : {}}
      exit={whileExit ? defaults : {}}
    >
      {children}
    </motion.div>
  );
};

export default FloatingAnimation;
