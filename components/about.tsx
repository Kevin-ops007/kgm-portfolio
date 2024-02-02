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
      className="text-center scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="container mx-auto mt-14 mb-40 sm:mb-0">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="p-1 ml-7">
            <Skills />
          </div>
          <div className="p-1 mr-7 text-xl">
            <p>
              A proud Software Engineering graduate from the {" "}
              <span className="font-medium">University of Victoria,</span> I currently reside in the picturesque city of {" "}
              <span className="font-medium">Victoria, BC.</span>{" "}
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
              I am currently looking for a{" "}
              <span className="font-medium">full-time position</span> as a software
              engineer.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
