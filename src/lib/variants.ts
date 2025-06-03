import { Variants } from "motion/react";

export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "ease-in",
    },
  },
};
