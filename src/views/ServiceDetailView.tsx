/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useRouter } from '../lib/router';
import { SERVICES_DATA, GENERAL_FAQS } from '../data/site-data';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowLeft, 
  PhoneCall, 
  Heart,
  Briefcase,
  Home,
  ChevronRight,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';
import { Link } from '../lib/router';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

export default function ServiceDetailView() {
  const { path } = useRouter();
  
  // Extract active slug from pathname (e.g., /our-services/personal-care)
  const slug = path.split('/our-services/')[1] || "";
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-[140px] pb-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-gray-400">
          <ShieldAlert size={30} />
        </div>
        <h2 className="text-2xl font-heading font-bold text-gray-900">Service Category Not Found</h2>
        <p className="text-gray-500 font-light text-xs max-w-sm mx-auto leading-relaxed">
          The requested care pathway does not exist. Please check the address or explore our pathways directory list.
        </p>
        <div className="pt-2">
          <Link 
            href="/our-services" 
            className="inline-flex items-center gap-1.5 bg-[#122e42]
] text-white text-xs font-bold px-5 py-3 rounded-lg"
          >
            <ArrowLeft size={14} /> Back to Services directory
          </Link>
        </div>
      </div>
    );
  }

  // Load relevant FAQs for this details page
  const localizedFaqs = GENERAL_FAQS.slice(0, 4);

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Dynamic Detail Hero header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb row */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-[#122e42]
]">Home</Link>
            <ChevronRight size={12} className="text-gray-400" />
            <Link href="/our-services" className="hover:text-[#122e42]
]">Our Services</Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-[#122e42]
] font-semibold truncate max-w-[200px]">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left title info */}
            <div className="lg:col-span-7 space-y-6">
              {service.badge && (
                <span className="bg-amber-50 border border-amber-200 text-[#e9cb8d] font-semibold font-mono text-[10px] px-3.5 py-1.5 rounded-full uppercase">
                  {service.badge}
                </span>
              )}
              
              <h1 className="text-3xl md:text-4.5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
                {service.title}
              </h1>
              
              <p className="text-gray-650 text-sm md:text-base leading-relaxed font-light">
                {service.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link 
                  href="/contact-us" 
                  className="bg-[#122e42]
] text-white hover:bg-[#122e42]
]/95 text-xs font-semibold px-5  py-3 rounded-lg flex items-center gap-1.5 shadow-md"
                >
                  <PhoneCall size={14} /> Book Free Assessment
                </Link>
                <Link 
                  href="/our-services" 
                  className="border border-gray-200 text-gray-800 hover:text-[#122e42]
] text-xs font-semibold px-5 py-3 rounded-lg flex items-center gap-1.5 hover:bg-slate-50"
                >
                  <ArrowLeft size={14} /> Back to pathways
                </Link>
              </div>
            </div>

            {/* Right rounded-corner Image */}
            <div className="lg:col-span-5">
              <div className="aspect-video sm:aspect-square max-h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#122e42]
]/10 transition-colors group-hover:bg-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Copy Details: What's included, Who it's for */}
      <section className="py-16 md:py-24 bg-white" id="pathway-benefits">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side deep copywriting standard */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-[#122e42]
]">How We Assist & Support</h2>
                <p className="text-gray-650 text-xs md:text-sm font-light leading-relaxed whitespace-pre-line">
                  {service.longDescription}
                </p>
              </div>

              {/* What is Included Benefit Boxes list */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-[#122e42]
] text-lg">What is included in this Support pathway?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="bg-sky-50/40 p-4 border border-sky-100/50 rounded-2xl flex items-start gap-2.5 hover:bg-sky-50 transition-colors"
                    >
                      <CheckCircle2 size={16} className="text-[#e9cb8d] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs font-light leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side box: Who it's for card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#122e42]
] text-white p-6 md:p-8 rounded-3xl space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-10 -translate-y-10"></div>
                
                <h3 className="font-heading font-bold text-base md:text-lg text-white">Who is this care plan for?</h3>
                
                <ul className="space-y-4 text-xs font-light">
                  {service.whoItsFor.map((audience, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-white/10 text-[#e9cb8d] text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sky-100 font-light leading-snug">{audience}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-white/10 text-[10.5px] text-sky-200 flex items-center gap-2">
                  <GraduationCap size={15} className="text-[#e9cb8d]" /> Custom programs evaluated weekly
                </div>
              </div>

              {/* Patient Trust Callout */}
              <div className="border border-slate-200 p-6 rounded-3xl space-y-3 bg-slate-50/50">
                <h4 className="font-heading font-bold text-gray-900 text-sm flex items-center gap-2">
                  <Heart size={16} className="text-rose-500 fill-rose-500" /> Vetting Guarantee
                </h4>
                <p className="text-gray-500 text-xs font-light leading-relaxed">
                  Every care visitor assigned to this program is fully compliant, character evaluated, and DBS vetted to strict UK healthcare regulation guidelines. Your security and peace of mind is our absolute priority.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Primary CTA Banner */}
      <CTABanner />

      {/* Relevant Accordion preview */}
      <FAQAccordion faqs={localizedFaqs} />

    </div>
  );
}
