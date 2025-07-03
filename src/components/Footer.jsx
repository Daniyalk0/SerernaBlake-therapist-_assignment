import React from 'react'
import Container from './Container'
import InViewMotion from './ui/InViewMotion';

const Footer = () => {
   const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
  <Container className={' bg-[#F3F0E8] font-playfair2 flex items-center justify-center flex-col text-[#51413F] py-8 '}>
    <div className='w-full bg-[#51413F]  h-[1px] my-7'></div>
     <InViewMotion
          variants={childVariants}
          as="p" className='text-xs sm:text-sm'>Serena Blake © Copyright 2024. All Rights Reserved.</InViewMotion>
    <InViewMotion
          variants={childVariants}
          as="p" className='underline text-xs sm:text-sm'>Privacy Policy & Term Conditions</InViewMotion>
  </Container>
  )
}

export default Footer