import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import React, { useEffect } from "react";

export default function page() {

  const projects = [
    {
      title: "GDSC GHRCE Website",
      desc: "This is a frontend website for GDSC GHRCE.",
      techStack: ["ReactJs", "Tailwind", "Daisy UI"],
      external: "https://gdscghrce.in/",
      github: "",
    },
    {
      title: "Angular Homes App",
      desc: "This is website made with the use of angular and firebase.",
      techStack: ["Angular", "Firebase"],
      external: "https://homes-app-ecc89.firebaseapp.com/",
      github: "https://github.com/Kalpak43/firebase-homes-app",
    },
    {
      title: "Chain Reaction Game",
      desc: "This is website made with the use of angular and firebase.",
      techStack: ["ReactJs", "Tailwind"],
      external: "",
      github: "https://github.com/Kalpak43/Chain-Reaction-Game",
    },
    {
      title: "Project-Sports",
      desc: "This is a social media app made for sports enthusiasts.",
      techStack: ["NextJs", "Tailwind", "Firebase", "Typescript"],
      external: "https://project-sports-omega.vercel.app/",
      github: "https://github.com/Kalpak43/Project-Sports",
    },
    {
      title: "Auth Practice App",
      desc: "This a NextJs app made for practicing authentication.",
      techStack: ["NextJs", "Tailwind", "MongoDB", "Typescript"],
      external: "https://project-sports-omega.vercel.app/",
      github: "https://github.com/Kalpak43/Project-Sports",
    },
  ];

  return (
    <main className="py-6 lg:px-10 space-y-8 md:space-y-0" id="contact-me">
      <Heading title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 card-container">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              techStack={project.techStack}
              external={project.external}
              github={project.github}
            />
          );
        })}
      </div>
    </main>
  );
}
