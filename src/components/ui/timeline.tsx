import { cn } from "@/lib/utils";
import React from "react";
import { motion, Variants } from "motion/react";

interface TimelineProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

const timelineContainerVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(100px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const timelineItemRowVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const lineSegmentVariants: Variants = {
  hidden: { scaleY: 0 }, // Start with no height
  visible: {
    scaleY: 1, // Animate to full height
    transition: { duration: 0.4, ease: "easeOut", delay: 0.5 }, // Line draws after the item row starts appearing
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 }, // Start scaled down and faded out
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 10,
      delay: 0.35, // Dot pops in after the line starts drawing or item row appears
    },
  },
};

function Timeline({ children }: TimelineProps) {
  return (
    <motion.div
      className="relative"
      data-slot="timeline"
      variants={timelineContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="relative">
        {React.Children.map(children, (child, index) => {
          if (
            React.isValidElement(child) &&
            (child.type as any)?.displayName === "TimelineItem"
          ) {
            return (
              <motion.div
                key={index}
                className="flex items-center relative pb-4"
                variants={timelineItemRowVariants}
              >
                <div className="absolute top-1 left-0 h-full w-3 flex flex-col items-center">
                  {/* Animated Dot and line */}
                  <motion.div
                    className="h-3 w-3 border-2 border-primary bg-secondary shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] rounded-full z-10"
                    variants={dotVariants}
                  />
                  <motion.div
                    className="w-1 bg-primary rounded-full shadow-[0px_0px_1px_rgba(0,0,0,0.56),0px_0px_3px_rgba(44,44,44,0.61)] my-1 flex-grow"
                    style={{ originY: 0 }}
                    variants={lineSegmentVariants}
                  />
                </div>
                <div className="ml-6 w-full">{child}</div>
              </motion.div>
            );
          }

          return child;
        })}
      </div>
    </motion.div>
  );
}

const timelineItemContentVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(20px)" }, // Start to the left and faded out
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 12,
      delay: 0.3, // Content animates slightly after its parent row and dot/line elements
    },
  },
};

function TimelineItem({ children, className }: React.ComponentProps<"div">) {
  return (
    <motion.div
      className={cn("w-full", className)}
      data-slot="timeline-item"
      variants={timelineItemContentVariants}
      whileHover={{
        y: -8, // Move up by 8 pixels on hover
        transition: { type: "spring", stiffness: 100, damping: 10 }, // Smooth spring animation for hover
      }}
    >
      {children}
    </motion.div>
  );
}

TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
