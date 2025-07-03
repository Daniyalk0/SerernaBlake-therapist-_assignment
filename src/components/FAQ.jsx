import React from "react";
import Container from "./Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InViewMotion from "./ui/InViewMotion";

const FAQ = () => {

    const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", },
    },
  };



  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
  ];

  return (
    <Container className={"bg-[#FEFEFE] w-full "}>
      <div className="text-[#41413F] py-20   sm:px-5 ">
            <InViewMotion
        variants={childVariants}
        as="h1" className="font-playfair2 text-[1.7rem] lg:text-[1.9rem]  md:px-40 lg:px-64  sm:pb-14 xl:text-[2.7rem] text-center ">
          Frequently Asked Questions
        </InViewMotion>
        <div className="mt-14 sm:mt-5 lg:px-10 xl:px-20 ">
          <Accordion type="single" collapsible className=" flex flex-col gap-6">
     {faqs.map((faq, index) => (
  <InViewMotion
    key={index}
    variants={childVariants}
    as="div"
  >
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger>{faq.question}</AccordionTrigger>
      <AccordionContent>
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  </InViewMotion>
))}

          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
