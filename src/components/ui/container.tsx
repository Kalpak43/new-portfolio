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
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      delayChildren: 0.8,
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
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "w-full py-6 px-4 md:px-8 rounded-2xl bg-radial-[at_0_0] from-[#4a526640] from-0% to-[#ffffff0a] backdrop-blur-30 border border-white/10 shadow-container",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default Container;
