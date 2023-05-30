import React from "react";
import { motion } from "framer-motion";

function FlashingSymbol({letter}) {
    return <motion.span
            animate={{
              opacity: [0, .8, 0],
              transition: { duration: 3, ease: "linear", repeat: Infinity, delay: 0 },
            }}
          >
          {letter}
    </motion.span>
}

export default FlashingSymbol;