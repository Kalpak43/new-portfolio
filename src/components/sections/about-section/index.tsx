import Container from "@/components/ui/container";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import React from "react";
import { FaCalendarTimes } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "GBJ Buzz Pvt. Ltd.",
    duration: "March, 2024 - Aug, 2024",
    contribution:
      "I contribute by building responsive and high-performance web applications.",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Alhansat Solutions",
    duration: "Sep, 2023 - Oct, 2023",
    contribution:
      "Used svelte kit to develop the developer tools website module.",
  },
];

function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
      <Container className="md:col-span-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-[500] text-primary-font">
              Experience
            </h2>
          </div>
          <div className="px-2">
            <Timeline>
              {experiences.map((exp) => (
                <TimelineItem>
                  <div className="w-full space-y-2 rounded-xl hover:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] border border-secondary/0 hover:border-secondary/40 hover:bg-primary/10 group transition-all duration-500">
                    <div className="px-2 py-4 space-y-1 w-full">
                      <div className=" flex max-md:flex-col md:items-center justify-between gap-1 w-full">
                        <h4 className="font-[500] text-primary-font">
                          {exp.title}
                        </h4>
                        <p className="text-xs flex items-center">
                          <FaRegCalendar className="inline mr-2" />
                          {exp.duration}
                        </p>
                      </div>
                      <p className="text-sm">{exp.company}</p>
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </Container>
      <Container className="md:col-span-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-[500] text-primary-font">Education</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
