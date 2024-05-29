"use client";
import Image from "next/image";
import Image1 from "../assets/images/img2.jpg";
import Image2 from "../assets/images/img3.jpg";
import Image3 from "../assets/images/img4.jpg";

const servicesContent = [
  {
    id: 1,
    image: Image1,
  },
  {
    id: 2,
    title: "Full-Suite OnlyFans Management",
    desc: "Our highly experienced team aids our clients in achieving their full potential on OnlyFans. We strive to make your dreams a reality by maximizing your online traffic, growing your brand awareness, and ultimately reaching your highest earning potential.",
  },
  {
    id: 3,
    image: Image2,
  },
  {
    id: 4,
    title: "Brand Strategy",
    desc: "We create individualized content curation and creation strategies for our clients, helping to increase engagement with their fans and followers exponentially. Our goal is to significantly improve our clients’ reach, impressions, and earnings.",
  },
  {
    id: 5,
    image: Image3,
  },
  {
    id: 6,
    title: "Experiences",
    desc: "We provide exclusive experiences that serve as highly beneficial networking opportunities for our clientele. Our OnlyFans agency team strives to fill all the events we participate in with some of the industry’s most exclusive influencers and brands.",
  },
];

import { SparklesCore } from "./ui/sparkles";

function Services() {
  return (
    <div className="h-full w-full bg-black flex flex-col items-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center mt-16 mb-2 text-white relative z-20">
        Our Services
      </h1>
      <div className="w-[40rem] h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="grid grid-cols-2 sm:gap-6 md:gap-8 lg:gap-14 mb-8 lg:mb-16 sm:grid-cols-3 items-center sm:px-4 md:px-8 lg:px-12">
        {servicesContent.map((content) =>
          content.image ? (
            <Image
              key={content.id}
              src={content.image}
              alt="Services"
              width={350}
              height={350}
              className="max-h-96"
            />
          ) : (
            <div
              key={content.id}
              className="flex flex-col text-white max-w-md items-center space-y-4"
            >
              <h1 className="text-4xl text-center font-semibold">
                {content.title}
              </h1>
              <p className="text-center text-lg">{content.desc}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Services;
