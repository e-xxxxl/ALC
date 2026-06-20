/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Heart, 
  Send, 
  ClipboardCheck, 
  AlertCircle 
} from 'lucide-react';
import { 
  PHONE_PRIMARY, 
  PHONE_SECONDARY, 
  EMAIL_PRIMARY, 
  ADDRESS_UK 
} from '../data/site-data';

export default function ContactView() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    postcode: "",
    careType: "personal-care",
    message: "",
    agreeTerms: false
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validations
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.postcode.trim()) {
      setErrorMsg("Please complete all required fields (*).");
      return;
    }

    if (!formData.agreeTerms) {
      setErrorMsg("You must agree to our safety & privacy terms to submit your assessment request.");
      return;
    }

    setLoading(true);

    // Simulate reliable form submission endpoint delay
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      // Let's reset values
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        postcode: "",
        careType: "personal-care",
        message: "",
        agreeTerms: false
      });
    }, 1500);
  };

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Page Intro Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold font-mono tracking-widest text-[#122e42]
] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Immediate Response
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
            Schedule a Free Homecare Assessment
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Ready to explore tailored care? Speak with our certified Biggleswade advisor. Fill out our secure form, or ring our advisor line directly.
          </p>
        </div>
      </section>

      {/* Main Grid Contact & Details Layout */}
      <section className="py-16 md:py-24 bg-white" id="assessment-contact-form">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column Forms Container */}
            <div className="lg:col-span-7 bg-slate-50/60 p-6 md:p-10 rounded-3xl border border-slate-150/80 shadow-sm relative">
              
              {showSuccess ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-gray-900 text-2xl">Assessment Request Received</h3>
                    <p className="text-gray-600 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
                      Thank you! Our Biggleswade Senior Care Coordinator has received your details. We will phone you back within 2-4 hours to organize your homecare consultation.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button 
                      onClick={() => setShowSuccess(false)}
                      className="bg-[#122e42]
] hover:bg-[#122e42]
]/95 text-white font-semibold text-xs px-6 py-3 rounded-xl transition duration-200 cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-[#122e42]
] text-xl flex items-center gap-2">
                      <ClipboardCheck size={20} className="text-[#e9cb8d]" /> Enquiry Form
                    </h3>
                    <p className="text-gray-500 text-xs font-light">
                      * Indicates a required input parameter. We respect HIPAA and UK GDPR standards completely.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-50 text-red-700 text-xs p-4 rounded-xl border border-red-150 flex items-center gap-2 font-medium">
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block" htmlFor="fullName">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-2 focus:ring-[#122e42]
]/10 rounded-xl px-4 py-3 text-xs md:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block" htmlFor="email">Email *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-2 focus:ring-[#122e42]
]/10 rounded-xl px-4 py-3 text-xs md:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block" htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07932880794"
                        className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-2 focus:ring-[#122e42]
]/10 rounded-xl px-4 py-3 text-xs md:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Postcode */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block" htmlFor="postcode">UK Postcode *</label>
                      <input 
                        type="text" 
                        id="postcode"
                        name="postcode"
                        required
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="e.g. SG18 8JG"
                        className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-2 focus:ring-[#122e42]
]/10 rounded-xl px-4 py-3 text-xs md:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Care Type Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 block" htmlFor="careType">Select Support Category</label>
                    <select 
                      id="careType" 
                      name="careType"
                      value={formData.careType}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-2 focus:ring-[#122e42]
]/10 rounded-xl px-4 py-3 text-xs md:text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="personal-care">Personal Care (Adults)</option>
                      <option value="child-care">Pediatric Child Care (0-18 Years)</option>
                      <option value="dementia-care">Dementia / Alzheimer's Care</option>
                      <option value="live-in-care">Live-in Care (24/7 Support)</option>
                      <option value="reablement-support">Reablement / Rehabilitation Support</option>
                      <option value="companionship">Companionship & Walks</option>
                    </select>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 block" htmlFor="message">How can we help? (Add any medical requirements or timelines)</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="My mother lives alone in Biggleswade and is recovering from joint surgery next month..."
                      className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-2 focus:ring-[#122e42]
]/10 rounded-xl px-4 py-3 text-xs md:text-sm outline-none transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Agree safety checkbox */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input 
                      type="checkbox" 
                      id="agreeTerms" 
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-[#122e42]
] border-gray-300 rounded focus:ring-[#122e42]
]"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-gray-500 font-light leading-snug cursor-pointer select-none">
                      I agree to the privacy statement and consent to Affectionate Care Living matching our details with local medical specialists to coordinate home assessment scheduling.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#122e42]
] hover:bg-[#122e42]
]/95 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:bg-slate-300 disabled:cursor-not-allowed cursor-pointer"
                    id="submit-contact-form"
                  >
                    <span>{loading ? "Transmitting assessment request..." : "Submit secure request"}</span>
                    <Send size={15} />
                  </button>

                </form>
              )}

            </div>

            {/* Right Column Office Location Details & Map Card */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Vitals Info card */}
              <div className="bg-[#122e42]
] text-white p-6 md:p-8 rounded-3xl space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12"></div>
                
                <h3 className="font-heading font-bold text-lg md:text-xl text-white">Emergency Hotline Lines</h3>
                
                <div className="space-y-4 text-xs font-light">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={14} className="text-[#e9cb8d]" />
                    </div>
                    <div>
                      <span className="block text-sky-200">Adviser Hotline</span>
                      <a href={`tel:${PHONE_PRIMARY}`} className="text-white font-semibold hover:underline text-sm">{PHONE_PRIMARY}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={14} className="text-[#e9cb8d]" />
                    </div>
                    <div>
                      <span className="block text-sky-200">Secondary Backup Mobile</span>
                      <a href="tel:07939687731" className="text-white font-semibold hover:underline text-sm">07939687731</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={14} className="text-[#e9cb8d]" />
                    </div>
                    <div>
                      <span className="block text-sky-200">Secure Office Email Address</span>
                      <a href={`mailto:${EMAIL_PRIMARY}`} className="text-white font-semibold hover:underline text-sm">{EMAIL_PRIMARY}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="border border-slate-200 bg-slate-50/40 p-6 rounded-3xl space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-[#e9cb8d]" />
                  <h4 className="font-heading font-bold text-[#122e42]
] text-base">Local Biggleswade Office</h4>
                </div>
                <p className="text-gray-650 text-xs md:text-sm font-light leading-relaxed">
                  We are headquartered directly inside Biggleswade, allowing us to deploy, monitor, and visit families within minutes across Sandy, Potton, Langford, and Bedfordshire.
                </p>
                <div className="bg-white border rounded-xl p-4 font-mono text-[10.5px] text-gray-700 leading-normal shadow-sm">
                  <strong className="block text-[#122e42]
] font-sans text-[11px] mb-1">Affectionate Living Care</strong>
                  {ADDRESS_UK}
                </div>
              </div>

              {/* Simulated visual polished Map with pointer pins */}
              <div className="rounded-3xl border border-slate-250 bg-slate-100 overflow-hidden relative shadow-sm h-52 flex flex-col items-center justify-center text-center p-4">
                <div className="absolute inset-0 bg-sky-200 opacity-20"></div>
                {/* Visual grid gridlines mock */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#122e42]
] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-[#122e42]
] block text-xs">Biggleswade Office (Evans Grove)</span>
                    <span className="text-gray-500 font-light text-[10px] uppercase tracking-wide font-mono">SG18 8JG, Bedfordshire</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
