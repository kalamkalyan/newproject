'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Map, Users, Share2, ShieldCheck, Globe2 } from 'lucide-react';

const regions = [
  { id: 'all', name: 'All Regions' },
  { id: 'america', name: 'America' },
  { id: 'europe', name: 'Europe' },
  { id: 'apac', name: 'Asia Pacific' },
  { id: 'mea', name: 'Middle East & Africa' }
];

const countries = [
  { name: 'Mexico', region: 'america', displayRegion: 'North America', code: 'mx' },
  { name: 'Brazil', region: 'america', displayRegion: 'South America', code: 'br' },
  { name: 'Guatemala', region: 'america', displayRegion: 'Central America', code: 'gt' },
  { name: 'Paraguay', region: 'america', displayRegion: 'South America', code: 'py' },
  { name: 'Bolivia', region: 'america', displayRegion: 'South America', code: 'bo' },
  { name: 'Ecuador', region: 'america', displayRegion: 'South America', code: 'ec' },
  { name: 'Argentina', region: 'america', displayRegion: 'South America', code: 'ar' },
  { name: 'Colombia', region: 'america', displayRegion: 'South America', code: 'co' },
  { name: 'Costa Rica', region: 'america', displayRegion: 'Central America', code: 'cr' },
  { name: 'Guyana', region: 'america', displayRegion: 'South America', code: 'gy' },
  { name: 'Switzerland', region: 'europe', displayRegion: 'Europe', code: 'ch' },
  { name: 'Russia', region: 'europe', displayRegion: 'Europe', code: 'ru' },
  { name: 'Bangladesh', region: 'apac', displayRegion: 'Asia', code: 'bd' },
  { name: 'Sri Lanka', region: 'apac', displayRegion: 'Asia', code: 'lk' },
  { name: 'Thailand', region: 'apac', displayRegion: 'Asia', code: 'th' },
  { name: 'Vietnam', region: 'apac', displayRegion: 'Asia', code: 'vn' },
  { name: 'UAE', region: 'mea', displayRegion: 'Middle East', code: 'ae' },
  { name: 'Iran', region: 'mea', displayRegion: 'Middle East', code: 'ir' },
  { name: 'Lebanon', region: 'mea', displayRegion: 'Middle East', code: 'lb' },
  { name: 'Yemen', region: 'mea', displayRegion: 'Middle East', code: 'ye' },
  { name: 'Egypt', region: 'mea', displayRegion: 'Africa', code: 'eg' }
];

export default function GlobalReachClient() {
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [svgContent, setSvgContent] = useState<string>('');
  const [pins, setPins] = useState<Array<{ name: string; x: number; y: number; region: string }>>([]);

  const filteredCountries = countries.filter(country => {
    const matchesRegion = activeRegion === 'all' || country.region === activeRegion;
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  useEffect(() => {
    fetch('/world.svg')
      .then(res => res.text())
      .then(data => {
        const cleaned = data.replace(/<\?xml.*\?>/g, '').replace(/<!--[\s\S]*?-->/g, '');
        setSvgContent(cleaned);
      })
      .catch(err => {
        console.error('Error loading world.svg map:', err);
      });
  }, []);

  useEffect(() => {
    if (!svgContent) return;

    const timer = setTimeout(() => {
      const container = document.querySelector('.svg-map-container');
      if (!container) return;

      const svg = container.querySelector('svg');
      if (!svg) return;

      const viewBox = svg.getAttribute('viewBox')?.split(' ').map(Number) || [0, 0, 2000, 857];
      const viewBoxWidth = viewBox[2];
      const viewBoxHeight = viewBox[3];

      const calculatedPins: typeof pins = [];

      countries.forEach(c => {
        const upperId = c.code.toUpperCase();
        const nameClass = c.name.charAt(0).toUpperCase() + c.name.slice(1);

        const pathEl = svg.querySelector(`path[id="${upperId}"]`) || svg.querySelector(`path[class="${nameClass}"]`);
        if (pathEl) {
          const bbox = (pathEl as any).getBBox();
          let x = bbox.x + bbox.width / 2;
          let y = bbox.y + bbox.height / 2;

          if (c.code === 'ru') { x -= 150; y += 50; }
          else if (c.code === 'vn') { x += 8; y += 10; }
          else if (c.code === 'ae') { x -= 5; }
          else if (c.code === 'eg') { x -= 10; }
          else if (c.code === 'ch') { y += 8; }
          else if (c.code === 'ir') { y -= 10; }
          else if (c.code === 'lb') { x -= 12; y -= 4; }
          else if (c.code === 'co') { y -= 15; }
          else if (c.code === 'cr') { x -= 12; y += 8; }
          else if (c.code === 'gt') { x -= 15; y += 5; }

          calculatedPins.push({
            name: c.name,
            x: (x / viewBoxWidth) * 100,
            y: (y / viewBoxHeight) * 100,
            region: c.region
          });
        }
      });

      setPins(calculatedPins);
    }, 150);

    return () => clearTimeout(timer);
  }, [svgContent]);

  const mapStyles = `
    .svg-map-container svg { width: 100%; height: 100%; background: transparent; }
    .svg-map-container path { fill: #F1F5F9 !important; stroke: #E2E8F0 !important; stroke-width: 0.6px !important; transition: fill 0.4s ease, stroke 0.4s ease; }
    ${countries.map(c => {
    const isHighlighted = activeRegion === 'all' || c.region === activeRegion;
    const fillColor = isHighlighted ? '#A2DFD2' : '#F1F5F9';
    const strokeColor = isHighlighted ? '#87CDBC' : '#E2E8F0';
    const id = c.code.toUpperCase();
    const nameClass = c.name.charAt(0).toUpperCase() + c.name.slice(1);

    return `
        .svg-map-container path[id="${id}"],
        .svg-map-container path[class="${nameClass}"] { fill: ${fillColor} !important; stroke: ${strokeColor} !important; }
        .svg-map-container path[id="${id}"]:hover,
        .svg-map-container path[class="${nameClass}"]:hover { fill: ${isHighlighted ? '#87CDBC' : '#E2E8F0'} !important; cursor: ${isHighlighted ? 'pointer' : 'default'} !important; }
      `;
  }).join('\n')}
  `;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <style>{mapStyles}</style>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-10 bg-slate-50/40 p-4 rounded-3xl border border-slate-100">
        <div className="relative w-full lg:w-80">
          <input
            type="text"
            placeholder="Search countries..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-5 pr-12 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#0F6E56] text-sm font-semibold transition-all shadow-sm bg-white text-slate-800 placeholder-slate-400"
          />
          <Search size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-end w-full lg:w-auto">
          {regions.map(r => (
            <button
              key={r.id}
              onClick={() => setActiveRegion(r.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border
                ${activeRegion === r.id
                  ? 'bg-[#0F6E56] border-[#0F6E56] text-white shadow-sm shadow-[#0F6E56]/10'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] flex items-center justify-center shrink-0">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F6E56]">Our Global Presence</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                Therallen serves partners across 22+ countries through a strong global distribution network.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full overflow-hidden flex items-center justify-center p-2 sm:p-4 bg-slate-50/50 rounded-2xl border border-slate-100 select-none aspect-[2.33/1] max-h-[500px]"
        >
          {svgContent ? (
            <div className="relative w-full h-full">
              <div dangerouslySetInnerHTML={{ __html: svgContent }} className="w-full h-full svg-map-container" />
              {pins.map(pin => {
                const isHighlighted = activeRegion === 'all' || pin.region === activeRegion;
                return (
                  <div
                    key={pin.name}
                    className={`absolute -translate-x-1/2 -translate-y-[85%] transition-all duration-500 flex flex-col items-center
                      ${isHighlighted ? 'opacity-100 scale-100' : 'opacity-10 scale-75 pointer-events-none'}`}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <div className="flex flex-col items-center group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-4 h-4 rounded-full bg-[#0F6E56]/30 animate-ping pointer-events-none" />
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F6E56] drop-shadow-sm filter" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <span className="mt-1 bg-white/95 backdrop-blur-[1px] px-1 py-0.5 rounded text-[7px] sm:text-[8px] font-extrabold text-slate-700 whitespace-nowrap shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-slate-100">
                        {pin.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0F6E56] mb-3" />
              <span className="text-sm font-semibold">Loading interactive map...</span>
            </div>
          )}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-[#0F6E56] leading-none mb-1">22+</span>
            <span className="block text-xs font-bold text-slate-800">Active Markets</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-[#0F6E56] leading-none mb-1">4</span>
            <span className="block text-xs font-bold text-slate-800">Global Regions</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] flex items-center justify-center shrink-0">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-[#0F6E56] leading-none mb-1">Trusted</span>
            <span className="block text-xs font-bold text-slate-800">Distribution Network</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-[#0F6E56] leading-none mb-1">Commitment</span>
            <span className="block text-xs font-bold text-slate-800">Quality. Compliance. Care.</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-12">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] flex items-center justify-center shrink-0">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F6E56]">Our Presence Worldwide</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1 leading-relaxed">Explore our active markets across the globe.</p>
          </div>
        </div>

        <div className="min-h-[200px]">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredCountries.map(country => (
                <motion.div
                  key={country.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[#0F6E56]/20 transition-all duration-300 flex items-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-8 relative rounded-md overflow-hidden border border-slate-100 shrink-0 select-none">
                    <img src={`https://flagcdn.com/w80/${country.code}.png`} alt={`${country.name} flag`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <span className="text-slate-800 text-sm font-extrabold group-hover:text-[#0F6E56] transition-colors leading-tight block">{country.name}</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 block font-bold capitalize mt-0.5">{country.displayRegion}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredCountries.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm font-semibold">No markets found matching "{searchQuery}" in this region.</div>
          )}
        </div>
      </div>
    </div>
  );
}
