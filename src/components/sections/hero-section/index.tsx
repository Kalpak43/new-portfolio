import React from "react";
import Container from "../../ui/container";
import IntroCard from "./intro-card";
import Button from "@/components/ui/button";
import { FaHouse } from "react-icons/fa6";
import Image from "next/image";
import Skills from "./skills";
import Navbar from "@/components/Navbar";
import Typewriter from "@/components/ui/typewriter";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
      <IntroCard />
      <Skills />
      <div className="md:col-span-3 flex flex-col gap-8">
        <Navbar />
        <Container className="flex-1 p-[1px] overflow-hidden">
          <div className="w-full h-full">
            <Image
              src={"/anime-city.webp"}
              alt="random image"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </div>

      <Container className="md:col-span-4 flex items-center justify-center min-h-[100px]">
        <h4 className="text-4xl sm:text-5xl md:text-6xl text-center font-[500] font-ibm-mono text-secondary">
          <Typewriter
            texts={["FRONTEND", "BACKEND", "DEVOPS", "CLOUD", "DATABASE"]}
          />
          {/* FRONTEND */}
          {/* BACKEND */}
          {/* DEVOPS */}
          {/* CLOUD */}
        </h4>
      </Container>

      <Container className="md:col-span-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-[500] text-primary-font">
              Contact me
            </h2>
            <p>
              Get in touch with me for collaborations, opportunities, or just to
              say hello!
            </p>
          </div>
          <div className="md:text-right">
            <Button variant="primary" className="text-sm">
              kalpakgoshikwar123@gmail.com
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
