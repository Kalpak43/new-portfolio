import ProjectCard from "@/components/project-card";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 space-y-8">
      <Container className="col-span-full">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-[500] text-primary-font">Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
