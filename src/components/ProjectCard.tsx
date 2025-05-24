import React from "react";
import { MdOutlineLock } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({
  title,
  desc,
  techStack,
  external,
  github,
}: {
  title: string;
  desc: string;
  techStack: string[];
  external: string;
  github: string;
}) {
  return (
    <div className="card overflow-hidden rounded-xl border-2 border-accent group p-4 space-y-2 flex flex-col justify-between transition-all duration-200">
      <div className="space-y-2">
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-secondary">{desc}</p>
        <div className="flex gap-2 flex-wrap text-sm">
          {techStack.map((tech) => {
            return (
              <span key={tech} className="px-2 py-1 rounded-lg bg-accent">
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        {github !== "" ? (
          <Link
            target="_blank"
            href={github}
            className="btn btn-md btn-square bg-gradient-blue"
          >
            <FaGithub size={24} className="text-white inline" />
          </Link>
        ) : (
          <button
            className="btn btn-md btn-square bg-gradient-blue"
            title="This is a private repository."
          >
            <MdOutlineLock size={24} className="text-white inline" />
          </button>
        )}
        {external !== "" && (
          <Link
            target="_blank"
            href={external}
            className="btn btn-md btn-square bg-gradient-blue"
          >
            <TbExternalLink size={24} className="text-white inline" />
          </Link>
        )}
      </div>
    </div>
  );
}
