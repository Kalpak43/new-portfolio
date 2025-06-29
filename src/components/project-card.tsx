import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import Button from "./ui/button";
import { FaGithub, FaLink } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  github?: string;
  deploy?: string;
  tech: {
    name: string;
    logo: string;
  }[];
}

function ProjectCard({
  title,
  description,
  thumbnail,
  github,
  deploy,
  tech,
}: Project) {
  return (
    <div className="space-y-2 rounded-xl border border-secondary/0 group transition-all duration-500">
      <div className="aspect-video rounded-xl overflow-hidden transition-all duration-500 shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={thumbnail}
          alt="Chatbot screenshot"
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-2 py-2 space-y-1">
        <h4 className="font-[500] text-primary-font">{title}</h4>
        <p className="text-justify line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center">
            {tech.map((skill, i) => (
              <div
                key={skill.name}
                className={cn(
                  "p-1 aspect-square w-6 h-6 rounded-full border border-secondary/40 bg-primary/10 shadow-[0px_0px_1px_rgba(0,0,0,0.36),0px_0px_4px_rgba(44,44,44,0.21)] backdrop-blur-md",
                  "-mr-2",
                  i != tech.length - 1 &&
                    " group-hover:mr-1 transition-all duration-300"
                )}
                style={{
                  backdropFilter: "blur(20px)",
                }}
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  height={1000}
                  width={1000}
                  className="h-full w-full object-center object-contain"
                />
              </div>
            ))}
          </div>
          <div>
            {github && (
              <Button
                size="icon"
                variant="tertiary"
                className="text-lg"
                asChild
              >
                <Link href={github} target="_blank">
                  <FaGithub />
                </Link>
              </Button>
            )}
            {deploy && (
              <Button
                size="icon"
                variant="tertiary"
                className="text-lg"
                asChild
              >
                <Link href={deploy} target="_blank">
                  <FaLink />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
