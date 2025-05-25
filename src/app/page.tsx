"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Container() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Get scroll progress for this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to border radius values
  // When container is at viewport center, radius is smallest (20px)
  // When container is far from center, radius is largest (200px)
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [200, 100, 50, 100, 200]
  );

  // Optional: Add opacity transformation for extra visual effect
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.3, 0.7, 1, 0.7, 0.3]
  );

  // Optional: Add scale transformation
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.8, 0.9, 1, 0.9, 0.8]
  );

  return (
    <motion.main ref={containerRef} className="py-6 lg:px-10 h-[100dvh]">
      <motion.div
        className="w-full h-full border"
        style={{
          borderRadius: borderRadius,
          opacity: opacity,
          // scale: scale,
        }}
      ></motion.div>
    </motion.main>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      {[0, 1, 2, 3].map((index) => (
        <Container key={index} />
      ))}
    </div>
  );
}
