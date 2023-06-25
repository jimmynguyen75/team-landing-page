"use client";

import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  skills?: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen max-w-[2000px] justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm z-10">Hover over skill for currency profieciency</h3>
      <div className="grid grid-cols-4 pt-24 2xl:pt-0 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
