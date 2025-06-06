import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

const skills = [
  {
    name: "HTML",
    logo: "/assets/icons/html.svg",
  },
  {
    name: "CSS",
    logo: "/assets/icons/css.svg",
  },
  {
    name: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  {
    name: "React",
    logo: "/assets/icons/react.svg",
  },
  {
    name: "Next",
    logo: "/assets/icons/nextjs.svg",
  },
  {
    name: "Tailwindcss",
    logo: "/assets/icons/tailwindcss.svg",
  },

  {
    name: "Redux Toolkit",
    logo: "/assets/icons/redux.svg",
  },
  {
    name: "Recoil.js",
    logo: "/assets/icons/recoil.svg",
  },
  {
    name: "Firebase",
    logo: "/assets/icons/firebase.svg",
  },
  {
    name: "Supabase",
    logo: "/assets/icons/supabase.svg",
  },
  {
    name: "Material UI",
    logo: "/assets/icons/material.svg",
  },
  {
    name: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  {
    name: "Express.js",
    logo: "/assets/icons/express.svg",
  },
  {
    name: "Mongo",
    logo: "/assets/icons/mongodb.svg",
  },
  {
    name: "Langchain",
    logo: "/assets/icons/langchain.svg",
  },
  {
    name: "Qdrant",
    logo: "/assets/icons/qdrant.svg",
  },
  {
    name: "Chroma",
    logo: "/assets/icons/chroma.webp",
  },
  {
    name: "Docker",
    logo: "/assets/icons/docker.svg",
  },
  {
    name: "VS Code",
    logo: "/assets/icons/vs-code.svg",
  },
  {
    name: "Git",
    logo: "/assets/icons/git.svg",
  },
  {
    name: "GitHub",
    logo: "/assets/icons/github.svg",
  },
  {
    name: "Figma",
    logo: "/assets/icons/figma.svg",
  },
];

function Skills() {
  return (
    <Container className="md:col-span-12 xl:col-span-4 max-md:px-1 max-md:order-2 max-xl:order-3">
      <motion.div
        className="h-full w-full flex items-center justify-center flex-wrap gap-x-2 md:gap-x-4 gap-y-2"
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
        {skills.map((skill, index) => (
          <motion.div key={skill.name} variants={blurFadeIn}>
            <Badge>
              <span>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  height={100}
                  width={100}
                  className="w-2 md:w-4"
                />
              </span>
              <span>{skill.name}</span>
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default Skills;
