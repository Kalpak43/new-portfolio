import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

function ProjectCard() {
  return (
    <motion.div
      className="space-y-2 rounded-xl hover:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] border border-secondary/0 hover:border-secondary/40 hover:bg-primary/10 group transition-all duration-500"
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
      <motion.div
        className="aspect-video rounded-xl overflow-hidden group-hover:rounded-b-none  transition-all duration-500 shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)]"
        variants={blurFadeIn}
      >
        <Image
          src={"/assets/images/projects/project.webp"}
          alt="Chatbot screenshot"
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        className="px-2 py-2 space-y-1"
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
        <motion.h4
          className="font-[500] text-primary-font"
          variants={blurFadeIn}
        >
          J.A.C.A. - Just Another Chat Application
        </motion.h4>
        <motion.p
          className="text-justify line-clamp-3 text-sm leading-relaxed"
          variants={blurFadeIn}
        >
          This is an AI chat application.This project leverages the MERN stack
          for its web application framework, Langchain for orchestrating AI
          workflows, and the Gemini API for advanced language understanding and
          generation. It offers a dynamic and responsive user interface, robust
          backend capabilities, and state-of-the-art natural language
          processing.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
