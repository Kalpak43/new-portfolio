import Image from "next/image";
import React from "react";

function BlogCard() {
  return (
    <div className="space-y-2 rounded-xl hover:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] border border-secondary/0 hover:border-secondary/40 hover:bg-primary/10 group transition-all duration-500">
      <div className="aspect-video rounded-xl overflow-hidden group-hover:rounded-b-none  transition-all duration-500">
        <Image
          src={"/assets/images/blogs/blog.webp"}
          alt="Chatbot screenshot"
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-2 py-2 space-y-1">
        <h4 className="font-[500] text-primary-font">
          Mastering User Management in Linux
        </h4>
        <p className="text-xs">Apr 22, 2025</p>
        <p className="text-justify line-clamp-3 text-sm leading-relaxed">
          Large Enterprises usually have multiple users performing different
          actions on a single linux server. Ever wondered how that works? This
          article will dive into the depths of user management via linux. By the
          end you will be able to easily create users in any linux server and
          hand someone their credentials.
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
