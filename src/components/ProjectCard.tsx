import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="rounded-xl border-2 border-accent space-y-2 overflow-hidden">
      <div className="w-full aspect-video relative z-0">
        <div className="absolute top-0 right-0 z-10 p-2 pl-6 pb-6 radial-gradient-blue bg-opacity-80">
          <Link href={""}>
            <LuExternalLink size={28} className="text-white" />
          </Link>
        </div>
        <Carousel>
          <div className="keen-slider__slide number-slide1">
            <Image
              src={"/assets/images/projects/gdsc1.png"}
              alt="GDSC"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image
              src={"/assets/images/projects/gdsc2.png"}
              alt="GDSC"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image
              src={"/assets/images/projects/gdsc3.png"}
              alt="GDSC"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
      <div className="p-4 space-y-1">
        <h5 className="font-[600]">GDSC GHRCE Website</h5>
        <p className="text-sm text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum,
          consequatur eveniet voluptatibus odio impedit nobis veritatis{" "}
        </p>
        <div className="flex gap-2 flex-wrap text-sm">
          <span className="px-2 py-1 rounded-lg bg-accent">Next.js</span>
          <span className="px-2 py-1 rounded-lg bg-accent">Tailwind</span>
          <span className="px-2 py-1 rounded-lg bg-accent">Typescript</span>
          <span className="px-2 py-1 rounded-lg bg-accent">Daisy UI</span>
        </div>
      </div>
    </div>
  );
}
