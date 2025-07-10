import React from "react";
import Container from "../../ui/container";
import IntroCard from "./intro-card";
import Button from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Typewriter from "@/components/ui/typewriter";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import Link from "next/link";
import CoreSkills from "./core-skills";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
      <IntroCard />
      {/* <Skills /> */}
      <div className="md:col-span-5 xl:col-span-6 flex flex-col gap-8">
        <Navbar />
        <CoreSkills />
      </div>

      <Container className="md:col-span-12 lg:col-span-5 xl:col-span-4 flex items-center justify-center min-h-[100px] max-xl:order-4">
        <motion.h4
          variants={blurFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.5, staggerChildren: 0.5 }} // <-- Add delay here
          className="text-4xl sm:text-5xl md:text-6xl text-center font-[500] font-ibm-mono text-secondary"
        >
          <Typewriter
            texts={["FRONTEND", "BACKEND", "DEVOPS", "CLOUD", "DATABASE"]}
          />
        </motion.h4>
      </Container>

      <Container className="md:col-span-12 lg:col-span-7 xl:col-span-8 max-xl:order-4">
        <motion.div
          className="space-y-4"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15, // control delay between each child
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
            <Button variant="primary" className="text-sm" asChild>
              <Link href={"mailto:kalpakgoshikwar123@gmail.com"}>
                kalpakgoshikwar123@gmail.com
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
