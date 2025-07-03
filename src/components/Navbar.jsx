"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav>
       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay:0.2 }} className=" max-w-7xl px-4 flex items-center justify-between pb-8 sm:pb-10 sm:px-6  lg:pb-12 lg:px-2 xl:pb-11 relative z-[1000]">
        <Image
          src={"/logo (2).png"}
          width={300}
          height={100}
          className="w-[14rem] lg:w-[16rem]"
          alt="image"
        />
        <div className="mobile flex lg:hidden flex-col gap-2" onClick={handle}>
          <span
            className={`w-8  bg-black ${
              isOpen
                ? "-rotate-[135deg] translate-x-1 translate-y-2 h-[0.01rem]"
                : "h-[0.03rem]"
            } transition-all duration-200`}
          ></span>
          <span
            className={`w-8 h-[0.03rem] bg-black ${
              isOpen ? "opacity-0" : "opacity-1"
            } transition-all duration-200`}
          ></span>
          <span
            className={`w-8 h-[0.03rem] bg-black ${
              isOpen
                ? "rotate-[135deg] translate-x-1 -translate-y-2 h-[0.01rem]"
                : "h-[0.03rem]"
            } transition-all duration-200`}
          ></span>
        </div>
      </motion.div>
      <div
  className={`bg-[#F3F0E8] z-[999] fixed top-0 left-0 w-full h-full transition-all duration-500 ${
    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
/>

    </nav>
  );
};

export default Navbar;
