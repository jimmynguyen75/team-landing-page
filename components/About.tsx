"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-0 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://photo2.tinhte.vn/data/attachment-files/2023/01/6293170_Mister_Bumbles_A_cute_baby_clockwork_owl_with_big_crystaline_ey_.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
        </h4>
        <p className="text-base">
          Welcome to the dynamic and talented Software Project Team! Comprised of skilled software engineers, designers, and project managers, this
          team is dedicated to delivering outstanding software solutions that surpass expectations. With a shared passion for innovation and a
          commitment to excellence, they bring a wealth of expertise and experience to every project. 
          
          The team's collaborative approach fosters
          effective communication and a harmonious work environment. They understand the importance of active listening and value diverse
          perspectives, leveraging each team member's unique skills to create a cohesive and high-performing unit. 
          
          Adaptable and agile, this team
          thrives on tackling complex challenges head-on. They meticulously plan, design, and execute projects, ensuring that deadlines are met while
          maintaining the highest standards of quality. Their expertise in various programming languages, frameworks, and development methodologies
          allows them to craft robust and scalable software solutions.
        </p>
      </div>
    </motion.div>
  );
}
