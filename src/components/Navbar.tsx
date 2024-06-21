"use client";

import Link from "next/link";
import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { links } from "@/constants/links";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  //  fixed left-0 right-0 bottom-0 m-4 z-50 lg:static
  const icons = [
    <GrHomeRounded size={20} className="mx-auto" key={0} />,
    <IoDocumentTextOutline size={20} className="mx-auto" key={1} />,
    <IoIosGitBranch size={20} className="mx-auto" key={2} />,
    <MdOutlineContactSupport size={20} className="mx-auto" key={3} />,
  ];

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="rounded-xl bg-base-300 p-4 flex justify-center lg:justify-between items-center gap-4 fixed lg:static bottom-0 md:bottom-auto md:w-fit lg:w-full md:px-8 lg:px-4 md:top-0 left-0 right-0 md:left-auto mx-4 lg:mx-0 my-4 lg:my-0 z-50 shadow-blue lg:shadow-none">
      <h3 className="font-bold uppercase hidden lg:block">
        {links.find((link) => link.href.split("#")[0] === pathname)?.label}
      </h3>
      <nav className="flex gap-4">
        {" "}
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.label}
              className={`btn btn-square ${
                pathname === link.href.split("#")[0] ? "bg-gradient-blue" : "btn-accent"
              }`}
            >
              <span className="text-center">{icons[link.icon]}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
