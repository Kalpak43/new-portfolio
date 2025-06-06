"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Container from "./ui/container";
import Button from "./ui/button";
import { FaCode, FaHouse } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbUserSquare } from "react-icons/tb";
import useRouterHash from "@/hooks/useRouterHash";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

const links = [
  {
    name: "Home",
    icon: <FaHouse />,
    link: "",
  },
  {
    name: "Projects",
    icon: <FaCode />,
    link: "#projects",
  },

  {
    name: "Blogs",
    icon: <IoDocumentTextOutline />,
    link: "#blogs",
  },
  {
    name: "About me",
    icon: <TbUserSquare />,
    link: "#about",
  },
];

export default function Navbar() {
  const { hash } = useRouterHash();

  useEffect(() => {
    console.log(hash);
  }, [hash]);

  return (
    <Container className="">
      <motion.nav
        className="flex items-center justify-between gap-4"
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
              size="icon"
              variant="tertiary"
              className={cn(
                "text-xl",
                hash === link.link ? "text-secondary" : "text-gray-600"
              )}
              asChild
            >
              <a href={link.link}>{link.icon}</a>
            </Button>
          </motion.div>
        ))}
      </motion.nav>
    </Container>
  );
}
