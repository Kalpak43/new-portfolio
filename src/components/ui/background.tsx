import React from "react";
import { motion } from "motion/react";

function Wave() {
  return (
    <div className="h-screen fixed inset-0 -z-1 bg-[var(--background-color)] overflow-hidden">
      {/* <div className="bg-blue-600 w-full h-full rotate-45"></div>; */}

      <motion.div
        className="gradient-1 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 h-40 md:h-80 aspect-square rounded-full bg-transparent z-10  blur-[80px] md:blur-[100px]"
        initial={{
          scale: 0.3,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 0.8,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.1,
        }}
      />
      <motion.div
        className="gradient-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-90 md:h-150 aspect-square rounded-full bg-transparent z-20 blur-[80px] md:blur-[100px]"
        initial={{
          scale: 0.3,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 0.8,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.1,
        }}
      />
      <motion.div
        className="gradient-3 absolute top-1/2 left-1/2 -translate-x-[100%] -translate-y-1/2 h-70 md:h-100 aspect-square rounded-full bg-transparent z-30 blur-[120px] md:blur-[200px]"
        initial={{
          scale: 0.3,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 0.8,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.1,
        }}
      />
    </div>
  );
}

export default Wave;
