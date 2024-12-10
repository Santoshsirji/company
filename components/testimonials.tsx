"use client";

import Image from "next/image";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Testimonials() {
  const testimonials = [
    {
      text: "We recently installed a residential elevator from Sujata Technical Services Pvt. Ltd., and we are very happy with the results. The entire process, from consultation to installation, was excellent, and the elevator has made very easy & comfortable for our residents. Thank you for your professionalism and dedication to excellence!",
      author: "Sarah Steiner",
      title: "VP Sales at Google",
      image: "/img/user1.jpg",
    },
    {
      text: "As a property manager, I rely on reliable partners to help me meet the needs of my tenants. Sujata Technical Services Pvt. Ltd. has been one of those partners. Their team provided expert guidance on elevator selection, and the installation process was efficient and well-coordinated. I highly recommend them for anyone looking for quality elevator solutions.",
      author: "Dylan Ambrose",
      title: "Lead marketer at Netflix",
      image: "/img/user2.jpg",
    },
    {
      text: "Our hotel recently underwent renovations, including the installation of new panoramic elevators from Sujata Technical Services Pvt. Ltd. These elevators have become a highlight of our guest experience, offering stunning views and smooth rides. The team at Sujata Technical Services Pvt. Ltd. was a pleasure to work with, and we look forward to future projects together.",
      author: "Gabrielle Winn",
      title: "Co-founder of Acme Inc",
      image: "/img/user3.jpg",
    }
  ];

  return (
    <Container className="text-black">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 text-justify">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            author={testimonial.author}
            title={testimonial.title}
            image={testimonial.image}
          />
        ))}
      </div>
    </Container>
  );
}

interface TestimonialProps {
  text: string;
  author: string;
  title: string;
  image: string;
}

function TestimonialCard({ text, author, title, image }: TestimonialProps) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.2 // Trigger animation when 20% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="bg-orange-400 saturate-150 lg:p-14 p-5 sm:p-8 md:p-10 rounded-2xl shadow-md dark:bg-trueGray-800"
    >
      <p className="text-lg leading-normal">{text}</p>
      {/* <Avatar image={image} name={author} title={title} /> */}
    </motion.div>
  );
}

interface AvatarProps {
  image: string;
  name: string;
  title: string;
}

function Avatar({ image, name, title }: AvatarProps) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        {/* <Image
          src={image}
          width={40}
          height={40}
          alt="Avatar"
          layout="responsive"
        /> */}
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
}
