// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const navLinks = [
//   { label: "About", href: "/about" },
//   { label: "Community", href: "/community" },
//   { label: "Companies", href: "/companies" },
//   { label: "Jobs", href: "/jobs" },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white border-b-2 border-b-gray-600  px-4 py-3">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <Link href="/" className="cursor-no-drop">
//             <Image src="/Finalloo.svg" alt="Logo" width={40} height={40} />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-14">
//           {navLinks.map(({ label, href }, index) => (
//             <Link
//               key={index}
//               href={href}
//               className="group transition-all duration-300"
//             >
//               <span
//                 className={`relative cursor-pointer font-[Jost] transition-all duration-300
//       ${
//         pathname == href
//           ? "text-[#3901d1]"
//           : "text-[#9299AA] hover:text-blue-700"
//       }`}
//               >
//                 {label}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             href="/signin"
//             className="group relative text-[#601f1f] font-medium "
//           >
//             Login
//             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link
//             href="/signup"
//             className="text-white bg-[#1200B1] px-4 py-1.5 rounded-md hover:bg-blue-700 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <Menu size={28} />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute left-0 -top-4  pt-2 z-50 w-full h-screen bg-white   mt-4 space-y-4">
//           <div className="flex justify-between items-center  border-b-2  border-gray-400">
//             <div className="py-2 px-5">
//               <Link href="/" className="hover:cursor-pointer">
//                 <Image src="/Finalloo.svg" alt="Logo" width={50} height={50} />
//               </Link>
//             </div>

//             <div className=" py-2 px-5">
//               <X size={28} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
//             </div>
//           </div>
//           <StaggeredContainer className="flex flex-col  px-5">
//             {navLinks.map(({ label, href }, index) => (
//               <AnimatedWrapper
//                 className=" mb-1"
//                 delay={index * 0.2}
//                 direction="up"
//               >
//                 <Link
//                   key={index}
//                   href={href}
//                   className="relative group  px-2 py-1 text-[#9299AA] hover:text-blue-700 transition-all"
//                 >
//                   {label}
//                   <span className="absolute left-2 -bottom-0  w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </AnimatedWrapper>
//             ))}
//             <div className="flex flex-col  px-3 space-y-2">
//               <AnimatedWrapper className="mb-2" delay={1}>
//                 <Link
//                   href="/signin"
//                   className="relative group  text-blue-600 font-mediu"
//                 >
//                   Login
//                   <span className="absolute left-0 -bottom-1  w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </AnimatedWrapper>
//               <AnimatedWrapper
//                 className="text-white bg-[#1200B1] ps-1 px-4 py-1.5 rounded-md hover:bg-blue-700 transition-all"
//                 delay={1.2}
//               >
//                 <Link href="/signup">Sign Up</Link>
//               </AnimatedWrapper>
//             </div>
//           </StaggeredContainer>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// kkkkkkkkkkkkk

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const navLinks = [
//   { label: "About", href: "/about" },
//   { label: "Community", href: "/community" },
//   { label: "Companies", href: "/companies" },
//   { label: "Jobs", href: "/jobs" },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenuOpen]);

//   return (
//     <header
//       className={`w-full sticky top-0 z-50 transition-all duration-500 ease-out px-4 ${
//         scrolled
//           ? "py-2 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
//           : "py-4 bg-white border-b-2 border-gray-200"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo with hover animation */}
//         <div className="flex items-center space-x-2">
//           <Link href="/" className="group cursor-pointer">
//             <div className="relative overflow-hidden rounded-lg">
//               <Image
//                 src="/Finalloo.svg"
//                 alt="Logo"
//                 width={scrolled ? 35 : 45}
//                 height={scrolled ? 35 : 45}
//                 className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Navigation with enhanced animations */}
//         <nav className="hidden md:flex space-x-8 lg:space-x-12">
//           {navLinks.map(({ label, href }, index) => (
//             <Link
//               key={index}
//               href={href}
//               className="group relative transition-all duration-300 transform hover:-translate-y-0.5"
//             >
//               <span
//                 className={`relative cursor-pointer font-[Jost] font-medium text-base transition-all duration-300 ${
//                   pathname === href
//                     ? "text-[#1200B1] font-semibold"
//                     : "text-gray-700 hover:text-[#1200B1]"
//                 }`}
//               >
//                 {label}
//                 {/* Active indicator */}
//                 {pathname === href && (
//                   <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full animate-pulse"></span>
//                 )}
//                 {/* Hover effect */}
//                 <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                 {/* Glow effect on hover */}
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-sm -z-10"></span>
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Enhanced CTA Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             href="/login"
//             className="group relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-sm"
//           >
//             <span className="relative z-10">Login</span>
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
//           </Link>

//           <Link
//             href="/signup"
//             className="group relative overflow-hidden text-white bg-gradient-to-r from-[#1200B1] to-blue-600 px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 hover:scale-105"
//           >
//             <span className="relative z-10">Sign Up</span>
//             {/* Animated background overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#1200B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             {/* Shine effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
//             </div>
//           </Link>
//         </div>

//         {/* Enhanced Mobile Menu Button */}
//         <button
//           className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
//             mobileMenuOpen
//               ? "bg-[#1200B1] text-white"
//               : "text-gray-700 hover:bg-gray-100"
//           }`}
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <div className="relative w-6 h-6">
//             <Menu
//               size={24}
//               className={`absolute transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
//               }`}
//             />
//             <X
//               size={24}
//               className={`absolute transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Enhanced Mobile Menu with slide animation */}
//       <div
//         className={`md:hidden fixed left-0 top-0 w-full h-screen bg-white z-40 transition-all duration-500 ease-out ${
//           mobileMenuOpen
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 translate-x-full pointer-events-none"
//         }`}
//       >
//         {/* Mobile menu header */}
//         <div className="flex justify-between items-center p-5 border-b border-gray-200">
//           <Link href="/" className="group">
//             <Image
//               src="/Finalloo.svg"
//               alt="Logo"
//               width={45}
//               height={45}
//               className="transition-transform duration-300 group-hover:scale-110"
//             />
//           </Link>
//           <button
//             className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Mobile menu content */}
//         <div className="p-5 pt-8">
//           <StaggeredContainer className="flex flex-col space-y-6">
//             {navLinks.map(({ label, href }, index) => (
//               <AnimatedWrapper
//                 key={index}
//                 className="transform transition-all duration-300"
//                 delay={index * 0.1}
//                 direction="up"
//               >
//                 <Link
//                   href={href}
//                   className="group relative block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <span
//                     className={`text-lg font-medium transition-colors duration-300 ${
//                       pathname === href
//                         ? "text-[#1200B1] font-semibold"
//                         : "text-gray-700 group-hover:text-[#1200B1]"
//                     }`}
//                   >
//                     {label}
//                   </span>
//                   {pathname === href && (
//                     <div className="absolute left-4 bottom-2 w-8 h-0.5 bg-[#1200B1] rounded-full"></div>
//                   )}
//                 </Link>
//               </AnimatedWrapper>
//             ))}

//             {/* Mobile CTA buttons */}
//             <div className="flex flex-col space-y-4 pt-6 border-t border-gray-200">
//               <AnimatedWrapper delay={0.6}>
//                 <Link
//                   href="/signin"
//                   className="group text-center py-3 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Login
//                 </Link>
//               </AnimatedWrapper>

//               <AnimatedWrapper delay={0.7}>
//                 <Link
//                   href="/signup"
//                   className="group text-center py-3 px-6 rounded-lg bg-gradient-to-r from-[#1200B1] to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Sign Up
//                 </Link>
//               </AnimatedWrapper>
//             </div>
//           </StaggeredContainer>
//         </div>
//       </div>

//       {/* Mobile menu backdrop */}
//       {mobileMenuOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-100%) skewX(-12deg);
//           }
//           100% {
//             transform: translateX(200%) skewX(-12deg);
//           }
//         }
//         .animate-shine {
//           animation: shine 1.5s ease-in-out;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const navLinks = [
//   { label: "About", href: "/about" },
//   { label: "Community", href: "/community" },
//   { label: "Companies", href: "/companies" },
//   { label: "Jobs", href: "/jobs" },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenuOpen]);

//   // Close mobile menu on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && mobileMenuOpen) {
//         setMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileMenuOpen]);

//   return (
//     <header
//       className={`w-full sticky top-0 z-50 transition-all duration-500 ease-out px-3 sm:px-4 lg:px-6 xl:px-8 ${
//         scrolled
//           ? "py-1.5 sm:py-2 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
//           : "py-3 sm:py-4 bg-white border-b-2 border-gray-200"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo with responsive sizing */}
//         <div className="flex items-center space-x-2 flex-shrink-0">
//           <Link href="/" className="cursor-pointer">
//             <Image
//               src="/Finalloo.svg"
//               alt="Logo"
//               width={scrolled ? 32 : 40}
//               height={scrolled ? 32 : 40}
//               className={`transition-all duration-300 ${
//                 scrolled
//                   ? "w-8 h-8 sm:w-9 sm:h-9"
//                   : "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
//               }`}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation with enhanced responsive spacing */}
//         <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
//           {navLinks.map(({ label, href }, index) => (
//             <Link
//               key={index}
//               href={href}
//               className="group relative transition-all duration-300 transform hover:-translate-y-0.5"
//             >
//               <span
//                 className={`relative cursor-pointer font-[Jost] font-medium text-sm lg:text-base xl:text-base transition-all duration-300 whitespace-nowrap ${
//                   pathname === href
//                     ? "text-[#1200B1] font-semibold"
//                     : "text-gray-700 hover:text-[#1200B1]"
//                 }`}
//               >
//                 {label}
//                 {/* Active indicator */}
//                 {pathname === href && (
//                   <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full animate-pulse"></span>
//                 )}
//                 {/* Hover effect */}
//                 <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                 {/* Glow effect on hover */}
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-sm -z-10"></span>
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Enhanced CTA Buttons with responsive sizing */}
//         <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
//           <Link
//             href="/login"
//             className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-sm text-sm lg:text-base"
//           >
//             <span className="relative z-10 whitespace-nowrap">Login</span>
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
//           </Link>

//           <Link
//             href="/signup"
//             className="group relative overflow-hidden text-white bg-gradient-to-r from-[#1200B1] to-blue-600 px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 hover:scale-105 text-sm lg:text-base"
//           >
//             <span className="relative z-10 whitespace-nowrap">Sign Up</span>
//             {/* Animated background overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#1200B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             {/* Shine effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
//             </div>
//           </Link>
//         </div>

//         {/* Enhanced Mobile Menu Button with responsive sizing */}
//         <button
//           className={`md:hidden p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
//             mobileMenuOpen
//               ? "bg-[#1200B1] text-white"
//               : "text-gray-700 hover:bg-gray-100"
//           }`}
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           aria-label="Toggle mobile menu"
//         >
//           <div className="relative w-5 h-5 sm:w-6 sm:h-6">
//             <Menu
//               size={20}
//               className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
//               }`}
//             />
//             <X
//               size={20}
//               className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Enhanced Mobile Menu with better responsive design */}
//       <div
//         className={`md:hidden fixed left-0 top-0 w-full h-screen bg-white z-40 transition-all duration-500 ease-out ${
//           mobileMenuOpen
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 translate-x-full pointer-events-none"
//         }`}
//       >
//         {/* Mobile menu header with responsive padding */}
//         <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200">
//           <Link href="/" onClick={() => setMobileMenuOpen(false)}>
//             <Image
//               src="/Finalloo.svg"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="w-10 h-10 sm:w-11 sm:h-11"
//             />
//           </Link>
//           <button
//             className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//             onClick={() => setMobileMenuOpen(false)}
//             aria-label="Close mobile menu"
//           >
//             <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>

//         {/* Mobile menu content with responsive spacing */}
//         <div className="p-4 sm:p-5 pt-6 sm:pt-8 overflow-y-auto h-full pb-20">
//           <StaggeredContainer className="flex flex-col space-y-4 sm:space-y-6">
//             {navLinks.map(({ label, href }, index) => (
//               <AnimatedWrapper
//                 key={index}
//                 className="transform transition-all duration-300"
//                 delay={index * 0.1}
//                 direction="up"
//               >
//                 <Link
//                   href={href}
//                   className="group relative block py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <span
//                     className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
//                       pathname === href
//                         ? "text-[#1200B1] font-semibold"
//                         : "text-gray-700 group-hover:text-[#1200B1]"
//                     }`}
//                   >
//                     {label}
//                   </span>
//                   {pathname === href && (
//                     <div className="absolute left-4 sm:left-6 bottom-2 sm:bottom-3 w-8 h-0.5 bg-[#1200B1] rounded-full"></div>
//                   )}
//                 </Link>
//               </AnimatedWrapper>
//             ))}

//             {/* Mobile CTA buttons with responsive design */}
//             <div className="flex flex-col space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-gray-200">
//               <AnimatedWrapper delay={0.6}>
//                 <Link
//                   href="/signin"
//                   className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Login
//                 </Link>
//               </AnimatedWrapper>

//               <AnimatedWrapper delay={0.7}>
//                 <Link
//                   href="/signup"
//                   className="group text-center py-3 sm:py-4 px-6 rounded-lg bg-gradient-to-r from-[#1200B1] to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 text-base sm:text-lg"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Sign Up
//                 </Link>
//               </AnimatedWrapper>
//             </div>
//           </StaggeredContainer>
//         </div>
//       </div>

//       {/* Mobile menu backdrop */}
//       {mobileMenuOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-100%) skewX(-12deg);
//           }
//           100% {
//             transform: translateX(200%) skewX(-12deg);
//           }
//         }
//         .animate-shine {
//           animation: shine 1.5s ease-in-out;
//         }

//         /* Additional responsive styles */
//         @media (max-width: 320px) {
//           .container {
//             padding-left: 0.75rem;
//             padding-right: 0.75rem;
//           }
//         }

//         @media (min-width: 1280px) {
//           .xl\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
//             margin-left: 2rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;

// ajjjj

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const navLinks = [
//   { label: "About", href: "/about" },
//   { label: "Community", href: "/community" },
//   { label: "Companies", href: "/companies" },
//   { label: "Jobs", href: "/jobs" },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenuOpen]);

//   // Close mobile menu on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && mobileMenuOpen) {
//         setMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileMenuOpen]);

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-3 sm:px-4 lg:px-6 xl:px-8 ${
//         scrolled
//           ? "py-1.5 sm:py-3 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
//           : "py-3 sm:py-4 bg-white border-b-2 border-gray-200"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo with responsive sizing */}
//         <div className="flex items-center space-x-2 flex-shrink-0">
//           <Link href="/" className="cursor-pointer">
//             <Image
//               src="/Finalloo.svg"
//               alt="Logo"
//               width={scrolled ? 32 : 40}
//               height={scrolled ? 32 : 40}
//               className={`transition-all duration-300 ${
//                 scrolled
//                   ? "w-8 h-8 sm:w-9 sm:h-9"
//                   : "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
//               }`}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation with enhanced responsive spacing */}
//         <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
//           {navLinks.map(({ label, href }, index) => (
//             <Link
//               key={index}
//               href={href}
//               className="group relative transition-all duration-300 transform hover:-translate-y-0.5"
//             >
//               <span
//                 className={`relative cursor-pointer font-[Jost] font-medium text-sm lg:text-base xl:text-base transition-all duration-300 whitespace-nowrap ${
//                   pathname === href
//                     ? "text-[#1200B1] font-semibold"
//                     : "text-gray-700 hover:text-[#1200B1]"
//                 }`}
//               >
//                 {label}
//                 {/* Active indicator */}
//                 {pathname === href && (
//                   <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full animate-pulse"></span>
//                 )}
//                 {/* Hover effect */}
//                 <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                 {/* Glow effect on hover */}
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-sm -z-10"></span>
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Enhanced CTA Buttons with responsive sizing */}
//         <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
//           <Link
//             href="/login"
//             className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300  hover:shadow-sm text-sm lg:text-base"
//           >
//             <span className="relative z-10 whitespace-nowrap">Login</span>
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
//           </Link>

//           <Link
//             href="/signup"
//             className="group relative overflow-hidden text-white bg-gradient-to-r from-blue-600 to-blue-600 px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 hover:scale-105 text-sm lg:text-base"
//           >
//             <span className="relative z-10 whitespace-nowrap">Sign Up</span>
//             {/* Animated background overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#1200B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             {/* Shine effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
//             </div>
//           </Link>
//         </div>

//         {/* Enhanced Mobile Menu Button with responsive sizing */}
//         <button
//           className={`md:hidden p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
//             mobileMenuOpen
//               ? "bg-[#1200B1] text-white"
//               : "text-gray-700 hover:bg-gray-100"
//           }`}
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           aria-label="Toggle mobile menu"
//         >
//           <div className="relative w-5 h-5 sm:w-6 sm:h-6">
//             <Menu
//               size={20}
//               className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
//               }`}
//             />
//             <X
//               size={20}
//               className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Enhanced Mobile Menu with better responsive design */}
//       <div
//         className={`md:hidden fixed left-0 top-0 w-full h-screen bg-white z-40 transition-all duration-500 ease-out ${
//           mobileMenuOpen
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 translate-x-full pointer-events-none"
//         }`}
//       >
//         {/* Mobile menu header with responsive padding */}
//         <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200">
//           <Link href="/" onClick={() => setMobileMenuOpen(false)}>
//             <Image
//               src="/Finalloo.svg"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="w-10 h-10 sm:w-11 sm:h-11"
//             />
//           </Link>
//           <button
//             className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//             onClick={() => setMobileMenuOpen(false)}
//             aria-label="Close mobile menu"
//           >
//             <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>

//         {/* Mobile menu content with responsive spacing */}
//         <div className="p-4 sm:p-5 pt-6 sm:pt-8 overflow-y-auto h-full pb-20">
//           <StaggeredContainer className="flex flex-col space-y-4 sm:space-y-6">
//             {navLinks.map(({ label, href }, index) => (
//               <AnimatedWrapper
//                 key={index}
//                 className="transform transition-all duration-300"
//                 delay={index * 0.1}
//                 direction="up"
//               >
//                 <Link
//                   href={href}
//                   className="group relative block py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <span
//                     className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
//                       pathname === href
//                         ? "text-[#1200B1] font-semibold"
//                         : "text-gray-700 group-hover:text-[#1200B1]"
//                     }`}
//                   >
//                     {label}
//                   </span>
//                   {pathname === href && (
//                     <div className="absolute left-4 sm:left-6 bottom-2 sm:bottom-3 w-8 h-0.5 bg-[#1200B1] rounded-full"></div>
//                   )}
//                 </Link>
//               </AnimatedWrapper>
//             ))}

//             {/* Mobile CTA buttons with responsive design */}
//             <div className="flex flex-col space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-gray-200">
//               <AnimatedWrapper delay={0.6}>
//                 <Link
//                   href="/signin"
//                   className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Login
//                 </Link>
//               </AnimatedWrapper>

//               <AnimatedWrapper delay={0.7}>
//                 <Link
//                   href="/signup"
//                   className="group text-center py-3 sm:py-4 px-6 rounded-lg bg-gradient-to-r from-[#1200B1] to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 text-base sm:text-lg"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Sign Up
//                 </Link>
//               </AnimatedWrapper>
//             </div>
//           </StaggeredContainer>
//         </div>
//       </div>

//       {/* Mobile menu backdrop */}
//       {mobileMenuOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-100%) skewX(-12deg);
//           }
//           100% {
//             transform: translateX(200%) skewX(-12deg);
//           }
//         }
//         .animate-shine {
//           animation: shine 1.5s ease-in-out;
//         }

//         /* Additional responsive styles */
//         @media (max-width: 320px) {
//           .container {
//             padding-left: 0.75rem;
//             padding-right: 0.75rem;
//           }
//         }

//         @media (min-width: 1280px) {
//           .xl\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
//             margin-left: 2rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;

// =============================

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Menu, X, User, LogOut } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser } from "../store/authSlice";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const navLinks = [
//   { label: "About", href: "/about" },
//   { label: "Community", href: "/community" },
//   { label: "Companies", href: "/companies" },
//   { label: "Jobs", href: "/jobs" },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenuOpen]);

//   // Close mobile menu on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && mobileMenuOpen) {
//         setMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileMenuOpen]);

//   // Handle logout
//   const handleLogout = () => {
//     dispatch(logoutUser());
//     router.push("/login");
//     setMobileMenuOpen(false);
//   };

//   // Prevent navigation to signin/signup if logged in
//   const handleNavClick = (href) => {
//     if (user && (href === "/signin" || href === "/signup")) {
//       router.push("/jobfeed");
//       return false;
//     }
//     return true;
//   };

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-3 sm:px-4 lg:px-6 xl:px-8 ${
//         scrolled
//           ? "py-1.5 sm:py-3 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
//           : "py-3 sm:py-4 bg-white border-b-2 border-gray-200"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo with responsive sizing */}
//         <div className="flex items-center space-x-2 flex-shrink-0">
//           <Link href="/" className="cursor-pointer">
//             <Image
//               src="/Finalloo.svg"
//               alt="Logo"
//               width={scrolled ? 32 : 40}
//               height={scrolled ? 32 : 40}
//               className={`transition-all duration-300 ${
//                 scrolled
//                   ? "w-8 h-8 sm:w-9 sm:h-9"
//                   : "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
//               }`}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
//           {navLinks.map(({ label, href }, index) => (
//             <Link
//               key={index}
//               href={href}
//               className="group relative transition-all duration-300 transform hover:-translate-y-0.5"
//               onClick={() => handleNavClick(href)}
//             >
//               <span
//                 className={`relative cursor-pointer font-[Jost] font-medium text-sm lg:text-base xl:text-base transition-all duration-300 whitespace-nowrap ${
//                   pathname === href
//                     ? "text-[#1200B1] font-semibold"
//                     : "text-gray-700 hover:text-[#1200B1]"
//                 }`}
//               >
//                 {label}
//                 {pathname === href && (
//                   <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full animate-pulse"></span>
//                 )}
//                 <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-sm -z-10"></span>
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop CTA Buttons */}
//         <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
//           {user ? (
//             <>
//               <Link
//                 href="/profile"
//                 className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300 hover:shadow-sm text-sm lg:text-base"
//               >
//                 <span className="relative z-10 flex items-center space-x-1">
//                   <User size={16} />
//                   <span>Profile</span>
//                 </span>
//                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300 hover:shadow-sm text-sm lg:text-base"
//               >
//                 <span className="relative z-10 flex items-center space-x-1">
//                   <LogOut size={16} />
//                   <span>Logout</span>
//                 </span>
//                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 href="/signin"
//                 className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300 hover:shadow-sm text-sm lg:text-base"
//                 onClick={() => handleNavClick("/signin")}
//               >
//                 <span className="relative z-10 whitespace-nowrap">Login</span>
//                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
//               </Link>
//               <Link
//                 href="/signup"
//                 className="group relative overflow-hidden text-white bg-gradient-to-r from-blue-600 to-blue-600 px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 hover:scale-105 text-sm lg:text-base"
//                 onClick={() => handleNavClick("/signup")}
//               >
//                 <span className="relative z-10 whitespace-nowrap">Sign Up</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#1200B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
//                 </div>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`md:hidden p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
//             mobileMenuOpen
//               ? "bg-[#1200B1] text-white"
//               : "text-gray-700 hover:bg-gray-100"
//           }`}
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           aria-label="Toggle mobile menu"
//         >
//           <div className="relative w-5 h-5 sm:w-6 sm:h-6">
//             <Menu
//               size={20}
//               className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
//               }`}
//             />
//             <X
//               size={20}
//               className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden fixed left-0 top-0 w-full h-screen bg-white z-40 transition-all duration-500 ease-out ${
//           mobileMenuOpen
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 translate-x-full pointer-events-none"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200">
//           <Link href="/" onClick={() => setMobileMenuOpen(false)}>
//             <Image
//               src="/Finalloo.svg"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="w-10 h-10 sm:w-11 sm:h-11"
//             />
//           </Link>
//           <button
//             className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//             onClick={() => setMobileMenuOpen(false)}
//             aria-label="Close mobile menu"
//           >
//             <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>

//         <div className="p-4 sm:p-5 pt-6 sm:pt-8 overflow-y-auto h-full pb-20">
//           <StaggeredContainer className="flex flex-col space-y-4 sm:space-y-6">
//             {navLinks.map(({ label, href }, index) => (
//               <AnimatedWrapper
//                 key={index}
//                 className="transform transition-all duration-300"
//                 delay={index * 0.1}
//                 direction="up"
//               >
//                 <Link
//                   href={href}
//                   className="group relative block py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100"
//                   onClick={() => {
//                     handleNavClick(href);
//                     setMobileMenuOpen(false);
//                   }}
//                 >
//                   <span
//                     className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
//                       pathname === href
//                         ? "text-[#1200B1] font-semibold"
//                         : "text-gray-700 group-hover:text-[#1200B1]"
//                     }`}
//                   >
//                     {label}
//                   </span>
//                   {pathname === href && (
//                     <div className="absolute left-4 sm:left-6 bottom-2 sm:bottom-3 w-8 h-0.5 bg-[#1200B1] rounded-full"></div>
//                   )}
//                 </Link>
//               </AnimatedWrapper>
//             ))}

//             {/* Mobile CTA Buttons */}
//             <div className="flex flex-col space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-gray-200">
//               {user ? (
//                 <>
//                   <AnimatedWrapper delay={0.6}>
//                     <Link
//                       href="/profile"
//                       className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Profile
//                     </Link>
//                   </AnimatedWrapper>
//                   <AnimatedWrapper delay={0.7}>
//                     <button
//                       onClick={handleLogout}
//                       className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
//                     >
//                       Logout
//                     </button>
//                   </AnimatedWrapper>
//                 </>
//               ) : (
//                 <>
//                   <AnimatedWrapper delay={0.6}>
//                     <Link
//                       href="/signin"
//                       className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
//                       onClick={() => {
//                         handleNavClick("/signin");
//                         setMobileMenuOpen(false);
//                       }}
//                     >
//                       Login
//                     </Link>
//                   </AnimatedWrapper>
//                   <AnimatedWrapper delay={0.7}>
//                     <Link
//                       href="/signup"
//                       className="group text-center py-3 sm:py-4 px-6 rounded-lg bg-gradient-to-r from-[#1200B1] to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 text-base sm:text-lg"
//                       onClick={() => {
//                         handleNavClick("/signup");
//                         setMobileMenuOpen(false);
//                       }}
//                     >
//                       Sign Up
//                     </Link>
//                   </AnimatedWrapper>
//                 </>
//               )}
//             </div>
//           </StaggeredContainer>
//         </div>
//       </div>

//       {mobileMenuOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-100%) skewX(-12deg);
//           }
//           100% {
//             transform: translateX(200%) skewX(-12deg);
//           }
//         }
//         .animate-shine {
//           animation: shine 1.5s ease-in-out;
//         }
//         @media (max-width: 320px) {
//           .container {
//             padding-left: 0.75rem;
//             padding-right: 0.75rem;
//           }
//         }
//         @media (min-width: 1280px) {
//           .xl\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
//             margin-left: 2rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;

// jjjjjjjjjjjjjjjjjjjjj

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, User, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Companies", href: "/companies" },
  { label: "Jobs", href: "/jobs" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Check for token on mount to sync with Redux state
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      // Optionally dispatch a loadUser thunk here (if implemented)
      // For now, rely on page-level redirects
    }
  }, [user]);

  // Handle logout
  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/signin");
    setMobileMenuOpen(false);
  };

  // Prevent navigation to signin/signup if logged in
  const handleNavClick = (href, e) => {
    if (user || localStorage.getItem("token")) {
      if (href === "/signin" || href === "/signup") {
        e.preventDefault();
        router.push("/jobfeed");
        return false;
      }
    }
    return true;
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-3 sm:px-4 lg:px-6 xl:px-8 ${
        scrolled
          ? "py-1.5 sm:py-3 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
          : "py-3 sm:py-4 bg-white border-b-2 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/Finalloo.svg"
              alt="Logo"
              width={scrolled ? 32 : 40}
              height={scrolled ? 32 : 40}
              className={`transition-all duration-300 ${
                scrolled
                  ? "w-8 h-8 sm:w-9 sm:h-9"
                  : "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
              }`}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navLinks.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              className="group relative transition-all duration-300 transform hover:-translate-y-0.5"
              onClick={(e) => handleNavClick(href, e)}
            >
              <span
                className={`relative cursor-pointer font-[Jost] font-medium text-sm lg:text-base xl:text-base transition-all duration-300 whitespace-nowrap ${
                  pathname === href
                    ? "text-[#1200B1] font-semibold"
                    : "text-gray-700 hover:text-[#1200B1]"
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full animate-pulse"></span>
                )}
                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-[#1200B1] to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-sm -z-10"></span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
          {user ? (
            <>
              <Link
                href="/profile"
                className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300 hover:shadow-sm text-sm lg:text-base"
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <User size={16} />
                  <span>Profile</span>
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <button
                onClick={handleLogout}
                className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300 hover:shadow-sm text-sm lg:text-base"
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <LogOut size={16} />
                  <span>Logout</span>
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="group relative text-gray-700 font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-all duration-300 hover:shadow-sm text-sm lg:text-base"
                onClick={(e) => handleNavClick("/signin", e)}
              >
                <span className="relative z-10 whitespace-nowrap">Login</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1200B1] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                href="/signup"
                className="group relative overflow-hidden text-white bg-gradient-to-r from-blue-600 to-blue-600 px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 hover:scale-105 text-sm lg:text-base"
                onClick={(e) => handleNavClick("/signup", e)}
              >
                <span className="relative z-10 whitespace-nowrap">Sign Up</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#1200B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
                </div>
              </Link>
            </>
          )}
        </div>

        <button
          className={`md:hidden p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
            mobileMenuOpen
              ? "bg-[#1200B1] text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <Menu
              size={20}
              className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            />
            <X
              size={20}
              className={`absolute sm:w-6 sm:h-6 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden fixed left-0 top-0 w-full h-screen bg-white z-40 transition-all duration-500 ease-out ${
          mobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/Finalloo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-11 sm:h-11"
            />
          </Link>
          <button
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-5 pt-6 sm:pt-8 overflow-y-auto h-full pb-20">
          <StaggeredContainer className="flex flex-col space-y-4 sm:space-y-6">
            {navLinks.map(({ label, href }, index) => (
              <AnimatedWrapper
                key={index}
                className="transform transition-all duration-300"
                delay={index * 0.1}
                direction="up"
              >
                <Link
                  href={href}
                  className="group relative block py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100"
                  onClick={(e) => {
                    handleNavClick(href, e);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span
                    className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
                      pathname === href
                        ? "text-[#1200B1] font-semibold"
                        : "text-gray-700 group-hover:text-[#1200B1]"
                    }`}
                  >
                    {label}
                  </span>
                  {pathname === href && (
                    <div className="absolute left-4 sm:left-6 bottom-2 sm:bottom-3 w-8 h-0.5 bg-[#1200B1] rounded-full"></div>
                  )}
                </Link>
              </AnimatedWrapper>
            ))}

            <div className="flex flex-col space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-gray-200">
              {user ? (
                <>
                  <AnimatedWrapper delay={0.6}>
                    <Link
                      href="/profile"
                      className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </AnimatedWrapper>
                  <AnimatedWrapper delay={0.7}>
                    <button
                      onClick={handleLogout}
                      className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
                    >
                      Logout
                    </button>
                  </AnimatedWrapper>
                </>
              ) : (
                <>
                  <AnimatedWrapper delay={0.6}>
                    <Link
                      href="/signin"
                      className="group text-center py-3 sm:py-4 px-6 rounded-lg border-2 border-[#1200B1] text-[#1200B1] font-medium transition-all duration-300 hover:bg-[#1200B1] hover:text-white active:scale-95 text-base sm:text-lg"
                      onClick={(e) => {
                        handleNavClick("/signin", e);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Login
                    </Link>
                  </AnimatedWrapper>
                  <AnimatedWrapper delay={0.7}>
                    <Link
                      href="/signup"
                      className="group text-center py-3 sm:py-4 px-6 rounded-lg bg-gradient-to-r from-[#1200B1] to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 text-base sm:text-lg"
                      onClick={(e) => {
                        handleNavClick("/signup", e);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Sign Up
                    </Link>
                  </AnimatedWrapper>
                </>
              )}
            </div>
          </StaggeredContainer>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        @media (max-width: 320px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
        @media (min-width: 1280px) {
          .xl\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
