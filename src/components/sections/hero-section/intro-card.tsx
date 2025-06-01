import React from "react";
import Button from "../../ui/button";
import { FaDownload, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { SiLeetcode } from "react-icons/si";
import Seperator from "../../ui/seperator";
import Container from "@/components/ui/container";
import Link from "next/link";

const socialLinks = [
  {
    title: "Github",
    icon: <FaGithub />,
    url: "/",
  },
  {
    title: "Leetcode",
    icon: <SiLeetcode />,
    url: "/",
  },
  {
    title: "X (Twitter)",
    icon: <FaXTwitter />,
    url: "/",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin />,
    url: "/",
  },
];

function IntroCard() {
  return (
    <Container className="min-h-[400px] md:col-span-5 space-y-8 flex flex-col justify-between">
      <div className="space-y-4 md:pr-4">
        <div className="space-y-2">
          <div className="h-20 aspect-square rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] bg-conic from-primary to-secondary p-[1px] ">
            <div className="h-full w-full bg-white rounded-full overflow-hidden">
              <Image
                src={"/Kalpak.webp"}
                alt="Kalpak Goshikwar Profile"
                height={500}
                width={500}
              />
            </div>
          </div>
          <h1 className="text-4xl leading-snug font-[600] text-primary-font">
            Hi! My name is Kalpak Goshikwar
          </h1>
        </div>
        <p>
          I am a web developer & I hold a deep interest in turning ideas into
          reality.
        </p>
        <Button asChild>
          <Link href={"/"}>
            <FaDownload /> My Resume
          </Link>
        </Button>
      </div>
      <Seperator />

      <div className="flex gap-4 items-center justify-end">
        {socialLinks.map((link) => (
          <Button key={link.title} size="icon" variant="secondary" asChild>
            <Link href={link.url} title={link.title}>
              {link.icon}
            </Link>
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default IntroCard;
