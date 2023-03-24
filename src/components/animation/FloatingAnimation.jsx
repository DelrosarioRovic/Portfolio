import { motion } from "framer-motion";

function FloatingAnimation({
  children,
  duration = 4,
  yValues = [0, -20, 0, 20, 0],
  wrapperClassName,
}) {
  return (
    <motion.div
      className={wrapperClassName}
      animate={{
        y: yValues,
        transition: {
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FloatingAnimation;
