import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import FinishedDoseClient from "@/components/FinishedDoseClient";
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finished Dose Formulations | Therallen Pharma",
  description:
    "Explore Therallen Pharma's finished dose formulations catalog, highlighting advanced multi-unit particulate pellets and solid oral systems ready for commercialization.",
};

export default function FinishedDosePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow pt-[64px] bg-white">
        
        {/* Hero Banner Section */}
        <div className="relative w-full h-[220px] sm:h-[260px] bg-[#03112E] overflow-hidden">
          {/* Background decorative glows */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[70%] rounded-full bg-therallen-cyan/5 blur-[100px]" />
          </div>

          <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center relative z-10">
            {/* Left Text Block */}
            <div className="w-1/2 md:w-[50%] flex flex-col justify-center space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Finished Dose Formulations
              </h1>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
                <a href="/" className="text-[#00C6FF] hover:text-[#00C6FF]/80 transition-colors">
                  Home
                </a>
                <span className="text-white/40">/</span>
                <span className="text-white/60">Products</span>
                <span className="text-white/40">/</span>
                <span className="text-white/85">Finished Dose Formulations</span>
              </div>
            </div>
          </div>

          {/* Right Image Block with Custom CSS Diagonal Cut and White Border */}
          <div className="absolute right-0 top-0 w-[55%] sm:w-[60%] md:w-[60%] lg:w-[55%] h-full z-0 select-none pointer-events-none">
            {/* Outer white-backed container clipped diagonally */}
            <div
              className="w-full h-full bg-white relative"
              style={{
                clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              {/* Inner image container clipped with an offset to expose the white stripe */}
              <div
                className="w-full h-full relative"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 3% 100%)'
                }}
              >
                <Image
                  src="/finished_dose_cover_v2.jpg"
                  alt="Finished Dose Formulations Cover"
                  fill
                  sizes="(max-width: 768px) 60vw, 55vw"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Client Product Explorer Component */}
        <FinishedDoseClient />
        
      </main>
      <Footer />
    </SmoothScroll>
  );
}
