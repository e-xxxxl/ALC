/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES_DATA } from '../data/site-data';
import { Link } from '../lib/router';
import { 
  Heart, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  HeartPulse, 
  Accessibility, 
  Home, 
  Stethoscope, 
  BrainCircuit, 
  Compass, 
  Users, 
  Baby, 
  ShieldAlert,
  Clock,
  MapPin
} from 'lucide-react';
import CTABanner from '../components/CTABanner';

// Mapping icons dynamically as Lucide doesn't have an easy string lookup
const iconMap: { [key: string]: any } = {
  HeartPulse: HeartPulse,
  Accessibility: Accessibility,
  Clock: Clock,
  Home: Home,
  Stethoscope: Stethoscope,
  BrainCircuit: BrainCircuit,
  Activity: Activity,
  Compass: Compass,
  Users: Users,
  MapPin: MapPin,
  ShieldAlert: ShieldAlert,
  Baby: Baby
};

export default function ServicesHubView() {
  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Intro Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold font-mono tracking-widest text-[#122e42]
] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Care Pathways
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
            Our Home Care Services Portfolio
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Discover our comprehensive suite of in-home care packages, covering pediatric milestone support, elderly companion walking, and specialist clinical treatments.
          </p>
        </div>
      </section>

      {/* Grid listing of all services */}
      <section className="py-16 md:py-24 bg-white" id="services-grid-directory">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-2xl md:text-3.5xl font-heading font-bold text-[#122e42]
] leading-tight">
              Bespoke Care for Every Chapter of Life
            </h2>
            <p className="text-gray-600 text-xs md:text-sm font-light max-w-md mx-auto">
              Our registered caregivers adapt to your unique routines and healthcare goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComponent = iconMap[service.iconName || "HeartPulse"] || HeartPulse;
              return (
                <div 
                  key={service.slug}
                  className="bg-sky-50/20 hover:bg-sky-50/60 p-6 md:p-8 rounded-3xl border border-sky-100 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-350 space-y-6 group"
                >
                  <div className="space-y-4">
                    {/* Dynamic Icon header */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#122e42]
] text-white flex items-center justify-center shadow-md">
                        <IconComponent size={20} />
                      </div>
                      {service.badge && (
                        <span className="bg-[#e9cb8d]/10 border border-[#e9cb8d]/20 text-[#e9cb8d] font-semibold font-mono text-[10px] px-3 py-1 rounded-full uppercase">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-[#122e42]
] text-lg md:text-xl group-hover:text-[#e9cb8d] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-650 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-400">affectionatelivingcare.com</span>
                    <Link 
                      href={`/our-services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#122e42]
] font-bold hover:underline"
                    >
                      <span>Learn more</span>
                      <ArrowRight size={13} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Action Banner */}
      <CTABanner />

    </div>
  );
}
