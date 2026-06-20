/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, HelpCircle, PhoneCall, ListFilter, ArrowRight } from 'lucide-react';
import { GENERAL_FAQS } from '../data/site-data';
import { Link } from '../lib/router';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

export default function FaqView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "General", "Planning", "Safety"];

  // Filter FAQs based on search input & category selection
  const filteredFaqs = useMemo(() => {
    return GENERAL_FAQS.filter((faq) => {
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All" || 
        faq.category?.toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Intro Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold font-mono tracking-widest text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Clear Answers
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
            Frequently Asked Questions Hub
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Have questions about companion matching, enhanced vetting, NHS healthcare integrations, or fee structures? Explore our self-help guides.
          </p>
        </div>
      </section>

      {/* Directory & Interactive Search Filter */}
      <section className="py-12 bg-white border-b border-slate-100" id="faq-search-filters">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input Box */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-450 w-5 h-5" id="search-icon" />
              <input 
                type="text"
                placeholder="Search queries (e.g. contracts, DBS checks)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 text-xs md:text-sm border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all"
                id="faq-search-input"
              />
            </div>

            {/* Category Filter Badges */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    selectedCategory === cat 
                      ? "bg-brand-primary text-white border-brand-primary shadow-sm" 
                      : "bg-white text-gray-650 border-gray-200 hover:border-gray-300"
                  }`}
                  id={`cat-filter-btn-${cat}`}
                >
                  {cat === "All" ? "Show All" : cat}
                </button>
              ))}
            </div>
          </div>

          {searchQuery && (
            <div className="text-xs text-gray-500 font-mono">
              Found {filteredFaqs.length} results matching "{searchQuery}"
            </div>
          )}

        </div>
      </section>

      {/* FAQ Render list */}
      {filteredFaqs.length > 0 ? (
        <FAQAccordion 
          faqs={filteredFaqs} 
          title="Care & Vetting Details" 
          subtitle="Explore specific responses detailing support hours, medical tasks standards, and carer handovers." 
          showContactCTA={false}
        />
      ) : (
        <section className="py-20 text-center bg-slate-50">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-gray-400">
              <Search size={22} />
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-lg">No Matching FAQs Found</h3>
            <p className="text-gray-500 text-xs font-light max-w-sm mx-auto">
              We couldn't locate any answers corresponding to your query. Reach out to our team directly!
            </p>
            <div className="pt-2">
              <Link href="/contact-us" className="inline-flex items-center gap-1.5 bg-brand-primary text-white text-xs font-bold px-4 py-2.5 rounded-lg">
                <span>Talk to a Care Advisor</span> <PhoneCall size={12} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Primary CTA Banner */}
      <CTABanner />

    </div>
  );
}
