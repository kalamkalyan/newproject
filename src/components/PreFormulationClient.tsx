'use client';

import React, { useState } from 'react';
import { Search, FileText, Settings, Info, Beaker } from 'lucide-react';

// Direct Compressible (DC) Granules data from PDF brochure
const activeGranules = [
  { name: 'Acetaminophen', concentration: '77%, 83% & 90%', dossier: 'Available' },
  { name: 'Ciprofloxacin', concentration: '65%', dossier: 'Not Available' },
  { name: 'Guaifenesin', concentration: '90% & 95%', dossier: 'Not Available' },
  { name: 'Ibuprofen', concentration: '63%, 66%, 73% & 85%', dossier: 'Available' },
  { name: 'Metformin Hydrochloride', concentration: '75%, 90% & 95%', dossier: 'Available' },
  { name: 'Metoprolol Succinate ER', concentration: '26%', dossier: 'Available' },
  { name: 'Pregabalin', concentration: '25%, 50%, 70%', dossier: 'Not Available' },
  { name: 'Ursodeoxycholic Acid', concentration: '70%', dossier: 'Not Available' },
  { name: 'Naproxen Sodium', concentration: '90%', dossier: 'Available' },
  { name: 'Glibenclamide', concentration: '4%', dossier: 'Not Available' },
  { name: 'Loperamide HCl', concentration: '1%', dossier: 'Not Available' },
  { name: 'Clarithromycin', concentration: '32%, 50% & 62.5%', dossier: 'Not Available' },
  { name: 'Carbamazepine', concentration: '50%', dossier: 'Not Available' },
  { name: 'Aspirin', concentration: '50%, 60%', dossier: 'Not Available' },
  { name: 'Sulfamethoxazole & Trimethoprim', concentration: '93%', dossier: 'Not Available' },
  { name: 'Dapagliflozin IR & Metformin ER Granules', concentration: '5mg/1000mg; 10mg/1000mg, 5mg/500mg; 10mg/500mg', dossier: 'Not Available' }
];

const pipelineGranules = [
  { name: 'Semaglutide IR DC granules', concentration: 'Dosage Form Intermediate', dossier: 'Under Development', therapeutic: 'Anti Diabetic' },
  { name: 'Deucravacitinib DC Granules', concentration: 'Dosage Form Intermediate', dossier: 'Under Development', therapeutic: 'Plaque Psoriasis' }
];

export default function PreFormulationClient() {
  const [activeSubTab, setActiveSubTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredItems = () => {
    const query = searchQuery.toLowerCase().trim();
    const source = activeSubTab === 'active' ? activeGranules : pipelineGranules;
    return source.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.concentration.toLowerCase().includes(query) ||
      item.dossier.toLowerCase().includes(query) ||
      ('therapeutic' in item && item.therapeutic.toLowerCase().includes(query))
    );
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      
      {/* Overview introduction */}
      <div className="max-w-3xl mb-12 space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F6E56]">
          Pre-Formulation Intermediates
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Therallen Pharma develops high-quality Direct Compressible (DC) granules as formulation intermediates. These granules are ready for compression into solid oral dosage forms, ensuring superior flowability, compressibility, and content uniformity. Created at our advanced <strong>iSentre</strong> R&D center in Hyderabad and manufactured at our cGMP facility in Nalagarh, these intermediates help streamline commercial formulation processes.
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
            <Settings size={14} />
            <span>Active DC Granules ({activeGranules.length})</span>
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
            <span>R&D Pipeline Granules ({pipelineGranules.length})</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search granules..."
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
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#03112E] text-white text-[11px] font-extrabold uppercase tracking-wider">
                <th className="py-4.5 px-8 border-b border-slate-800">S.No.</th>
                <th className="py-4.5 px-8 border-b border-slate-800">Product Name</th>
                <th className="py-4.5 px-8 border-b border-slate-800">
                  {activeSubTab === 'active' ? '% of Granules (w/w)' : 'Intermediate Specification'}
                </th>
                {activeSubTab === 'pipeline' && (
                  <th className="py-4.5 px-8 border-b border-slate-800">Therapeutic Segment</th>
                )}
                <th className="py-4.5 px-8 border-b border-slate-800 text-right">Dossier (eCTD) Status</th>
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
                  <td className="py-4.5 px-8 font-semibold text-slate-600 text-xs sm:text-sm">{item.concentration}</td>
                  {activeSubTab === 'pipeline' && 'therapeutic' in item && (
                    <td className="py-4.5 px-8 font-medium text-slate-500 text-xs sm:text-sm">
                      {item.therapeutic}
                    </td>
                  )}
                  <td className="py-4.5 px-8 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold border uppercase tracking-wider
                      ${item.dossier === 'Available'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-600/10'
                        : item.dossier === 'Under Development'
                          ? 'bg-teal-50 text-teal-700 border-teal-600/10'
                          : 'bg-slate-100 text-slate-400 border-slate-200'
                      }`}>
                      <FileText size={11} />
                      {item.dossier}
                    </span>
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
            <p className="text-sm font-semibold">No granules found matching "{searchQuery}"</p>
            <p className="text-xs">Try refining your search query.</p>
          </div>
        )}
      </div>

    </div>
  );
}
