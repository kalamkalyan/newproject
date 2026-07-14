import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import GlobalReachClient from "@/components/GlobalReachClient";
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Reach | Therallen Pharma",
  description:
    "Therallen Pharma serves clients globally in 22+ countries with active products, audits, and strategic distribution networks across America, Europe, Asia Pacific, and the Middle East.",
};

export default function GlobalReachPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow pt-[64px] overflow-hidden relative bg-white select-none">
        
        {/* Hero Banner Section */}
        <div className="relative w-full h-[200px] sm:h-[240px] bg-white border-b border-slate-100 overflow-hidden">
          {/* Background decorative glows */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
            <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[70%] rounded-full bg-[#0F6E56] blur-[100px]" />
          </div>

          <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center relative z-10">
            {/* Left Text Block */}
            <div className="w-1/2 md:w-[50%] flex flex-col justify-center space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Global Reach
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
                Delivering innovation and quality across the globe
              </p>
            </div>
          </div>

          {/* Right Image Block with Custom CSS Diagonal Cut and White Border */}
          <div className="absolute right-0 top-0 w-[50%] sm:w-[55%] md:w-[55%] lg:w-[50%] h-full z-0 select-none pointer-events-none">
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
                  src="/globe_cover.jpg"
                  alt="Global Reach Cover"
                  fill
                  sizes="(max-width: 768px) 60vw, 50vw"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- Background Visuals (3% - 6% opacity) --- */}
        <div 
          className="absolute inset-0 -z-20 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 110, 86, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 110, 86, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Soft moving gradient glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#12857D]/6 to-[#0F6E56]/4 blur-[130px] animate-pulse" style={{ animationDuration: '14s' }} />
          <div className="absolute bottom-[10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-to-tr from-[#0F6E56]/4 to-[#12857D]/6 blur-[150px] animate-pulse" style={{ animationDuration: '18s' }} />
        </div>

        <div className="pt-12 pb-24">
          <GlobalReachClient />
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
