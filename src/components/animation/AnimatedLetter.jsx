import React from "react";

const AnimatedLetters = ({ letterClass, strArray, idx, onMouseEnter, onMouseLeave, isHovering }) => {
  return (
    <span>
      {strArray.map((char, i) => {
          const delay = isHovering ? 0.1 : (i + idx) * 0.1; 
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
};

export default AnimatedLetters;
