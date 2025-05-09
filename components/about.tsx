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
        I recently graduated from KYH, where I studied to become a front-end developer. {" "}
        During my education, I have learned JavaScript, Tailwind CSS, HTLM, React, Next.js, Typescript, and some back-end {" "} programming with Node.js.
        I’ve also completed an internship where I built a full-featured web application using Remix and a mobile app for both Android and iOS using Expo and React Native. {" "}
        I’m a curious and driven person who enjoys exploring new technologies in my free time. {" "}
        My passion for coding continues to grow, and I’m eager to take the next step toward becoming a full-stack developer.
      </p>

    </motion.section>
  )
}