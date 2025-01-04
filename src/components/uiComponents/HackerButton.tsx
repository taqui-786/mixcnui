"use client";

import React, { useState, useEffect } from "react";

interface HackerButtonProps {
  text: string;
  className?: string;
}

const HackerButton: React.FC<HackerButtonProps> = ({
  text = "Hover Me",
  className,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovering) {
      let iterations = 0;
      const maxIterations = 10;

      interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, idx) => {
              if (idx < iterations) {
                return text[idx];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        iterations += 1 / 3;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 30);
    } else {
      setDisplayText(text);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, text]);

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`px-4 py-2 bg-primary hover:bg-primary/90 dark:text-black text-white rounded-md transition-colors ${className}`}
    >
      <span className="font-mono">{displayText}</span>
    </button>
  );
};

export default HackerButton;
