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

      <p className="text-sm sm:text-base">
        I am a student at KYH where I am studying to become a front-end developer. {" "}
        During my education, I have learned JavaScript, Tailwind CSS, React, and some back-end {" "} programming with Node.js.
        I can create well-functioning websites with HTML, CSS, and React.{" "}
        I am a curious person who spends a lot of time in my free time learning {" "}new things outside of school.{" "}
        A strong passion for coding also guides my {" "} interest towards full-stack development.
      </p>

    </motion.section>
  )
}