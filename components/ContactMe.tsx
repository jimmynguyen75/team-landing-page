"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

import React from "react";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:minhthusdb@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need. {""}
          <span className="decoration-[#F7aB0A]/50 underline">Let&apos;s Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 animate-pulse" />
            <p className="text-2xl">+84 868 4705 98</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 animate-pulse" />
            <p className="text-2xl">minhthusdb@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 animate-pulse" />
            <p className="text-2xl">OWL Team</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register("message")} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
