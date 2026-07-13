'use client';

import React, { useState } from 'react';
import { Search, Info, Beaker, Shield, FileText, Activity } from 'lucide-react';

const activePellets = [
  { name: 'Atomoxetine IR Pellets', therapeutic: 'ADHD', reference: 'Strattera', badges: [] },
  { name: 'Methylphenidate ER HCl Pellets', therapeutic: 'ADHD', reference: 'Retalin', badges: ['Patent Non-Infringing'] },
  { name: 'Viloxazine HCl SR Pellets', therapeutic: 'ADHD', reference: 'Qelbree', badges: ['Patent Non-Infringing'] },
  { name: 'Memantine HCl ER & Donepezil HCl IR Pellets', therapeutic: 'Anti Alzheimers', reference: 'Namzaric', badges: ['Patent Non-Infringing'] },
  { name: 'Levomilnacipran HCl ER Pellets', therapeutic: 'Anti Depressant', reference: 'Fetzima', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Xanomeline Tartarate IR and Trospium Chloride IR Pellets', therapeutic: 'Anti Schizophrenia', reference: 'Cobenfy', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Venlafaxine HCl SR Pellets', therapeutic: 'Anti Depressant', reference: 'Effexor', badges: ['Nitrosamine-Free'] },
  { name: 'Duloxetine HCl EC Pellets', therapeutic: 'Anti Depressant', reference: 'Cymbalta', badges: ['Nitrosamine-Free'] },
  { name: 'Topiramate ER Pellets', therapeutic: 'Anti Epileptic', reference: 'Qudexy', badges: [] },
  { name: 'Linaclotide IR Pellets', therapeutic: 'Irritable Bowel Syndrome', reference: 'Linzess', badges: [] },
  { name: 'Peppermint Oil Pellets', therapeutic: 'Irritable Bowel Syndrome', reference: 'IBgard', badges: [] },
  { name: 'Dexlansoprazole DDR Pellets', therapeutic: 'Proton Pump Inhibitor', reference: 'Dexilant', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Esomeprazole EC micro Pellets for MUPS', therapeutic: 'Proton Pump Inhibitor', reference: 'Nexium', badges: [] },
  { name: 'Esomeprazole GR Granules for sachets', therapeutic: 'Proton Pump Inhibitor', reference: 'Nexium', badges: ['Patent Non-Infringing'] },
  { name: 'Trimetazidine DiHCl ER pellets', therapeutic: 'Anti Anginal', reference: 'Vastarel', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Metoprolol Succinate ER Pellets', therapeutic: 'Anti Hypertensive', reference: 'Quenzor', badges: [] },
  { name: 'Tamsulosin HCl SR Pellets', therapeutic: 'BPH', reference: 'Flomax', badges: [] },
  { name: 'Tamsulosin HCl SR & Dutasteride IR Pellets', therapeutic: 'BPH', reference: 'Combodart', badges: [] },
  { name: 'Choline Fenofibrate SR Pellets', therapeutic: 'Lipid Regulating Agent', reference: 'Trilipix', badges: [] },
  { name: 'Fenofibric acid MR & Rosuvastatin IR Pellets', therapeutic: 'Lipid Regulating Agent', reference: 'Cresadex Plus', badges: [] },
  { name: 'Tamsulosin SR + Tadalafil IR pellets', therapeutic: 'BPH', reference: '-', badges: [] },
  { name: 'Tadalafil IR pellets', therapeutic: 'BPH', reference: 'Cialis', badges: [] },
  { name: 'Amlodipine IR and Ramipril IR Pellets', therapeutic: 'Anti Hypertensive', reference: 'Naprix A', badges: [] },
  { name: 'Amlodipine IR Pellets', therapeutic: 'Anti Hypertensive', reference: 'Norvasc', badges: [] },
  { name: 'Ramipril IR Pellets', therapeutic: 'Anti Hypertensive', reference: 'Altace', badges: [] },
  { name: 'Fenofibrate IR Pellets', therapeutic: 'Lipid Regulating agent', reference: 'Lipofen', badges: [] },
  { name: 'Fenofibrate SR Pellets', therapeutic: 'Lipid Regulating agent', reference: 'Lipilfen', badges: [] },
  { name: 'Rosuvastatin IR Pellets', therapeutic: 'Lipid Regulating agent', reference: 'Crestor', badges: [] },
  { name: 'Memantine HCl ER Pellets', therapeutic: 'Anti Alzheimers', reference: 'Namenda', badges: [] },
  { name: 'Esomeprazole EC Pellets', therapeutic: 'Proton Pump Inhibitor', reference: 'Nexium', badges: [] },
  { name: 'Lansoprazole EC Pellets', therapeutic: 'Proton Pump Inhibitor', reference: 'Prevacid', badges: [] },
  { name: 'Omeprazole EC pellets', therapeutic: 'Proton Pump Inhibitor', reference: 'Losec', badges: [] },
  { name: 'Omeprazole Magnesium EC pellets', therapeutic: 'Proton Pump Inhibitor', reference: 'Losec', badges: [] },
  { name: 'Mebeverine HCl SR Pellets', therapeutic: 'Irritable Bowel Syndrome', reference: 'Colofac', badges: [] },
  { name: 'Activated Charcoal and Simethicone Pellets', therapeutic: 'Anti Flatulence', reference: '-', badges: [] },
  { name: 'Simethicone Pellets', therapeutic: 'Anti Flatulence', reference: '-', badges: [] },
  { name: 'Diclofenac Sodium SR Pellets', therapeutic: 'NSAID', reference: '-', badges: [] },
  { name: 'Ketoprofen SR Pellets', therapeutic: 'NSAID', reference: 'Oruvail', badges: [] },
  { name: 'Mesalamine HCl SR Pellets', therapeutic: 'Ulcerative Colitis', reference: 'Pentasa', badges: [] },
  { name: 'Dutasteride IR Pellets', therapeutic: 'BPH', reference: 'Avodart', badges: [] },
  { name: 'Acitretin IR Pellets', therapeutic: 'Anti Psoriasis', reference: 'Soriatane', badges: [] },
  { name: 'Itraconazole IR Pellets', therapeutic: 'Anti Fungal', reference: 'Sporanox', badges: [] },
  { name: 'Itraconazole IR granules (SUBA)', therapeutic: 'Anti Fungal', reference: 'Tolsura', badges: [] },
  { name: 'Aprepitant IR Pellets', therapeutic: 'Anti Emetic', reference: 'Emend', badges: [] },
  { name: 'Dabigatran IR Pellets', therapeutic: 'Anti Coagulant', reference: 'Pradaxa', badges: ['Patent Non-Infringing'] },
  { name: 'Orlistat IR Pellets', therapeutic: 'Anti Obesity', reference: 'Xenical', badges: [] }
];

const pipelinePellets = [
  { name: 'Topiramate & Phentermine Pellets', therapeutic: 'Anti convulsant', reference: 'Qsymia', status: 'Pipeline Development' },
  { name: 'Tacrolimus ER pellets', therapeutic: 'Immunosuppressant', reference: 'Astagraf XL', status: 'Pipeline Development' },
  { name: 'Empagliflozin IR & Metformin ER Granules', therapeutic: 'Anti Diabetic', reference: 'Synjardy XR', status: 'Pipeline Development' },
  { name: 'Empagliflozin IR & Linagliptine IR & Metformin ER Granules', therapeutic: 'Anti Diabetic', reference: 'Trijardy XR', status: 'Pipeline Development' }
];

export default function FinishedDoseClient() {
  const [activeSubTab, setActiveSubTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredItems = () => {
    const query = searchQuery.toLowerCase().trim();
    const source = activeSubTab === 'active' ? activePellets : pipelinePellets;
    return source.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.therapeutic.toLowerCase().includes(query) ||
      item.reference.toLowerCase().includes(query)
    );
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      
      {/* Overview introduction */}
      <div className="max-w-3xl mb-12 space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F6E56]">
          Finished Dose Formulations
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Therallen Pharma offers specialized Finished Dose Formulations in the form of ready-to-fill pellets and advanced solid oral delivery systems. Designed for encapsulation or tablet compression, our solid oral pellets (including Immediate Release, Sustained Release, Extended Release, and Enteric Coated formulations) guarantee high stability, controlled release kinetics, and optimized bioavailability.
        </p>
      </div>

      {/* Tabs & Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-4 border-b border-slate-100">
        
        {/* Toggle sub-tabs */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-full w-fit">
          <button
            onClick={() => {
              setActiveSubTab('active');
              setSearchQuery('');
            }}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2
              ${activeSubTab === 'active'
                ? 'bg-white text-[#0F6E56] shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            <Activity size={14} />
            <span>Active Formulations ({activePellets.length})</span>
          </button>
          <button
            onClick={() => {
              setActiveSubTab('pipeline');
              setSearchQuery('');
            }}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2
              ${activeSubTab === 'pipeline'
                ? 'bg-white text-[#0F6E56] shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            <Beaker size={14} />
            <span>R&D Pipeline formulations ({pipelinePellets.length})</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search formulations..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#12857D] text-xs font-semibold transition-all shadow-sm bg-white text-slate-800"
          />
          <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Increased Table Layout for User Experience */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-lg bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="bg-[#03112E] text-white text-[11px] font-extrabold uppercase tracking-wider">
                <th className="py-4.5 px-8 border-b border-slate-800">S.No.</th>
                <th className="py-4.5 px-8 border-b border-slate-800">Product Name</th>
                <th className="py-4.5 px-8 border-b border-slate-800">Therapeutic Segment</th>
                <th className="py-4.5 px-8 border-b border-slate-800">Reference Product</th>
                <th className="py-4.5 px-8 border-b border-slate-800 text-right">
                  {activeSubTab === 'active' ? 'Status / Badges' : 'Development Status'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              {filteredItems.map((item, idx) => (
                <tr 
                  key={idx} 
                  className={`text-slate-700 hover:bg-slate-50/80 transition-colors
                    ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                >
                  <td className="py-4.5 px-8 font-bold text-slate-400 text-xs">{idx + 1}</td>
                  <td className="py-4.5 px-8 font-extrabold text-slate-900 text-[14px] sm:text-[15px]">{item.name}</td>
                  <td className="py-4.5 px-8 font-semibold text-slate-600 text-xs sm:text-sm">{item.therapeutic}</td>
                  <td className="py-4.5 px-8 italic text-slate-500 text-xs sm:text-sm">{item.reference}</td>
                  <td className="py-4.5 px-8 text-right">
                    {activeSubTab === 'active' ? (
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {item.badges && item.badges.length > 0 ? (
                          item.badges.map(b => (
                            <span 
                              key={b} 
                              className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wide uppercase flex items-center gap-1
                                ${b === 'Patent Non-Infringing' 
                                  ? 'bg-[#E1F5EE] text-[#0F6E56] border border-[#0F6E56]/10' 
                                  : 'bg-amber-50 text-amber-700 border border-amber-600/10'}`}
                            >
                              {b === 'Patent Non-Infringing' && <Shield size={10} />}
                              {b === 'Nitrosamine-Free' && <Beaker size={10} />}
                              {b}
                            </span>
                          ))
                        ) : (
                          <span className="text-slate-400 text-[10px] font-semibold tracking-wider uppercase">—</span>
                        )}
                      </div>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-teal-50 text-teal-700 border-teal-600/10 inline-flex items-center gap-1">
                        <Beaker size={10} className="animate-pulse" />
                        {'status' in item ? item.status : 'Pipeline'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-slate-400 space-y-2">
            <Info className="mx-auto text-slate-300" size={32} />
            <p className="text-sm font-semibold">No formulations found matching "{searchQuery}"</p>
            <p className="text-xs">Try refining your search query.</p>
          </div>
        )}
      </div>

      {/* Footnote on standards */}
      {activeSubTab === 'active' && (
        <div className="mt-6 flex flex-wrap gap-4 text-[10px] font-semibold text-slate-400">
          <span className="flex items-center gap-1 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56]" />
            Patent Non-infringing: unique development routes avoiding IP blockages
          </span>
          <span className="flex items-center gap-1 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Nitrosamine-Free: compliant with safe formulation guidelines
          </span>
        </div>
      )}
    </div>
  );
}
