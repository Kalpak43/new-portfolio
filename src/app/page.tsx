import React from "react";
import { FaCode } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { LuComputer } from "react-icons/lu";

export default function page() {
  return (
    <main className="py-6 lg:px-10 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">
          Hello, I&apos;m Kalpak Goshikwar!
        </h2>
        <p>
          I hold a deep interest & knowledge in Programming, especially in
          designing software. I am currently a professional full-stack web
          developer and full-stack android developer. At the time, I work for
          different clients to create and enhance their products.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <h4 className="text-2xl font-semibold">What I Do</h4>
          <div className="h-px bg-gradient-blue flex-1"></div>
        </div>
        <p>I can build beautiful user interfaces using my front end skills.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 card-container">
          <div className="rounded-xl border-2 border-accent p-4 card transtion-all duration-200">
            <FaCode size={40} className="text-info" />
            <h5 className="font-semibold">Web Apps</h5>
            <p className="text-sm text-secondary">
              I specialize in creating dynamic and interactive web applications,
              leveraging my expertise in modern web technologies to deliver
              seamless user experiences.
            </p>
          </div>
          <div className="rounded-xl border-2 border-accent p-4 card transtion-all duration-200">
            <HiSquares2X2 size={40} className="text-info" />
            <h5 className="font-semibold">UI/UX Design</h5>
            <p className="text-sm text-secondary">
              Proficient in utilizing a variety of UI/UX tools, I develop
              interfaces that enhance user experience and engagement through
              effective and innovative design solutions.
            </p>
          </div>
          <div className="rounded-xl border-2 border-accent p-4 card transtion-all duration-200">
            <LuComputer size={40} className="text-info" />
            <h5 className="font-semibold">Backend</h5>
            <p className="text-sm text-secondary">
              I leverage a range of technologies to build robust and scalable
              server-side solutions, ensuring optimal
              performance of web applications.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
