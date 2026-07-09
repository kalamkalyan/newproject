'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Beaker, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Globe, 
  Award, 
  CheckCircle,
  FileCheck,
  Quote,
  MapPin
} from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// --- Upgraded Helper: 3D interactive tilt, cursor-following spotlights, and parallax depth ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  isHoverable?: boolean;
}

export function TiltCard({ children, className = '', isHoverable = true }: TiltCardProps) {
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
      className={`relative rounded-[24px] overflow-hidden border border-slate-100/90 transition-all duration-500 h-full ${className} ${
        isHoverable && isHovered 
          ? 'shadow-[0_25px_50px_-12px_rgba(15, 110, 86,0.12)] bg-white/85' 
          : 'shadow-[0_4px_20px_rgba(0,0,0,0.005)] bg-white/70'
      }`}
      style={{
        transform: `perspective(1000px) translateY(${isHovered ? -10 : 0}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
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

      {/* Shimmer sweep effect */}
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

// --- Local Helper: Number counting animation ---
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

// --- Background floating particle generator ---
function FloatingParticles() {
  const particles = Array.from({ length: 6 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((_, idx) => {
        const size = 6 + (idx % 3) * 4;
        const startX = 10 + idx * 16;
        const startY = 15 + (idx % 2) * 55;
        
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
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 9 + idx * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

// --- Main LeadershipClient Component ---
export default function LeadershipClient() {
  const features = [
    {
      title: 'Operational Leadership',
      description: 'Strong operational management with a proven track record of running formulation businesses.',
      icon: Cpu,
    },
    {
      title: 'R&D & Formulation',
      description: 'Expert R&D team driving generic molecule development and advanced drug delivery systems.',
      icon: Beaker,
    },
    {
      title: 'Intellectual Property (IP)',
      description: 'IP-aware development strategies to establish solid non-infringing pathways for global markets.',
      icon: ShieldCheck,
    },
    {
      title: 'Quality & Process',
      description: 'A constant endeavor to maintain batch-to-batch quality, consistency, and strict cGMP compliance.',
      icon: Sparkles,
    },
    {
      title: 'Regulatory Excellence',
      description: 'Ensuring precision in every step to seamlessly align with global regulatory expectations.',
      icon: FileCheck,
    },
    {
      title: 'Marketing & Reach',
      description: 'Strong marketing and licensing network to support international partnerships and customer growth.',
      icon: Globe,
    }
  ];

  const stats = [
    {
      value: 150,
      suffix: '+',
      label: 'Combined Experience',
      description: 'Of core pharmaceutical leadership'
    },
    {
      value: 50,
      suffix: '+',
      label: 'Tech Transfers',
      description: 'Successfully scaled-up formulations'
    },
    {
      value: 30,
      suffix: '+',
      label: 'Formulation Scientists',
      description: 'Dedicated R&D and IP experts'
    },
    {
      value: 100,
      suffix: '%',
      label: 'cGMP Compliance',
      description: 'Strict international quality standards'
    }
  ];

  const teams = [
    {
      title: 'Formulation R&D & Tech Transfer',
      role: 'Research & Innovation',
      description: 'Our scientists in Hyderabad specialize in single pellet layering, combination products, and MUPS technology, translating bench-scale innovation into commercial recipes.',
      details: ['Advanced Pellet Layering', 'Dual Delayed Release', 'Immediate & Sustained Release Profiles', 'MUPS Development']
    },
    {
      title: 'IP & Global Regulatory Affairs',
      role: 'Compliance & Strategy',
      description: 'In-house legal and regulatory counsel orchestrate patent clearances and file dossiers to coordinate smooth entries into highly regulated global markets.',
      details: ['Non-Infringing Pathways', 'Dossier Support (eCTD)', 'Dossier Filings in LatAm & EU', 'Strict Patent Navigations']
    },
    {
      title: 'Manufacturing & Quality Assurance',
      role: 'cGMP Facility Management',
      description: 'Plant operations in Nalagarh ensure uniform batch consistency, executing commercial scale-up under rigorous cGMP protocols and international audits.',
      details: ['cGMP Certified Facility', 'Batch-to-Batch Consistency', 'High-Speed Solid Orals Production', 'FDA & WHO Guidelines Alignment']
    }
  ];

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-32 pb-24 overflow-hidden relative bg-white">
        
        {/* CSS Keyframes for shimmer and micro interactions */}
        <style jsx global>{`
          @keyframes card-shimmer {
            0% { transform: translateX(-150%) skewX(-15deg); }
            25% { transform: translateX(150%) skewX(-15deg); }
            100% { transform: translateX(150%) skewX(-15deg); }
          }
          @keyframes icon-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
          .animate-icon-float {
            animation: icon-float 3.5s ease-in-out infinite;
          }
        `}</style>

        {/* --- Background Visuals --- */}
        <div 
          className="absolute inset-0 -z-20 pointer-events-none opacity-[0.8]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 110, 86, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 110, 86, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-gradient-to-br from-[#0F6E56]/8 to-[#12857D]/12 blur-[130px] animate-pulse-glow" style={{ animationDuration: '12s' }} />
          <div className="absolute bottom-[20%] left-[-15%] w-[65%] h-[65%] rounded-full bg-gradient-to-tr from-[#12857D]/6 to-[#0F6E56]/10 blur-[150px] animate-pulse-glow" style={{ animationDuration: '16s' }} />
        </div>

        <FloatingParticles />

        {/* Molecular network SVG */}
        <svg 
          className="absolute right-[-2%] top-[15%] w-80 h-80 text-[#12857D] opacity-[0.035] pointer-events-none -z-10" 
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

        {/* DNA Line art SVG */}
        <svg 
          className="absolute left-[-2%] bottom-[10%] w-80 h-80 text-[#0F6E56] opacity-[0.03] pointer-events-none -z-10" 
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* --- HERO SECTION --- */}
          <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#0F6E56] font-bold text-xs tracking-wider uppercase mb-3 block"
            >
              Our Intellectual Capital
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Built by Industry Veterans.<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#0F6E56] to-[#12857D] bg-clip-text text-transparent">
                Driven by Scientific Excellence.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
            >
              At Therallen Pharma, we synthesize combined decades of generic formulation development, IP navigation, and commercial scale-up. Our multi-functional team merges R&D precision with business strategy, ensuring every dosage form aligns perfectly with global regulatory guidelines.
            </motion.p>
          </div>

          {/* --- BRIEF INTRODUCTION SECTION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32 pt-4">
            
            {/* Left Column: Styled Corporate Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] lg:h-[480px]">
                <img 
                  src="/DSC07191.JPG" 
                  alt="Therallen Corporate Building" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent z-10" />
                
                {/* Floating location tag or badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 text-white z-20 transition-all duration-300 group-hover:translate-y-[-4px]">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#12857D] uppercase block mb-1">
                    Therallen Pvt. Ltd.
                  </span>
                  <p className="text-xs text-slate-300 font-medium">
                    Corporate presence spanning key research & development hubs in India.
                  </p>
                </div>
              </div>

              {/* Decorative background glows */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#0F6E56]/15 to-[#12857D]/10 filter blur-3xl opacity-50 scale-105 pointer-events-none" />
            </motion.div>

            {/* Right Column: Brief Introduction Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <span className="text-[#0F6E56] font-bold text-xs tracking-[0.25em] uppercase mb-3 block">
                Brief Introduction
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Bridging Science & Strategy <br />
                <span className="bg-gradient-to-r from-[#0F6E56] to-[#12857D] bg-clip-text text-transparent">
                  Since June 2017
                </span>
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Welcome to <strong>Therallen Private Limited</strong>, a dynamic and innovative company dedicated to formulation Research and Development. Incorporating the expertise of seasoned industry veterans, we bridge the gap between initial pre-formulation intermediates and fully optimized commercial solid orals.
                </p>
                <p>
                  Committed to scientific precision, our scientists develop ready-to-fill Pellets and Granules that maximize therapeutic delivery efficacy. We leverage state-of-the-art technologies to create non-infringing generic formulation pathways that meet high global quality standards.
                </p>
              </div>

              {/* Facility Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 flex flex-col">
                  <span className="text-[10px] font-black tracking-wider text-[#0F6E56] uppercase mb-1">R&D Center</span>
                  <span className="font-extrabold text-slate-900 text-sm">Hyderabad, Telangana</span>
                  <span className="text-slate-400 text-xs mt-0.5">Scientific Innovation & IP Hub</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 flex flex-col">
                  <span className="text-[10px] font-black tracking-wider text-[#12857D] uppercase mb-1">Manufacturing Plant</span>
                  <span className="font-extrabold text-slate-900 text-sm">Nalagarh, Himachal Pradesh</span>
                  <span className="text-slate-400 text-xs mt-0.5">cGMP Scale-up Facility</span>
                </div>
              </div>

              {/* Address block */}
              <div className="p-4 rounded-2xl border border-dashed border-slate-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#0F6E56] flex items-center justify-center shrink-0 border border-slate-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Registered Office</h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                    Plot No. 67, 1st Floor, Chitiprolu Arcade, Jubilee Enclave, Hitech City, Madhapur, Hyderabad, Telangana 500081
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

          {/* --- CORE CAPABILITY PILLARS --- */}
          <div className="mb-28">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[#12857D] font-bold text-xs tracking-wider uppercase mb-2 block">
                Foundational Strengths
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Functional Expertise Pillars
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
                  >
                    <TiltCard>
                      {/* Floating Icon Header (Parallax translateZ 40px) */}
                      <div 
                        className="flex items-center justify-between mb-5"
                        style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
                      >
                        <div className="w-11 h-11 rounded-2xl bg-[#0F6E56]/5 text-[#0F6E56] flex items-center justify-center shrink-0 border border-[#0F6E56]/10 shadow-[0_4px_12px_rgba(15, 110, 86,0.02)] transition-all duration-500 animate-icon-float">
                          <IconComponent size={20} className="transition-transform duration-500 group-hover:rotate-[6deg]" />
                        </div>
                      </div>

                      {/* Title (Parallax translateZ 30px) */}
                      <h3 
                        className="text-[17px] font-extrabold text-slate-900 mb-3 group-hover:text-[#0F6E56] transition-colors duration-300"
                        style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Description (Parallax translateZ 18px) */}
                      <p 
                        className="text-slate-500 text-xs sm:text-[13px] leading-relaxed flex-grow"
                        style={{ transform: 'translateZ(18px)', transformStyle: 'preserve-3d' }}
                      >
                        {feature.description}
                      </p>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* --- DYNAMIC STATS COUNTER ROW --- */}
          <div className="mb-28 py-16 border-y border-slate-100 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="text-4xl lg:text-[44px] font-extrabold text-[#0F6E56] tracking-tight leading-none mb-3">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[12px] font-bold text-slate-800 uppercase tracking-widest mb-1.5">
                    {stat.label}
                  </div>
                  <p className="text-slate-400 text-xs leading-normal max-w-[180px]">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- HUMAN CAPITAL SHOWCASE --- */}
          <div className="mb-28">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[#0F6E56] font-bold text-xs tracking-wider uppercase mb-2 block">
                Operational Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Teams & Compliance Structure
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
                Meet the structured operations driving R&D scaling, strict intellectual property barriers, and regulatory pathways.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teams.map((team, idx) => (
                <motion.div
                  key={team.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                  className="h-full"
                >
                  <TiltCard>
                    <span 
                      className="text-[10px] font-bold text-[#0F6E56] uppercase tracking-wider mb-2 block"
                      style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
                    >
                      {team.role}
                    </span>
                    
                    <h3 
                      className="text-lg font-extrabold text-slate-900 mb-4 group-hover:text-[#0F6E56] transition-colors duration-300"
                      style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                    >
                      {team.title}
                    </h3>
                    
                    <p 
                      className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-6"
                      style={{ transform: 'translateZ(18px)', transformStyle: 'preserve-3d' }}
                    >
                      {team.description}
                    </p>

                    <div 
                      className="mt-auto border-t border-slate-50 pt-4 flex flex-col gap-2"
                      style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
                    >
                      {team.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle size={14} className="text-[#12857D] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- SIGNATURE QUOTE PANEL --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl mx-auto rounded-[32px] overflow-hidden border border-slate-100 shadow-xl bg-[#0F6E56]/[0.01]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F6E56]/[0.01] via-[#12857D]/[0.02] to-[#0F6E56]/[0.01]" />
            <div className="absolute top-[-30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#12857D]/5 to-transparent blur-[80px]" />
            
            <div className="relative z-10 px-8 py-16 sm:px-16 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F6E56]/5 flex items-center justify-center mb-6 text-[#0F6E56]">
                <Quote size={28} className="rotate-180 transform" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 italic leading-relaxed max-w-2xl">
                "Our greatest innovation is the expertise of our people."
              </h3>
              
              <div className="mt-6 flex flex-col items-center">
                <span className="w-8 h-[2px] bg-[#12857D] mb-3" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Therallen Pharma Leadership Vision
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </main>
      <Footer />
    </SmoothScroll>
  );
}
