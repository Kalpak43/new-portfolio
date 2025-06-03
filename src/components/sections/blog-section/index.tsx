import BlogCard from "@/components/blog-card";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import React from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";

function Blogs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 space-y-8">
      <Container className="col-span-full space-y-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h2
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl font-[500] text-primary-font"
            >
              Blogs
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </motion.div>
        </div>

        <motion.div
          variants={blurFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center md:text-right"
        >
          <Button variant="secondary" className="">
            More Blogs
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default Blogs;
