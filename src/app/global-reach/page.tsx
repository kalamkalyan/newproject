import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import GlobalReachClient from "@/components/GlobalReachClient";
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
      <main className="flex-grow pt-28 lg:pt-36 pb-24 overflow-hidden relative bg-white select-none">
        
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
          <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#12857D]/6 to-[#0F6E56]/4 blur-[130px] animate-pulse" style={{ animationDuration: '14s' }} />
          <div className="absolute bottom-[10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-to-tr from-[#0F6E56]/4 to-[#12857D]/6 blur-[150px] animate-pulse" style={{ animationDuration: '18s' }} />
        </div>

        <GlobalReachClient />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
