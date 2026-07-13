'use client';

import React, { useState } from 'react';
import { Search, Brain, Activity, ShieldAlert, Shield, Heart, Zap, Info, ArrowLeft, Beaker } from 'lucide-react';

// Unified products list categorized by broad therapeutic categories
const productsData = [
  // 1. CNS & Neurology
  { name: 'Atomoxetine ER Pellets', segment: 'ADHD', reference: 'Strattera', type: 'Pellet', category: 'cns' },
  { name: 'Atomoxetine IR Pellets', segment: 'ADHD', reference: 'Strattera', type: 'Pellet', category: 'cns' },
  { name: 'Methylphenidate ER HCl Pellets', segment: 'ADHD', reference: 'Retalin', type: 'Pellet', category: 'cns', badges: ['Patent Non-Infringing'] },
  { name: 'Viloxazine HCl SR Pellets', segment: 'ADHD', reference: 'Qelbree', type: 'Pellet', category: 'cns', badges: ['Patent Non-Infringing'] },
  { name: 'Memantine HCl ER & Donepezil HCl IR Pellets', segment: 'Anti Alzheimers', reference: 'Namzaric', type: 'Pellet', category: 'cns', badges: ['Patent Non-Infringing'] },
  { name: 'Levomilnacipran HCl ER Pellets', segment: 'Anti Depressant', reference: 'Fetzima', type: 'Pellet', category: 'cns', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Xanomeline Tartarate IR and Trospium Chloride IR Pellets', segment: 'Anti Schizophrenia', reference: 'Cobenfy', type: 'Pellet', category: 'cns', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Venlafaxine HCl SR Pellets', segment: 'Anti Depressant', reference: 'Effexor', type: 'Pellet', category: 'cns', badges: ['Nitrosamine-Free'] },
  { name: 'Duloxetine HCl EC Pellets', segment: 'Anti Depressant', reference: 'Cymbalta', type: 'Pellet', category: 'cns', badges: ['Nitrosamine-Free'] },
  { name: 'Topiramate ER Pellets', segment: 'Anti Epileptic', reference: 'Qudexy', type: 'Pellet', category: 'cns' },
  { name: 'Memantine HCl ER Pellets', segment: 'Anti Alzheimers', reference: 'Namenda', type: 'Pellet', category: 'cns' },
  { name: 'Topiramate & Phentermine Pellets', segment: 'Anti Convulsant', reference: 'Qsymia', type: 'Pipeline Pellet', category: 'cns' },
  { name: 'Pregabalin Granules', segment: 'Neuropathic Pain', reference: '25%, 50%, 70% w/w', type: 'Granules', category: 'cns' },
  { name: 'Carbamazepine Granules', segment: 'Anti Convulsant', reference: '50% w/w', type: 'Granules', category: 'cns' },

  // 2. Gastroenterology
  { name: 'Linaclotide IR Pellets', segment: 'Irritable Bowel Syndrome', reference: 'Linzess', type: 'Pellet', category: 'gastro' },
  { name: 'Peppermint Oil Pellets', segment: 'Irritable Bowel Syndrome', reference: 'IBgard', type: 'Pellet', category: 'gastro' },
  { name: 'Dexlansoprazole DDR Pellets', segment: 'Proton Pump Inhibitor', reference: 'Dexilant', type: 'Pellet', category: 'gastro', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Esomeprazole EC micro Pellets for MUPS', segment: 'Proton Pump Inhibitor', reference: 'Nexium', type: 'Pellet', category: 'gastro' },
  { name: 'Esomeprazole GR Granules for sachets', segment: 'Proton Pump Inhibitor', reference: 'Nexium', type: 'Pellet', category: 'gastro', badges: ['Patent Non-Infringing'] },
  { name: 'Esomeprazole EC Pellets', segment: 'Proton Pump Inhibitor', reference: 'Nexium', type: 'Pellet', category: 'gastro' },
  { name: 'Lansoprazole EC Pellets', segment: 'Proton Pump Inhibitor', reference: 'Prevacid', type: 'Pellet', category: 'gastro' },
  { name: 'Omeprazole EC Pellets', segment: 'Proton Pump Inhibitor', reference: 'Losec', type: 'Pellet', category: 'gastro' },
  { name: 'Omeprazole Magnesium EC Pellets', segment: 'Proton Pump Inhibitor', reference: 'Losec', type: 'Pellet', category: 'gastro' },
  { name: 'Mebeverine HCl SR Pellets', segment: 'Irritable Bowel Syndrome', reference: 'Colofac', type: 'Pellet', category: 'gastro' },
  { name: 'Activated Charcoal & Simethicone Pellets', segment: 'Anti Flatulence', reference: '-', type: 'Pellet', category: 'gastro' },
  { name: 'Simethicone Pellets', segment: 'Anti Flatulence', reference: '-', type: 'Pellet', category: 'gastro' },
  { name: 'Mesalamine HCl SR Pellets', segment: 'Ulcerative Colitis', reference: 'Pentasa', type: 'Pellet', category: 'gastro' },
  { name: 'Ursodeoxycholic Acid Granules', segment: 'Gallstones / Liver', reference: '70% w/w', type: 'Granules', category: 'gastro' },
  { name: 'Loperamide HCl Granules', segment: 'Anti Diarrheal', reference: '1% w/w', type: 'Granules', category: 'gastro' },

  // 3. Cardiovascular & Lipid Management
  { name: 'Trimetazidine DiHCl ER pellets', segment: 'Anti Anginal', reference: 'Vastarel', type: 'Pellet', category: 'cardio', badges: ['Patent Non-Infringing', 'Nitrosamine-Free'] },
  { name: 'Metoprolol Succinate ER Pellets', segment: 'Anti Hypertensive', reference: 'Quenzor', type: 'Pellet', category: 'cardio' },
  { name: 'Metoprolol Succinate ER Granules', segment: 'Anti Hypertensive', reference: '26% w/w', type: 'Granules', category: 'cardio' },
  { name: 'Choline Fenofibrate SR Pellets', segment: 'Lipid Regulating Agent', reference: 'Trilipix', type: 'Pellet', category: 'cardio' },
  { name: 'Fenofibric acid MR & Rosuvastatin IR Pellets', segment: 'Lipid Regulating Agent', reference: 'Cresadex Plus', type: 'Pellet', category: 'cardio' },
  { name: 'Amlodipine IR and Ramipril IR Pellets', segment: 'Anti Hypertensive', reference: 'Naprix A', type: 'Pellet', category: 'cardio' },
  { name: 'Amlodipine IR Pellets', segment: 'Anti Hypertensive', reference: 'Norvasc', type: 'Pellet', category: 'cardio' },
  { name: 'Ramipril IR Pellets', segment: 'Anti Hypertensive', reference: 'Altace', type: 'Pellet', category: 'cardio' },
  { name: 'Fenofibrate IR Pellets', segment: 'Lipid Regulating Agent', reference: 'Lipofen', type: 'Pellet', category: 'cardio' },
  { name: 'Fenofibrate SR Pellets', segment: 'Lipid Regulating Agent', reference: 'Lipilfen', type: 'Pellet', category: 'cardio' },
  { name: 'Rosuvastatin IR Pellets', segment: 'Lipid Regulating Agent', reference: 'Crestor', type: 'Pellet', category: 'cardio' },
  { name: 'Dabigatran IR Pellets', segment: 'Anti Coagulant', reference: 'Pradaxa', type: 'Pellet', category: 'cardio', badges: ['Patent Non-Infringing'] },

  // 4. Urology (BPH)
  { name: 'Tamsulosin HCl SR Pellets', segment: 'BPH', reference: 'Flomax', type: 'Pellet', category: 'urology' },
  { name: 'Tamsulosin HCl SR & Dutasteride IR Pellets', segment: 'BPH', reference: 'Combodart', type: 'Pellet', category: 'urology' },
  { name: 'Tamsulosin SR + Tadalafil IR pellets', segment: 'BPH', reference: '-', type: 'Pellet', category: 'urology' },
  { name: 'Tadalafil IR pellets', segment: 'BPH', reference: 'Cialis', type: 'Pellet', category: 'urology' },
  { name: 'Dutasteride IR Pellets', segment: 'BPH', reference: 'Avodart', type: 'Pellet', category: 'urology' },

  // 5. Endocrinology & Metabolic
  { name: 'Orlistat IR Pellets', segment: 'Anti Obesity', reference: 'Xenical', type: 'Pellet', category: 'endocrine' },
  { name: 'Semaglutide IR DC granules', segment: 'Anti Diabetic', reference: 'Rybelsus', type: 'Pipeline Granule', category: 'endocrine' },
  { name: 'Empagliflozin IR & Metformin ER Granules', segment: 'Anti Diabetic', reference: 'Synjardy XR', type: 'Pipeline Granule', category: 'endocrine' },
  { name: 'Empagliflozin IR & Linagliptine IR & Metformin ER Granules', segment: 'Anti Diabetic', reference: 'Trijardy XR', type: 'Pipeline Granule', category: 'endocrine' },
  { name: 'Dapagliflozin IR & Metformin ER Granules', segment: 'Anti Diabetic', reference: '5mg/1000mg; 10mg/1000mg', type: 'Granules', category: 'endocrine' },
  { name: 'Metformin Hydrochloride Granules', segment: 'Anti Diabetic', reference: '75%, 90% & 95% w/w', type: 'Granules', category: 'endocrine' },
  { name: 'Glibenclamide Granules', segment: 'Anti Diabetic', reference: '4% w/w', type: 'Granules', category: 'endocrine' },

  // 6. Immunology & Dermatology
  { name: 'Acitretin IR Pellets', segment: 'Anti Psoriasis', reference: 'Soriatane', type: 'Pellet', category: 'immunology' },
  { name: 'Tacrolimus ER pellets', segment: 'Immunosuppressant', reference: 'Astagraf XL', type: 'Pipeline Pellet', category: 'immunology' },
  { name: 'Deucravacitinib DC Granules', segment: 'Plaque Psoriasis', reference: 'Sotyktu', type: 'Pipeline Granule', category: 'immunology' },
  { name: 'Itraconazole IR Pellets', segment: 'Anti Fungal', reference: 'Sporanox', type: 'Pellet', category: 'immunology' },
  { name: 'Itraconazole IR granules (SUBA)', segment: 'Anti Fungal', reference: 'Tolsura', type: 'Pellet', category: 'immunology' },
  { name: 'Clarithromycin Granules', segment: 'Anti Biotic', reference: '32%, 50% & 62.5% w/w', type: 'Granules', category: 'immunology' },
  { name: 'Ciprofloxacin Granules', segment: 'Anti Biotic', reference: '65% w/w', type: 'Granules', category: 'immunology' },

  // 7. Pain, Inflammation & Specialties
  { name: 'Diclofenac Sodium SR Pellets', segment: 'NSAID', reference: '-', type: 'Pellet', category: 'specialty' },
  { name: 'Ketoprofen SR Pellets', segment: 'NSAID', reference: 'Oruvail', type: 'Pellet', category: 'specialty' },
  { name: 'Aprepitant IR Pellets', segment: 'Anti Emetic', reference: 'Emend', type: 'Pellet', category: 'specialty' },
  { name: 'Ibuprofen Granules', segment: 'NSAID', reference: '63%, 66%, 73% & 85% w/w', type: 'Granules', category: 'specialty' },
  { name: 'Acetaminophen Granules', segment: 'Analgesic', reference: '77%, 83% & 90% w/w', type: 'Granules', category: 'specialty' },
  { name: 'Naproxen Sodium Granules', segment: 'NSAID', reference: '90% w/w', type: 'Granules', category: 'specialty' },
  { name: 'Aspirin Granules', segment: 'NSAID / Anti Platelet', reference: '50%, 60% w/w', type: 'Granules', category: 'specialty' },
  { name: 'Guaifenesin Granules', segment: 'Expectorant', reference: '90% & 95% w/w', type: 'Granules', category: 'specialty' },
  { name: 'Sulfamethoxazole & Trimethoprim Granules', segment: 'Anti Biotic', reference: '93% w/w', type: 'Granules', category: 'specialty' }
];

const categoryInfo = [
  { id: 'cns', name: 'CNS & Neurology', icon: Brain, color: 'from-purple-500 to-indigo-600', text: 'Solutions for ADHD, Anti Alzheimer\'s, Anti Depressants, Anti Epileptics, and Schizophrenia.', count: 14 },
  { id: 'gastro', name: 'Gastroenterology', icon: Zap, color: 'from-amber-500 to-orange-600', text: 'Targeted products for IBS, PPIs, Ulcerative Colitis, and digestive health.', count: 15 },
  { id: 'cardio', name: 'Cardiovascular & Lipid', icon: Heart, color: 'from-rose-500 to-red-600', text: 'Innovative formulations for Anti Anginals, Anti Hypertensives, and Lipid Regulation.', count: 12 },
  { id: 'urology', name: 'Urology', icon: Activity, color: 'from-blue-500 to-sky-600', text: 'Specialized products for BPH (Benign Prostatic Hyperplasia) and urinary health.', count: 5 },
  { id: 'endocrine', name: 'Endocrinology & Metabolic', icon: Beaker, color: 'from-emerald-500 to-teal-600', text: 'Formulations for Diabetes management (Anti Diabetic) and Obesity control.', count: 7 },
  { id: 'immunology', name: 'Immunology & Dermatology', icon: Shield, color: 'from-cyan-500 to-blue-600', text: 'Solutions including Psoriasis treatments, Immunosuppressants, and Anti Fungals.', count: 7 },
  { id: 'specialty', name: 'Pain, NSAIDs & Specialties', icon: Info, color: 'from-slate-500 to-slate-700', text: 'Products for NSAIDs, analgesics, anti-emetics, and respiratory specialties.', count: 9 }
];

export default function TherapeuticAreasClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = categoryInfo.find(c => c.id === selectedCategory);

  const getFilteredProducts = () => {
    if (!selectedCategory) return [];
    const query = searchQuery.toLowerCase().trim();
    return productsData.filter(item => 
      item.category === selectedCategory && (
        item.name.toLowerCase().includes(query) ||
        item.segment.toLowerCase().includes(query) ||
        item.reference.toLowerCase().includes(query)
      )
    );
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      
      {!selectedCategory ? (
        // Grid View of Categories
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F6E56]">
              Therapeutic Segment Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Therallen Pharma integrates advanced drug delivery designs across multiple core therapeutic segments. Select a therapeutic area to explore our active formulations, Direct Compressible (DC) granules, and pipeline products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryInfo.map(cat => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="group relative rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center shadow-md`}>
                      <IconComp size={20} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0F6E56] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {cat.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#12857D] group-hover:text-[#0F6E56] transition-colors">
                    <span>{cat.count} Products</span>
                    <span className="group-hover:translate-x-1 transition-transform">Explore &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // Detailed Product Table for Selected Category
        <div className="space-y-8 animate-fade-in">
          
          {/* Category header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center text-slate-500 hover:text-slate-800 shadow-sm transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#12857D] block mb-1">
                  Therapeutic Area
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                  {currentCategory?.name}
                </h2>
              </div>
            </div>

            {/* Search within Category */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder={`Search in ${currentCategory?.name}...`}
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
                    <th className="py-4.5 px-8 border-b border-slate-800">Sub-Segment</th>
                    <th className="py-4.5 px-8 border-b border-slate-800">Form / Spec</th>
                    <th className="py-4.5 px-8 border-b border-slate-800">Reference Brand / Concentration</th>
                    <th className="py-4.5 px-8 border-b border-slate-800 text-right">Badges / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {filteredProducts.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className={`text-slate-700 hover:bg-slate-50/80 transition-colors
                        ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                    >
                      <td className="py-4.5 px-8 font-bold text-slate-400 text-xs">{idx + 1}</td>
                      <td className="py-4.5 px-8 font-extrabold text-slate-900 text-[14px] sm:text-[15px]">{item.name}</td>
                      <td className="py-4.5 px-8 font-semibold text-[#0F6E56] text-xs uppercase tracking-wide">{item.segment}</td>
                      <td className="py-4.5 px-8 font-medium text-slate-500">
                        <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold border uppercase
                          ${item.type.includes('Granule') 
                            ? 'bg-sky-50/50 text-sky-700 border-sky-600/10'
                            : 'bg-indigo-50/50 text-indigo-700 border-indigo-600/10'}`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="py-4.5 px-8 italic text-slate-500 text-xs sm:text-sm">{item.reference}</td>
                      <td className="py-4.5 px-8 text-right">
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16 text-slate-400 space-y-2">
                <Info className="mx-auto text-slate-300" size={32} />
                <p className="text-sm font-semibold">No products found matching "{searchQuery}"</p>
                <p className="text-xs">Try refining your search query.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
