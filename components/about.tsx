"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {

  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] 
        text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="space-y-4">
        <p className="text-sm sm:text-base">
          I’m currently working part-time as a front-end developer while studying .NET development at Nackademin.
        </p>

        <p className="text-sm sm:text-base">
          I previously studied front-end development at KYH, where I learned JavaScript, Tailwind CSS, HTML, React, Next.js, TypeScript, and how to work with REST APIs. I also worked with NoSQL databases such as Firebase and MongoDB, as well as mobile development using React Native with Expo.
        </p>

        <p className="text-sm sm:text-base">
          In my current studies, I have developed skills in relational databases, SQL Server, Entity Framework, .NET, ASP.NET, MVC, and Web API.
        </p>

        <p className="text-sm sm:text-base">
          I’m a curious and driven person who enjoys exploring new technologies in my free time. My passion for coding continues to grow, and I’m eager to take the next step toward becoming a full-stack developer.
        </p>
      </div>
    </motion.section>
  )
}