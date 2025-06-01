"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Container from "./ui/container";
import Button from "./ui/button";
import { FaCode, FaHouse } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbUserSquare } from "react-icons/tb";
import { useParams, usePathname, useRouter } from "next/navigation";
import useRouterHash from "@/hooks/useRouterHash";

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
    name: "About me",
    icon: <TbUserSquare />,
    link: "#about",
  },
  {
    name: "Blogs",
    icon: <IoDocumentTextOutline />,
    link: "#blogs",
  },
];

export default function Navbar() {
  const { hash } = useRouterHash();

  useEffect(() => {
    console.log(hash);
  }, [hash]);

  return (
    <Container className="">
      <nav className="flex items-center justify-between gap-4">
        {links.map((link) => (
          <Button
            key={link.name}
            size="icon"
            variant="tertiary"
            className={hash === link.link ? "text-secondary" : "text-gray-600"}
            asChild
          >
            <Link href={link.link}>{link.icon}</Link>
          </Button>
        ))}
      </nav>
    </Container>
  );
}
