"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Skills from "./skills";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="text-center scroll-mt-[6rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="container mx-auto mt-14 mb-20 px-4 sm:mb-12 sm:px-0">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="p-1 sm:ml-7">
            <Skills />
          </div>
          <div className="p-1 text-base sm:mr-7 sm:text-xl">
            <p>
              A proud Software Engineering graduate from the {" "}
              <span className="font-medium">University of Victoria,</span> I currently reside in the vibrant city of {" "}
              <span className="font-medium">Vancouver, BC.</span>{" "}
              <span className="italic">My favorite part of programming</span> is the
              problem-solving aspect. I <span className="underline">love</span> the {" "}
              feeling of finally figuring out a solution to a problem. {" "}
              My enthusiasm for programming is intricately woven with a deep-rooted passion for scalability, {" "}
              a facet that propels me to explore and implement robust solutions in my projects. {" "}
              Beyond the realm of coding, my diverse interests include immersing myself in video games, {""}
              savoring cinematic experiences, and {" "}
              working out. {" "}
            </p>

            <p>
              I am currently working as a <span className="font-medium">software engineer</span>,
              building great products and creating solutions that improve both user experience and business impact.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
