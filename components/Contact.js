"use client";

import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="h-[35rem] w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased relative">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Grow Your OnlyFans In a Smarter Way
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
          Welcome to Only Fans Growth, the best place to grow your OnlyFans in a
          smarter way. We provide you with the best tools and strategies to grow
          your OnlyFans.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 px-4 text-white focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <div className="w-full flex justify-center cursor-pointer mt-6">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border cursor-pointer  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Send
          </button>
        </div>
      </div>

      <Footer />
      <BackgroundBeams />
    </div>
  );
}

export default Contact;
