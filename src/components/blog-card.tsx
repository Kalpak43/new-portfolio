import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import Button from "./ui/button";
import { FaGithub, FaLink, FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";

interface Blog {
  title: string;
  description: string;
  publishDate: string;
  thumbnail: string;
  link: string;
}

const cardVariant = {
  visible: {
    y: 0,
    transition: {
      staggerChildren: 0.01, // adjust for faster/slower stagger
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const contentVariant = {
  visible: {
    transition: {
      staggerChildren: 0.01, // adjust for faster/slower stagger
    },
  },
  hover: {
    // y: -4,
    transition: {
      duration: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function BlogCard({ title, description, thumbnail, publishDate, link }: Blog) {
  return (
    <motion.div
      className="space-y-2 rounded-xl border border-secondary/0 group transition-all duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariant}
      whileHover="hover"
    >
      <motion.div
        className="aspect-video rounded-xl overflow-hidden transition-all duration-500 shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] relative"
        variants={blurFadeIn}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        />
        <img
          src={thumbnail}
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
        variants={contentVariant}
        whileHover="hover"
      >
        <motion.h4
          className="font-[500] text-primary-font"
          variants={blurFadeIn}
        >
          {title}
        </motion.h4>

        <motion.p
          className="text-justify line-clamp-3 text-sm leading-relaxed"
          variants={blurFadeIn}
        >
          {description}
        </motion.p>

        <motion.div
          variants={blurFadeIn}
          className="flex items-center justify-between gap-2"
        >
          <motion.p
            className="text-justify line-clamp-3 text-xs text-gray-600 leading-relaxed flex items-center"
            variants={blurFadeIn}
          >
            <FaRegCalendar className="inline mr-2" />
            {publishDate}
          </motion.p>
          <Button size="icon" variant="tertiary" className="text-lg" asChild>
            <Link href={link} target="_blank">
              <FaLink />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default BlogCard;
