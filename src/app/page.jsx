import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rates from "@/components/Rates";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services/>
      <FAQ/>
      <Rates/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default page;
