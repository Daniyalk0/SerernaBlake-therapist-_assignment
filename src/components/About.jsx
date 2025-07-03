"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Container from "./Container";
import { motion, useInView } from "framer-motion";
import InViewMotion from "./ui/InViewMotion";

const About = () => {
     const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", },
    },
  };

  const aboutDrBlake = [
    "Dr. Serena Blake is a licensed clinical psychologist based in Los Angeles, CA, with over eight years of dedicated practice and more than 500 successful client sessions. Known for her compassionate and thoughtful approach, Dr. Blake integrates evidence-based therapies—such as cognitive-behavioral therapy (CBT) and mindfulness practices—with personalized care tailored to each individual’s goals and challenges.",

    "Her work centers around helping people navigate life’s most difficult emotional experiences. Whether you're struggling with chronic anxiety, relationship issues, or the deep wounds left by past trauma, Dr. Blake offers a safe and non-judgmental space for healing and growth. She is passionate about empowering her clients with practical tools and emotional insight to build resilience, improve communication, and create meaningful change.",

    "Dr. Blake provides both in-person sessions at her welcoming Maplewood Drive office and convenient virtual sessions via Zoom, making therapy accessible and flexible to fit your lifestyle. Her commitment is simple yet profound: to walk beside you with care, clarity, and support as you work toward a more balanced, fulfilling life.",
  ];

  return (
    <Container
      className={
        "bg-[#FEFEFE] py-12 pb-80  md:pb-72   md:py-28  text-[#7E7E6B]"
      }
    >
      <div
        className="flex w-full items-center md:items-start justify-between  flex-col-reverse md:flex-row px-4 gap-10 sm:px-7 md:px-[10%] lg:px-[12%]  relative"
      >
        <div className="content w-full md:w-[50%]  flex flex-col items-start gap-4 lg:gap-6 ">
           <InViewMotion variants={childVariants} as="h1" className="hidden md:block font-playfair2 text-3xl lg:text-[2.2rem] font-[600]">
            About Dr. Serena Blake
          </InViewMotion>

          <motion.section className="font-freightdisplay2 sm:text-[1rem] md:text-[1.05rem] xl:text-[1rem] gap-5 text-[1rem] leading-8 flex items-start flex-col text-[#7e7e6b] fake-bold">
            {aboutDrBlake.map((text, index) => (
                <InViewMotion variants={childVariants} as="h2" key={index}>
                {text}
              </InViewMotion>
            ))}
          </motion.section>
        </div>
          <InViewMotion variants={childVariants}>
          <Image
            src="/girlImage.jpg"
            width={500}
            height={200}
            alt="Doctor Image"
            className="w-[20rem] md:w-[30vw] lg:w-[20rem] xl:w-[23rem] md:mt-8"
          />
        </InViewMotion>

       <InViewMotion variants={childVariants} as="h1"
          className="md:hidden inline-block w-full font-freightdisplay  text-left text-2xl sm:text-[1.8rem]"
        >
          About Dr. Serena Blake
        </InViewMotion>
      </div>
    </Container>
  );
};

export default About;
