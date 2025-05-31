"use client";
import Background from "@/components/ui/background";
import Button from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="min-h-screen relative bg-transparent py-10 px-8 md:px-20 space-y-8">
      <Background />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
        <div className="min-h-[400px] w-full p-4 md:col-span-5 rounded-2xl bg-white card-gradient-background space-x-4">
          <Button>
            <FaLinkedin /> Linkedin
          </Button>
          <Button size="icon">
            <FaLinkedin />
          </Button>
        </div>
        <div className="min-h-[400px] w-full p-4 md:col-span-4 rounded-2xl bg-white card-gradient-background"></div>
        <div className="h-full w-full p-4 md:col-span-3 rounded-2xl bg-white card-gradient-background"></div>
      </div>
      <div className="grid grid-cols-12 gap-x-8 gap-y-8">
        <div className="min-h-[200px] w-full p-4 col-span-8 rounded-2xl bg-white card-gradient-background"></div>
        <div className="min-h-[200px] w-full p-4 col-span-4 rounded-2xl bg-white card-gradient-background"></div>
      </div>
    </div>
  );
}
