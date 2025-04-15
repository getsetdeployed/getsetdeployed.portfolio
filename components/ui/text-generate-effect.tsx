"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({ words }: { words: string[] }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.map((word) => {
    return word.split("");
  });

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [animate]);

  const renderWords = wordsArray.map((word, idx) => {
    return (
      <motion.div key={`word-${idx}`} className="inline-block mr-2.5">
        {word.map((letter, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            key={`letter-${index}`}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  });

  return (
    <div className="font-extrabold">
      <div ref={scope}>{renderWords}</div>
    </div>
  );
};
