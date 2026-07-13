'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';

const regions = [
  { id: 'all', name: 'All Markets' },
  { id: 'america', name: 'America' },
  { id: 'europe', name: 'Europe' },
  { id: 'apac', name: 'Asia Pacific' },
  { id: 'mea', name: 'Middle East & Africa' }
];

const countries = [
  { name: 'Mexico', region: 'america' },
  { name: 'Brazil', region: 'america' },
  { name: 'Colombia', region: 'america' },
  { name: 'Argentina', region: 'america' },
  { name: 'Costa Rica', region: 'america' },
  { name: 'Guatemala', region: 'america' },
  { name: 'Paraguay', region: 'america' },
  { name: 'Bolivia', region: 'america' },
  { name: 'Ecuador', region: 'america' },
  { name: 'Dominica República', region: 'america' },
  { name: 'Guyana', region: 'america' },
  { name: 'Switzerland', region: 'europe' },
  { name: 'Russia', region: 'europe' },
  { name: 'Vietnam', region: 'apac' },
  { name: 'Thailand', region: 'apac' },
  { name: 'Sri Lanka', region: 'apac' },
  { name: 'Bangladesh', region: 'apac' },
  { name: 'UAE', region: 'mea' },
  { name: 'Iran', region: 'mea' },
  { name: 'Lebanon', region: 'mea' },
  { name: 'Beirut', region: 'mea' },
  { name: 'Yemen', region: 'mea' },
  { name: 'Egypt', region: 'mea' }
];

export default function GlobalReachClient() {
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter countries by region & search query
  const filteredCountries = countries.filter(country => {
    const matchesRegion = activeRegion === 'all' || country.region === activeRegion;
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      {/* CSS Keyframes for pulse-dot */}
      <style jsx global>{`
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 0.8; }
        }
        .animate-pulse-dot {
          animation: pulse-dot 3s ease-in-out infinite;
        }
      `}</style>

      {/* --- INTERACTIVE GLOBAL PRESENCE (STUNNING COUNTRIES LIST) --- */}
      <div className="pt-12 mb-12 relative rounded-3xl bg-slate-50/50 border border-slate-100 p-8 sm:p-12 overflow-hidden">
        
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
          <span className="text-[#0F6E56] font-bold text-xs tracking-[0.25em] uppercase mb-4 block animate-fade-in">
            Active Markets
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
            Serving Clients Globally in <span className="text-[#0F6E56]">22+ Countries</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            With active products, audits, and strategic distribution networks across Latin America, Europe, Asia Pacific, and the Middle East.
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
        <div className="max-w-6xl mx-auto px-2 min-h-[180px] z-10 relative">
          <motion.div 
            layout 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
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
                  className="group relative rounded-3xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#12857D]/30 transition-all duration-350 flex items-center gap-4 cursor-pointer overflow-hidden"
                >
                  {/* Top right gradient accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#12857D]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0F6E56]/5 text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div>
                    <span className="text-slate-800 text-sm sm:text-base font-extrabold group-hover:text-[#0F6E56] transition-colors leading-tight block">
                      {country.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-400 block font-bold capitalize mt-1">
                      {country.region === 'apac' 
                        ? 'Asia Pacific' 
                        : country.region === 'mea' 
                          ? 'Middle East & Africa' 
                          : country.region}
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
    </div>
  );
}
