"use client";

import { motion } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
}

export default function AnimatedContact({
  text,
  className = "",
  wordSpace = "mr-[14px]",
  charSpace = "mr-[0.001em]",
}: AnimatedTitleProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span variants={container} className={wordSpace} key={idx}>
          {word.split("").map((char, index) => (
            <motion.span variants={child} className={charSpace} key={index}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
}
