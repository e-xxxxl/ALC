/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, PhoneCall } from 'lucide-react';
import { FaqItem } from '../types';
import { Link } from '../lib/router';

interface FAQAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  showContactCTA?: boolean;
}

export default function FAQAccordion({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Got questions about Affectionate Care Living? You're in the right place.",
  showContactCTA = true
}: FAQAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // Generate FAQPage JSON-LD Structured Schema
  const ldJsonData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="faqs-section">
      {/* Self-injecting JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Info / Headings */}
          <div className="lg:col-span-5 space-y-6">
           
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
            
            {showContactCTA && (
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/faqs" 
                  className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold px-5 py-3 rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.01]"
                >
                  More FAQs
                </Link>
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center justify-center bg-[#212121] border border-gray-200 text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition-all duration-200 text-sm hover:scale-[1.01]"
                >
                  <PhoneCall size={16} className="mr-2" /> Contact us
                </Link>
              </div>
            )}
          </div>

          {/* Right Column Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded 
                      ? "border-brand-primary shadow-md ring-1 ring-brand-primary/10" 
                      : "border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between text-left p-5 md:p-6 cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                    id={`faq-btn-${faq.id}`}
                  >
                    <span className="font-heading font-semibold text-gray-900 pr-5 text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full ${
                      isExpanded ? "bg-brand-primary text-white" : "bg-slate-100 text-gray-600"
                    } transition-colors duration-300 flex-shrink-0`}>
                      <Plus 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-45" : ""
                        }`} 
                      />
                    </div>
                  </button>

                  {/* Expandable answers holding smooth height transitions */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded 
                        ? "max-h-[500px] border-t border-slate-100 opacity-100 p-5 md:p-6" 
                        : "max-h-0 opacity-0 pointer-events-none"
                    } overflow-hidden bg-slate-50/50`}
                  >
                    <p className="text-gray-600 font-light text-xs md:text-sm leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
