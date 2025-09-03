// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { AnimatedWrapper } from "../animation/animation";
import ModernHiringSection from "../home/ModernHiringSection";
import FAQSection from "../home/FAQSection";
import WorkflowFeatures from "./ModernHiring";

export default function Hero() {
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-tr from-[#f4f6f8] via-[#eaf2ff] to-[#808fc2] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center  justify-between w-full gap-12">
          {/* Text Content */}
          <AnimatedWrapper
            direction="left"
            className="w-full lg:max-w-xl text-center md:text-left"
          >
            <h1 className="text-3xl md:text-[42px]   font-semibold font-[Inter] text-black leading-tight">
              Post roles, manage applicants and showcase your brand
            </h1>

            <p className="text-[#666666] text-[18px] font-medium my-5">
              Designed for speed, brand visibility, and smarter hiring — from
              post to placement
            </p>

            <Link
              href="/login"
              className="mt-8 px-6 py-3 text-blue-700 border-2 border-blue-700 rounded hover:bg-blue-700 hover:text-white transition-all text font-medium"
            >
              Post a Job And See How It’s Work
            </Link>
          </AnimatedWrapper>

          {/* Illustration */}
          <AnimatedWrapper direction="right" className="  ">
            <Image
              src="/woman-job-managerw.png" // Replace with your image in public folder
              alt="Hero Illustration"
              width={700}
              height={570}
              className="object-cover rounded-lg drop-shadow-lg"
            />
          </AnimatedWrapper>
        </div>
      </section>
      <WorkflowFeatures />
      <ModernHiringSection />
      <FAQSection />
    </>
  );
}
