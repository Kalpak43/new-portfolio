import ProjectCard from "@/components/project-card";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import React, { useEffect, useRef } from "react";
import { motion, Variants } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import Link from "next/link";
import Slider, { SliderItem, SliderRefType } from "@/components/ui/slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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
    title: "react-chartjs-sunburst",
    description: `This is an AI chat application.This project leverages the MERN stack
          for its web application framework, Langchain for orchestrating AI
          workflows, and the Gemini API for advanced language understanding and
          generation.`,
    thumbnail: "/assets/images/projects/sunburst.webp",
    github: "https://github.com/Kalpak43/react-chartjs-sunburst",
    deploy: "https://www.npmjs.com/package/react-chartjs-sunburst",
    tech: [
      {
        name: "React",
        logo: "/assets/icons/react.svg",
      },
      {
        name: "Tailwind",
        logo: "/assets/icons/tailwindcss.svg",
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
  {
    title: "GDSC GHRCE Website",
    description: `A landing page for GDSC GHRCE community. It showcases the events and the team at GDSC GHRCE. Made with react and tailwind.`,
    thumbnail: "/assets/images/projects/gdsc1.png",
    deploy: "https://gdscghrce.in/",
    tech: [
      {
        name: "Next",
        logo: "/assets/icons/react.svg",
      },
      {
        name: "Tailwind",
        logo: "/assets/icons/tailwindcss.svg",
      },
    ],
  },
  {
    title: "HRMS Platform UI",
    description: `A UI concept for HRMS platform. Built with React, Redux and shadcn UI. It shows UI for different types of modules in an HRMS platform.`,
    thumbnail: "/assets/images/projects/hrms.webp",
    deploy: "https://hr-clone.vercel.app/",
    tech: [
      {
        name: "Next",
        logo: "/assets/icons/react.svg",
      },
      {
        name: "Redux",
        logo: "/assets/icons/redux.svg",
      },
      {
        name: "Tailwind",
        logo: "/assets/icons/tailwindcss.svg",
      },
      {
        name: "Supabase",
        logo: "/assets/icons/supabase.svg",
      },
    ],
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

function Projects() {
  const sliderRef = useRef<SliderRefType>(null);
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <section
      id="projects"
      className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 space-y-8"
    >
      <Container className="col-span-full space-y-8">
        <div className="space-y-8">
          <div className="space-y-2 flex items-center justify-between">
            <motion.h2
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl font-[500] text-primary-font"
            >
              Projects
            </motion.h2>

            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="w-full md:w-fit"
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.prev();
                  }
                }}
                disabled={activeSlide === 0}
              >
                <FaChevronLeft />
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="w-full md:w-fit"
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.next();
                  }
                }}
                disabled={activeSlide === projects.length - 3}
              >
                <FaChevronRight />
              </Button>
            </div>
          </div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Slider
              ref={sliderRef}
              onActiveSlideChange={setActiveSlide}
              slides={{ base: 1, sm: 2, md: 2, xl: 3 }}
              autoSlide
            >
              {projects.map((project) => (
                <SliderItem key={project.title} className="">
                  <ProjectCard {...project} />
                </SliderItem>
              ))}
            </Slider>
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
