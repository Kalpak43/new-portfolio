import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ProfileCard() {
  return (
    <div className="rounded-xl bg-base-300 py-4 px-4 md:px-10 group transition-all duration-1000">
      <div className="text-center space-y-4">
        <div className=" max-w-[150px] mx-auto overflow-clip rounded-xl">
          <Image
            src="/Kalpak.webp"
            alt="Profile"
            width={300}
            height={300}
            className="grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out hover:scale-125"
          />
        </div>
        <div className="space-y-2">
          <h2 className="font-[500] text-2xl">Kalpak Goshikwar</h2>
          <div className="badge bg-gradient-blue p-4 badge-md rounded-lg">
            Web Developer
          </div>
          <div className="flex justify-center gap-2">
            <Link
              href="https://www.linkedin.com/in/kalpakgoshikwar/"
              target="_blank"
              className="btn btn-square btn-accent hover:bg-[#0a63bc] transition-all duration-200"
            >
              <FaLinkedinIn size={24} />
            </Link>
            <Link
              href="https://github.com/Kalpak43"
              target="_blank"
              className="btn btn-square btn-accent hover:bg-black transition-all duration-200"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://leetcode.com/u/goshikwarkalpak/"
              target="_blank"
              className="btn btn-square btn-accent hover:bg-[#ffa116] hover:text-black transition-all duration-200"
            >
              <SiLeetcode size={24} />
            </Link>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-accent divide-y-2 space-y-4">
          <div className="flex gap-2 items-center truncate">
            <span className="aspect-square p-3 rounded-lg bg-base-300 hover:bg-gradient-blue transition-all duration-200">
              <FaEnvelope size={16} />
            </span>
            <div className="text-left">
              <p className="text-xs">Email</p>
              <Link
                href={"mailto:kalpakgoshikwar123@gmail.com"}
                className="hover:text-success transition-all duration-200 text-sm md:text-base"
              >
                kalpakgoshikwar123@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex gap-2 items-center pt-4 truncate">
            <span className="aspect-square p-3 rounded-lg bg-base-300 hover:bg-gradient-blue transition-all duration-200">
              <FaLocationDot size={16} />
            </span>
            <div className="text-left">
              <p className="text-xs">Location</p>
              <div className="hover:text-success transition-all duration-200 text-sm md:text-base">
                Nagpur, Maharashtra, India
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link
            href="/Kalpak_Resume.pdf"
            target="_blank"
            className="btn bg-gradient-blue transition-all duration-200"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
