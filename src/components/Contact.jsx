"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import Container from "./Container";
import { cn } from "@/lib/utils";
import InViewMotion from "./ui/InViewMotion";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
  text: z.string().min(10, "Text should not be less than 10 characters"),
});

const Contact = () => {

 const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      text: "",
    },
  });

  const [messageTime, setMessageTime] = useState(false);

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
    setMessageTime(true);
    form.reset();

    setTimeout(() => {
      setMessageTime(false);
    }, 5000); // 2 seconds
  };

  const formRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        form.reset(); // 👈 Reset the form when click is outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [form]);

  return (
    <Container
      className={
        "bg-[#F3F0E8] py-24 flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between md:justify-around lg:justify-evenly  sm:px-5 "
      }
    >
      <div className="contact w-full text-[#30303f] font-freightdisplay2 flex flex-col items-center justify-center sm:items-start sm:justify-start my-12 gap-6 sm:w-[40%] md:w-[30%]">
        {/* Heading */}
        <InViewMotion
          variants={childVariants}
          as="h1" className="text-2xl md:text-3xl lg:text-4xl lg:leading-tight text-center sm:text-left">
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </InViewMotion>

        {/* Contact Info */}
        <InViewMotion
          variants={childVariants}
          as="div" className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left lg:text-xl">
          <p className="underline">serena@blakepsychology.com</p>
          <p>Phone: (323) 555-0192</p>
        </InViewMotion>

        {/* Address */}
         <InViewMotion
          variants={childVariants}
          as="p" className="text-center sm:text-left lg:text-xl">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </InViewMotion>

        {/* Office Hours */}
        <InViewMotion
          variants={childVariants}
          as="div" className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl">Office Hours</h1>
          <p className="lg:text-xl">In-person: Tue & Thu, 10 AM–6 PM</p>
          <p className="lg:text-xl">
            Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
          </p>
        </InViewMotion>
      </div>

      <div
        className="form w-[100%] sm:w-[50%] lg:w-[30%]  bg-[#E7E4DC] px-6 py-5 rounded-xl "
        ref={formRef}
      >
        {!messageTime ? (
          <Form {...form}>
            <InViewMotion
          variants={childVariants}
          as="form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 font-playfair"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-[#41413F]">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className={cn(
                          "border border-gray-300 text-[#41413F] transition-all duration-200",
                          "focus:outline-none focus:ring-4 focus:ring-zinc-400 focus:border-zinc-400",
                          fieldState.invalid &&
                            "border-red-400 focus:ring-red-400 focus:border-red-400"
                        )}
                      />
                    </FormControl>
                    <FormMessage className="font-ibmFont text-[0.7rem] text-red-400 absolute -bottom-5" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-[#41413F]">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        {...field}
                        className={cn(
                          "border border-gray-300 text-[#41413F] transition-all duration-200",
                          "focus:outline-none focus:ring-4 focus:ring-zinc-400 focus:border-zinc-400",
                          fieldState.invalid &&
                            "border-red-400 focus:ring-red-400 focus:border-red-400"
                        )}
                      />
                    </FormControl>
                    <FormMessage className="font-ibmFont text-[0.7rem] text-red-400 absolute -bottom-5" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-[#41413F]">Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        {...field}
                        className={cn(
                          "border border-gray-300 text-[#41413F] transition-all duration-200",
                          "focus:outline-none focus:ring-4 focus:ring-zinc-400 focus:border-zinc-400",
                          fieldState.invalid &&
                            "border-red-400 focus:ring-red-400 focus:border-red-400"
                        )}
                      />
                    </FormControl>
                    <FormMessage className="font-ibmFont text-[0.7rem] text-red-400 absolute -bottom-5" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="text"
                render={({ field, fieldState }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-[#41413F]">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message..."
                        className={cn(
                          "border border-gray-300 text-[#41413F] transition-all duration-200",
                          "focus:outline-none focus:ring-4 focus:ring-zinc-400 focus:border-zinc-400",
                          fieldState.invalid &&
                            "border-red-400 focus:ring-red-400 focus:border-red-400"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-ibmFont text-[0.7rem] text-red-400 absolute -bottom-5" />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </InViewMotion>
          </Form>
        ) : (
          <div className="flex w-full items-center justify-center flex-col text-[#30303f] font-playfair">
            {" "}
            <h1>Thank You so much 🎉</h1>
            <p>We'll get back to you soon!</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Contact;
