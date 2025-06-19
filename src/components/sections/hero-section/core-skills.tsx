import React from "react";

import Badge from "@/components/ui/badge";
import Image from "next/image";
import Container from "@/components/ui/container";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import { cn } from "@/lib/utils";

const coreSkills = [
  {
    name: "React",
    logo: "/assets/icons/react.svg",
  },
  {
    name: "Redux Toolkit",
    logo: "/assets/icons/redux.svg",
  },
  {
    name: "Tailwindcss",
    logo: "/assets/icons/tailwindcss.svg",
  },
  {
    name: "Next",
    logo: "/assets/icons/nextjs.svg",
  },
  {
    name: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
];

function CoreSkills() {
  return (
    <Container className="flex-1 overflow-hidden">
      <div className="space-y-8 flex flex-col h-full">
        <div className="space-y-2  max-md:hidden">
          <motion.h2
            variants={blurFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-4xl font-[500] text-primary-font"
          >
            Tech Stack
          </motion.h2>
        </div>
        <motion.div
          className="h-full w-full flex-1 flex items-center justify-center gap-y-2 -ml-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.01, // adjust for faster/slower stagger
              },
            },
          }}
        >
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={blurFadeIn}
              className={cn(
                "p-4 xl:p-6 aspect-square w-full max-w-[80px] xl:max-w-[120px] rounded-full border border-secondary/40 bg-primary/10 shadow-[0px_0px_2px_rgba(0,0,0,0.36),0px_0px_6px_rgba(44,44,44,0.21)] backdrop-blur-md",
                "-mr-6 xl:-mr-10",
                i != coreSkills.length - 1 &&
                  " hover:mr-0 transition-all duration-300"
              )}
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                height={1000}
                width={1000}
                className="h-full w-full object-center object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}

export default CoreSkills;
