import { cn } from "@/lib/utils";
import React from "react";
import { motion, Variants } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const containerVariant: Variants = {
  hidden: {
    opacity: 0,
    boxShadow: "none",
  },
  visible: {
    opacity: 1,
    boxShadow: "var(--shadow-container)",
    transition: {
      duration: 0.1,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

function Container({ children, className }: CardProps) {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        "w-full py-6 px-4 md:px-8 rounded-2xl space-x-4 bg-radial-[at_0_0] from-[#4a526640] from-0% to-[#ffffff0a] backdrop-blur-30 border border-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default Container;
