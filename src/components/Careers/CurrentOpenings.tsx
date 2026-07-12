'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Send, 
  CheckCircle,
  Briefcase,
  Mail,
  MapPin
} from 'lucide-react';

export default function CurrentOpenings() {
  const bgSoft = '#E1F5EE'; // pale teal tint
  const headingColor = '#0F6E56';
  const bodyColor = '#475569';
  const accentColor = '#12857D';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    experience: '',
    coverLetter: '',
    resumeName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resumeName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
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
              Current Openings
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
              <a href="/" className="text-[#00C6FF] hover:text-[#00C6FF]/80 transition-colors">
                Home
              </a>
              <span className="text-white/40">/</span>
              <span className="text-white/60">Careers</span>
              <span className="text-white/40">/</span>
              <span className="text-white/85">Current Openings</span>
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
                src="/leadership_cover.jpg"
                alt="Current Openings Cover"
                fill
                sizes="(max-width: 768px) 60vw, 55vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          
          {/* Left Column: Status Description */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12857D]/5 border border-[#12857D]/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <span className="font-bold text-xs tracking-wider uppercase" style={{ color: accentColor }}>
                Careers Update
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: headingColor }}>
                No Active Openings Right Now
              </h2>
              <p className="text-base leading-8" style={{ color: bodyColor }}>
                Thank you for your interest in joining Therallen Pharma. We do not have any open positions available at this time.
              </p>
              <p className="text-base leading-8" style={{ color: bodyColor }}>
                However, we are always interested in connecting with talented professionals in formulation development, QA/QC, regulatory affairs, and manufacturing operations. 
              </p>
              <p className="text-base leading-8" style={{ color: bodyColor }}>
                Please submit your details and resume using the form. Our HR team will keep your profile in our active database and reach out to you as soon as an opportunity that matches your skills becomes available.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4 text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-[#12857D] border border-slate-100">
                  <Mail size={16} />
                </div>
                <span>careers@therallenpharma.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-[#12857D] border border-slate-100">
                  <MapPin size={16} />
                </div>
                <span>Hyderabad &amp; Nalagarh, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: General Resume Submission Card */}
          <div className="rounded-3xl border border-slate-100 bg-[#F8FCFA] p-8 shadow-sm sm:p-10" style={{ borderColor: '#D7EFE6' }}>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Submit Profile</h3>
            <p className="text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">For Future Career Opportunities</p>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#12857D] focus:ring-1 focus:ring-[#12857D] outline-none text-slate-700"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#12857D] focus:ring-1 focus:ring-[#12857D] outline-none text-slate-700"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#12857D] focus:ring-1 focus:ring-[#12857D] outline-none text-slate-700"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Department of Interest *</label>
                    <select
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#12857D] focus:ring-1 focus:ring-[#12857D] outline-none text-slate-700"
                    >
                      <option value="">Select Department</option>
                      <option value="Research & Development">Research &amp; Development</option>
                      <option value="Quality Assurance & Control">Quality Assurance &amp; Control</option>
                      <option value="Regulatory Affairs">Regulatory Affairs</option>
                      <option value="Manufacturing & Operations">Manufacturing &amp; Operations</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Total Experience *</label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#12857D] focus:ring-1 focus:ring-[#12857D] outline-none text-slate-700"
                    >
                      <option value="">Select Experience</option>
                      <option value="Fresher">Fresher (Under 1 year)</option>
                      <option value="1-3">1 - 3 Years</option>
                      <option value="3-6">3 - 6 Years</option>
                      <option value="6+">6+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Resume Upload (PDF / DOCX) *</label>
                  <div className="relative border border-dashed border-slate-200 hover:border-[#12857D] rounded-xl p-4 text-center cursor-pointer bg-white transition-colors">
                    <input
                      type="file"
                      required={!formData.resumeName}
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1 text-xs text-slate-500">
                      <FileText size={20} className="text-slate-400 mb-0.5" />
                      {formData.resumeName ? (
                        <span className="font-bold text-slate-700">{formData.resumeName}</span>
                      ) : (
                        <>
                          <span className="font-bold" style={{ color: accentColor }}>Upload file</span> or drag &amp; drop
                          <span className="text-[10px] text-slate-400">PDF, DOC, DOCX up to 5MB</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Cover Note / Message</label>
                  <textarea
                    name="coverLetter"
                    rows={3}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#12857D] focus:ring-1 focus:ring-[#12857D] outline-none text-slate-700 resize-none"
                    placeholder="Briefly introduce yourself and your expertise..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-white rounded-xl font-bold text-sm hover:opacity-95 disabled:opacity-50 transition-opacity cursor-pointer shadow-md shadow-therallen-blue/10"
                    style={{ backgroundColor: accentColor }}
                  >
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Details</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-14 h-14 rounded-full bg-[#E1F5EE] flex items-center justify-center text-[#0F6E56] mb-5"
                >
                  <CheckCircle size={30} />
                </motion.div>
                <h4 className="text-lg font-bold text-slate-800">Profile Received!</h4>
                <p className="text-xs text-slate-500 mt-2 max-w-sm leading-relaxed">
                  Thank you for submitting your resume. We have successfully registered your details in our system. We will contact you once an opportunity opens up.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      department: '',
                      experience: '',
                      coverLetter: '',
                      resumeName: ''
                    });
                  }}
                  className="mt-6 px-6 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-xs rounded-full transition-all duration-300"
                >
                  Submit Another Profile
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
