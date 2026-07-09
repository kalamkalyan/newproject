"use client";

import Image from 'next/image';

type CapabilitySubPage = 'manufacturing' | 'research-development' | 'quality-assurance' | 'technology-platforms';

interface CapabilitiesProps {
  subPage: CapabilitySubPage;
}

const techPlatforms = [
  { icon: '🔬', name: 'Single Pellet Strategies' },
  { icon: '💊', name: 'Combination Products' },
  { icon: '📋', name: 'Patent Non-Infringing Products' },
  { icon: '⏱️', name: 'Extended Release Formulations' },
  { icon: '🔄', name: 'Dual Delayed Release Formulations' },
  { icon: '⚡', name: 'Immediate Release Formulations' },
  { icon: '🧪', name: 'Multi Unit Particulate Systems (MUPS)' },
  { icon: '🛡️', name: 'Enteric Coated Formulations' },
];

const capabilityData: Record<CapabilitySubPage, {
  bannerTitle: string;
  coverImage: string;
  tagline: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
}> = {
  'manufacturing': {
    bannerTitle: 'Manufacturing',
    coverImage: '/capuse_therellen2.png',
    tagline: 'Our Capabilities',
    heading: 'Manufacturing',
    subheading: 'Precision at every stage — from API to finished dose.',
    paragraphs: [
      'Therallen operates a modern cGMP-compliant manufacturing facility capable of producing high-quality pharmaceutical formulations.',
      'The facility supports commercial-scale manufacturing while ensuring strict adherence to international quality standards and regulatory requirements.',
    ],
  },
  'research-development': {
    bannerTitle: 'Research & Development',
    coverImage: '/nitrosamine_free_lab.png',
    tagline: 'Our Capabilities',
    heading: 'Research & Development',
    subheading: 'Innovation-led science for next-generation pharmaceuticals.',
    paragraphs: [
      'The Research & Development division focuses on innovative formulation technologies, process optimization, and product lifecycle management.',
      'By leveraging scientific expertise and advanced technologies, Therallen develops differentiated pharmaceutical products for global markets.',
    ],
  },
  'quality-assurance': {
    bannerTitle: 'Quality Assurance',
    coverImage: '/analytical_validation.png',
    tagline: 'Our Capabilities',
    heading: 'Quality Assurance',
    subheading: 'Quality is not an act — it is a habit built into every process.',
    paragraphs: [
      'Quality is the foundation of every Therallen product. The Quality Assurance team ensures compliance with international regulatory guidelines.',
      'This is achieved through rigorous quality control systems, documentation, validation processes, and continuous improvement initiatives.',
    ],
  },
  'technology-platforms': {
    bannerTitle: 'Technology Platforms',
    coverImage: '/pellet_technologies.jpg',
    tagline: 'Our Capabilities',
    heading: 'Technology Platforms',
    subheading: 'Advanced formulation technologies driving therapeutic innovation.',
    paragraphs: [
      'Therallen specializes in multiple advanced formulation technologies, enabling the development of complex and differentiated pharmaceutical products for global markets.',
    ],
  },
};

export default function Capabilities({ subPage }: CapabilitiesProps) {
  const bgSoft = '#E1F5EE';
  const headingColor = '#0F6E56';
  const bodyColor = '#475569';
  const accentColor = '#12857D';

  const data = capabilityData[subPage];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ── Hero Banner ── */}
      <div className="relative w-full h-[220px] sm:h-[260px] bg-[#03112E] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[70%] rounded-full bg-therallen-cyan/5 blur-[100px]" />
        </div>

        {/* Left text block */}
        <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center relative z-10">
          <div className="w-1/2 md:w-[50%] flex flex-col justify-center space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {data.bannerTitle}
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
              <a href="/" className="text-[#00C6FF] hover:text-[#00C6FF]/80 transition-colors">
                Home
              </a>
              <span className="text-white/40">/</span>
              <span className="text-white/60">Capabilities</span>
              <span className="text-white/40">/</span>
              <span className="text-white/85">{data.bannerTitle}</span>
            </div>
          </div>
        </div>

        {/* Right image with diagonal clip */}
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
                src={data.coverImage}
                alt={`${data.bannerTitle} Cover`}
                fill
                sizes="(max-width: 768px) 60vw, 55vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {subPage === 'technology-platforms' ? (
          /* Technology Platforms — grid of tech cards */
          <div className="space-y-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: accentColor }}>
                {data.tagline}
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4" style={{ color: headingColor }}>
                {data.heading}
              </h2>
              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-7 mb-3" style={{ color: bodyColor }}>
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techPlatforms.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-3 rounded-2xl border px-6 py-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: bgSoft, borderColor: '#D7EFE6' }}
                >
                  <span className="text-3xl">{tech.icon}</span>
                  <p className="text-[15px] font-semibold leading-6" style={{ color: headingColor }}>
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Manufacturing / R&D / Quality Assurance — two-column layout */
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: accentColor }}>
                {data.tagline}
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: headingColor }}>
                {data.heading}
              </h2>
              <p className="max-w-xl text-lg leading-8" style={{ color: bodyColor }}>
                {data.subheading}
              </p>
            </div>

            <div className="rounded-3xl border p-8 shadow-sm sm:p-10" style={{ backgroundColor: bgSoft, borderColor: '#D7EFE6' }}>
              <div className="space-y-6 text-base leading-8" style={{ color: bodyColor }}>
                {data.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
