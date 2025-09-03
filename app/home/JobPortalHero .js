"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const services = [
  {
    title: "HR Management",
    icon: "👥",
    description: "Complete HR solutions for your business.",
    link: "/hr-management",
    bgColor: "bg-blue-600",
  },

  {
    title: "IT/ITeS",
    icon: "💻",
    description: "Tech-enabled IT and IT-enabled services.",
    link: "/it-ites",
    bgColor: "bg-green-500",
  },
  {
    title: "Recruitment",
    icon: "🔍",
    description: "Find the right talent quickly.",
    link: "/recruitment",
    bgColor: "bg-yellow-500",
  },

  {
    title: "Trainings",
    icon: "📊",
    description: "Corporate and technical training programs.",
    link: "/trainings",
    bgColor: "bg-pink-500",
  },
];

const JobPortalHero = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Content */}
          <div className={`space-y-8 transform transition-all duration-1000 `}>
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaboration"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-5">
              <div className="space-y-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Build a Standout Profile.{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                    Get Matched Instantly. Land Your Next Role.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Spreads connects job seekers and students to careers with
                  AI-matched jobs, verified employer signals, and smart resumes.
                </p>
              </div>

              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>Find Your Solution</span>
                <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Feature Cards */}

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative w-full h-72 perspective"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Front side */}
                <motion.div
                  animate={{ rotateY: hoverIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-white text-black rounded-sm shadow-lg"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </motion.div>

                {/* Back side */}
                <motion.div
                  animate={{ rotateY: hoverIndex === index ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 backface-hidden ${service.bgColor} text-white flex flex-col items-center justify-center rounded-xl shadow-lg`}
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="text-center px-4 mb-3">{service.description}</p>
                  <div>
                    <Link
                      href={service.link}
                      className="flex items-center gap-2 mt-2 hover:border-2 py-0.5 px-2 hover:border-white transition-all duration-100 "
                    >
                      Explore
                      <ArrowRight />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default JobPortalHero;
