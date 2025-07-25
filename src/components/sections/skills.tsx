import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

const skills = {
  frontend: [
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
      name: "Material UI",
      logo: "/assets/icons/material.svg",
    },
  ],
  backend: [
    {
      name: "Firebase",
      logo: "/assets/icons/firebase.svg",
    },
    {
      name: "Supabase",
      logo: "/assets/icons/supabase.svg",
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
      name: "Langchain",
      logo: "/assets/icons/langchain.svg",
    },
  ],
  databases: [
    {
      name: "Mongo",
      logo: "/assets/icons/mongodb.svg",
    },
    {
      name: "Qdrant",
      logo: "/assets/icons/qdrant.svg",
    },
    {
      name: "Chroma",
      logo: "/assets/icons/chroma.webp",
    },
  ],
  tools: [
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
  ],
};

type SkillCategory = keyof typeof skills;

const skillCategories: { key: SkillCategory; label: string }[] = [
  { key: "frontend", label: "Frontend:" },
  { key: "backend", label: "Backend:" },
  { key: "databases", label: "Databases:" },
  { key: "tools", label: "Tools:" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 space-y-8"
    >
      <Container className="col-span-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <motion.h2
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl font-[500] text-primary-font"
            >
              Skills
            </motion.h2>
          </div>
          <div className="space-y-4">
            {skillCategories.map(({ key, label }) => (
              <motion.div
                key={key}
                className="space-y-2"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.3, // adjust for faster/slower stagger
                    },
                  },
                }}
              >
                <motion.h4
                  className="font-[500] text-primary-font text-lg"
                  variants={blurFadeIn}
                >
                  {label}
                </motion.h4>
                <motion.div
                  className="h-full w-full flex items-center justify-start flex-wrap gap-x-2 md:gap-x-2 gap-y-2 px-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {skills[key].map((skill) => (
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
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
