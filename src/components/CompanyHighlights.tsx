'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Globe, Beaker, Factory } from 'lucide-react';

// --- Upgraded Helper: 3D interactive tilt, cursor-following spotlights, and parallax depth ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowClass?: string;
  isHoverable?: boolean;
}

export function TiltCard({ children, className = '', glowClass = '', isHoverable = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverable) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // 3D tilt calculation (max 8 degrees rotation for enhanced visibility)
    const mouseX = x / rect.width - 0.5;
    const mouseY = y / rect.height - 0.5;
    const maxTilt = 8;
    setRotateX(-mouseY * maxTilt);
    setRotateY(mouseX * maxTilt);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (isHoverable) setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[24px] overflow-hidden border border-slate-100/90 transition-all duration-500 h-full ${className} ${glowClass} ${
        isHoverable && isHovered 
          ? 'shadow-[0_25px_50px_-12px_rgba(15, 110, 86,0.12)] bg-white/85' 
          : 'shadow-[0_4px_20px_rgba(0,0,0,0.005)] bg-white/70'
      }`}
      style={{
        transform: `perspective(1000px) translateY(${isHovered ? -12 : 0}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        transition: isHovered 
          ? 'transform 0.1s ease-out, box-shadow 0.3s, background-color 0.3s' 
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s, background-color 0.3s',
      }}
    >
      {/* Background Spotlight glow centered on mouse coordinates */}
      {isHoverable && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(0, 184, 200, 0.08), rgba(15, 110, 86, 0.04), transparent 80%)`,
          }}
        />
      )}

      {/* Shimmer reflection sweeping across card */}
      {isHoverable && (
        <div className="absolute inset-0 rounded-[23px] overflow-hidden pointer-events-none z-10">
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-card-shimmer" />
        </div>
      )}

      {/* Laser Border Spotlight Outline tracking cursor */}
      {isHoverable && (
        <div 
          className="absolute inset-0 rounded-[24px] pointer-events-none z-20 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            border: '1.5px solid transparent',
            backgroundImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(0, 184, 200, 0.6), rgba(15, 110, 86, 0.35), transparent 70%)`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'border-box',
            maskImage: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskImage: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'destination-out',
          }}
        />
      )}

      {/* 3D Depth Layer Wrapper */}
      <div 
        className="relative z-30 flex flex-col h-full w-full backdrop-blur-md p-6 sm:p-8"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </div>
  );
}

// --- Helper component for number count-up animation ---
interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export function Counter({ value, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / totalMiliseconds, 1);
        
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * end);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// --- Helper component for letter-by-letter smooth text reveal ---
export function TextReveal({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <span ref={ref} className="inline-block overflow-hidden py-1 whitespace-nowrap">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: '100%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

// --- Background floating particle generator ---
function FloatingParticles() {
  const particles = Array.from({ length: 6 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((_, idx) => {
        const size = 6 + (idx % 3) * 4;
        const startX = 15 + idx * 15;
        const startY = 20 + (idx % 2) * 50;
        
        return (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-[#12857D]/10 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + idx * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

// --- Main CompanyHighlights Component ---
export default function CompanyHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const highlights = [
    {
      id: 1,
      type: 'number',
      value: 2017,
      suffix: '',
      title: 'Founded',
      subtitle: '',
      description: 'Incorporated in June 2017',
      icon: Calendar,
      glowClass: 'animate-[card-glow-1_8s_infinite]',
      nodeGlowClass: 'animate-[node-glow-1_8s_infinite]',
    },
    {
      id: 2,
      type: 'number',
      value: 20,
      suffix: '+',
      title: 'Countries',
      subtitle: 'Global Presence',
      description: 'Serving international markets',
      icon: Globe,
      glowClass: 'animate-[card-glow-2_8s_infinite]',
      nodeGlowClass: 'animate-[node-glow-2_8s_infinite]',
    },
    {
      id: 3,
      type: 'text',
      value: 'Hyderabad',
      title: '',
      subtitle: 'R&D Center',
      description: 'iSentre Innovation Lab, Telangana',
      icon: Beaker,
      glowClass: 'animate-[card-glow-3_8s_infinite]',
      nodeGlowClass: 'animate-[node-glow-3_8s_infinite]',
    },
    {
      id: 4,
      type: 'text',
      value: 'Nalagarh',
      title: '',
      subtitle: 'cGMP Manufacturing',
      description: 'Facility in Himachal Pradesh',
      icon: Factory,
      glowClass: 'animate-[card-glow-4_8s_infinite]',
      nodeGlowClass: 'animate-[node-glow-4_8s_infinite]',
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-20 px-6 lg:px-8 mb-20 overflow-hidden select-none border-y border-slate-100"
    >
      {/* Self-contained styling for specialized timeline animations */}
      <style jsx global>{`
        @keyframes card-shimmer {
          0% { transform: translateX(-150%) skewX(-15deg); }
          25% { transform: translateX(150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
        .animate-card-shimmer {
          animation: card-shimmer 7s ease-in-out infinite;
        }

        /* --- Pulse Timelines (Desktop & Mobile 8s total) --- */
        @keyframes desktop-pulse {
          0% { left: 0%; opacity: 0; }
          5% { opacity: 1; }
          70% { opacity: 1; }
          75% { left: 100%; opacity: 0; }
          75.01%, 100% { left: 0%; opacity: 0; }
        }
        .animate-desktop-pulse {
          animation: desktop-pulse 8s linear infinite;
        }

        /* --- Tablet Pulse wrapper loops --- */
        @keyframes tablet-pulse-row1 {
          0% { left: 0%; opacity: 0; }
          2.5% { opacity: 1; }
          22.5% { opacity: 1; }
          25% { left: 100%; opacity: 0; }
          25.01%, 100% { left: 0%; opacity: 0; }
        }
        .animate-tablet-pulse-row1 {
          animation: tablet-pulse-row1 8s linear infinite;
        }

        @keyframes tablet-pulse-row2 {
          0%, 50% { left: 0%; opacity: 0; }
          50.01% { left: 0%; opacity: 0; }
          52.5% { opacity: 1; }
          72.5% { opacity: 1; }
          75% { left: 100%; opacity: 0; }
          75.01%, 100% { left: 0%; opacity: 0; }
        }
        .animate-tablet-pulse-row2 {
          animation: tablet-pulse-row2 8s linear infinite;
        }

        /* --- Card Glow Sync Animations --- */
        @keyframes card-glow-1 {
          0%, 100% {
            border-color: rgba(226, 232, 240, 0.8);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.005);
          }
          6.25% {
            border-color: rgba(0, 184, 200, 0.4);
            box-shadow: 0 10px 30px rgba(0, 93, 217, 0.08), 0 0 15px rgba(0, 184, 200, 0.15);
          }
          12.5%, 93.75% {
            border-color: rgba(226, 232, 240, 0.8);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.005);
          }
        }
        @keyframes card-glow-2 {
          0%, 12.5%, 37.5%, 100% {
            border-color: rgba(226, 232, 240, 0.8);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.005);
          }
          25% {
            border-color: rgba(0, 184, 200, 0.4);
            box-shadow: 0 10px 30px rgba(0, 93, 217, 0.08), 0 0 15px rgba(0, 184, 200, 0.15);
          }
        }
        @keyframes card-glow-3 {
          0%, 37.5%, 62.5%, 100% {
            border-color: rgba(226, 232, 240, 0.8);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.005);
          }
          50% {
            border-color: rgba(0, 184, 200, 0.4);
            box-shadow: 0 10px 30px rgba(0, 93, 217, 0.08), 0 0 15px rgba(0, 184, 200, 0.15);
          }
        }
        @keyframes card-glow-4 {
          0%, 62.5%, 87.5%, 100% {
            border-color: rgba(226, 232, 240, 0.8);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.005);
          }
          75% {
            border-color: rgba(0, 184, 200, 0.4);
            box-shadow: 0 10px 30px rgba(0, 93, 217, 0.08), 0 0 15px rgba(0, 184, 200, 0.15);
          }
        }

        /* --- Node Glow Sync Animations --- */
        @keyframes node-glow-1 {
          0%, 100% {
            transform: scale(1);
            background-color: #ffffff;
            border-color: #cbd5e1;
            box-shadow: 0 0 0px rgba(0, 184, 200, 0);
          }
          6.25% {
            transform: scale(1.35);
            background-color: #12857D;
            border-color: #0F6E56;
            box-shadow: 0 0 14px 4px rgba(0, 184, 200, 0.45);
          }
          12.5%, 93.75% {
            transform: scale(1);
            background-color: #ffffff;
            border-color: #cbd5e1;
            box-shadow: 0 0 0px rgba(0, 184, 200, 0);
          }
        }
        @keyframes node-glow-2 {
          0%, 12.5%, 37.5%, 100% {
            transform: scale(1);
            background-color: #ffffff;
            border-color: #cbd5e1;
            box-shadow: 0 0 0px rgba(0, 184, 200, 0);
          }
          25% {
            transform: scale(1.35);
            background-color: #12857D;
            border-color: #0F6E56;
            box-shadow: 0 0 14px 4px rgba(0, 184, 200, 0.45);
          }
        }
        @keyframes node-glow-3 {
          0%, 37.5%, 62.5%, 100% {
            transform: scale(1);
            background-color: #ffffff;
            border-color: #cbd5e1;
            box-shadow: 0 0 0px rgba(0, 184, 200, 0);
          }
          50% {
            transform: scale(1.35);
            background-color: #12857D;
            border-color: #0F6E56;
            box-shadow: 0 0 14px 4px rgba(0, 184, 200, 0.45);
          }
        }
        @keyframes node-glow-4 {
          0%, 62.5%, 87.5%, 100% {
            transform: scale(1);
            background-color: #ffffff;
            border-color: #cbd5e1;
            box-shadow: 0 0 0px rgba(0, 184, 200, 0);
          }
          75% {
            transform: scale(1.35);
            background-color: #12857D;
            border-color: #0F6E56;
            box-shadow: 0 0 14px 4px rgba(0, 184, 200, 0.45);
          }
        }
      `}</style>

      {/* --- Premium Background elements --- */}
      <div 
        className="absolute inset-0 -z-20 pointer-events-none opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 110, 86, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 110, 86, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#0F6E56]/8 to-[#12857D]/6 blur-[130px] pointer-events-none -z-10" />
      <FloatingParticles />

      {/* Molecular network SVG */}
      <svg 
        className="absolute left-[-2%] top-[10%] w-72 h-72 text-[#12857D] opacity-[0.035] pointer-events-none -z-10" 
        viewBox="0 0 200 200" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
      >
        <circle cx="40" cy="50" r="3.5" fill="currentColor" />
        <circle cx="100" cy="30" r="4.5" fill="currentColor" />
        <circle cx="140" cy="70" r="3" fill="currentColor" />
        <circle cx="80" cy="110" r="3.5" fill="currentColor" />
        <circle cx="160" cy="130" r="4.5" fill="currentColor" />
        <circle cx="50" cy="150" r="3" fill="currentColor" />
        
        <line x1="40" y1="50" x2="100" y2="30" />
        <line x1="100" y1="30" x2="140" y2="70" />
        <line x1="40" y1="50" x2="80" y2="110" />
        <line x1="80" y1="110" x2="140" y2="70" />
        <line x1="140" y1="70" x2="160" y2="130" />
        <line x1="80" y1="110" x2="50" y2="150" />
        <line x1="50" y1="150" x2="160" y2="130" strokeDasharray="3 3" />
      </svg>

      {/* DNA line art SVG */}
      <svg 
        className="absolute right-[-2%] bottom-[5%] w-80 h-80 text-[#0F6E56] opacity-[0.03] pointer-events-none -z-10" 
        viewBox="0 0 200 200" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
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

      <div className="max-w-7xl mx-auto relative">
        
        {/* --- TIMELINE COMPONENT (Behind cards) --- */}
        {/* 1. Desktop Timeline Layout */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 hidden lg:block -z-10">
          <div className="absolute left-[12.5%] right-[12.5%] top-0 bottom-0 bg-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#12857D]/60 to-transparent" />
            <div className="absolute top-1/2 w-48 h-[4px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#12857D] to-transparent rounded-full shadow-[0_0_15px_#12857D] animate-desktop-pulse" />
          </div>
          <div className="absolute inset-0 flex justify-between px-[12.5%] -translate-y-[9px] pointer-events-none">
            {highlights.map((item) => (
              <div 
                key={item.id} 
                className={`w-5 h-5 rounded-full border-[3px] bg-white transition-all duration-500 ${item.nodeGlowClass}`} 
              />
            ))}
          </div>
        </div>

        {/* 2. Tablet Timeline Layout */}
        <div className="absolute inset-0 hidden md:block lg:hidden -z-10">
          <div className="absolute top-[25%] left-0 right-0 h-[2px] -translate-y-1/2">
            <div className="absolute left-[25%] right-[25%] top-0 bottom-0 bg-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#12857D]/60 to-transparent" />
              <div className="absolute top-1/2 w-48 h-[4px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#12857D] to-transparent rounded-full shadow-[0_0_15px_#12857D] animate-tablet-pulse-row1" />
            </div>
            <div className="absolute inset-0 flex justify-between px-[25%] -translate-y-[9px] pointer-events-none">
              <div className={`w-5 h-5 rounded-full border-[3px] bg-white ${highlights[0].nodeGlowClass}`} />
              <div className={`w-5 h-5 rounded-full border-[3px] bg-white ${highlights[1].nodeGlowClass}`} />
            </div>
          </div>
          <div className="absolute top-[75%] left-0 right-0 h-[2px] -translate-y-1/2">
            <div className="absolute left-[25%] right-[25%] top-0 bottom-0 bg-slate-200/50">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#12857D]/60 to-transparent" />
              <div className="absolute top-1/2 w-48 h-[4px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#12857D] to-transparent rounded-full shadow-[0_0_15px_#12857D] animate-tablet-pulse-row2" />
            </div>
            <div className="absolute inset-0 flex justify-between px-[25%] -translate-y-[9px] pointer-events-none">
              <div className={`w-5 h-5 rounded-full border-[3px] bg-white ${highlights[2].nodeGlowClass}`} />
              <div className={`w-5 h-5 rounded-full border-[3px] bg-white ${highlights[3].nodeGlowClass}`} />
            </div>
          </div>
        </div>

        {/* --- CARDS GRID --- */}
        {/* Desktop & Tablet Grid Container */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: "easeOut"
                }}
                className="h-full"
              >
                <TiltCard glowClass={item.glowClass}>
                  {/* Floating Icon Header (Parallax translateZ 40px) */}
                  <div 
                    className="flex items-center justify-between mb-6"
                    style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/5 text-[#0F6E56] flex items-center justify-center shrink-0 border border-[#0F6E56]/10 shadow-[0_4px_12px_rgba(15, 110, 86,0.03)] group transition-all duration-500 animate-icon-float">
                      <IconComponent size={22} className="transition-transform duration-500 group-hover:rotate-[6deg]" />
                    </div>
                  </div>

                  {/* Main Value Display (Parallax translateZ 30px) */}
                  <div 
                    className="text-4xl lg:text-[38px] xl:text-[42px] font-extrabold text-slate-900 tracking-tight leading-none mb-3 group-hover:scale-105 transition-transform duration-500 origin-left whitespace-nowrap"
                    style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                  >
                    {item.type === 'number' ? (
                      <Counter value={item.value as number} suffix={item.suffix} />
                    ) : (
                      <TextReveal text={item.value as string} />
                    )}
                  </div>

                  {/* Subtitle / Title (Parallax translateZ 20px) */}
                  <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    {item.title && (
                      <div className="text-[12px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                        {item.title}
                      </div>
                    )}
                    {item.subtitle && (
                      <div className="text-[11px] font-bold text-[#0F6E56] uppercase tracking-wider mb-2">
                        {item.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="flex-grow min-h-[12px]" />

                  {/* Description (Parallax translateZ 12px) */}
                  <p 
                    className="text-slate-500 text-xs sm:text-[13px] leading-relaxed"
                    style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }}
                  >
                    {item.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipeable Horizontal Carousel */}
        <div className="md:hidden relative py-6">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 px-4 pb-8 relative z-10">
            
            <div 
              className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-slate-200/50 -z-10"
              style={{ width: '1280px', left: '169px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#12857D]/60 to-transparent" />
              <div 
                className="absolute top-1/2 w-48 h-[4px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#12857D] to-transparent rounded-full shadow-[0_0_15px_#12857D] animate-desktop-pulse" 
                style={{ width: '250px' }}
              />
            </div>

            <div className="absolute top-1/2 -translate-y-[9px] pointer-events-none -z-10" style={{ width: '1280px' }}>
              <div className="absolute left-[0px] w-5 h-5 rounded-full border-[3px] bg-white transition-all duration-500 animate-[node-glow-1_8s_infinite]" />
              <div className="absolute left-[314px] w-5 h-5 rounded-full border-[3px] bg-white transition-all duration-500 animate-[node-glow-2_8s_infinite]" />
              <div className="absolute left-[628px] w-5 h-5 rounded-full border-[3px] bg-white transition-all duration-500 animate-[node-glow-3_8s_infinite]" />
              <div className="absolute left-[942px] w-5 h-5 rounded-full border-[3px] bg-white transition-all duration-500 animate-[node-glow-4_8s_infinite]" />
            </div>

            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              
              return (
                <div 
                  key={item.id} 
                  className="snap-center shrink-0 w-[290px] h-[250px] flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.12,
                      ease: "easeOut"
                    }}
                    className="h-full"
                  >
                    <TiltCard glowClass={item.glowClass}>
                      {/* Floating Icon Header */}
                      <div 
                        className="flex items-center justify-between mb-5"
                        style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#0F6E56]/5 text-[#0F6E56] flex items-center justify-center shrink-0 border border-[#0F6E56]/10 shadow-[0_4px_12px_rgba(15, 110, 86,0.03)] group transition-all duration-500 animate-icon-float">
                          <IconComponent size={22} className="transition-transform duration-500 group-hover:rotate-[6deg]" />
                        </div>
                      </div>

                      {/* Main Value Display */}
                      <div 
                        className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-3 group-hover:scale-105 transition-transform duration-500 origin-left whitespace-nowrap"
                        style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                      >
                        {item.type === 'number' ? (
                          <Counter value={item.value as number} suffix={item.suffix} />
                        ) : (
                          <TextReveal text={item.value as string} />
                        )}
                      </div>

                      {/* Subtitle / Title */}
                      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                        {item.title && (
                          <div className="text-[12px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                            {item.title}
                          </div>
                        )}
                        {item.subtitle && (
                          <div className="text-[11px] font-bold text-[#0F6E56] uppercase tracking-wider mb-2">
                            {item.subtitle}
                          </div>
                        )}
                      </div>

                      <div className="flex-grow" />

                      {/* Description */}
                      <p 
                        className="text-slate-500 text-xs sm:text-[13px] leading-relaxed"
                        style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }}
                      >
                        {item.description}
                      </p>
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] animate-ping" />
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Swipe to Explore</span>
          </div>

        </div>

      </div>
    </section>
  );
}
