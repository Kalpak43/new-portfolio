import React from "react";
import Button from "../../ui/button";
import { FaDownload, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { SiLeetcode } from "react-icons/si";
import Seperator from "../../ui/seperator";
import Container from "@/components/ui/container";

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
        <Button>
          <FaDownload /> My Resume
        </Button>
      </div>
      <Seperator />

      <div className="flex gap-2 items-center justify-end">
        <Button size="icon" variant="secondary">
          <FaGithub />
        </Button>
        <Button size="icon" variant="secondary">
          <SiLeetcode />
        </Button>
        <Button size="icon" variant="secondary">
          <FaXTwitter />
        </Button>
        <Button size="icon" variant="secondary">
          <FaLinkedin />
        </Button>
      </div>
    </Container>
  );
}

export default IntroCard;
