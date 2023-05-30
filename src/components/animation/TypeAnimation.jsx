import React, { useState, useEffect } from "react";

const TypeAnimation = () => {
  const [text, setText] = useState("");
  const words = ["Like Coding.", "love web development."];
  const delay = 100;

  useEffect(() => {
    let currentIndex = 0;
    let currentWord = words[currentIndex];
    let currentLength = 0;
    let isDeleting = false;

    const intervalId = setInterval(() => {
      if (isDeleting) {
        currentLength--;
      } else {
        currentLength++;
      }

      setText(currentWord.substring(0, currentLength));

      if (currentLength === currentWord.length + 1) {
        isDeleting = true;
      }

      if (currentLength === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
        currentWord = words[currentIndex];
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-8">
      <h2 className="relative text-blue-500 font-semibold text-xl mb-7 before:absolute before:bottom-0 before:h-0.5 before:w-full before:bg-blue-500">
        <span className="text-white">I</span>{" "+text}
      </h2>
    </div>
  );
};

export default TypeAnimation;
