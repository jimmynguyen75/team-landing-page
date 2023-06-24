import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://preview.redd.it/zk1a36ttu6f91.png?width=1024&format=png&auto=webp&s=dd48ab7c449888ba26012338f0157669e9d4a7da"
        alt=""
      ></motion.img>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Creator of Project</h4>
        <p className="font-bold text-2xl mt-1">Jimmy</p>
        <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <img className="h-10 w-10 rounded-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />           <img className="h-10 w-10 rounded-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />           <img className="h-10 w-10 rounded-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started wordk...- Ended....</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary of points</li>
          <li>Sumary of points</li>
          <li>Sumary of points</li>
          <li>Sumary of points</li>
          <li>Sumary of points</li>
        </ul>
      </div>
    </article>
  );
}
