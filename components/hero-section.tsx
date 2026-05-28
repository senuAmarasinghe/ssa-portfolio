"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, AtSign } from "lucide-react";

const navItems = ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "EDUCATION"];

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      // Transform nav when scrolled past hero section (adjust threshold as needed)
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation Bar - appears when scrolled */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isScrolled ? 0 : -100, 
          opacity: isScrolled ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-anton text-2xl">SSA</div>
            <ul className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-foreground/80 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Main Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#f8f8f8]">
        {/* Background Marquee Text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] select-none">
          <div className="flex flex-col gap-8 py-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex whitespace-nowrap">
                <div className="animate-marquee-slow flex gap-8">
                  <span className="font-anton text-[80px] leading-none">
                    FREELANCER // FRONTEND ENGINEER //&nbsp;
                  </span>
                  <span className="font-anton text-[80px] leading-none">
                    FREELANCER // FRONTEND ENGINEER //&nbsp;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col">
          {/* Top Section - Branding & Social Icons */}
          <div className="flex items-start justify-between pt-8 mb-auto">
            <div className="font-anton text-4xl">SSA</div>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="CodeSandbox">
                <Code className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Threads">
                <AtSign className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Middle Section - Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 my-auto">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 max-w-2xl"
            >
              <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl leading-none mb-6 uppercase">
                CRAFTING INNOVATIVE WEBSITES & USER EXPERIENCES.
              </h1>
              <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl leading-none mb-8 uppercase">
                SENUTTHI AMARASINGHE/
              </h2>
              <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
                Experienced Frontend Engineer specialized in modern web technologies, translating complex designs into responsive, scalable, and dynamic digital solutions.
              </p>
              <Button 
                size="lg" 
                className="font-anton text-lg px-8 py-6 rounded-full border-2 border-foreground bg-transparent hover:bg-foreground hover:text-background transition-all"
              >
                VIEW MY WORK
              </Button>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <div className="relative w-100 h-125 lg:w-125 lg:h-150">
                <Image
                  src="/profile.png"
                  alt="Senutthi Amarasinghe"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Navigation Items - Hero Section */}
          <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isScrolled ? 0 : 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ul className="flex flex-wrap gap-6 lg:gap-12 justify-center lg:justify-start text-2xl lg:text-3xl font-anton">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:opacity-70 transition-opacity uppercase"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </section>

      {/* Bottom Large Text Marquee */}
      <div className="relative w-full bg-[#f8f8f8] py-8 overflow-hidden border-t-2 border-b-2 border-foreground">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex">
            <span className="font-anton text-[120px] sm:text-[150px] lg:text-[200px] leading-none px-8">
              FREELANCER
            </span>
            <span className="font-anton text-[120px] sm:text-[150px] lg:text-[200px] leading-none px-8">
              FRONTEND DEVELOPER
            </span>
            <span className="font-anton text-[120px] sm:text-[150px] lg:text-[200px] leading-none px-8">
              FULL STACK DEVELOPER
            </span>
            <span className="font-anton text-[120px] sm:text-[150px] lg:text-[200px] leading-none px-8">
              FREELANCER
            </span>
            <span className="font-anton text-[120px] sm:text-[150px] lg:text-[200px] leading-none px-8">
              FRONTEND DEVELOPER
            </span>
            <span className="font-anton text-[120px] sm:text-[150px] lg:text-[200px] leading-none px-8">
              FULL STACK DEVELOPER
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
