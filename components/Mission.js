"use client";
import { motion } from "framer-motion";

function Mission() {
  return (
    <div className="flex flex-col space-y-12 mt-24">
      <motion.h1
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
        className="text-5xl font-serif font-semibold"
      >
        Our Mission
      </motion.h1>
      <motion.p
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
        className="text-lg max-w-lg"
      >
        We are a full-service <strong>OnlyFans management agency</strong> in
        Toronto, Canada providing trusted marketing and management services. Top
        earners know that an experienced team is the fastest way to earn more
        money.
      </motion.p>
    </div>
  );
}

export default Mission;
