"use client";

import { motion } from "framer-motion";


import Hero from "@/components/hero/hero";
import Testimonials from "@/components/testimonials";
import Heading from "@/components/style/heading";
import Container from "@/components/container";
import Products from "@/components/products/Products";
import Locations from "@/components/location/Locations";
import FrequentlyAskedQuestions from "@/components/FAQ";
import BoxesContainer from "@/components/box/boxes";
import BoxesContainerSecond from "@/components/box/boxes-second";
import FrontImage from "@/components/FrontImage";
import Buttons from "@/components/Buttons";
import MyForm from "@/components/Form";
import Video from "@/components/hero/videohero";
import Slider from "@/components/hero/slider";

export default function Home() {
  return (
    <>
      <div className="space-y-20 pt-1">
        <div>

          <Video />
          <div className="font-semibold text-2xl bg-black">
            <Slider />
          </div>
          <Container className="pb-16">
            <Hero />
          </Container>
        </div>
        <Container className="bg-slate-50 py-20 space-y-20">
          <Heading
            title="Choose us because"
          />
          <BoxesContainer />
          <BoxesContainerSecond />
        </Container>
        <Container>
          <Buttons />
        </Container>
        <Container className="space-y-16 bg-zinc-50 py-20">
          <Heading
            title="Our Products" subtitle={"The following are the outstanding products we offer at sujata technical services."} />
          <Products />
        </Container>
        <Container className="space-y-16 bg-gray">
          <Heading
            title="Our Presense" subtitle={"We are present at more than 10 cities."} />
          <Locations />
        </Container>
        <div id="testimonials" className="py-1"></div>
        <Container className="space-y-16 bg-zinc-50 py-20">
          <Heading
            title="Hear from our clients" subtitle={"See what our clients say."} />
          <Testimonials />
        </Container>
        <Container className="space-y-16 bg-gray">
          <Heading
            title="FAQ"
            subtitle="The following are the most frequently asked questions."
          />
          <FrequentlyAskedQuestions />
        </Container>
        <Container className="border border-zinc-300 px-2 py-3 m-1 rounded-xl sm:m-4 md:m-6 lg:m-10 xl:m-14 sm:py-5 md:py-6 lg:py-10 bg-blue-600">
          <MyForm initialData={null} />
        </Container>
      </div>
    </>
  );
}
