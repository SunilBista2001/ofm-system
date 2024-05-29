import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { WhyRunway } from "@/components/WhyRunway";

const Page = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col mx-auto max-w-7xl sm:px-4 md:px-8 lg:px-12">
        <div className="flex items-start gap-x-24">
          <ThreeDCardDemo />
          <Mission />
        </div>
      </div>
      <Services />
      <WhyRunway />
      <Contact />
    </>
  );
};

export default Page;
