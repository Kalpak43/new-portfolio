"use client";
import React from "react";
import Container from "./ui/container";
import Button from "./ui/button";
import { FaCode, FaHouse, FaList } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbUserSquare } from "react-icons/tb";
import useRouterHash from "@/hooks/useRouterHash";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import useMediaQuery from "@/hooks/use-media-query";

const links = [
  {
    name: "About",
    icon: <FaHouse />,
    link: "",
  },
  {
    name: "Projects",
    icon: <FaCode />,
    link: "#projects",
  },
  {
    name: "Skills",
    icon: <FaList />,
    link: "#skills",
  },

  {
    name: "Blogs",
    icon: <IoDocumentTextOutline />,
    link: "#blogs",
  },
  {
    name: "Experience",
    icon: <TbUserSquare />,
    link: "#about",
  },
];

export default function Navbar() {
  const { hash } = useRouterHash();
  const isNotXl = useMediaQuery("(max-width: 1024px)");

  return (
    <Container className="xl:px-2  max-md:hidden">
      <motion.nav
        className="flex items-center justify-between"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.01, // adjust for faster/slower stagger
            },
          },
        }}
      >
        {links.map((link) => (
          <motion.div key={link.name} variants={blurFadeIn}>
            <Button
              size={isNotXl ? "icon" : "md"}
              variant="tertiary"
              className={cn(
                "text-sm",
                hash === link.link ? "text-secondary" : "text-gray-600"
              )}
              asChild
            >
              <a href={link.link}>
                {link.icon} <span className="max-xl:hidden">{link.name}</span>
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.nav>
    </Container>
  );
}
