import React from "react";
import { FaBookOpen } from "react-icons/fa";

import { LuGraduationCap } from "react-icons/lu";
import elegantauraImg from "@/public/elegant-aura.png";
import techtroveImg from "@/public/tech-trove.png";
import spoonfulImg from "@/public/spoonfuls.png";
import nestifyImg from "@/public/nestify.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationsData = [
  {
    title: "High School Education",
    location: "Carlsund Educational Center",
    description:
      "Business Program ",
    icon: React.createElement(LuGraduationCap),
    date: "2008-2011",
  },
  {
    title: "Adult Education (Komvux)",
    location: "Stockholm",
    description:
      "Programming 1 ",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Adult Education (Komvux)",
    location: "Stockholm",
    description:
      "Web Development 2 ",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Adult Education (Komvux)",
    location: "Stockholm",
    description:
      "Interface Design ",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "KYH Yrkeshögskola",
    location: "Stockholm",
    description:
      "Front End Developer",
    icon: React.createElement(FaBookOpen),
    date: "2023 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Elegant Aura",
    description:
      "Elegant Aura is a website focusing on beauty products, using HTML and Sass without any functionality.",
    tags: ["Html", "Sass"],
    imageUrl: elegantauraImg,
    projectLink: "https://elegant-aura.vercel.app",
    githubLink: "https://github.com/felhu0/Elegant-Aura",
  },
  {
    title: "TECH TROVE",
    description:
      "TECH TROVE is a full-stack application for e-commerce, focusing on electronics. It is built with React, Node.js, using Express, and utilizes MongoDB for data storage. ",
    tags: ["React", "Css", "Node.js", "MongoDB", "Express"],
    imageUrl: techtroveImg,
    projectLink: "https://ecommerce-fullstack-app-production.up.railway.app",
    githubLink: "https://github.com/felhu0/ecommerce-fullstack",
  },
  {
    title: "Spoonfuls",
    description:
      "Spoonful is a Figma prototype for an online soup delivery service. This prototype focuses on user-friendly design and an efficient ordering process. ",
    tags: ["Figma"],
    imageUrl: spoonfulImg,
    projectLink: "https://www.figma.com/file/qOoL1FoiFb8pM9Tc5KakbS/Spoonfuls-prototyp?type=design&mode=design&t=tg6ZFZcJdmfALrln-0",
    figmaLink: "https://www.figma.com/file/qOoL1FoiFb8pM9Tc5KakbS/Spoonfuls-prototyp?type=design&mode=design&t=tg6ZFZcJdmfALrln-0",
   
  },
  {
    title: "Nestify",
    description:
      "Nestify is a platform that simplifies finding, booking, and paying for accommodations, with a focus on older adults and individuals with limited mobility.",
    tags: ["Figma", "Next.js", "Tailwind", "Firebase", "Stripe"],
    imageUrl: nestifyImg,
    projectLink: "https://nestify-roan.vercel.app/",
    githubLink: "https://github.com/felhu0/Nestify",
   
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Remix",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "Figma",
  "Firebase",
  "Stripe",
  "Vercel",
  "Expo",
  "React Native",

] as const;