"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="top-0 flex p-5 items-start justify-between sticky max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon url="https://twitter.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://youtube.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://facebook.com" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-500 cursor-pointer"
      >
        <SocialIcon url="https://email.com" href="#contact" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">Get in touch</p>
      </motion.div>
    </header>
  );
}
