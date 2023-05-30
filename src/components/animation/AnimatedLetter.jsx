import React from "react";
import { useState } from "react";

function useAnimatedLetters() {
  const [letterClass, setletterClass] = useState("text-animate");
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
    setletterClass("text-animate-bounce");
  }

  function handleMouseLeave() {
    setIsHovering(false);
    setletterClass("text-animate-bounce");
  }

  return { letterClass, isHovering, handleMouseEnter, handleMouseLeave };
}


function AnimatedLetters({ letterClass, strArray, idx, onMouseEnter, onMouseLeave, isHovering }) {
  return (
    <span>
      {strArray.map((char, i) => {
        const delay = isHovering ? 0 : (i + idx) * 0.1;
        const style = {
          animationDelay: `${delay}s` // set animation delay for current letter
        };
        return (
          <span
            key={char + i}
            className={`${letterClass} _${i + idx}`}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

export { useAnimatedLetters, AnimatedLetters };
