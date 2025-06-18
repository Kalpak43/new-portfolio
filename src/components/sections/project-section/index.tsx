import ProjectCard from "@/components/project-card";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import React from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import Link from "next/link";

const projects = [
  {
    title: "J.A.C.A. - Just Another Chat Application",
    description: `This is an AI chat application.This project leverages the MERN stack
          for its web application framework, Langchain for orchestrating AI
          workflows, and the Gemini API for advanced language understanding and
          generation.`,
    thumbnail: "/assets/images/projects/project.webp",
    github: "https://github.com/Kalpak43/chatbot",
    deploy: "https://chatbot-two-gules.vercel.app/",
    tech: [
      {
        name: "React",
        logo: "/assets/icons/react.svg",
      },
      {
        name: "Redux Toolkit",
        logo: "/assets/icons/redux.svg",
      },
      {
        name: "Node.js",
        logo: "/assets/icons/nodejs.svg",
      },
      {
        name: "Mongo",
        logo: "/assets/icons/mongodb.svg",
      },
      {
        name: "Langchain",
        logo: "/assets/icons/langchain.svg",
      },
    ],
  },
  {
    title: "AI trip planner",
    description: `This projects helps you in planning your trips to different places. The project suggests you areas to travel and places to stay. It integrates Gemini and variou Google Maps API features to give you the best itinerary for your trip.`,
    thumbnail: "/assets/images/projects/project-2.webp",
    github: "https://github.com/Kalpak43/AI_TRIP_PLANNER",
    deploy: "https://ai-trip-planner-eight-ebon.vercel.app/",
    tech: [
      {
        name: "React",
        logo: "/assets/icons/react.svg",
      },
      {
        name: "Redux Toolkit",
        logo: "/assets/icons/redux.svg",
      },
      {
        name: "Node.js",
        logo: "/assets/icons/nodejs.svg",
      },
      {
        name: "Firebase",
        logo: "/assets/icons/firebase.svg",
      },
    ],
  },
  {
    title: "Sports Connect",
    description: `A site which helps sports enthusiasts connect with each other. Uses Nextjs and firebase under the hood, with daisy UI for providing beautiful UI.`,
    thumbnail: "/assets/images/projects/project-3.webp",
    github: "https://github.com/Kalpak43/Sports-Site",
    // deploy: "https://project-sports-omega.vercel.app/",
    tech: [
      {
        name: "Next",
        logo: "/assets/icons/nextjs.svg",
      },
      {
        name: "Firebase",
        logo: "/assets/icons/firebase.svg",
      },
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 space-y-8"
    >
      <Container className="col-span-full space-y-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h2
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl font-[500] text-primary-font"
            >
              Projects
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </div>
        <motion.div
          className="text-center md:text-right"
          variants={blurFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Button variant="secondary" className="" asChild>
            <Link href={"https://github.com/Kalpak43"} target="_blank">
              More Projects
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;
