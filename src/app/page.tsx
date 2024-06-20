import React from "react";
import { FaCode } from "react-icons/fa";

export default function page() {
  return (
    <main className="py-6 lg:px-10 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-[600]">Hello, I&apos;m Kalpak Goshikwar!</h2>
        <p>
          {" "}
          I hold a deep interest & knowledge in Programming, especially in
          designing software. I am currently a professional full-stack web
          developer and full-stack android developer. At the time, I work for
          different clients to create and enhance their products.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <h4 className="text-2xl font-[600]">What I Do</h4>
          <div className="h-[1px] bg-gradient-blue flex-1"></div>
        </div>
        <p>I can build beautiful user interfaces using my front end skills.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border-2 border-accent p-4">
            <FaCode size={40} className="text-info" />
            <h5 className="font-[600]">Web Development</h5>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero
              suscipit exercitationem.At the time, I work for
              different clients to create and enhance their products.
            </p>
          </div>
          <div className="rounded-xl border-2 border-accent p-20"></div>
          <div className="rounded-xl border-2 border-accent p-20"></div>
        </div>
      </div>
    </main>
  );
}
