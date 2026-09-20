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
              className="mb-10 mt-4 px-1 text-4xl font-medium !leading-[1.5] sm:text-4xl lg:text-6xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span className="font-bold">Hi!</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.55,
                ease: "easeOut",
              }}
              className="mb-10 mt-4 px-1 text-2xl font-medium !leading-[1.5] sm:text-2xl lg:text-4xl">
              I'm Kevin. I'm a {""}
              <span className="font-bold">Software Engineer</span> {" "}
              who loves {""}
              building <span className="font-bold">scalable applications</span>.
            </motion.p>
            <motion.div
              className="flex flex-col items-center justify-center gap-2 px-2 text-lg font-medium sm:flex-row sm:px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              <Link
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] outline-none transition hover:-translate-y-0.5 hover:bg-slate-950 focus:scale-110 active:scale-105"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="group flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-7 py-3 shadow-sm outline-none transition hover:-translate-y-0.5 hover:shadow-md focus:scale-110 active:scale-105 dark:border-white/10 dark:bg-white/5"
                href="/KGM_Resume.pdf"
                download
              >
                Resume{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>

              <a
                className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-4 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                href="https://www.linkedin.com/in/kevin-mathew-5bab50196/"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-4 text-[1.35rem] text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                href="https://github.com/Kevin-ops007"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </motion.div>
          </div>
          <div className="flex items-center justify-center px-4 py-6 sm:p-30">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              className="mx-auto w-full max-w-[220px] overflow-visible sm:max-w-[400px]"
              initial="hidden"
              animate="visible"
              preserveAspectRatio="xMidYMid meet"
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
