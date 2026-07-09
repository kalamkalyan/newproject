'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Beaker, 
  Building, 
  FileText, 
  CheckCircle, 
  Globe, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Compass,
  Award,
  Users,
  Search,
  ChevronRight,
  MapPin
} from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define regions and countries data
const regions = [
  { id: 'all', name: 'All Markets' },
  { id: 'americas', name: 'Americas' },
  { id: 'europe', name: 'Europe' },
  { id: 'apac', name: 'Asia Pacific' },
  { id: 'mea', name: 'Middle East & Africa' }
];

const countries = [
  { name: 'Mexico', region: 'americas' },
  { name: 'Brazil', region: 'americas' },
  { name: 'Colombia', region: 'americas' },
  { name: 'Argentina', region: 'americas' },
  { name: 'Costa Rica', region: 'americas' },
  { name: 'Guatemala', region: 'americas' },
  { name: 'Paraguay', region: 'americas' },
  { name: 'Bolivia', region: 'americas' },
  { name: 'Ecuador', region: 'americas' },
  { name: 'Dominican Republic', region: 'americas' },
  { name: 'Guyana', region: 'americas' },
  { name: 'Switzerland', region: 'europe' },
  { name: 'Russia', region: 'europe' },
  { name: 'Vietnam', region: 'apac' },
  { name: 'Thailand', region: 'apac' },
  { name: 'Sri Lanka', region: 'apac' },
  { name: 'Bangladesh', region: 'apac' },
  { name: 'UAE', region: 'mea' },
  { name: 'Iran', region: 'mea' },
  { name: 'Lebanon (Beirut)', region: 'mea' },
  { name: 'Yemen', region: 'mea' },
  { name: 'Egypt', region: 'mea' }
];

// Define milestones data
const milestones = [
  {
    year: '2017',
    title: 'Establishment of R&D Facility',
    description: 'Inception of Therallen Pharma with the establishment of our primary formulation R&D center, iSentre, in Hyderabad, Telangana. Focusing on pre-formulation intermediates and advanced solid oral delivery systems.',
    icon: Beaker,
    location: 'Hyderabad, India',
    details: 'Company Incorporated in June 2017. Welcome to Therallen Pvt. Ltd, where industry veterans and cutting-edge development converge.'
  },
  {
    year: '2018',
    title: 'Establishment of cGMP Manufacturing Facility',
    description: 'Commissioning of our state-of-the-art cGMP solid oral dosage manufacturing facility in Nalagarh, Himachal Pradesh. Bringing R&D formulation concepts to commercial-scale production.',
    icon: Building,
    location: 'Nalagarh, Himachal Pradesh',
    details: 'Equipped for commercial manufacturing of a wide range of semi-finished and finished formulations, including ready-to-fill Pellets and Granules.'
  },
  {
    year: '2021',
    title: 'Filed Patents for Non-Infringing Products',
    description: 'Successfully developed and filed patents for unique, non-infringing formulation pathways in key international markets, starting with Mexico and Brazil.',
    icon: FileText,
    location: 'Global IP Filing',
    details: 'Securing non-infringing pathways helps our global partners enter regulated markets smoothly and bypass complex IP bottlenecks.'
  },
  {
    year: '2023',
    title: 'Audited & Approved by International Regulatory Bodies',
    description: 'Our state-of-the-art manufacturing facility successfully underwent audits and inspections from regulatory and client teams representing Mexico, Colombia, Argentina, and Iran.',
    icon: CheckCircle,
    location: 'cGMP Audit Success',
    details: 'Confirming full compliance with international cGMP standards and establishing trust with global regulatory expectations.'
  },
  {
    year: '2024',
    title: 'Increased Global Footprints & Portfolio Expansion',
    description: 'Expanded global presence to 22+ countries, providing custom pharmaceutical solutions and semi-finished formulations to key regulatory markets worldwide.',
    icon: Globe,
    location: 'Transnational Reach',
    details: 'Expanding our business to support key markets across Latin America, Asia-Pacific, Europe, and the Middle East.'
  },
  {
    year: '2025',
    title: 'Offering Nitrosamine-Free Products',
    description: 'Pioneering drug safety and delivery systems by offering a comprehensive, nitrosamine-free portfolio of high-value generic formulations.',
    icon: Sparkles,
    location: 'R&D Innovation Lab',
    details: 'Adapting to advanced global regulatory guidelines to ensure maximum safety, quality control, and therapeutic efficacy.'
  }
];

export default function MilestonesClient() {
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter countries by region & search query
  const filteredCountries = countries.filter(country => {
    const matchesRegion = activeRegion === 'all' || country.region === activeRegion;
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow pt-28 lg:pt-36 pb-24 overflow-hidden relative bg-white select-none">
        
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

          @keyframes pulse-dot {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.4); opacity: 0.8; }
          }
          .animate-pulse-dot {
            animation: pulse-dot 3s ease-in-out infinite;
          }
        `}</style>

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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* --- HERO INTRODUCTION --- */}
          <div className="max-w-5xl mx-auto text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#0F6E56] font-bold text-xs tracking-[0.2em] uppercase mb-4 block"
            >
              Our Growth Journey & Reach
            </motion.span>
            
            {/* Moving gradient glow behind heading */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0F6E56]/8 via-[#12857D]/10 to-[#0F6E56]/8 filter blur-3xl opacity-80 animate-glow-move" />
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-[68px] font-black text-slate-900 tracking-tight leading-none"
              >
                Chronicles of <span className="text-[#0F6E56]">Innovation.</span><br />
                Footprints of <span className="text-[#12857D]">Trust.</span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-lg sm:text-[19px] leading-relaxed max-w-[850px] mx-auto mt-4"
            >
              Incorporated in the year 2017 by industry veterans, Therallen is a private limited company dedicated to Pharmaceutical Research and Development for Formulations. With a commitment to excellence and a passion for Science, we explore the intricate processes that shape the future of healthcare.
            </motion.p>
          </div>

          {/* --- EXECUTIVE INTRODUCTION GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-28 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Converging Veterans & <span className="text-[#0F6E56]">Development</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Welcome to Therallen Pvt. Ltd, where industry veterans and cutting-edge development converge. Here in Therallen, the seamless integration of design and commercial strategies plays a pivotal role. From the precise development of pre-formulation intermediates to the advanced optimization of finished dosage forms, every phase is guided by the commitment to maximizing therapeutic value.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-5"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12857D]">
                <Award size={16} />
                <span>Our Strategic Presence</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our commitment to excellence ensures that each product not only meets the highest standards but also advances with unparalleled efficacy. Our formulation R&D center is located in Hyderabad, Telangana, while our state-of-the-art solid oral formulation manufacturing facility operates at Nalagarh, Himachal Pradesh, India.
              </p>
              <div className="h-[1px] bg-slate-200 w-full" />
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                Registered Office: Plot No. 67, 1st floor, Chitiprolu Arcade, Jubilee Enclave, Hitech City, Madhapur, Hyderabad, Telangana 500081.
              </p>
            </motion.div>
          </div>

          {/* --- REDESIGNED INTERACTIVE TIMELINE --- */}
          <div className="relative max-w-5xl mx-auto py-12 mb-32">
            <div className="text-center mb-16">
              <span className="text-[#0F6E56] font-bold text-xs tracking-[0.25em] uppercase mb-4 block">
                Growth Road
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Key Milestones
              </h2>
            </div>
            
            {/* Background Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 z-0" />
            
            {/* Animated Progress Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#12857D] -translate-x-1/2 origin-top z-0"
            />

            {/* Milestones Cards Grid */}
            <div className="flex flex-col gap-12 md:gap-16">
              {milestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const IconComponent = milestone.icon;
                
                return (
                  <div 
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row items-start w-full z-10 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Left/Right spacer */}
                    <div className="hidden md:block w-1/2" />

                    {/* Central Indicator Node */}
                    <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full border-4 border-white bg-slate-100 shadow-md -translate-x-1/2 flex items-center justify-center z-20">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#12857D] group-hover:bg-[#12857D] transition-colors" />
                    </div>

                    {/* Content Card with hover zoom & glow */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -45 : 45 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full md:w-[44%] pl-12 md:pl-0 ${
                        isEven ? 'md:pr-10' : 'md:pl-10'
                      }`}
                    >
                      <div className="group relative flex flex-col p-6 sm:p-8 rounded-[28px] bg-white border border-slate-100/80 shadow-sm hover:shadow-xl hover:shadow-[#0F6E56]/5 hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden">
                        
                        {/* Interactive gradient sweep */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#12857D]/5 to-transparent rounded-bl-full pointer-events-none -z-10" />

                        <div className="flex items-center justify-between mb-4">
                          <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0F6E56] to-[#12857D] tracking-tight">
                            {milestone.year}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-[#0F6E56]/5 text-[#0F6E56] flex items-center justify-center shrink-0 group-hover:bg-[#0F6E56] group-hover:text-white transition-all duration-500">
                            <IconComponent size={18} />
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#0F6E56] transition-colors duration-300">
                          {milestone.title}
                        </h3>

                        {/* Location / Section Badge */}
                        <div className="flex items-center gap-1.5 text-xs text-[#12857D] font-bold mb-3.5">
                          <MapPin size={12} />
                          <span>{milestone.location}</span>
                        </div>
                        
                        <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        <div className="mt-2 pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed font-semibold">
                          {milestone.details}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- INTERACTIVE GLOBAL PRESENCE (STUNNING COUNTRIES LIST) --- */}
          <div className="pt-12 mb-32 relative rounded-3xl bg-slate-50/50 border border-slate-100 p-8 sm:p-12 overflow-hidden">
            
            {/* World Map SVG background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none -z-10 flex items-center justify-center">
              <svg viewBox="0 0 1000 480" className="w-full h-full max-w-4xl text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5">
                {/* Abstract World outline elements */}
                <path d="M150,150 Q180,120 220,180 T290,160 T350,220" />
                <path d="M220,280 Q250,330 280,380 T350,360" />
                <path d="M450,100 Q480,80 520,120 T620,100 T700,140" />
                <path d="M500,200 Q520,250 560,220 T620,260 T700,240" />
                <path d="M720,250 Q750,290 780,280 T850,220" />
                {/* Glowing points representing markets */}
                <circle cx="210" cy="170" r="4" fill="#0F6E56" className="animate-pulse-dot" />
                <circle cx="300" cy="300" r="4" fill="#0F6E56" className="animate-pulse-dot" />
                <circle cx="480" cy="110" r="4" fill="#12857D" className="animate-pulse-dot" />
                <circle cx="580" cy="210" r="4" fill="#0F6E56" className="animate-pulse-dot" />
                <circle cx="750" cy="240" r="4" fill="#12857D" className="animate-pulse-dot" />
              </svg>
            </div>

            <div className="text-center mb-12">
              <span className="text-[#0F6E56] font-bold text-xs tracking-[0.25em] uppercase mb-4 block">
                Transnational Footprint
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
                Our <span className="bg-gradient-to-r from-[#0F6E56] to-[#12857D] bg-clip-text text-transparent">Global Reach</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                With products and licensing partnerships extending across key international markets, we serve clients globally in 22+ countries.
              </p>
            </div>

            {/* Search & Filter Controls */}
            <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between px-4 z-10 relative">
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 justify-center">
                {regions.map(r => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRegion(r.id)}
                    className={`px-4 py-2 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 border
                      ${activeRegion === r.id
                        ? 'bg-[#0F6E56] border-[#0F6E56] text-white shadow-md shadow-[#0F6E56]/10'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-[#12857D] text-xs font-semibold transition-all shadow-sm bg-white text-slate-800"
                />
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Countries Grid */}
            <div className="max-w-5xl mx-auto px-2 min-h-[180px] z-10 relative">
              <motion.div 
                layout 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredCountries.map(country => (
                    <motion.div
                      key={country.name}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group relative rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#12857D]/30 transition-all duration-300 flex items-center gap-3 cursor-pointer overflow-hidden"
                    >
                      {/* Top right gradient accent */}
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#12857D]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="w-8 h-8 rounded-lg bg-[#0F6E56]/5 text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                        <MapPin size={13} className="group-hover:scale-115 transition-transform" />
                      </div>
                      
                      <div>
                        <span className="text-slate-800 text-xs font-extrabold group-hover:text-[#0F6E56] transition-colors leading-tight block">
                          {country.name}
                        </span>
                        <span className="text-[9px] text-slate-400 block font-bold capitalize mt-0.5">
                          {country.region === 'apac' ? 'Asia Pacific' : country.region === 'mea' ? 'Middle East & Africa' : country.region}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredCountries.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-sm font-semibold">
                  No markets found matching "{searchQuery}" in this region.
                </div>
              )}
            </div>

          </div>

          {/* --- STUNNING STAY AHEAD BLOCK --- */}
          <div className="max-w-5xl mx-auto mb-28 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F6E56]/10 to-[#12857D]/5 rounded-[32px] filter blur-xl opacity-60 -z-10" />
            <div className="bg-[#111111] text-white rounded-[32px] p-8 sm:p-12 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#12857D]/20 to-[#0F6E56]/5 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[#12857D] font-bold text-xs tracking-widest uppercase block">Empowering Growth</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
                    Helping Customers <span className="bg-gradient-to-r from-[#12857D] to-[#E1F5EE] bg-clip-text text-transparent">Stay Ahead</span> of the Race
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                    At Therallen, with our divergent capabilities and products, we empower our customers to stay ahead of peers and competition. We use a matrix of reliable global sales data, patents, and country-specific therapeutic segments to come up with products that give an edge to our customers.
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    These molecules are developed in our pure passion R&D innovation centre, <span className="text-[#12857D] font-bold">iSentre</span>, and scaled up at our plant in Nalagarh. For customers, we participate in their growth chain with deeper engagement.
                  </p>
                </div>
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-[320px] aspect-square rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md relative group hover:border-white/20 transition-all duration-300">
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#12857D]/20 flex items-center justify-center text-[#12857D]">
                      <Compass className="animate-pulse" />
                    </div>
                    <div>
                      <div className="text-5xl font-black text-white/10 mb-4 group-hover:text-white/20 transition-colors">01</div>
                      <h4 className="text-lg font-bold mb-2 text-white">iSentre Innovation Lab</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Our dedicated R&D hub in Hyderabad, driving original patents, formulation breakthroughs, and global generic molecule developments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspirational Partner Banner */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-slate-100/90 shadow-lg"
          >
            {/* Visual background gradient and decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F6E56]/[0.02] via-[#12857D]/[0.02] to-[#0F6E56]/[0.02]" />
            <div className="absolute top-[-30%] right-[-10%] w-[40%] h-[150%] rounded-full bg-gradient-to-br from-[#12857D]/10 to-[#0F6E56]/5 blur-[80px]" />
            
            <div className="relative z-10 px-8 py-14 sm:px-12 sm:py-16 text-center flex flex-col items-center">
              <span className="text-[#0F6E56] font-bold text-xs tracking-wider uppercase mb-3 block">
                Collaboration
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Our Journey Continues
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                Therallen Pharma is constantly pushing the boundaries of drug formulation and delivery. We invite global pharmaceutical companies, distributors, and research institutions to partner with us to bring advanced therapeutics to patients worldwide.
              </p>
              
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0F6E56] to-[#12857D] hover:opacity-95 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#0F6E56]/10 hover:shadow-[#0F6E56]/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Partner with Us
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
