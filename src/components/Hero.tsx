'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-white pt-[20px] lg:pt-[24px] px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-0 pb-16 relative">
        
        {/* Left Side Column: Static Text (z-20 to overlay above image) */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-therallen-blue/5 border border-therallen-blue/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-therallen-blue" />
            <span className="text-therallen-blue font-bold text-xs tracking-wider uppercase">
              Therapeutics by Design
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-therallen-black leading-[1.15] mb-6 tracking-tight">
            Innovative Drug <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-therallen-blue to-therallen-cyan bg-clip-text text-transparent">
              Delivery Systems
            </span> <br />
            Engineered for <br className="hidden lg:block" />
            Global Healthcare
          </h1>

          <p className="text-slate-600 text-[16px] sm:text-lg leading-relaxed max-w-xl mb-0">
            Research-driven pharmaceutical solutions delivering complex formulations, advanced pellet technologies, and scalable manufacturing excellence.
          </p>
        </div>

        {/* Right Side Column: Image (z-10, overlays under text slightly on desktop) */}
        <div className="w-full lg:w-[65%] flex justify-end items-start pt-0 z-10 relative lg:-ml-[10%]">
          <div className="relative w-full aspect-square flex justify-end items-center select-none">
            {/* Masked image container that blends edges naturally */}
            <div 
              className="relative w-full h-full flex justify-end items-center"
              style={{
                maskImage: 'radial-gradient(circle closest-side, black 45%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle closest-side, black 45%, transparent 95%)'
              }}
            >
              <Image
                src="/capuse_therellen2.png"
                alt="Therallen Drug Delivery Illustration"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain filter brightness-[1.05] contrast-[1.02]"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
