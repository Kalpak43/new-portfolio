import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // in seconds for one full loop
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

function Marquee({
  children,
  speed = 10,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      setWidth(contentWidth);

      controls.start({
        x: direction === "left" ? [0, -contentWidth] : [0, contentWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    }
  }, [direction, speed, children, controls]);

  return (
    <div
      className={`relative overflow-hidden whitespace-nowrap ${className}`}
      ref={containerRef}
    >
      <motion.div
        className="flex"
        animate={controls}
        style={{ willChange: "transform" }}
        onMouseEnter={() => {
          if (pauseOnHover) controls.stop();
        }}
        onMouseLeave={() => {
          if (pauseOnHover) {
            controls.start({
              x: direction === "left" ? [0, -width] : [0, width],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: speed,
                  ease: "linear",
                },
              },
            });
          }
        }}
      >
        <div ref={contentRef} className="flex">
          {children}
        </div>
        <div className="flex">{children}</div>
      </motion.div>
    </div>
  );
}

export default Marquee;
