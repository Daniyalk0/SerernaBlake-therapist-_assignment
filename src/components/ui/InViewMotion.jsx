// components/InViewMotion.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InViewMotion = ({ children, variants, as = "div", className = "", ...rest }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default InViewMotion;
