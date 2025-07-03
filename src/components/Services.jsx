import React from "react";
import Container from "./Container";
import ServiceCard from "./ServiceCard";
import InViewMotion from "./ui/InViewMotion";
// import InViewMotion from "./ui/InViewMotion";

const Services = () => {
    const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", },
    },
  };

  return (
    <Container className={"bg-[#F3F0E8]  "}>
      <div className=" text-[#41413F] text-center  flex flex-col gap-6">
        <div className="w-full h-[1px] bg-[#7e7e6bb7] relative -top-14"></div>
        <div className="py-18 lg:py-[3rem] flex flex-col gap-6">
          <InViewMotion
            variants={childVariants}
            as="h1"
            className="font-playfair2 text-[1.7rem] lg:text-[1.9rem] sm:px-12 md:px-40 lg:px-64 xl:text-[2.2rem]"
          >
            Therapy can be a space where you invest in yourself—one of the
            highest forms of self-care.
          </InViewMotion>
          <InViewMotion
            variants={childVariants}
            as="p"
            className="text-[#41413fa1]  fake-bold font-freightdisplay2 text-[1.1rem] leading-9 sm:leading-8 sm:px-12 md:px-40 lg:px-64"
          >
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </InViewMotion>
        </div>
        <div className="w-full h-[1px] bg-[#7e7e6bb7] relative top-14"></div>
      </div>

      <div className="min-h-screen text-[#41413F]  px-6">
        <InViewMotion
          variants={childVariants}
          as="h1"
          className="font-playfair2 text-[1.7rem] lg:text-[1.9rem]  md:px-40 lg:px-64 my-20 sm:py-14 xl:text-[2.7rem] text-center"
        >
          Area of Focus
        </InViewMotion>
        <div className="grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 justify-between pb-14 ">
          <ServiceCard
            img={"/trauma.jpg"}
            heading={"Trauma Recovery"}
            content={
              "Healing from trauma involves addressing deep emotional wounds caused by painful or overwhelming experiences. With the help of therapy, self-reflection, and support, individuals can gradually process their pain, rebuild trust in themselves and others, and move toward a more secure and empowered sense of self."
            }
          />

          <ServiceCard
            img={"/anxiety.jpg"}
            heading={"Anxiety & Stress Management "}
            content={
              "Learning healthy coping strategies is essential for managing overwhelming thoughts and emotions that stem from anxiety and stress. By practicing techniques such as mindfulness, therapy, breathing exercises, and consistent self-care, individuals can reduce emotional strain, regain control, and enhance their overall mental well-being."
            }
          />

          <ServiceCard
            img={"/relation.jpg"}
            heading={"Relationship Counseling "}
            content={
              "Improving communication, resolving conflicts, and strengthening emotional connections can lead to more fulfilling and resilient relationships. With the guidance of a supportive counselor, individuals and couples can navigate challenges, deepen understanding, and foster a healthier emotional bond built on trust and empathy."
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Services;
