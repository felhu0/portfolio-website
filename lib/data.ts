import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import elegantauraImg from "@/public/elegant-aura.png";
import techtroveImg from "@/public/tech-trove.png";
import spoonfulImg from "@/public/spoonfuls.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Education",
    location: "Carlsund Educational Center",
    description:
      "Business Program",
    icon: React.createElement(LuGraduationCap),
    date: "2008-2011",
  },
  {
    title: "Adult Education (Komvux)",
    location: "Stockholm",
    description:
      "Programming 1",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Adult Education (Komvux)",
    location: "Stockholm",
    description:
      "Web Development 2",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Adult Education (Komvux)",
    location: "Stockholm",
    description:
      "Interface Design",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "KYH Vocational College",
    location: "Stockholm",
    description:
      "Front End Developer",
    icon: React.createElement(FaReact),
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
  },
  {
    title: "TECH TROVE",
    description:
      "TECH TROVE is a full-stack application for e-commerce, focusing on electronics. It is built with React, Node.js, using Express, and utilizes MongoDB for data storage. ",
    tags: ["React", "Css", "Node.js", "MongoDB", "Express"],
    imageUrl: techtroveImg,
  },
  {
    title: "Spoonfuls",
    description:
      "Spoonful is a Figma prototype for an online soup delivery service. This prototype focuses on user-friendly design and an efficient ordering process. ",
    tags: ["Figma"],
    imageUrl: spoonfulImg,
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
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;