import React from "react";
import Image from "next/image";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

const features = [
  {
    icon: "hand-cursor.svg",
    color: "bg-amber-400 ",
    text: "Create job listings in minutes with customized descriptions, role requirements, and branding. Instantly publish across platforms or schedule postings.",
  },
  {
    icon: "file-jobs.svg",
    color: "bg-blue-800",
    text: "Track applicants in real-time, review student profiles, schedule interviews, and collaborate with your hiring team. Smart filters and AI help streamline your workflow.",
  },
  {
    icon: "padlock.svg",
    color: "bg-[#ec7b7b] ",
    text: "Make confident decisions with deep candidate insights. Send offer letters, track hiring metrics, and onboard the right talent effortlessly lorem.",
  },
];

export default function WorkflowFeatures() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center md:max-w-4xl md:mx-auto mx-5 mb-12">
        <h2 className=" text-3xl  md:text-4xl font-bold">
          Built for Modern Hiring — Simple, Smart, and Student-Ready
        </h2>
        <p className="text-gray-500 text-xl font-medium mt-2">
          From Posting to Hiring — Everything You Need in One Seamless Workflow
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <AnimatedWrapper direction="down" delay={0.3}>
          <Image
            src="/modern-job-dashobrad.png"
            alt="Hiring Dashboard"
            width={800}
            height={550}
            className="rounded-xl shadow-md"
          />
        </AnimatedWrapper>

        <StaggeredContainer className="flex flex-col gap-5">
          {features.map((feature, i) => {
            return (
              <AnimatedWrapper
                delay={i * 0.4}
                direction="down"
                key={i}
                className={`p-4 rounded-xl flex gap-4 items-center ${feature.color} hover:translate-y-1.5 transition-all duration-300`}
              >
                <Image
                  src={feature.icon}
                  width={60}
                  height={60}
                  className=" rounded-sm bg-white  mt-1"
                />
                <p className="text-sm text-white md:text-base">
                  {feature.text}
                </p>
              </AnimatedWrapper>
            );
          })}
        </StaggeredContainer>
      </div>
    </section>
  );
}
