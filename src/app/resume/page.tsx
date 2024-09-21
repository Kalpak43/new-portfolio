import ExperienceCard from "@/components/ExperienceCard";
import Heading from "@/components/Heading";
import ProficienctLine from "@/components/ProficienctLine";
import VolunteeringCard from "@/components/VolunteeringCard";
import React from "react";

export default function page() {
  const skills = {
    programmingLanguages: [
      {
        name: "Cpp",
        proficiency: 80,
      },
      {
        name: "Python",
        proficiency: 50,
      },
      {
        name: "JavaScript",
        proficiency: 70,
      },
      {
        name: "TypeScript",
        proficiency: 60,
      },
    ],
    frontend: [
      {
        name: "ReactJs",
        proficiency: 90,
      },
      {
        name: "NextJs",
        proficiency: 80,
      },
      {
        name: "Angular",
        proficiency: 60,
      },
      {
        name: "Svelte Kit",
        proficiency: 50,
      },
    ],
    backend: [
      {
        name: "Node/Express",
        proficiency: 60,
      },
      {
        name: "Firebase",
        proficiency: 80,
      },
      {
        name: "Supabase",
        proficiency: 60,
      },
    ],
    tools: [
      {
        name: "VS Code",
        proficiency: 80,
      },
      {
        name: "Git/Github",
        proficiency: 70,
      },
      {
        name: "Figma",
        proficiency: 70,
      },
    ],
  };

  return (
    <main className="py-6 lg:px-10 space-y-8 md:space-y-0" id="resume">
      <Heading title="Resume" />
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-2xl font-[600]">Experience</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 card-container">
            <ExperienceCard
              duration="March, 2024 - Aug, 2024"
              title="Web Developer Intern"
              company="GBJ BUZZ Pvt. Ltd."
              description="I contribute by building responsive and high-performance web applications."
            />
            <ExperienceCard
              duration="Sep, 2023 - Oct, 2023"
              title="Web Developer Intern"
              company="Alhansat Solutions"
              description="Used svelte kit to develop the developer tools website module."
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-[600]">Skills</h4>
            <div className="h-[1px] bg-gradient-blue flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
            <div className="space-y-2">
              <h5 className="font-[600]">Programming Languages</h5>
              {skills.programmingLanguages.map((language, index) => {
                return <ProficienctLine {...language} key={index} />;
              })}
            </div>
            <div className="space-y-2">
              <h5 className="font-[600]">Frontend</h5>
              {skills.frontend.map((language, index) => {
                return <ProficienctLine {...language} key={100 + index} />;
              })}
            </div>
            <div className="space-y-2">
              <h5 className="font-[600]">Backend</h5>
              {skills.backend.map((language, index) => {
                return <ProficienctLine {...language} key={200 + index} />;
              })}
            </div>
            <div className="space-y-2">
              <h5 className="font-[600]">Tools</h5>
              {skills.tools.map((language, index) => {
                return <ProficienctLine {...language} key={300 + index} />;
              })}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-[600]">Volunteering</h4>
            <div className="h-[1px] bg-gradient-blue flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 card-container">
            <VolunteeringCard
              duration="Aug, 2023 - Aug, 2024"
              role="Core Team Member"
              organization="GDSC GHRCE"
              description="Here, I lead the web development team and developed different types of event websites."
              badge="/assets/images/volunteering/badge.webp"
            />
            <VolunteeringCard
              duration="June, 2023 - Aug, 2023"
              role="Web Developer"
              organization="IEEE CS GHRCE"
              description="Developed the home page and event page during the tenure."
              badge="/assets/images/volunteering/ieee-logo.webp"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
