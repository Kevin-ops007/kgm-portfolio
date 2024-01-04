import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import spaceInvadersImg from "@/public/spaceinvaders.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Enginer Intern",
    company: "Peloton Technologies",
    location: "Victoria, BC",
    description:
      "I worked as a full-stack software engineer at a fintech startup. The was built with ASP.NET MVC and used an SQL database.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
    link: "https://peloton-technologies.com/",
  },
  {
    title: "Software Enginer Intern",
    company: "Aquatic Informatics",
    location: "Vancouver, BC",
    description:
      "I worked as a full-stack software engineer at Aquatic Informatics and did a bit of DevOps. The stack was Java and Angular.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
    link: "https://aquaticinformatics.com/"
  },
  {
    title: "Mobile Enginer Intern",
    company: "Apryse",
    location: "Vancouver, BC",
    description:
      "I was in charge of the React-Native, Flutter and Xamarin SDK for Apryse's PDF SDK. I directly reported to the Android and iOS lead while working here.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
    link: "https://apryse.com/"
  },
  {
    title: "Software Enginer Intern",
    company: "Opensignal",
    location: "Victoria, BC",
    description:
      "I worked as a backend engineer at Opensignal. I worked on Apache Beam jobs using Google Cloud Dataflow and BigQuery. I also worked extensively on their backend which was in Java.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
    link: "https://www.opensignal.com/"
  },
] as const;

export const projectsData = [
  {
    title: "Space Invaders",
    description:
      "Space Invaders Game Built using Pygame. This was a fun project I did to learn Pygame.",
    tags: ["Pygame", "Python"],
    imageUrl: spaceInvadersImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redis",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "GraphQL",
  "Terraform",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
