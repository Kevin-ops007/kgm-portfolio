"use client";


import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1.5,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 5,
          bounce: 0,
          repeat: Infinity
        },
        opacity: { delay, duration: 0.01 },
      }
    };
  }
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-left sm:mb-0 scroll-mt-[100rem]"
    >

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="p-1">
            <motion.h1
              className="mb-10 mt-4 px-1 lg:text-6xl font-medium !leading-[1.5] sm:text-4xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="font-bold">Hi!</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
              className="mb-10 mt-4 px-1 lg:text-4xl font-medium !leading-[1.5] sm:text-2xl">
              I'm Kevin. I'm a {""}
              <span className="font-bold">Software Engineer</span> {" "}
              who loves {""}
              building <span className="font-bold">scalable applications</span>.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
              }}
            >
              <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="/CV.pdf"
                download
              >
                CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>

              <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/kevin-mathew-5bab50196/"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/Kevin-ops007"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </motion.div>
          </div>
          <div className="p-30 hidden sm:block">
            <motion.svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                variants={draw}
                custom={1}
                className="stroke-1 stroke-current text-gray-700 [stroke-linecap:round] fill-transparent"
              />
              <motion.rect
                width="150"
                height="150"
                x="230"
                y="30"
                rx="10"
                custom={3}
                variants={draw}
                className="stroke-1 stroke-current text-peach-puff [stroke-linecap:round] fill-transparent"
              />
              <motion.rect
                width="150"
                height="150"
                x="20"
                y="230"
                rx="20"
                custom={4}
                variants={draw}
                className="stroke-1 stroke-current  text-peach-puff [stroke-linecap:round] fill-transparent"
              />
              <motion.circle
                cx="300"
                cy="300"
                r="80"
                variants={draw}
                custom={2}
                className="stroke-1 stroke-current text-gray-700 [stroke-linecap:round] fill-transparent"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
}
