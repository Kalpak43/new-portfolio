import React from "react";
import Container from "../../ui/container";
import IntroCard from "./intro-card";
import Button from "@/components/ui/button";
import { FaHouse } from "react-icons/fa6";
import Image from "next/image";
import Skills from "./skills";
import Navbar from "@/components/Navbar";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
      <IntroCard />
      <Skills />
      <div className="md:col-span-3 flex flex-col gap-8">
        <Navbar />
        <Container className="flex-1 p-[1px] overflow-hidden">
          <div className="w-full h-full">
            {/* <Image
              src={"/anime-city.webp"}
              alt="random image"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            /> */}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
