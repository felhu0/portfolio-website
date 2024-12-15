"use client"

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";

const fadeInAnimationVariants = {

    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },

    }),
}

export default function Skills() {
    const { ref } = useSectionInView('Skills')

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28
    text-center sm:mb-40">
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center
        gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            className="bg-white border
                        borderBlack rounded-xl px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-3 dark:bg-white/10 dark:text-white/80 text-sm md:text-base lg:text-lg"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
            </ul>
        </section>
    )
}