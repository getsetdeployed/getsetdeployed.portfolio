"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const words = "Oops! The page you're looking for doesn't exist.".split(" ");

  return (
    <div className="h-[100vh] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 text-center font-sans font-extrabold">
          404
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white mt-8 text-center text-xl md:text-2xl font-bold"
        >
          <TextGenerateEffect words={words} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-lg font-bold text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
              Return to Home
            </span>
          </Link>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
