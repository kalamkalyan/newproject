'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Heart, 
  Award, 
  Sparkles, 
  Cpu, 
  BookOpen, 
  ArrowRight,
  Smile,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function LifeAtTherallen() {
  const bgSoft = '#E1F5EE'; // pale teal tint
  const headingColor = '#0F6E56';
  const bodyColor = '#475569';
  const accentColor = '#12857D';

  const cultureValues = [
    {
      title: 'Innovation-First Mindset',
      description: 'We encourage curiosity, challenge conventions, and empower our teams to design novel drug formulations.',
      icon: Sparkles,
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Inclusivity & Diversity',
      description: 'We believe diverse perspectives drive better solutions. Our workplace respects and celebrates all unique voices.',
      icon: Users,
      color: 'from-blue-500/10 to-indigo-500/10',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Continuous Growth',
      description: 'With regular training, mentorship, and support for education, your growth path at Therallen is continuous.',
      icon: TrendingUp,
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'Purpose-Driven Collaboration',
      description: 'From R&D to cGMP manufacturing, we work as one unified team dedicated to improving global patient outcomes.',
      icon: Cpu,
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-600'
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive medical insurance and regular wellness programs for employees and families.',
      icon: Heart
    },
    {
      title: 'Professional Growth',
      description: 'Access to seminars, continuous skills workshops, and industry research conferences.',
      icon: BookOpen
    },
    {
      title: 'Modern Infrastructure',
      description: 'Work in state-of-the-art laboratories and offices engineered for safety and comfort.',
      icon: Award
    },
    {
      title: 'Work-Life Harmony',
      description: 'Flexible options, leave policies, and employee engagement events to unwind.',
      icon: Smile
    },
    {
      title: 'Safety & Compliance',
      description: 'Highest standards of laboratory safety and operational compliance protocols.',
      icon: ShieldCheck
    },
    {
      title: 'Fast-Paced Environment',
      description: 'An agile workspace that values quick execution, short timelines, and rapid learning.',
      icon: Zap
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[240px] sm:h-[280px] bg-[#03112E] overflow-hidden">
        {/* Background decorative glows */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[70%] rounded-full bg-therallen-cyan/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center relative z-10">
          <div className="w-1/2 md:w-[50%] flex flex-col justify-center space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Life at Therallen
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
              <a href="/" className="text-[#00C6FF] hover:text-[#00C6FF]/80 transition-colors">
                Home
              </a>
              <span className="text-white/40">/</span>
              <span className="text-white/60">Careers</span>
              <span className="text-white/40">/</span>
              <span className="text-white/85">Life at Therallen</span>
            </div>
          </div>
        </div>

        {/* Right Image Block with Custom CSS Diagonal Cut and White Border */}
        <div className="absolute right-0 top-0 w-[55%] sm:w-[60%] md:w-[60%] lg:w-[55%] h-full z-0 select-none pointer-events-none">
          <div
            className="w-full h-full bg-white relative"
            style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          >
            <div
              className="w-full h-full relative"
              style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 3% 100%)' }}
            >
              <Image
                src="/life_at_therallen_cover.jpg"
                alt="Life at Therallen Cover"
                fill
                sizes="(max-width: 768px) 60vw, 55vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Intro section */}
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12857D]/5 border border-[#12857D]/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <span className="font-bold text-xs tracking-wider uppercase" style={{ color: accentColor }}>
                Our Culture
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: headingColor }}>
              A Workspace Where Ideas Breathe &amp; Careers Flourish
            </h2>
            <div className="space-y-4 text-base leading-8" style={{ color: bodyColor }}>
              <p>
                At Therallen Pharma, we believe that creating innovative formulation solutions requires a workplace that inspires. We cultivate an environment of absolute transparency, mutual respect, and continuous technical learning.
              </p>
              <p>
                Whether you are a scientist working in our iSentre Innovation Lab in Hyderabad or a manufacturing specialist in Nalagarh, you are part of a shared vision. We focus on shortening timelines for global generic products while maintaining pristine regulatory standards.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[320px] rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/about_us.jpg"
              alt="Therallen office workplace"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-[#F8FCFA] mt-16 py-16 lg:py-24 border-y border-[#E8F6F1]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: headingColor }}>
              Our Core Values in Action
            </h2>
            <p className="text-base mt-4" style={{ color: bodyColor }}>
              These fundamental principles guide how we work, how we interact with our customers, and how we grow together.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-8 md:grid-cols-2"
          >
            {cultureValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} flex-shrink-0`}>
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-800">{value.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-bold text-xs tracking-widest uppercase" style={{ color: accentColor }}>
            What We Offer
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2" style={{ color: headingColor }}>
            Employee Benefits &amp; Perks
          </h2>
          <p className="text-base mt-4" style={{ color: bodyColor }}>
            We support our professionals at every step, offering programs and packages that protect health, build skills, and celebrate success.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-100 hover:border-[#12857D]/20 transition-all duration-300 flex flex-col justify-between h-full bg-slate-50/50 hover:bg-[#E1F5EE]/20 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-5 h-5" style={{ color: accentColor }} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div 
          className="rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
          style={{ backgroundColor: bgSoft, border: '1px solid #D7EFE6' }}
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-therallen-cyan/5 to-therallen-blue/5 blur-[80px] pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: headingColor }}>
              Join Our Mission at Therallen
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: bodyColor }}>
              Explore how your capabilities can match our drug delivery innovation. Discover open roles and make the next step in your career.
            </p>
          </div>

          <a
            href="/careers/current-openings"
            className="flex items-center gap-2 bg-[#0F6E56] hover:bg-[#12857D] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex-shrink-0 group shadow-md shadow-therallen-blue/10 hover:shadow-therallen-blue/20"
          >
            <span>View Current Openings</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
