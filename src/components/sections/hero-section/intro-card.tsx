import React from "react";
import Button from "../../ui/button";
import { FaDownload, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { SiLeetcode } from "react-icons/si";
import Seperator from "../../ui/seperator";
import Container from "@/components/ui/container";
import Link from "next/link";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

const socialLinks = [
  {
    title: "Github",
    icon: <FaGithub />,
    url: "https://github.com/Kalpak43",
  },
  {
    title: "Leetcode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/goshikwarkalpak/",
  },
  {
    title: "X (Twitter)",
    icon: <FaXTwitter />,
    url: "https://x.com/kalpak935992463",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/kalpakgoshikwar/",
  },
];

function IntroCard() {
  return (
    <Container className="min-h-[400px] md:col-span-7 xl:col-span-6 space-y-8 flex flex-col justify-between">
      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3, // control delay between each child
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="space-y-4 md:pr-4"
      >
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15, // control delay between each child
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-2"
        >
          <div className="h-20 aspect-square rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] p-[1px] ">
            <motion.div
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full w-full bg-white rounded-full overflow-hidden"
            >
              <Image
                src={"/Kalpak.webp"}
                alt="Kalpak Goshikwar Profile"
                height={500}
                width={500}
              />
            </motion.div>
          </div>
          <motion.h1
            variants={blurFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl leading-snug font-[600] text-primary-font"
          >
            Hi! My name is Kalpak Goshikwar
          </motion.h1>
        </motion.div>
        <motion.p
          variants={blurFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          I am a web developer & I hold a deep interest in turning ideas into
          reality.
        </motion.p>
        <motion.div
          variants={blurFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button asChild>
            <Link href={"https://drive.google.com/file/d/1Wnym9xNttsyQMFXMCp71fZ0TT4x2G4Xa/view?usp=sharing"} target="_blank">
              <FaDownload /> My Resume
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <Seperator />

      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05, // delay between each child
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex gap-4 items-center justify-end"
      >
        {socialLinks.map((link, index) => (
          <motion.div key={link.title} variants={blurFadeIn} custom={index}>
            <Button size="icon" variant="secondary" asChild>
              <Link href={link.url} title={link.title} target="_blank">
                {link.icon}
              </Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default IntroCard;
