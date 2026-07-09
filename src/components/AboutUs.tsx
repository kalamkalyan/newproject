"use client";

import Image from 'next/image';

interface AboutUsProps {
  subPage?: 'overview' | 'vision-mission' | 'leadership' | 'milestones';
}

export default function AboutUs({ subPage = 'vision-mission' }: AboutUsProps) {
  const milestones = [
    { year: '2017', achievement: 'Company incorporated and R&D facility established' },
    { year: '2018', achievement: 'cGMP Manufacturing Facility established' },
    { year: '2021', achievement: 'Patent Non-Infringing Products filed in Mexico and Brazil' },
    { year: '2023', achievement: 'Manufacturing facility audited by international customers' },
    { year: '2024', achievement: 'Expanded global customer base and product portfolio' },
    { year: '2025', achievement: 'Introduced Nitrosamine-Free Products' },
  ];

  const leadershipText = [
    "Therallen's leadership team consists of experienced pharmaceutical professionals with extensive expertise in formulation development, regulatory affairs, manufacturing, quality assurance, and global business development.",
    "Their collective knowledge enables the company to develop innovative products while maintaining the highest standards of quality, compliance, and operational excellence.",
    "Together, the team drives Therallen's mission of delivering value-driven healthcare solutions worldwide."
  ];

  const aboutText = `To become a transnational pharmaceutical company through research & development and introduction of a wide range portfolio of generic products in key markets. To provide the best possible, range of quality products at competitive prices through integration, research, innovation and development.

Driven by ethical standards in our practices meeting the regulatory expectations and customer satisfaction. Highly committed to bring innovative products for the healthcare professional to improve the health and well being of individuals. Top of Mind Recall for Customized Solutions. We believe in providing integrated product services at a very competent price within the shortest timelines, thereby drastically reducing the time and cost for the Client.

Encouraging research, creativity and innovation in planning and execution of work. All the employees have appropriate qualification, training, skills and experience to carry out their work effectively. We Develop transparency in all areas of operations and build robust quality culture across the organization. Our policy of continuous process and product improvement drives us to work towards meeting the regulatory standards.`;

  const acronym = [
    { letter: 'T', detail: 'Technology Driven' },
    { letter: 'H', detail: 'High Quality' },
    { letter: 'E', detail: 'Efficient' },
    { letter: 'R', detail: 'Research' },
    { letter: 'A', detail: 'Advanced' },
    { letter: 'L', detail: 'Learning' },
    { letter: 'L', detail: 'Leadership' },
    { letter: 'E', detail: 'Expertise' },
    { letter: 'N', detail: 'Novelty' }
  ];

  const introText = [
    "Therallen Pharma Pvt. Ltd. is a research-driven pharmaceutical company established in June 2017 with expertise in developing innovative generic formulations and advanced drug delivery systems.",
    "The company integrates research, product development, and commercial manufacturing to deliver high-quality pharmaceutical solutions for global healthcare.",
    "With an R&D center in Hyderabad and a manufacturing facility in Nalagarh, Therallen is committed to innovation, quality, and customer satisfaction."
  ];

  // Colour tokens requested by user
  const bgSoft = '#E1F5EE'; // pale teal tint for backgrounds
  const headingColor = '#0F6E56';
  const bodyColor = '#475569';
  const accentColor = '#12857D';

  const isOverview = subPage === 'overview';
  const isLeadership = subPage === 'leadership';
  const isMilestones = subPage === 'milestones';

  const bannerTitle = isOverview
    ? 'Company Overview'
    : isLeadership
      ? 'Leadership & Team'
      : isMilestones
        ? 'Milestones'
        : 'Vision & Mission';

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[220px] sm:h-[260px] bg-[#03112E] overflow-hidden">
        {/* Background decorative glows */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[70%] rounded-full bg-therallen-cyan/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center relative z-10">
          {/* Left Text Block */}
          <div className="w-1/2 md:w-[50%] flex flex-col justify-center space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {bannerTitle}
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
              <a href="/" className="text-[#00C6FF] hover:text-[#00C6FF]/80 transition-colors">
                Home
              </a>
              <span className="text-white/40">/</span>
              <span className="text-white/60">About Us</span>
              <span className="text-white/40">/</span>
              <span className="text-white/85">
                {bannerTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Block with Custom CSS Diagonal Cut and White Border */}
        <div className="absolute right-0 top-0 w-[55%] sm:w-[60%] md:w-[60%] lg:w-[55%] h-full z-0 select-none pointer-events-none">
          {/* Outer white-backed container clipped diagonally */}
          <div
            className="w-full h-full bg-white relative"
            style={{
              clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            {/* Inner image container clipped with an offset to expose the white stripe */}
            <div
              className="w-full h-full relative"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 3% 100%)'
              }}
            >
              <Image
                src={
                  isLeadership
                    ? '/leadership_cover.jpg'
                    : isMilestones
                      ? '/milestones_cover.jpg'
                      : isOverview
                        ? '/about_us.jpg'
                        : '/vision_mission_cover.jpg'
                }
                alt={`${bannerTitle} Cover`}
                fill
                sizes="(max-width: 768px) 60vw, 55vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {isOverview ? (
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Left Column: Brief Introduction */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12857D]/5 border border-[#12857D]/10 w-fit">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <span className="font-bold text-xs tracking-wider uppercase" style={{ color: accentColor }}>
                  Incorporated in June 2017
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: headingColor }}>
                Brief Introduction
              </h2>
              <div className="space-y-6 text-base leading-8" style={{ color: bodyColor }}>
                {introText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Acronym Card */}
            <div className="rounded-3xl border p-8 shadow-sm sm:p-10" style={{ backgroundColor: bgSoft, borderColor: '#D7EFE6' }}>
              <h3 className="text-lg font-bold tracking-wider uppercase mb-6" style={{ color: headingColor }}>
                Our Core Philosophy
              </h3>
              <div className="flex flex-col gap-3.5">
                {acronym.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-[15px] shadow-sm flex-shrink-0"
                      style={{ backgroundColor: accentColor, color: 'white' }}
                    >
                      {item.letter}
                    </div>
                    <div className="text-[15px] font-semibold text-slate-700">
                      — {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : isLeadership ? (
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: accentColor }}>
                About Therallen Pharma
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: headingColor }}>
                Leadership &amp; Team
              </h2>
              <p className="max-w-xl text-lg leading-8" style={{ color: bodyColor }}>
                Meet the experienced professionals who guide Therallen Pharma&apos;s vision, strategy, and day-to-day excellence.
              </p>
            </div>

            <div className="rounded-3xl border p-8 shadow-sm sm:p-10" style={{ backgroundColor: bgSoft, borderColor: '#D7EFE6' }}>
              <div className="space-y-6 text-base leading-8" style={{ color: bodyColor }}>
                {leadershipText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ) : isMilestones ? (
          <div className="space-y-12">
            {/* Section header */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: accentColor }}>
                Our Journey
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4" style={{ color: headingColor }}>
                Key Milestones
              </h2>
              <p className="text-base leading-7" style={{ color: bodyColor }}>
                From our founding in 2017 to today, each milestone reflects Therallen Pharma&apos;s commitment to innovation, quality, and global reach.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[56px] top-0 bottom-0 w-px hidden sm:block"
                style={{ backgroundColor: '#D7EFE6' }}
              />
              <div className="flex flex-col gap-6">
                {milestones.map((m, index) => (
                  <div key={index} className="flex items-start gap-6">
                    {/* Year badge */}
                    <div
                      className="relative z-10 flex-shrink-0 w-[112px] flex items-center justify-center rounded-2xl py-2.5 font-extrabold text-lg tracking-tight shadow-sm"
                      style={{ backgroundColor: accentColor, color: 'white' }}
                    >
                      {m.year}
                    </div>
                    {/* Achievement card */}
                    <div
                      className="flex-1 rounded-2xl border px-6 py-4 text-base font-medium leading-7 shadow-sm"
                      style={{ backgroundColor: bgSoft, borderColor: '#D7EFE6', color: bodyColor }}
                    >
                      {m.achievement}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: accentColor }}>
                About Therallen Pharma
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: headingColor }}>
                Vision &amp; Mission
              </h2>
              <p className="max-w-xl text-lg leading-8" style={{ color: bodyColor }}>
                We are committed to building a future-ready pharmaceutical organization grounded in quality, innovation, and reliable partnerships.
              </p>
            </div>

            <div className="rounded-3xl border p-8 shadow-sm sm:p-10" style={{ backgroundColor: bgSoft, borderColor: '#D7EFE6' }}>
              <div className="space-y-5 text-base leading-8 whitespace-pre-line" style={{ color: bodyColor }}>
                {aboutText}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
