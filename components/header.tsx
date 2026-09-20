"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
    name: (typeof links)[number]["name"]
  ) => {
    event.preventDefault();

    const targetId = hash.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      const headerOffset = 110;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    if (window.history.pushState) {
      window.history.pushState(null, "", hash);
    }

    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-slate-200/80 bg-white/80 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 w-[min(94vw,22rem)] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:w-[initial] sm:py-0">
        <ul className="flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.82rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center rounded-full px-3 py-2.5 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200",
                  {
                    "text-slate-950 dark:text-slate-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={(event) => handleNavClick(event, link.hash, link.name)}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:bg-slate-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
