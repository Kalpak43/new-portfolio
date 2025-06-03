import React from "react";
import Container from "../../ui/container";
import IntroCard from "./intro-card";
import Button from "@/components/ui/button";
import Image from "next/image";
import Skills from "./skills";
import Navbar from "@/components/Navbar";
import Typewriter from "@/components/ui/typewriter";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
      <IntroCard />
      <Skills />
      <div className="md:col-span-3 flex flex-col gap-8 max-md:order-2 max-md:hidden">
        <Navbar />
        <Container className="flex-1 p-0 md:p-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            variants={blurFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src={"/anime-city.webp"}
              alt="random image"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Container>
      </div>

      <Container className="md:col-span-4 flex items-center justify-center min-h-[100px] max-md:order-1">
        <motion.h4
          variants={blurFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.2, staggerChildren: 0.5 }} // <-- Add delay here
          className="text-4xl sm:text-5xl md:text-6xl text-center font-[500] font-ibm-mono text-secondary"
        >
          <Typewriter
            texts={["FRONTEND", "BACKEND", "DEVOPS", "CLOUD", "DATABASE"]}
          />
        </motion.h4>
      </Container>

      <Container className="md:col-span-8 max-md:order-3">
        <motion.div
          className="space-y-4"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05, // control delay between each child
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="space-y-2">
            <motion.h2
              className="text-4xl font-[500] text-primary-font"
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Contact me
            </motion.h2>
            <motion.p
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Get in touch with me for collaborations, opportunities, or just to
              say hello!
            </motion.p>
          </motion.div>
          <motion.div
            className="md:text-right"
            variants={blurFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Button variant="primary" className="text-sm">
              kalpakgoshikwar123@gmail.com
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
