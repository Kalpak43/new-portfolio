import React from "react";

function Wave() {
  return (
    <div className="h-screen fixed inset-0 -z-1 bg-[var(--background-color)] overflow-hidden">
      {/* <div className="bg-blue-600 w-full h-full rotate-45"></div>; */}

      <div className="gradient-1 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 h-40 md:h-80 aspect-square rounded-full bg-transparent z-10  blur-[80px] md:blur-[100px]" />
      <div className="gradient-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-90 md:h-150 aspect-square rounded-full bg-transparent z-20 blur-[80px] md:blur-[100px]" />
      <div className="gradient-3 absolute top-1/2 left-1/2 -translate-x-[100%] -translate-y-1/2 h-70 md:h-100 aspect-square rounded-full bg-transparent z-30 blur-[120px] md:blur-[200px]" />
    </div>
  );
}

export default Wave;
