import React from "react";
import Container from "../../ui/container";
import IntroCard from "./intro-card";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
      <IntroCard />
      <Container className="md:col-span-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        excepturi eum facere voluptatem ut et ullam tenetur quibusdam nisi. Ab
        ipsa minus ullam totam cum aliquam id, ducimus magnam aut?
      </Container>
      <Container className="md:col-span-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque
        placeat sequi autem neque, iste quibusdam nesciunt enim libero unde eos
        quidem provident repudiandae. Tempore inventore quos unde et corrupti.
      </Container>
    </section>
  );
}

export default Hero;
