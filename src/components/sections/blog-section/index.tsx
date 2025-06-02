import BlogCard from "@/components/blog-card";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import React from "react";

function Blogs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 space-y-8">
      <Container className="col-span-full space-y-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-[500] text-primary-font">Blogs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>

        <div className="text-center md:text-right">
          <Button variant="secondary" className="">
            More Blogs
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Blogs;
