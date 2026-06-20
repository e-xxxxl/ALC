/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  MapPin, 
  Clock, 
  Heart, 
  Sparkles, 
  Flame, 
  Award 
} from 'lucide-react';
import { Link } from '../lib/router';
import CTABanner from '../components/CTABanner';

export default function WhyUsView() {
  const points = [
    {
      title: "Matched Carer Selection",
      description: "We mismatch nobody. We match carers not just on physical skills, but on hobbies, personality traits, and conversational compatibility to foster lifelong comfort.",
      icon: Heart
    },
    {
      title: "Local Bedfordshire Response",
      description: "Our office is based in Biggleswade. We respond instantly to emergency routine changes, medical bookings, or sudden schedule alterations.",
      icon: MapPin
    },
    {
      title: "Enhanced UK DBS Checks",
      description: "Safety is absolute. All staff submit to enhanced DBS checks, complete references audits, and intensive character monitoring reviews.",
      icon: ShieldCheck
    },
    {
      title: "Consistent Familiar Companions",
      description: "We do not cycle different strangers into your household every day. We build small, dedicated mini-care-teams so your loved one always sees familiar, friendly faces.",
      icon: UserCheck
    },
    {
      title: "Round-the-Clock Emergency Supervision",
      description: "No robotic answering units. Our local senior clinical coordinators oversee and monitor emergencies 24 hours a day, 365 days a year.",
      icon: Clock
    },
    {
      title: "Expert Clinical Education Standards",
      description: "Our carers are thoroughly instructed in specific pathways including early signs dementia care, safe manual handling, physical assistance, and nutrition care.",
      icon: Award
    }
  ];

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Intro Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold font-mono tracking-widest text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Compare The Difference
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
            Why Choose Affectionate Living Care?
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            We are not a massive franchise. We are a family-built provider who focuses completely on your loved one’s personal dignity and routine.
          </p>
        </div>
      </section>

      {/* Grid Comparison Layout */}
      <section className="py-16 md:py-24 bg-white" id="why-us-comparison">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-2xl md:text-3.5xl font-heading font-bold text-brand-primary">Our Care Standard Advantages</h2>
            <p className="text-gray-600 text-xs md:text-sm font-light max-w-md mx-auto">
              How we match premium, tailored support to your unique household rhythms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div 
                  key={idx}
                  className="bg-sky-50/40 hover:bg-sky-50 p-6 md:p-8 rounded-3xl border border-sky-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-sm">
                    <IconComp size={18} />
                  </div>
                  <h3 className="font-heading font-bold text-brand-primary text-base">
                    {pt.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Quick visual comparison: Traditional Agencies vs. Affectionate Care */}
      <section className="py-16 bg-slate-50 border-t border-slate-100" id="comparison-table-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider font-mono uppercase">Direct Agency Comparison</span>
            <h2 className="text-2xl font-heading font-bold text-gray-900">Setting A Higher Standard</h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-brand-primary text-white p-4 font-heading font-semibold text-xs md:text-sm tracking-wide text-center uppercase md:divide-x md:divide-sky-900">
              <div className="py-1 md:text-left md:pl-4">Care Feature</div>
              <div className="py-1">Generic Agencies</div>
              <div className="py-1 text-brand-accent">Affectionate Living Care</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs text-slate-700 font-light">
              
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 items-center text-center md:divide-x md:divide-slate-50">
                <div className="font-semibold text-gray-900 md:text-left py-1 text-xs">Care Worker Consistency</div>
                <div className="py-1 text-gray-400">Strangers rotated daily</div>
                <div className="py-1 font-semibold text-brand-primary bg-sky-50/50 rounded-lg">Small dedicated home microteam</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-4 items-center text-center md:divide-x md:divide-slate-50">
                <div className="font-semibold text-gray-900 md:text-left py-1 text-xs">Personality Matching</div>
                <div className="py-1 text-gray-400">Assigned purely on availability</div>
                <div className="py-1 font-semibold text-brand-primary bg-sky-50/50 rounded-lg">Hobbies & compatibility-focused match</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-4 items-center text-center md:divide-x md:divide-slate-50">
                <div className="font-semibold text-gray-900 md:text-left py-1 text-xs">UK Registered Vetting</div>
                <div className="py-1 text-gray-400">Basic paper checks</div>
                <div className="py-1 font-semibold text-brand-primary bg-sky-50/50 rounded-lg">Enhanced DBS, character checks, NVQ standards</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-4 items-center text-center md:divide-x md:divide-slate-50">
                <div className="font-semibold text-gray-900 md:text-left py-1 text-xs">Urgent Local Access</div>
                <div className="py-1 text-gray-400">Call center hold cues</div>
                <div className="py-1 font-semibold text-brand-primary bg-sky-50/50 rounded-lg">Local Biggleswade manager hotline</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTABanner */}
      <CTABanner />

    </div>
  );
}
