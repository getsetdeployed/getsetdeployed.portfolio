"use client";

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  text: string;
  className: string;
  wordSpace: string;
  charSpace: string;
  delay?: number;
};

export default function AnimatedTitle({
  text,
  className,
  wordSpace,
  charSpace,
}: AnimatedTitleProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
        staggerChildren: 0.05,
      },
    },
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.5em`,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        bounce: 0.5,
      },
    },
  };

  return (
    <h2 aria-label={text} className={className} ref={ref}>
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className={`inline-block whitespace-nowrap ${wordSpace}`}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className={`inline-block ${charSpace}`}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h2>
  );
}
