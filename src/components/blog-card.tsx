import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

function BlogCard() {
  return (
    <motion.div
      className="space-y-2 rounded-xl hover:shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] border border-secondary/0 hover:border-secondary/40 hover:bg-primary/10 group transition-all duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.01, // adjust for faster/slower stagger
          },
        },
      }}
    >
      <motion.div
        className="aspect-video rounded-xl overflow-hidden group-hover:rounded-b-none  transition-all duration-500 shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)]"
        variants={blurFadeIn}
      >
        <Image
          src={"/assets/images/blogs/blog.webp"}
          alt="Chatbot screenshot"
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        className="px-2 py-2 space-y-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.01, // adjust for faster/slower stagger
            },
          },
        }}
      >
        <motion.h4
          className="font-[500] text-primary-font"
          variants={blurFadeIn}
        >
          Mastering User Management in Linux
        </motion.h4>
        <motion.p className="text-xs flex items-center" variants={blurFadeIn}>
          <FaRegCalendar className="inline mr-2" />
          Apr 22, 2025
        </motion.p>
        <motion.p
          className="text-justify line-clamp-3 text-sm leading-relaxed"
          variants={blurFadeIn}
        >
          Large Enterprises usually have multiple users performing different
          actions on a single linux server. Ever wondered how that works? This
          article will dive into the depths of user management via linux. By the
          end you will be able to easily create users in any linux server and
          hand someone their credentials.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default BlogCard;
