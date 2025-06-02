import Image from "next/image";
import React from "react";

function ProjectCard() {
  return (
    <div className="space-y-2 rounded-xl hover:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] border border-secondary/0 hover:border-secondary/40 group transition-all duration-500">
      <div className="aspect-video rounded-xl overflow-hidden group-hover:rounded-b-none  transition-all duration-500">
        <Image
          src={"/assets/images/projects/project.webp"}
          alt="Chatbot screenshot"
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-2 py-2 space-y-1">
        <h4 className="font-[500] text-primary-font">
          J.A.C.A. - Just Another Chat Application
        </h4>
        <p className="text-justify line-clamp-3 text-sm leading-relaxed">
          This is an AI chat application.This project leverages the MERN stack
          for its web application framework, Langchain for orchestrating AI
          workflows, and the Gemini API for advanced language understanding and
          generation. It offers a dynamic and responsive user interface, robust
          backend capabilities, and state-of-the-art natural language
          processing.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
