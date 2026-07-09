'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  Shield, 
  Clock, 
  Layers, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Building,
  Globe,
  Award,
  Activity,
  FileCheck,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyHighlights from './CompanyHighlights';


export default function CompanyOverviewClient() {
  const stats = [
    {
      label: 'Founded',
      value: '2017',
      icon: Award,
      description: 'Incorporated in June 2017'
    },
    {
      label: 'Global Presence',
      value: '20+ Countries',
      icon: Globe,
      description: 'Serving international markets'
    },
    {
      label: 'R&D Center',
      value: 'Hyderabad',
      icon: Beaker,
      description: 'iSentre Innovation Lab, Telangana'
    },
    {
      label: 'cGMP Manufacturing',
      value: 'Nalagarh',
      icon: Building,
      description: 'Facility in Himachal Pradesh'
    }
  ];

  const capabilities = [
    {
      title: 'Single Pellet Strategies',
      description: 'Developing complex combination products using advanced single pelletization technology.',
      icon: Layers,
      gradient: 'from-therallen-blue/10 to-cyan-500/10'
    },
    {
      title: 'Combination Products',
      description: 'Designing multi-API drug systems to improve treatment compliance and clinical efficacy.',
      icon: Beaker,
      gradient: 'from-cyan-500/10 to-teal-500/10'
    },
    {
      title: 'Extended-Release Formulations',
      description: 'Advanced pellet layering and matrix technologies designed for sustained, controlled drug release profiles.',
      icon: Clock,
      gradient: 'from-teal-500/10 to-therallen-blue/10'
    },
    {
      title: 'Dual Delayed Release',
      description: 'Precise multi-stage delivery systems releasing active ingredients at specific physiological sites.',
      icon: Activity,
      gradient: 'from-therallen-blue/10 to-indigo-500/10'
    },
    {
      title: 'Immediate Release',
      description: 'Rapid drug dissolution profiles engineered for fast therapeutic onset and maximum availability.',
      icon: Sparkles,
      gradient: 'from-indigo-500/10 to-cyan-500/10'
    },
    {
      title: 'Patent Non-Infringing Products',
      description: 'IP-guided formulation development to create unique, non-infringing pathways for global markets.',
      icon: Shield,
      gradient: 'from-cyan-500/10 to-therallen-blue/10'
    },
    {
      title: 'MUPS',
      description: 'Multi-Unit Particulate Systems engineered for consistent compression, preventing coating damage and ensuring uniform release.',
      icon: Cpu,
      gradient: 'from-therallen-blue/10 to-teal-500/10'
    },
    {
      title: 'Enteric Coating Formulations',
      description: 'pH-dependent release systems protecting active ingredients from gastric acidity and optimizing absorption.',
      icon: FileCheck,
      gradient: 'from-teal-500/10 to-indigo-500/10'
    }
  ];

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-32 pb-24 overflow-hidden relative bg-white">
        
        {/* Decorative background glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-therallen-cyan/15 to-therallen-blue/5 blur-[120px] animate-pulse-glow" style={{ animationDuration: '10s' }} />
          <div className="absolute bottom-[20%] left-[-15%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-therallen-blue/5 to-therallen-cyan/10 blur-[150px] animate-pulse-glow" style={{ animationDuration: '14s' }} />
        </div>

        {/* Hero Section Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Main Grid: Left content, Right illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24">
            
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-therallen-blue/5 border border-therallen-blue/15 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-therallen-blue animate-pulse" />
                <span className="text-therallen-blue font-bold text-xs tracking-wider uppercase">
                  About Therallen
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[46px] font-bold text-therallen-black leading-[1.2] tracking-tight mb-6"
              >
                Driving Innovation in <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-therallen-blue to-therallen-cyan bg-clip-text text-transparent">
                  Pharmaceutical R&D
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-8 max-w-xl"
              >
                Welcome to Therallen, where industry veterans and cutting-edge development converge. Incorporated in June 2017, we specialize in the seamless integration of drug delivery design and commercial strategies. From the precise development of pre-formulation intermediates to the advanced optimization of finished dosage forms, our R&D center in Hyderabad and our state-of-the-art manufacturing facility in Nalagarh, Himachal Pradesh are dedicated to maximizing therapeutic value.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="/capabilities/technology"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-therallen-blue to-therallen-cyan hover:opacity-95 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-therallen-blue/10 hover:shadow-therallen-blue/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Capabilities
                  <ArrowRight size={18} />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-full border border-slate-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact Us
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-600" />
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-6 border-t border-slate-100 w-full max-w-xl text-left"
              >
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Registered Office</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  Plot No. 67, 1st floor, Chitiprolu Arcade, Jubilee Enclave, Hitech City, Madhapur, Hyderabad, Telangana 500081
                </p>
              </motion.div>
            </div>

            {/* Right Column: Abstract Pharmaceutical Illustration */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[600px] aspect-square flex items-center justify-center select-none"
              >
                {/* Visual glowing ring behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-therallen-blue/5 to-therallen-cyan/5 blur-[50px]" />
                
                {/* Elements overlay */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-slate-100/80 shadow-[0_15px_40px_rgba(0,0,0,0.02)] mask-radial-desktop flex items-center justify-center">
                  <Image
                    src="/about_overview_illustration.png"
                    alt="Therallen Pharmaceutical Research & Innovation"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.01]"
                    priority
                  />
                </div>
              </motion.div>
            </div>

          </div>

          {/* Company Highlights Section */}
          <CompanyHighlights />

          {/* Capabilities Grid Section */}
          <div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-therallen-blue font-bold text-xs tracking-wider uppercase mb-3 block">
                Technical Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-therallen-black tracking-tight mb-4">
                Core Capabilities & Formulations
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Therallen integrates cutting-edge drug delivery technology with end-to-end regulatory support to accelerate drug development timelines and provide non-infringing therapeutic solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, idx) => {
                const IconComponent = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex flex-col p-6 rounded-[22px] bg-white border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.005)] hover:shadow-[0_15px_35px_rgba(0,87,217,0.04)] hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden"
                  >
                    {/* Top gradient highlight on hover */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${cap.gradient} rounded-bl-full filter blur-md opacity-40 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-therallen-blue/[0.005] to-therallen-cyan/[0.005] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-xl bg-therallen-blue/5 text-therallen-blue flex items-center justify-center mb-5 group-hover:bg-therallen-blue group-hover:text-white transition-all duration-500 ease-out">
                      <IconComponent size={20} className="transition-transform duration-500 group-hover:rotate-6" />
                    </div>

                    <h3 className="text-[17px] font-bold text-therallen-black mb-3 group-hover:text-therallen-blue transition-colors duration-300 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed flex-grow">
                      {cap.description}
                    </p>

                    {/* Glowing bottom line indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-therallen-blue to-therallen-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
