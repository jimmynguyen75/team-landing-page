import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  experience: Experience
};

export default function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]  snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover"
        src={urlForImage(experience?.companyImage).url()}
        alt=""
      ></motion.img>
      <div className="px-0 md:px-2">
        <h4 className="text-xl font-light">{experience?.company}</h4>
        <p className="font-bold text-base mt-1">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-1">
        {experience?.technologies?.map(technology => (
          <img key={technology?._id} className="h-10 w-10 rounded-full object-cover" src={urlForImage(technology?.image).url()} alt="" />
        ))}
  
        </div>
        {/* <p className="uppercase py-2 text-gray-300">Started wordk...- Ended....</p> */}
        <ul className="list-disc space-y-1 ml-5 text-lg">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
