"use client";


import { motion, useScroll, useTransform } from "framer-motion";

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { FaFigma, FaGithubSquare } from "react-icons/fa";


type ProjectProps = {
    title: string;
    description: string;
    tags: readonly string[];
    imageUrl: StaticImageData;
    projectLink?: string; // The ? makes projectLink optional
    githubLink?: string; // The ? makes githubLink optional
    figmaLink?: string; // The ? makes figmaLink optional
  };
  

export default function Project({ title, description, tags, imageUrl, projectLink, githubLink, figmaLink}:
ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div 
            ref={ref} 
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section 
                className="bg-gray-100 max-w-[42rem] border
                border-black/5 rounded-lg
                overflow-hidden sm:pr-8 relative sm:h-[20rem] 
                hover:bg-gray-200 transition 
                sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">

                <div className="pt-4 pb-7 px-5 sm:pl-10
                    sm:pr-2 sm:pt-10 sm:max-w-[50%] flex
                    flex-col h-full sm:group-even:ml-[18rem]">
                    <div className="flex gap-3">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                       {githubLink && (
                         <a className="bg-white p-1 text-indigo-900
                         flex items-center gap-2 text-[1.35rem]
                         rounded-full focus:scale-[1.15] hover:scale-[1.15]
                         hover:text-gray-950
                         active:scale-105 transition 
                         cursor-pointer border
                         borderBlack dark:bg-white dark:text-black width:10%"
                         href={githubLink} target="_blank">
                         <FaGithubSquare />
                         </a>
                       )}
                        {figmaLink && (
                         <a className="bg-white p-1 text-indigo-900
                         flex items-center gap-2 text-[1.35rem]
                         rounded-full focus:scale-[1.15] hover:scale-[1.15]
                         hover:text-gray-950
                         active:scale-105 transition 
                         cursor-pointer border
                         borderBlack dark:bg-white dark:text-black width:10%"
                         href={figmaLink} target="_blank">
                         <FaFigma />
                         </a>
                       )}
                    </div>
                    
                    <p className="mt-2 leading-relaxed
                    text-gray-700 dark:text-white/70 ">
                        {description}</p>
                    
                    <ul className="flex flex-wrap mt-4
                        gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3
                            py-1 text-[0.7rem] uppercase
                            tracking-wider text-white
                            rounded-full dark:text-white/70" 
                            key={index}>{tag}</li>
                        ))}
                       
                    </ul>
                    
                    
                </div>
                
                <a href={projectLink} target="_blank">
                <Image src={imageUrl} 
                alt="Project I worked on" 
                quality={95} 
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:-right-[initial] 
                group-even:-left-40"
                /> 
                <button className="sm:hidden p-4 underline text-xs">View Project</button>
                </a>
            </section>
        </motion.div>
   
    )
}