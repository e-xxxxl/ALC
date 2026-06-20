/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  FileCheck, 
  ShieldAlert, 
  Stethoscope, 
  Brain, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { Link } from '../lib/router';
import CTABanner from '../components/CTABanner';

export default function GovernanceView() {
  const pillars = [
    {
      title: "Medication Administration Control",
      description: "Every dosage, timing, and hydration record is tracked via computerized Electronic Medication Administration Records (eMAR), reviewed daily by our Clinical Lead.",
      icon: Stethoscope
    },
    {
      title: "Care Quality Commission Audits",
      description: "We design all daily care cards to meet CQC Safety, Effectiveness, Caring, Responsiveness, and Well-led indicators seamlessly.",
      icon: FileCheck
    },
    {
      title: "Continuous Professional Training",
      description: "Our care workers undergo compulsory NVQ/QCF updates, manual handling training routines, infection control protocols, and advanced dementia coaching segments.",
      icon: Award
    },
    {
      title: "Vigilant Safeguarding Policy",
      description: "We enforce an absolute zero-tolerance policy against negligence or abuse. Vetting is monitored by internal safeguarding leaders daily.",
      icon: ShieldAlert
    }
  ];

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Intro Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold font-mono tracking-widest text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Professional Assessment
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
            Clinical Governance & Quality Care
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Clinical governance guarantees that our home care services are safe, continuously improved, and delivered to strict UK regulatory standards. Learn how we safeguard your family’s safety.
          </p>
        </div>
      </section>

      {/* Main Pillars grid */}
      <section className="py-16 md:py-24 bg-white" id="governance-framework">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-2xl md:text-3.5xl font-heading font-bold text-brand-primary leading-tight">
              Our Safety Safeguarding Pillars
            </h2>
            <p className="text-gray-600 text-xs md:text-sm font-light max-w-md mx-auto">
              Our care standards are supervised by registered nurse consultants and regulatory experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pil, idx) => {
              const IconComp = pil.icon;
              return (
                <div 
                  key={idx}
                  className="bg-sky-50/40 p-6 md:p-8 rounded-3xl border border-sky-150 flex flex-col md:flex-row gap-5 hover:bg-sky-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconComp size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-brand-primary text-base md:text-lg">
                      {pil.title}
                    </h3>
                    <p className="text-gray-650 text-xs md:text-sm leading-relaxed font-light">
                      {pil.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Detailed Protocols block */}
      <section className="py-16 bg-slate-50 border-t border-slate-100" id="governance-protocols">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-widest font-mono text-gray-400 block uppercase">Continuous Assessment Review</span>
            <h2 className="text-2xl font-heading font-bold text-gray-900">Medication, Incident & Compliance Routines</h2>
          </div>

          <div className="bg-white p-6 md:p-10 border rounded-3xl space-y-8 shadow-sm">
            
            <div className="space-y-2.5">
              <h3 className="font-heading font-bold text-brand-primary text-base md:text-lg flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-accent" /> Medication Management (eMAR)
              </h3>
              <p className="text-gray-650 font-light text-xs md:text-sm leading-relaxed">
                Carers administer medicine, fluids, and topical applications utilizing specialized digital tracking units. Reductions, misses, or reactions trigger instant emergency notifications to our nursing coordinators, who contact family practitioners and relatives immediately.
              </p>
            </div>

            <div className="space-y-2.5">
              <h3 className="font-heading font-bold text-brand-primary text-base md:text-lg flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-accent" /> Safer Manual Handling Protocols
              </h3>
              <p className="text-gray-650 font-light text-xs md:text-sm leading-relaxed">
                We design manual lifting, standing transfers, wheelchair assistance, and high hoist processes with professional-trained carers. Ergonomic checks are run inside your beloved household to avoid accidents and protect skin integrity.
              </p>
            </div>

            <div className="space-y-2.5">
              <h3 className="font-heading font-bold text-brand-primary text-base md:text-lg flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-accent" /> Strict Incident & Grievance Investigations
              </h3>
              <p className="text-gray-650 font-light text-xs md:text-sm leading-relaxed">
                Even minor incidents and falls are logged into our computerized databases. All incidents go through exhaustive formal analysis to see how we can optimize schedules, adjust lighting, or deploy mechanical assists to protect your comfort next time.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Action Banner */}
      <CTABanner />

    </div>
  );
}
