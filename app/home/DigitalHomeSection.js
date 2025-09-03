// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       image: "/api/placeholder/300/200",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//     },
//     {
//       id: 2,
//       image: "/api/placeholder/300/200",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//     },
//     {
//       id: 3,
//       image: "/api/placeholder/300/200",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Side - Phone with Video */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               {/* Phone Frame */}
//               <div className="relative w-80 h-[600px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
//                 {/* Screen */}
//                 <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
//                   {/* Video/Image Content */}
//                   <div className="relative w-full h-full">
//                     <Image
//                       src="/api/placeholder/300/600"
//                       alt="Professional woman smiling in office environment"
//                       fill
//                       className="object-cover"
//                     />

//                     {/* Overlay Elements */}
//                     <div className="absolute top-4 left-4 flex items-center space-x-2">
//                       <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
//                         <span className="text-xs">👋</span>
//                       </div>
//                       <span className="text-white text-sm font-medium">
//                         muskan
//                       </span>
//                       <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs">✓</span>
//                       </div>
//                     </div>

//                     {/* Bottom UI Elements */}
//                     <div className="absolute bottom-6 left-4 right-4">
//                       <div className="bg-black bg-opacity-50 rounded-full px-4 py-2 backdrop-blur-sm">
//                         <input
//                           type="text"
//                           placeholder="Comment"
//                           className="bg-transparent text-white placeholder-gray-300 text-sm w-full border-none outline-none"
//                           readOnly
//                         />
//                       </div>
//                     </div>

//                     {/* Right side icons */}
//                     <div className="absolute right-4 bottom-20 flex flex-col space-y-4">
//                       <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                         <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                           <span className="text-black text-lg">♥</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Phone notch */}
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-8">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id ? "scale-105" : "hover:scale-102"
//                   }`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => console.log(`Card ${card.id} clicked`)}
//                 >
//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <div className="flex items-start space-x-4">
//                       {/* Card Image */}
//                       <div className="flex-shrink-0">
//                         <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden">
//                           <Image
//                             src={card.image}
//                             alt={card.alt}
//                             width={96}
//                             height={96}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>

//                       {/* Card Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button */}
//                       <div className="flex-shrink-0">
//                         <div
//                           className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform rotate-12"
//                               : "group-hover:bg-blue-600"
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       image: "/api/placeholder/300/200",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//     },
//     {
//       id: 2,
//       image: "/api/placeholder/300/200",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//     },
//     {
//       id: 3,
//       image: "/api/placeholder/300/200",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Side - Static Video in Phone Frame */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               <video
//                 className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source src="/path-to-your-video.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-8">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id ? "scale-105" : "hover:scale-102"
//                   }`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => console.log(`Card ${card.id} clicked`)}
//                 >
//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <div className="flex items-start space-x-4">
//                       {/* Card Image */}
//                       <div className="flex-shrink-0">
//                         <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden">
//                           <Image
//                             src={card.image}
//                             alt={card.alt}
//                             width={96}
//                             height={96}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>

//                       {/* Card Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button */}
//                       <div className="flex-shrink-0">
//                         <div
//                           className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform rotate-12"
//                               : "group-hover:bg-blue-600"
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       image: "/api/placeholder/300/200",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//     },
//     {
//       id: 2,
//       image: "/api/placeholder/300/200",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//     },
//     {
//       id: 3,
//       image: "/api/placeholder/300/200",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
//           {/* Left Side - Static Video in Phone Frame */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               <video
//                 className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source src="/path-to-your-video.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-6 ">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-orange-800 leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id ? "scale-105" : "hover:scale-102"
//                   }`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => console.log(`Card ${card.id} clicked`)}
//                 >
//                   <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                     <div className="flex flex-col items-center text-center space-y-4">
//                       {/* Card Image */}
//                       <div className="w-full h-40 rounded-xl overflow-hidden">
//                         <Image
//                           src={card.image}
//                           alt={card.alt}
//                           width={300}
//                           height={160}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>

//                       {/* Card Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button */}
//                       <div className="mt-auto">
//                         <div
//                           className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform "
//                               : "group-hover:bg-blue-600"
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       image: "/api/placeholder/300/200",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//     },
//     {
//       id: 2,
//       image: "/api/placeholder/300/200",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//     },
//     {
//       id: 3,
//       image: "/api/placeholder/300/200",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0 items-start">
//           {/* Left Side - Static Video in Phone Frame */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               <video
//                 className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source src="/path-to-your-video.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-6 lg:pl-0">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-orange-800 leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id ? "scale-105" : "hover:scale-102"
//                   }`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => console.log(`Card ${card.id} clicked`)}
//                 >
//                   <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                     <div className="flex flex-col items-center text-center space-y-4">
//                       {/* Card Image */}
//                       <div className="w-full h-40 rounded-xl overflow-hidden">
//                         <Image
//                           src={card.image}
//                           alt={card.alt}
//                           width={300}
//                           height={160}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>

//                       {/* Card Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button */}
//                       <div className="mt-auto">
//                         <div
//                           className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform "
//                               : "group-hover:bg-blue-600"
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       image: "/new.jpg",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//     },
//     {
//       id: 2,
//       image: "/img2.jpg",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//     },
//     {
//       id: 3,
//       image: "/img3.jpg",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
//           {/* Left Side - Static Video in Phone Frame */}
//           <div className="flex justify-center lg:justify-start flex-shrink-0">
//             <div className="relative">
//               <video
//                 className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source src="/story.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-6 flex-1">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-orange-800 leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id ? "scale-105" : "hover:scale-102"
//                   }`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => console.log(`Card ${card.id} clicked`)}
//                 >
//                   <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                     <div className="flex flex-col items-center text-center space-y-4">
//                       {/* Card Image */}
//                       <div className="w-full h-40 rounded-xl overflow-hidden">
//                         <Image
//                           src={card.image}
//                           alt={card.alt}
//                           width={300}
//                           height={160}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>

//                       {/* Card Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button */}
//                       <div className="mt-auto">
//                         <div
//                           className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform "
//                               : "group-hover:bg-blue-600"
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// kkkkkkkkkkkkkkkk

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const router = useRouter();

//   const cards = [
//     {
//       id: 1,
//       image: "/new.jpg",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//       route: "/jobpostingmanagement",
//     },
//     {
//       id: 2,
//       image: "/img2.jpg",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//       route: "/community",
//     },
//     {
//       id: 3,
//       image: "/img3.jpg",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//       route: "/trackingSystem",
//     },
//   ];

//   const handleCardClick = (route) => {
//     router.push(route);
//   };

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
//           {/* Left Side - Static Video in Phone Frame */}
//           <div className="flex justify-center lg:justify-start flex-shrink-0">
//             <div className="relative">
//               <video
//                 className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source src="/story.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-10 flex-1">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-orange-800 leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id ? "scale-105" : "hover:scale-102"
//                   } active:scale-95`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => handleCardClick(card.route)}
//                 >
//                   <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                     <div className="flex flex-col items-center text-center space-y-4">
//                       {/* Card Image */}
//                       <div className="w-full h-40 rounded-xl overflow-hidden">
//                         <Image
//                           src={card.image}
//                           alt={card.alt}
//                           width={300}
//                           height={160}
//                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                         />
//                       </div>

//                       {/* Card Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button */}
//                       <div className="mt-auto">
//                         <div
//                           className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform shadow-lg"
//                               : "group-hover:bg-blue-600 group-hover:shadow-lg"
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const router = useRouter();

//   const cards = [
//     {
//       id: 1,
//       image: "/new.jpg",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//       route: "/jobpostingmanagement",
//     },
//     {
//       id: 2,
//       image: "/img2.jpg",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//       route: "/community",
//     },
//     {
//       id: 3,
//       image: "/img3.jpg",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//       route: "/trackingSystem",
//     },
//   ];

//   const handleCardClick = (route) => {
//     router.push(route);
//   };

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
//           {/* Left Side - Static Video in Phone Frame */}
//           <div className="flex justify-center lg:justify-start flex-shrink-0">
//             <div className="relative">
//               <video
//                 className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source src="/story.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-10 flex-1">
//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium  leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards in Separate Rows */}
//             <div className="space-y-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id ? "scale-105" : "hover:scale-102"
//                   } active:scale-95`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => handleCardClick(card.route)}
//                 >
//                   <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 w-160 h-30">
//                     <div className="flex items-center text-center space-y-4">
//                       {/* Card Image */}
//                       <div className="w-[120px] h-25 rounded-xl overflow-hidden">
//                         <Image
//                           src={card.image}
//                           alt={card.alt}
//                           width={300}
//                           height={160}
//                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                         />
//                       </div>

//                       {/* Card Content */}
//                       <div className="flex-1">
//                         <p className="text-gray-700 text-md leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button */}
//                       <div className="">
//                         <div
//                           className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform shadow-lg"
//                               : "group-hover:bg-blue-600 group-hover:shadow-lg"
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// kkkkkjjjjjjjjjj

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function DigitalHomeSection() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const router = useRouter();

//   const cards = [
//     {
//       id: 1,
//       image: "/new.jpg",
//       title: "Post roles, manage applicants, and showcase your brand culture.",
//       alt: "Team meeting in office discussing past roles",
//       route: "/jobpostingmanagement",
//     },
//     {
//       id: 2,
//       image: "/img2.jpg",
//       title:
//         "Share, discover, and connect through reels, updates, and messaging.",
//       alt: "Group of friends sharing and connecting through mobile devices",
//       route: "/community",
//     },
//     {
//       id: 3,
//       image: "/img3.jpg",
//       title:
//         "Let our intelligent engine match you with the right roles and people.",
//       alt: "Two professionals working together on a laptop",
//       route: "/trackingSystem",
//     },
//   ];

//   const handleCardClick = (route) => {
//     router.push(route);
//   };

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
//           {/* Left Side - Static Video in Phone Frame */}
//           <div className="flex justify-center lg:justify-start flex-shrink-0">
//             <div className="relative">
//               <video
//                 className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source src="/story.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Right Side - Content and Cards */}
//           <div className="space-y-10 flex-1">
//             {/* Heading */}
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight">
//               Find your digital home for career stories, AI-matched jobs, and
//               meaningful connections.
//             </h2>

//             {/* Cards in Separate Rows */}
//             <div className="space-y-6">
//               {cards.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`group cursor-pointer transition-all duration-300 transform ${
//                     hoveredCard === card.id
//                       ? "scale-[1.02]"
//                       : "hover:scale-[1.01]"
//                   } active:scale-95`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   onClick={() => handleCardClick(card.route)}
//                 >
//                   <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <div className="flex items-center gap-4 md:gap-6">
//                       {/* Card Image - Left Side */}
//                       <div className="flex-shrink-0">
//                         <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden">
//                           <Image
//                             src={card.image}
//                             alt={card.alt}
//                             width={96}
//                             height={96}
//                             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                           />
//                         </div>
//                       </div>

//                       {/* Card Content - Right Side */}
//                       <div className="flex-1 text-left">
//                         <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
//                           {card.title}
//                         </p>
//                       </div>

//                       {/* Arrow Button - Far Right */}
//                       <div className="flex-shrink-0">
//                         <div
//                           className={`w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === card.id
//                               ? "bg-blue-600 transform shadow-lg"
//                               : "group-hover:bg-blue-600 group-hover:shadow-lg"
//                           }`}
//                         >
//                           <svg
//                             className="w-4 h-4 md:w-5 md:h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DigitalHomeSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const cards = [
    {
      id: 1,
      image: "/new.jpg",
      title: "Post roles, manage applicants, and showcase your brand culture.",
      alt: "Team meeting in office discussing past roles",
      route: "/jobpostingmanagement",
    },
    {
      id: 2,
      image: "/img2.jpg",
      title:
        "Share, discover, and connect through reels, updates, and messaging.",
      alt: "Group of friends sharing and connecting through mobile devices",
      route: "/community",
    },
    {
      id: 3,
      image: "/img3.jpg",
      title:
        "Let our intelligent engine match you with the right roles and people.",
      alt: "Two professionals working together on a laptop",
      route: "/trackingSystem",
    },
  ];

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              <video
                className="w-80 h-[600px] object-cover rounded-3xl shadow-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/story.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Side - Content and Cards */}
          <div className="space-y-10 flex-1">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-tight">
              Find your digital home for career stories, AI-matched jobs, and
              meaningful connections.
            </h2>

            {/* Cards in Separate Rows */}
            <div className="space-y-6 mx-9">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`group cursor-pointer transition-all duration-300 transform ${
                    hoveredCard === card.id
                      ? "scale-[1.02]"
                      : "hover:scale-[1.01]"
                  } active:scale-95`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(card.route)}
                >
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl">
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Card Image - Left Side */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.alt}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Card Content - Right Side */}
                      <div className="flex-1 text-left">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-left">
                          {card.title}
                        </p>
                      </div>

                      {/* Arrow Button - Far Right */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hoveredCard === card.id
                              ? "bg-blue-600 transform shadow-lg"
                              : "group-hover:bg-blue-600 group-hover:shadow-lg"
                          }`}
                        >
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
