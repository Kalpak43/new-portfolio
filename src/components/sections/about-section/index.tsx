import Container from "@/components/ui/container";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { motion, Variant, Variants } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

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

const volunteering = [
  {
    title: "Core Team Member",
    company: "Google Developer Student Clubs, GHRCE",
    duration: "Aug, 2023 - Aug, 2024",
    contribution:
      "Here, I lead the web development team and developed different types of event websites.",
  },
  {
    title: "Web Developer",
    company: "IEEE CS GHRCE",
    duration: "June, 2023 - Aug, 2023",
    contribution: "Developed the home page and event page during the tenure.",
  },
];

function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
      <Container className="md:col-span-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h2
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl font-[500] text-primary-font"
            >
              Experience
            </motion.h2>
          </div>
          <div className="px-2">
            <Timeline>
              {experiences.map((exp) => (
                <TimelineItem key={exp.duration}>
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
            <motion.h2
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl font-[500] text-primary-font"
            >
              Volunteering
            </motion.h2>
          </div>
          <div className="px-2">
            <Timeline>
              {volunteering.map((vol) => (
                <TimelineItem key={vol.duration}>
                  <div className="w-full space-y-2 rounded-xl hover:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] border border-secondary/0 hover:border-secondary/40 hover:bg-primary/10 group transition-all duration-500">
                    <div className="px-2 py-4 space-y-1 w-full">
                      <div className=" flex max-md:flex-col md:items-center justify-between gap-1 w-full">
                        <h4 className="font-[500] text-primary-font">
                          {vol.title}
                        </h4>
                        <p className="text-xs flex items-center">
                          <FaRegCalendar className="inline mr-2" />
                          {vol.duration}
                        </p>
                      </div>
                      <p className="text-sm">{vol.company}</p>
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
