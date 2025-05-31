"use client";
import Background from "@/components/ui/background";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="min-h-screen relative bg-transparent py-10 px-8 md:px-20 space-y-8">
      <Background />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
        <Container className="min-h-[400px] md:col-span-5 pr-12 space-y-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            in fuga porro aperiam corrupti! Fuga sunt asperiores soluta vero
            alias in unde culpa recusandae aperiam aliquam. Quidem laudantium
            facilis facere!
          </p>
          <Button>
            <FaLinkedin /> Linkedin
          </Button>
          <Button size="icon">
            <FaLinkedin />
          </Button>
        </Container>
        <Container className="md:col-span-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          excepturi eum facere voluptatem ut et ullam tenetur quibusdam nisi. Ab
          ipsa minus ullam totam cum aliquam id, ducimus magnam aut?
        </Container>
        <Container className="md:col-span-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          doloremque placeat sequi autem neque, iste quibusdam nesciunt enim
          libero unde eos quidem provident repudiandae. Tempore inventore quos
          unde et corrupti.
        </Container>
      </div>
      <div className="grid grid-cols-12 gap-x-8 gap-y-8">
        {/* <div className="min-h-[200px] w-full p-4 col-span-8 rounded-2xl bg-white card-gradient-background"></div>
        <div className="min-h-[200px] w-full p-4 col-span-4 rounded-2xl bg-white card-gradient-background"></div> */}
      </div>
    </div>
  );
}
