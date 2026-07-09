'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Scale, 
  Users,
  Compass
} from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// --- Background floating particle generator ---
function FloatingParticles() {
  const particles = Array.from({ length: 8 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((_, idx) => {
        const size = 6 + (idx % 3) * 4; // 6px, 10px, 14px
        const startX = 5 + idx * 12;
        const startY = 10 + (idx % 2) * 45;
        
        return (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-[#12857D]/8 blur-[1.5px]"
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 12 + idx * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

// --- Dynamic growing vertical line next to Vision ---
function GrowingScrollLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-100 origin-top">
      <motion.div 
        className="w-full h-full bg-gradient-to-b from-[#0F6E56] to-[#12857D]"
        style={{ scaleY }}
      />
    </div>
  );
}

// --- Main VisionMissionClient Component ---
export default function VisionMissionClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(null);
  

  const coreValues = [
    {
      letter: 'T',
      title: 'Technology Driven',
      description: 'Leveraging state-of-the-art platforms to formulate complex delivery systems.',
      image: '/DSC07216.JPG'
    },
    {
      letter: 'H',
      title: 'High Quality',
      description: 'Strict adherence to international cGMP, quality assurance, and compliance.',
      image: '/DSC07276.JPG'
    },
    {
      letter: 'E',
      title: 'Efficient',
      description: 'Optimizing development timelines and technology transfer processes.',
      image: '/DSC07229.JPG'
    },
    {
      letter: 'R',
      title: 'Research',
      description: 'IP-aware, research-driven formulation development for global markets.',
      image: '/DSC07257.JPG'
    },
    {
      letter: 'A',
      title: 'Advanced',
      description: 'Implementing innovative technologies like pellets, MUPS, and dual release.',
      image: '/DSC07237.JPG'
    },
    {
      letter: 'L',
      title: 'Learning',
      description: 'Continuous improvement, adapting to scientific advancements and industry standards.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
    },
    {
      letter: 'L',
      title: 'Leadership',
      description: 'Pioneering new standards in drug delivery systems and pharmaceutical innovation.',
      image: '/DSC07205.JPG'
    },
    {
      letter: 'E',
      title: 'Expertise',
      description: 'Powered by domain-expert scientists, regulatory and QA professionals.',
      image: '/DSC07310.JPG'
    },
    {
      letter: 'N',
      title: 'Novelty',
      description: 'Fostering original formulations, patent non-infringing pathways, and new solutions.',
      image: '/DSC07211.JPG'
    }
  ];

  

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow pt-28 lg:pt-36 pb-32 overflow-hidden relative bg-white select-none">
        
        {/* CSS Keyframes for slow animated backgrounds, sweeps, and DNA flow */}
        <style jsx global>{`
          @keyframes glow-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-glow-move {
            background-size: 200% 200%;
            animation: glow-move 15s ease-in-out infinite;
          }

          

          @keyframes icon-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
          .animate-icon-float {
            animation: icon-float 4s ease-in-out infinite;
          }
        `}</style>

        {/* --- Background Visuals (3% - 6% opacity) --- */}
        {/* 1. Thin scientific grid */}
        <div 
          className="absolute inset-0 -z-20 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 110, 86, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 110, 86, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* 2. Soft moving gradient glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#12857D]/6 to-[#0F6E56]/4 blur-[130px] animate-pulse" style={{ animationDuration: '14s' }} />
          <div className="absolute bottom-[10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-to-tr from-[#0F6E56]/4 to-[#12857D]/6 blur-[150px] animate-pulse" style={{ animationDuration: '18s' }} />
        </div>

        {/* 3. Floating particles */}
        <FloatingParticles />

        {/* 4. Hexagonal chemistry pattern SVG */}
        <svg 
          className="absolute right-[5%] top-[12%] w-[450px] h-[450px] text-[#12857D] opacity-[0.035] pointer-events-none -z-10" 
          viewBox="0 0 200 200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.8"
        >
          {/* Hex 1 */}
          <polygon points="40,20 80,20 100,55 80,90 40,90 20,55" />
          <line x1="80" y1="20" x2="110" y2="20" strokeDasharray="2 2" />
          {/* Hex 2 */}
          <polygon points="110,20 150,20 170,55 150,90 110,90 90,55" />
          {/* Hex 3 */}
          <polygon points="75,85 115,85 135,120 115,155 75,155 55,120" />
          <circle cx="100" cy="55" r="2.5" fill="currentColor" />
          <circle cx="90" cy="55" r="2.5" fill="currentColor" />
        </svg>

        {/* 5. DNA helix outline SVG */}
        <svg 
          className="absolute left-[-2%] bottom-[8%] w-[500px] h-[500px] text-[#0F6E56] opacity-[0.03] pointer-events-none -z-10" 
          viewBox="0 0 200 200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.8"
        >
          <path d="M10,80 Q30,40 50,80 T90,80 T130,80 T170,80" />
          <path d="M10,80 Q30,120 50,80 T90,80 T130,80 T170,80" />
          <line x1="30" y1="60" x2="30" y2="100" />
          <line x1="50" y1="80" x2="50" y2="80" />
          <line x1="70" y1="60" x2="70" y2="100" />
          <line x1="110" y1="60" x2="110" y2="100" />
          <line x1="130" y1="80" x2="130" y2="80" />
          <line x1="150" y1="60" x2="150" y2="100" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={containerRef}>
          
          {/* --- HERO INTRODUCTION --- */}
          <div className="max-w-5xl mx-auto text-center mb-28 md:mb-36">
            <motion.span 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#0F6E56] font-bold text-xs tracking-[0.2em] uppercase mb-4 block"
            >
              Purpose & Culture
            </motion.span>
            
            {/* Moving gradient glow behind heading */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0F6E56]/8 via-[#12857D]/10 to-[#0F6E56]/8 filter blur-3xl opacity-80 animate-glow-move" />
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black text-slate-900 tracking-tight leading-none"
              >
                Driven by <span className="text-[#0F6E56]">Purpose.</span><br />
                Defined by <span className="text-[#12857D]">Science.</span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-lg sm:text-[19px] leading-relaxed max-w-[750px] mx-auto mt-4"
            >
              Therallen is committed to advancing patient outcomes by designing complex formulations that combine cutting-edge drug delivery technology with high scalability. Our vision and mission direct our day-to-day operations and research pathways.
            </motion.p>
          </div>

          {/* --- REDESIGNED VISION & MISSION SECTION --- */}
          
          {/* 1. Our Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32 pt-10">
            {/* Left side: Premium image block */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] lg:h-[480px]">
                <img 
                  src="/DSC07261.JPG" 
                  alt="Transnational Pharmaceutical Research" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent z-10" />
                
                {/* Floating chemistry-hexagon outline badge */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 text-white opacity-90 animate-icon-float">
                  <Compass size={24} className="text-[#12857D]" />
                </div>

                {/* Glassmorphic overlay badge at bottom-left */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 text-white z-20 transition-all duration-300 group-hover:translate-y-[-4px]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#12857D] uppercase block mb-1">
                    Therallen Global Reach
                  </span>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Building a transnational generic portfolio across key global markets.
                  </p>
                </div>
              </div>

              {/* Decorative background glow behind the image card */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#0F6E56]/10 to-[#12857D]/10 filter blur-3xl opacity-60 scale-105 pointer-events-none" />
            </motion.div>

            {/* Right side: Vision Typography & Card Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[#0F6E56] font-bold text-xs tracking-[0.25em] uppercase mb-4 block">
                01 / The Vision
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-8">
                Our <span className="bg-gradient-to-r from-[#0F6E56] to-[#12857D] bg-clip-text text-transparent">Vision</span>
              </h2>

              <div className="space-y-6 text-slate-700">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl sm:text-2xl font-bold tracking-tight leading-relaxed text-slate-800 border-l-4 border-[#0F6E56] pl-5"
                >
                  To become a transnational pharmaceutical company through research & development and introduction of a wide range portfolio of generic products in key markets.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base sm:text-lg leading-relaxed text-slate-600 pl-6"
                >
                  To provide the best possible range of quality products at competitive prices through integration, research, innovation and development.
                </motion.p>
              </div>

              {/* High-value highlight row */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 mt-10"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0F6E56]/10 text-[#0F6E56] flex items-center justify-center shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">Global Standard Formulation</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    By combining state-of-the-art R&D with a highly scalable pipeline, we continuously establish drug delivery leadership in regulated international territories.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2. Our Mission Section */}
          <div className="mb-32 pt-16">
            {/* Full-width Section Header */}
            <div className="mb-10 text-left">
              <span className="text-[#0F6E56] font-bold text-xs tracking-[0.25em] uppercase mb-4 block">
                02 / The Mission
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Our <span className="bg-gradient-to-r from-[#12857D] to-[#0F6E56] bg-clip-text text-transparent">Mission</span>
              </h2>
            </div>

            {/* Grid Container aligning top of cards with top of image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left side: Mission Card Info */}
              <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                {/* Paragraph 2 block (Ethics) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F6E56] to-[#12857D] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0F6E56]/10">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">Ethics, Innovation & Efficiency</h3>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Driven by ethical standards in our practices meeting the regulatory expectations and customer satisfaction. Highly committed to bring innovative products for the healthcare professional to improve the health and well being of individuals. Top of Mind Recall for Customized Solutions. We believe in providing integrated product services at a very competent price within the shortest timelines, thereby drastically reducing the time and cost for the Client.
                    </p>
                  </div>
                </motion.div>

                {/* Paragraph 3 block (Culture) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#12857D] to-[#0F6E56] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#12857D]/10">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">Continuous Improvement & Culture</h3>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Encouraging research, creativity and innovation in planning and execution of work. All the employees have appropriate qualification, training, skills and experience to carry out their work effectively. We Develop transparency in all areas of operations and build robust quality culture across the organization. Our policy of continuous process and product improvement drives us to work towards meeting the regulatory standards.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right side: Premium image block */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 relative group order-1 lg:order-2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] lg:h-[480px]">
                  <img 
                    src="/DSC07209.JPG" 
                    alt="Quality Pharmaceutical Manufacturing" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent z-10" />
                  
                  {/* Floating biology-cell outline badge */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 text-white opacity-90 animate-icon-float">
                    <Sparkles size={24} className="text-[#0F6E56]" />
                  </div>

                  {/* Glassmorphic overlay badge at bottom-left */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 text-white z-20 transition-all duration-300 group-hover:translate-y-[-4px]">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F6E56] uppercase block mb-1">
                      Continuous R&D Excellence
                    </span>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Building robust quality culture and processes to meet international regulatory standards.
                    </p>
                  </div>
                </div>

                {/* Decorative background glow behind the image card */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#12857D]/10 to-[#0F6E56]/10 filter blur-3xl opacity-60 scale-105 pointer-events-none" />
              </motion.div>

            </div>
          </div>

          

          {/* --- CORE VALUES (THERALLEN HORIZONTAL WORD LAYOUT - NO CARDS) --- */}
          <div className="pt-20">
            <div className="max-w-3xl mx-auto text-center mb-24">
              <span className="text-[#0F6E56] font-bold text-xs tracking-wider uppercase mb-3 block">
                Our Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Core Values
              </h2>
              <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed mt-4">
                The values that guide our R&D roadmap and commercial operations are encapsulated in the name of our organization.
              </p>
            </div>

            {/* Desktop & Tablet: Horizontal Columns spelling THERALLEN (1 row) */}
            <div className="hidden md:flex flex-row h-[520px] w-full gap-3 py-10 relative">
              {coreValues.map((val, idx) => {
                const isHovered = hoveredIndex === idx;
                const isAnyHovered = hoveredIndex !== null;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 35, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.7, 
                      delay: idx * 0.08, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out select-none flex flex-col justify-end p-6 border border-slate-100/50 shadow-sm
                      ${isHovered 
                        ? 'flex-[4.5] shadow-xl border-slate-200/80' 
                        : isAnyHovered 
                          ? 'flex-[0.6] opacity-40 grayscale contrast-[1.1] saturate-[0.7]' 
                          : 'flex-1'
                      }`}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <img 
                        src={val.image} 
                        alt={val.title} 
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out 
                          ${isHovered ? 'scale-105' : 'scale-100'}
                        `}
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-955/20 z-10" />
                      
                      {/* Color overlay highlight */}
                      <div className={`absolute inset-0 bg-gradient-to-tr from-[#0F6E56]/25 to-[#12857D]/15 transition-opacity duration-500 z-10 
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                      `} />
                    </div>

                    {/* Letter / Acronym Layer */}
                    <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 pointer-events-none
                      ${isHovered ? 'opacity-15 scale-[1.3] -translate-y-6' : 'opacity-90 scale-100'}
                    `}>
                      <span className={`font-black text-6xl lg:text-[76px] text-white/90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-colors duration-500
                        ${isHovered ? 'text-[#0F6E56]' : 'text-slate-100'}
                      `}>
                        {val.letter}
                      </span>
                    </div>

                    {/* Content Layer (Title & Description) */}
                    <div className="relative z-30 w-full overflow-hidden pointer-events-none">
                      {/* Description reveal container */}
                      <div className={`transition-all duration-500 ease-out transform flex flex-col
                        ${isHovered ? 'translate-y-0 opacity-100 max-h-48' : 'translate-y-8 opacity-0 max-h-0'}
                      `}>
                        <div className="text-[11px] font-bold text-[#12857D] uppercase tracking-[0.2em] mb-1.5">
                          Value {val.letter}
                        </div>
                        <h3 className="font-extrabold text-white text-lg lg:text-xl mb-2 tracking-tight">
                          {val.title}
                        </h3>
                        <p className="text-slate-200 text-xs leading-relaxed max-w-[280px]">
                          {val.description}
                        </p>
                        {/* Decorative line */}
                        <div className="h-[2px] w-12 bg-gradient-to-r from-[#0F6E56] to-[#12857D] mt-3" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile: Vertical Accordion spelling THERALLEN */}
            <div className="md:hidden flex flex-col gap-3.5 py-8 w-full">
              {coreValues.map((val, idx) => {
                const isActive = activeMobileIndex === idx;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    onClick={() => setActiveMobileIndex(isActive ? null : idx)}
                    className={`relative w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out select-none flex flex-col justify-end p-5 border border-slate-100/50 shadow-sm
                      ${isActive ? 'h-[280px] shadow-lg border-slate-200' : 'h-[84px]'}
                    `}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <img 
                        src={val.image} 
                        alt={val.title} 
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out 
                          ${isActive ? 'scale-105' : 'scale-100'}
                        `}
                      />
                      {/* Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/30 z-10" />
                      
                      {/* Color overlay highlights */}
                      <div className={`absolute inset-0 bg-gradient-to-tr from-[#0F6E56]/20 to-[#12857D]/10 transition-opacity duration-500 z-10 
                        ${isActive ? 'opacity-100' : 'opacity-0'}
                      `} />
                    </div>

                    {/* Letter / Acronym Layer */}
                    <div className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 transition-all duration-500 pointer-events-none
                      ${isActive ? 'opacity-15 scale-[1.3] -translate-y-10' : 'opacity-90 scale-100'}
                    `}>
                      <span className="font-black text-4xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                        {val.letter}
                      </span>
                    </div>

                    {/* Collapsed state title label */}
                    <div className={`absolute left-5 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-300 pointer-events-none
                      ${isActive ? 'opacity-0' : 'opacity-100'}
                    `}>
                      <span className="font-bold text-slate-100 uppercase tracking-wider text-sm">
                        {val.letter} — {val.title}
                      </span>
                    </div>

                    {/* Content Layer (Title & Description) */}
                    <div className="relative z-30 w-full pointer-events-none">
                      <div className={`transition-all duration-500 ease-out transform flex flex-col
                        ${isActive ? 'translate-y-0 opacity-100 max-h-48' : 'translate-y-4 opacity-0 max-h-0'}
                      `}>
                        <div className="text-[10px] font-bold text-[#12857D] uppercase tracking-[0.2em] mb-1">
                          Value {val.letter}
                        </div>
                        <h3 className="font-extrabold text-white text-base mb-1.5">
                          {val.title}
                        </h3>
                        <p className="text-slate-200 text-xs leading-relaxed max-w-[280px]">
                          {val.description}
                        </p>
                        {/* Decorative line */}
                        <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#0F6E56] to-[#12857D] mt-2.5" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Tap indicators */}
              <div className="flex justify-center gap-2 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] animate-ping" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tap a letter to reveal values</span>
              </div>
            </div>

          </div>

        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
