import React from "react";
import Image from "next/image";

export default function SpreadsHeroSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-[45px] font-bold text-gray-900 leading-tight">
              Where Careers, Creators & Communities Rise Together
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-[inder]">
              Spreads is India's new-age microblogging job platform — where your
              story, your skills, and your circle matter. Whether you're shaping
              your voice, landing your next role, or building a brand — this is
              your space to rise.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 flex items-center cursor-pointer gap-2">
              Grow with Your Circle
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[560px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/img2.jpg"
                alt="Five diverse young people sitting together on a bench outdoors, smiling and laughing in casual hoodies and clothing"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
