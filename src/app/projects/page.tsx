import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function page() {
  return (
    <main className="py-6 lg:px-10 space-y-8" id="contact-me">
      <Heading title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard />
      </div>
    </main>
  );
}
