"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        I'm always open to new opportunities and would love to hear from you. {" "}
        The best way to contact me is through {" "}
        <a className="underline" href="https://www.linkedin.com/in/kevin-mathew-5bab50196/">
          LinkedIn
        </a>{" "}
        or through this email address: {" "}
        <a className="underline" href="mailto:kgmdev007@gmail.com">
          kgmdev007@gmail.com
        </a>{" "}
      </p>
    </motion.section>
  );
}
