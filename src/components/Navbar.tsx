"use client";

import React, { useEffect, useState } from "react";
import Container from "./ui/container";
import Button from "./ui/button";
import { FaCode, FaHouse, FaList } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbUserSquare } from "react-icons/tb";
import useRouterHash from "@/hooks/use-router-hash";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 200); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isScrolled ? <CompactNavbar /> : <MainNavbar />}
      {/* <MainNavbar /> */}
    </>
  );
}

export function MainNavbar() {
  const isNotXl = useMediaQuery("(max-width: 1024px)");

  return (
    <motion.header layoutId="navbar" className="max-md:hidden">
      <Container className="xl:px-2">
        <motion.nav
          className="flex items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1, // adjust for faster/slower stagger
              },
            },
          }}
        >
          {links.map((link) => (
            <motion.div key={link.name} variants={blurFadeIn}>
              <Button
                size={isNotXl ? "icon" : "md"}
                variant="tertiary"
                className={"text-sm text-gray-600"}
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
    </motion.header>
  );
}

export function CompactNavbar() {
  return (
    <motion.header
      layoutId="navbar"
      className="fixed top-0 right-0 w-fit z-50 m-4 backdrop-blur-2xl rounded-xl  max-md:hidden"
    >
      <Container className="xl:px-2">
        <motion.nav
          className="flex items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1, // adjust for faster/slower stagger
              },
            },
          }}
        >
          {links.map((link) => (
            <motion.div key={link.name} variants={blurFadeIn}>
              <Button
                size="md"
                variant="tertiary"
                className={"text-sm text-gray-600"}
                asChild
              >
                <a href={link.link}>{link.icon}</a>
              </Button>
            </motion.div>
          ))}
        </motion.nav>
      </Container>
    </motion.header>
  );
}
