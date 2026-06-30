/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from '../lib/router';
import { 
  Heart, 
  ArrowRight, 
  Plus, 
  Phone, 
  Check, 
  Clock, 
  ShieldCheck, 
  Award, 
  User,
  HeartPulse,
  Brain,
  Sparkles,
  Users,Diamond
} from 'lucide-react';
import { 
  PROCESS_STEPS, 
  TRUSTED_POINTS, 
  GENERAL_FAQS, 
  PHONE_PRIMARY 
} from '../data/site-data';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import hero from "../../assets/hero.jpg";

// Carousel photos for the Services section
const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=700&h=700", // holding hands
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600", // smiling carer & senior
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600", // dementia / supportive walking
];

export default function HomeView() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-rotation for photo carousel on Services section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      {/* <section className="bg-slate-50 py-16 md:py-24 relative overflow-hidden" id="hero-section">
       
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#122e42]
]/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
        
          
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-heading font-bold text-gray-950 tracking-tight leading-tight max-w-3xl mx-auto">
           Compassionate, Person-centered care that surrounds your loved one with dignity, warmth, and genuine human connection. 
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            We provide personalised home support shaped around their unique needs and choices, delivered with empathy, respect, and a steadfast commitment to safe, high-quality, and consistently reliable care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link 
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#122e42]
] hover:bg-[#122e42]
]/95 text-white font-bold text-xs md:text-sm px-6 py-3 rounded shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
              id="hero-primary-cta"
            >
              <Heart size={16} className="fill-white/20" />
              <span>Speak to a care advisor</span>
            </Link>
            
            <Link 
              href="/our-services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#212121] border border-gray-200 text-white font-bold text-xs md:text-sm px-6 py-3 rounded shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all"
              id="hero-secondary-cta"
            >
               <Diamond size={16} className="fill-white/20" />
              <span>Explore services</span>
              <ArrowRight size={16} className="text-white" />
            </Link>
          </div>
        </div>
      </section> */}

       <section
      className="relative overflow-hidden  py-20 md:py-28"
      id="hero-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
 
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            
 
            <h1 className="mt-5 font-heading font-bold text-[#122E42] text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Compassionate, person-centered care that surrounds your loved one with
              dignity, warmth, and genuine human connection.
            </h1>
 
            <p className="mt-6 text-[#475467] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We provide personalised home support shaped around their unique needs
              and choices, delivered with empathy, respect, and a steadfast
              commitment to safe, high-quality, and consistently reliable care.
            </p>
 
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#122E42] hover:bg-[#0d2233] text-white font-semibold text-sm px-7 py-3.5 rounded-md shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#122E42]"
                id="hero-primary-cta"
              >
                <Heart size={16} className="fill-white/25" />
                <span>Talk to a care advisor</span>
              </Link>
 
              <Link
                href="/our-services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#122E42] font-semibold text-sm px-7 py-3.5 rounded-md border border-[#122E42]/15 hover:border-[#122E42]/30 hover:bg-[#122E42]/[0.03] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#122E42]"
                id="hero-secondary-cta"
              >
                <span>See our care services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
 
            <ul className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3">
              {[
  "Compassionate, person-centred care",
  "Experienced & thoroughly vetted caregivers",
  "Care plans tailored to individual needs",
].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#122E42]/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C28840]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Right: signature element — meet the caregiver, not a stock icon */}
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative rotate-[-2deg] rounded-2xl bg-white p-3 shadow-xl shadow-[#122E42]/10 ring-1 ring-black/5">
              <img
                src={hero}
                alt="A caregiver sharing a warm moment with a client at home"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
 
              <div className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 rounded-full bg-white px-3 py-1.5 shadow-md ring-1 ring-black/5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#122E42]">
                  Affectionate Living Care
                </p>
              </div>
 
            <div className="px-2 pt-3 pb-1">
  <p className="font-heading italic text-[#122E42] text-base leading-snug">
    "Every visit is guided by compassion, professionalism, and a commitment to enhancing quality of life."
  </p>
  <p className="mt-2 text-xs text-[#475467]">
    — Affectionate Living Care Team
  </p>
</div>
            </div>
          </div>
 
        </div>
      </div>
    </section>

     
      <section className="py-12 md:py-20 bg-white" id="service-highlight-cards">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            
            <div className="group rounded overflow-hidden relative shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-350 bg-slate-900 min-h-[380px] flex flex-col justify-end p-6 md:p-8">
              {/* Photo background */}
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Compassionate Adult Care" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#e9cb8d] bg-amber-50 px-3 py-1 rounded-full uppercase border border-amber-300">
                  Ages 18+
                </span>
                <p className="text-white font-heading font-semibold text-lg md:text-xl lg:text-2xl leading-snug">
                  Compassionate adult care at home, personalized support with respect, reliability, and heart for your loved one’s unique needs.
                </p>
                <div className="pt-2">
                  <Link 
                    href="/our-services/adult-care"
                    className="inline-flex items-center gap-2 bg-[#122e42]
] text-white text-xs font-semibold px-5 py-3 rounded-xl hover:bg-[#122e42]
]/90 transition-all shadow-md hover:scale-[1.02]"
                  >
                    Explore adult services
                  </Link>
                </div>
              </div>
            </div>

            {/* Child Care Card (0-18) */}
            <div className="group rounded overflow-hidden relative shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-350 bg-slate-900 min-h-[380px] flex flex-col justify-end p-6 md:p-8">
              {/* Photo background */}
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Pediatric Child Home Care" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              {/* Orange 0-18 Badge */}
              <div className="absolute top-6 right-6 bg-red-500 text-white font-bold font-mono text-xs px-3.5 py-1.5 rounded-full shadow-md z-20">
                0–18
              </div>

              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-orange-400 bg-orange-50 px-3 py-1 rounded-full uppercase border border-orange-200">
                  Pediatric Care
                </span>
                <p className="text-white font-heading font-semibold text-lg md:text-xl lg:text-2xl leading-snug">
                  Compassionate child care at home; personalized support with love, respect, and reliability for your child’s unique needs.
                </p>
                <div className="pt-2">
                  <Link 
                    href="/our-services/child-care"
                    className="inline-flex items-center gap-2 bg-[#e9cb8d] text-white text-xs font-semibold px-5 py-3 rounded-xl hover:bg-[#e9cb8d]/90 transition-all shadow-md hover:scale-[1.02]"
                  >
                    Explore children services
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HOME CARE SERVICES (Left: Services lists, Right: functional carousel) */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100" id="home-care-services">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-950 tracking-tight">
              Our Home Care Services
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base font-light">
              Personalised support you can count on, delivered with heart.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left lists (Daily, Companionship, Specialist) */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#e9cb8d] flex items-center justify-center text-[#e9cb8d] flex-shrink-0 bg-white shadow-sm mt-1">
                  <Plus size={18} className="stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-heading font-semibold text-[#122e42]
]">Daily Support</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                    Assistance with daily tasks; washing, dressing, meals, and medication, so you can feel confident and stay independent at home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#e9cb8d] flex items-center justify-center text-[#e9cb8d] flex-shrink-0 bg-white shadow-sm mt-1">
                  <Plus size={18} className="stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-heading font-semibold text-[#122e42]
]">Companionship</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                    Warm, meaningful connections that brighten your day, through friendly chats, walks, or enjoying hobbies together.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#e9cb8d] flex items-center justify-center text-[#e9cb8d] flex-shrink-0 bg-white shadow-sm mt-1">
                  <Plus size={18} className="stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-heading font-semibold text-[#122e42]
]">Specialist Care</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                    Specialized support for complex needs, dementia, mobility challenges, or post-hospital recovery, delivered patiently and with respect.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/our-services" 
                  className="inline-flex items-center gap-2 bg-[#122e42]
] text-white text-xs font-semibold px-6 py-3.5 rounded-xl shadow-md hover:bg-[#122e42]
]/95 transition-all"
                >
                  <Plus size={14} className="stroke-[2.5]" />
                  <span>Explore all our services</span>
                </Link>
              </div>

            </div>

            {/* Right: Circular double ringed functional auto-rotation carousel */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full p-3 border-4 border-[#122e42]
] max-w-full">
                {/* Outer ring border offset */}
                <div className="absolute inset-0 rounded-full border-2 border-[#122e42]
]/20 translate-x-1 translate-y-1"></div>
                
                {/* Main image container */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-150">
                  {CAROUSEL_IMAGES.map((imgUrl, idx) => (
                    <img 
                      key={idx}
                      src={imgUrl}
                      alt="Affectionate care visual indicators"
                      referrerPolicy="no-referrer"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                        idx === activeSlide 
                          ? "opacity-100 scale-100 z-10" 
                          : "opacity-0 scale-95 z-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                      idx === activeSlide 
                        ? "bg-[#122e42] w-6" 
                        : "bg-slate-300"
                    }`}
                    aria-label={`Show slide image ${idx + 1}`}
                  ></button>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. PROCESS STEPS (Numbered timeline 1-4 + stacked duo photo on right) */}
      <section className="py-16 md:py-24 bg-white" id="how-to-start">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#122e42]
] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Clear & Straightforward
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
              Getting Started Is Simple
            </h2>
            <p className="text-gray-650 font-light text-sm md:text-base leading-relaxed">
              Let’s make care easy together; we simplify the process and remove the stress, so you can focus on what matters most: your loved one’s comfort and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Numbered Timeline */}
            <div className="lg:col-span-7 space-y-1">
              <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8 py-2">
                
                {PROCESS_STEPS.map((stepItem) => (
                  <div key={stepItem.step} className="relative">
                    {/* Circle number */}
                    <div className="absolute -left-[39px] top-0 w-8 h-8 rounded-full bg-[#e9cb8d] text-white font-bold text-xs flex items-center justify-center shadow-md">
                      {stepItem.step}
                    </div>
                    {/* Details */}
                    <div className="space-y-1.5">
                      <h4 className="text-base font-semibold text-[#122e42] font-heading">
                        {stepItem.title}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              {/* Two CTA Buttons below */}
              <div className="flex flex-wrap gap-3 pt-8 pl-4">
                <Link 
                  href="/contact-us" 
                  className="bg-[#122e42] text-white hover:bg-[#122e42]/95 text-xs font-semibold px-5 py-3 rounded-lg flex items-center gap-1.5 shadow-md hover:scale-[1.01]"
                >
                  <Check size={14} /> Get started
                </Link>
                <Link 
                  href="/our-services" 
                  className="border border-gray-200 text-white bg-[#212121] text-xs font-semibold px-5 py-3 rounded-lg flex items-center gap-1.5 shadow-md  hover:scale-[1.01] transition-all"
                >
                  <ArrowRight size={14} /> Explore services
                </Link>
              </div>
            </div>

            {/* Right: Stacked pair of rounded-corner photos, offset layout */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6 relative">
              
              {/* Image 1 - top right skewed */}
              <div className="rounded-2xl overflow-hidden shadow-md h-52 md:h-60 relative group border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=650&h=400" 
                  alt="Friendly homecare consultation" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#122e42]/10 transition-colors group-hover:bg-transparent"></div>
              </div>

              {/* Image 2 - bottom left offset */}
              <div className="rounded-2xl overflow-hidden shadow-md h-52 md:h-60 relative group border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" 
                  alt="Dignified live-in caretaker support" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#122e42]/15 transition-colors group-hover:bg-transparent"></div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. TRUSTED CARE (Three column light-teal-tinted badges) */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-150" id="why-families-trust-us">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-950 tracking-tight">
              Trusted Care
            </h2>
            <p className="text-gray-650 max-w-lg mx-auto text-xs md:text-sm font-light leading-relaxed">
              Why families choose us for compassionate, reliable support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {TRUSTED_POINTS.map((card, idx) => (
              <div 
                key={card.id} 
                className="bg-sky-50/60 hover:bg-sky-50 border border-sky-100/50 p-6 md:p-8 rounded-3xl space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Dark teal circular icon base with white icons */}
                <div className="w-12 h-12 rounded-full bg-[#122e42]
] text-white flex items-center justify-center shadow-md">
                  {idx === 0 && <ShieldCheck size={20} />}
                  {idx === 1 && <User size={20} />}
                  {idx === 2 && <Award size={20} />}
                </div>
                
                <h3 className="font-heading font-bold text-[#122e42]
] text-lg">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CTABanner />

      {/* 7. FAQ ACCORDION */}
      <FAQAccordion faqs={GENERAL_FAQS.slice(0, 4)} />

    </div>
  );
}
