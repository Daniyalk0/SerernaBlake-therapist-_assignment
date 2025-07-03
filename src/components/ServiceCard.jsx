import React from "react";
import InViewMotion from "./ui/InViewMotion";

const ServiceCard = ({ heading, content, img }) => {
    const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div
        className="rounded-full w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw]  overflow-hidden md:w-[25vw] md:h-[25vw]"
      >
        <InViewMotion
        variants={childVariants}
        as="img" src={img} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex items-center justify-center gap-5 lg:gap-3 px-[0.6rem]  sm:px-0  flex-col">
         <InViewMotion
        variants={childVariants}
        as="h1"  className="font-playfair2 text-[1.2rem] lg:text-[1.9rem] sm:px-0  xl:text-[2rem] text-center lg:font-freightdisplay2 ">
          {heading}
        </InViewMotion>
        <InViewMotion
        variants={childVariants}
        as="p" className="text-[#41413fa1]  fake-bold font-freightdisplay2 text-[1.1rem]  leading-8     text-center">
          {content}
        </InViewMotion>
      </div>
    </div>
  );
};

export default ServiceCard;
