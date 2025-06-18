"use client";
import About from "@/components/sections/about-section";
import Blogs from "@/components/sections/blog-section";
import Hero from "@/components/sections/hero-section";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/project-section";
import Background from "@/components/ui/background";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";

export default function Page() {
  return (
    <main className="min-h-screen relative bg-transparent py-10 px-4 2xl:px-20 space-y-8">
      <Background />
      <div className="max-w-7xl mx-auto space-y-8">
        <Hero />
        <Projects />
        <Skills />
        <Blogs />
        <About />
      </div>
    </main>
  );
}
