import BlogCard from "@/components/blog-card";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { blurFadeIn } from "@/lib/variants";
import Link from "next/link";
import Slider, { SliderItem, SliderRefType } from "@/components/ui/slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const blogs = [
  {
    title: "Mastering User Management in Linux",
    description:
      "Large Enterprises usually have multiple users performing different actions on a single linux server. Ever wondered how that works? This article will dive into the depths of user management via linux. By the end you will be able to easily create users in any linux server and hand someone their credentials.",
    publishDate: "Apr 22, 2025",
    thumbnail: "/assets/images/blogs/blog.webp",
    link: "https://blogs-by-kalpak.hashnode.dev/mastering-user-management-in-linux",
  },
  {
    title: "A Guide to spinning up an EC2 Instance",
    description:
      "An EC2(Elastic Compute Cloud) instance is a server hosted on AWS(Amazon Web Services). In simpler terms, these are virtual machines which are running on a cloud. EC2 instances allow you to choose from CPU, memory, storage and networking configurations based on your requirements. They are scalable, reliable and accessible globally, which means if you needed to host your own cloud based applications, you will be able to access it from any region(unless you specify).",
    publishDate: "Apr 19, 2025",
    thumbnail: "https://placehold.co/600x400?text=Blog",
    link: "https://blogs-by-kalpak.hashnode.dev/a-guide-to-spinning-up-an-ec2-instance",
  },
  {
    title: "A Guide to Design a responsive website",
    description:
      "During the early days of the Internet, websites were accessible only through big computers. But now we can access a website through our Phones, PCs and Laptops. Meaning a website should be accessible to the user from any of the devices, no matter what the screen size, processing power, etc. Thus, creating a need for a responsive design for websites. We don’t want our website to look great in some specific screen ratio or size but not with others. This limits the number of users we may have received if our website was responsive.",
    publishDate: "Mar 20, 2024",
    thumbnail: "https://placehold.co/600x400?text=Blog",
    link: "https://medium.com/@goshikwarkalpak/a-guide-to-design-a-responsive-website-d271b56aa86f",
  },
];

function Blogs() {
  const sliderRef = useRef<SliderRefType>(null);
  const [activeSlide, setActiveSlide] = React.useState(0);
  return (
    <section
      id="blogs"
      className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 space-y-8"
    >
      <Container className="col-span-full space-y-8">
        <div className="space-y-8">
          <div className="space-y-2 flex items-center justify-between">
            <motion.h2
              variants={blurFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl font-[500] text-primary-font"
            >
              Blogs
            </motion.h2>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="w-full md:w-fit"
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.prev();
                  }
                }}
                disabled={activeSlide === 0}
              >
                <FaChevronLeft />
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="w-full md:w-fit"
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.next();
                  }
                }}
                disabled={activeSlide === blogs.length - 1}
              >
                <FaChevronRight />
              </Button>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            {blogs.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={blurFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center md:text-right"
        >
          <Button variant="secondary" className="" asChild>
            <Link
              href={"https://blogs-by-kalpak.hashnode.dev/"}
              target="_blank"
            >
              More Blogs
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default Blogs;
