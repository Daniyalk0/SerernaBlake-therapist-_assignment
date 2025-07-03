import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import InViewMotion from "./ui/InViewMotion";

const Hero = () => {

    const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  return (
    <div>
      <Container className={"bg-[#F3F0E8] py-8 sm:py-10 lg:py-12 xl:py-11"}>
        <Navbar />
        <div className="relative w-full h-[87vh] overflow-hidden ">
          {/* Background video */}
          <video
            src="/hero2.mp4"
            autoPlay
            loop
            loading="lazy"
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Optional: dark overlay for better contrast */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white gap-14 mt-7">
            <div className="flex items-center flex-col justify-center gap-3 px-4 sm:px-12 ">
               <InViewMotion
          variants={childVariants}
          as="div"
                className="text-4xl sm:text-6xl md:text-6xl font-bold mb-4 font-freightdisplay"
              >
                Healing Begins with Understanding
              </InViewMotion>
                          <InViewMotion
          variants={childVariants}
          as="h2"
                className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-6  font-freightdisplay2 "
              >
                Dr. Serena Blake brings 8+ years of experience and 500+
                sessions, combining proven therapy with compassionate care to
                help you heal, grow, and connect — in-person or online.
              </InViewMotion>
            </div>

                           <InViewMotion
          variants={childVariants}
          as="h2" className="w-64 h-20 bg-[#94b0b0b0] [clip-path:ellipse(40%_50%_at_50%_50%)] flex items-center justify-center text-center font-semibold  font-freightdisplay2">
              Book a free consultation
            </InViewMotion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
