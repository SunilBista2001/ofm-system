"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ModelImg from "../assets/models/model5.webp";

const testimonials = [
  {
    id: 1,
    title: "Established in 2019:   ",
    quote:
      "Evolving alongside the industry, we have achieved mastery in marketing and messaging.",
  },
  {
    id: 2,
    title: "Female Powerhouse:    ",
    quote:
      "Our team is entirely female: account managers, messaging specialists, marketing, all committed to your well-being.",
  },
  {
    id: 3,
    title: "Winning Together:    ",
    quote:
      "As a Commission-Based Agency, Your Success is Our Success. Our Research Team is Always Seeking the Best Ways to Promote You.    ",
  },
  {
    id: 4,
    title: "Your Well-Being Matters:    ",
    quote:
      "About Every Aspect of You - From Protection to Identity and Mental Health. Join Our Team, and We're Here for You, Always.    ",
  },
];

export const WhyRunway = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="z-50 h-full "
    >
      <motion.p className="font-bold text-xl font-serif bg-black text-black my-8 uppercase md:text-5xl text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Why choose Runway?
      </motion.p>

      <motion.div className="flex md:gap-16 lg:gap-24 items-center">
        <Image
          src={ModelImg}
          width={600}
          height={600}
          className="rounded-tr-[20rem]"
        />
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="space-y-12">
            {testimonials.map((testimonial) => (
              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                key={testimonial.id}
                className="flex flex-col items-center text-start justify-center max-w-xl "
              >
                <p className="text-xl font-bold flex justify-start w-full text-black md:text-2xl">
                  {testimonial.title}
                </p>
                <p className="text-black text-base">{testimonial.quote}</p>
              </motion.div>
            ))}
            <button className="cursor-pointer bg-black py-2 px-9 rounded text-lg text-white font-semibold hover:bg-black/85 transition-all">
              Apply Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
