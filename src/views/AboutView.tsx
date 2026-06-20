/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  HeartHandshake 
} from 'lucide-react';
import { Link } from '../lib/router';
import CTABanner from '../components/CTABanner';

export default function AboutView() {
  const values = [
    {
      title: "Compassionate Dignity",
      description: "We protect the privacy, modesty, and routines of clients with gentle guidance and unmatched clinical respect.",
      iconName: "Heart"
    },
    {
      title: "Vetted Professionalism",
      description: "Our compliance structures guarantee 100% background checks, character evaluations, and expert clinical modules training.",
      iconName: "ShieldCheck"
    },
    {
      title: "Family Integrity",
      description: "We work hand-in-hand with children, partners, and practitioners to create transparent, seamless support networks.",
      iconName: "Users"
    },
    {
      title: "Empathetic Excellence",
      description: "We continuously listen, evaluate, and adapt our support to match advancing health and rehabilitation recovery parameters.",
      iconName: "Award"
    }
  ];

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Hero Banner / Page Intro Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-white/10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold font-mono tracking-widest text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Learn Our History
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
            Our Heart Is In Home Care
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Affectionate Living Care is formed with a simple, unifying vision: delivering premium homecare that protects independent life and puts families at complete ease.
          </p>
        </div>
      </section>

      {/* Main Philosophy, Visual Story & Founders block */}
      <section className="py-16 md:py-24 bg-white" id="our-motivation-philosophy">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-brand-accent px-3 py-1.5 rounded-full text-xs font-semibold">
                <HeartHandshake size={14} /> Our Mission
              </div>
              <h2 className="text-2xl md:text-3.5xl font-heading font-bold text-brand-primary leading-tight">
                Empowering Seniors & Supporting Children Across Bedfordshire
              </h2>
              
              <div className="space-y-4 text-gray-600 font-light text-xs md:text-sm leading-relaxed">
                <p>
                  Founded right in the heart of Biggleswade, Affectionate Living Care (affectionatelivingcare.com) was born from personal experience. We saw how overwhelming it can be when a family member requires extra support, and we realized that what is often missing is a holistic, patient, and highly compassionate carer match.
                </p>
                <p>
                  Today, we support dozens of independent households across Biggleswade, Sandy, and surrounding Bedfordshire towns. Whether it is an adult requiring detailed post-operative reablement, or a child receiving play and physical support, we bring consistent clinical safety and positive emotional energy to every single home visit.
                </p>
                <p>
                  Our services are entirely family-driven. We sit down with you, we listen to your fears and goals, and we match you with a carer who shares your interests, temperament, and requirements. We believe that homecare should feel like home.
                </p>
              </div>

              <div className="pt-2">
                <blockquote className="border-l-4 border-brand-accent pl-4 py-1.5 bg-amber-50/50 rounded-r-xl">
                  <p className="text-xs md:text-sm italic font-medium text-brand-primary">
                    "We don't look at care as task compliance. We look at it as protecting family continuity, laughter, and personal independence."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Right Column Custom Visual Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-video sm:aspect-square max-h-[480px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=750&h=750" 
                  alt="Dignified caring interaction" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"></div>
              </div>

              {/* Offset Stat Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-5 rounded-2xl shadow-xl space-y-1 invisible md:block max-w-xs border border-brand-accent/50">
                <div className="text-2xl font-bold font-mono text-brand-accent">100% DBS Vetted</div>
                <div className="text-[10px] text-sky-100 font-light leading-relaxed">
                  Every care worker undergoes thorough background checking, identity audits, and professional training block.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Pillars Values Cards Grid */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100" id="our-values">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full">
              Pillars of Integrity
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-950 tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-gray-650 max-w-md mx-auto text-xs md:text-sm font-light">
              We live and deliver support by four simple, unbending promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 text-brand-primary flex items-center justify-center font-bold">
                  {idx === 0 && <Heart size={18} />}
                  {idx === 1 && <ShieldCheck size={18} />}
                  {idx === 2 && <Users size={18} />}
                  {idx === 3 && <Award size={18} />}
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-base">{val.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust badging / Quality assurance banner */}
      <section className="py-16 bg-white" id="compliance-notices">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center mx-auto shadow-md">
            <Building size={20} />
          </div>
          <h3 className="text-xl font-heading font-semibold text-brand-primary">Our Care Quality Promise</h3>
          <p className="text-gray-600 font-light text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            Affectionate Living Care operates under compliance framework guidelines. Our clinical parameters are set and regularly audited by our Clinical Governance Board, making sure that your loved one has absolute protection, continuous professional safety, and premium support standard.
          </p>
          <div className="flex justify-center gap-6 pt-2 text-xs font-semibold text-neutral-800">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500" /> Vetted Care Workers</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500" /> NVQ Core Qualifications</span>
          </div>
        </div>
      </section>

      {/* Primary CTA Cover */}
      <CTABanner />

    </div>
  );
}
