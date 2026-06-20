/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, HeartPulse, Heart } from 'lucide-react';
import { Link } from '../lib/router';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

export default function CTABanner({
  title = "WE UNDERSTAND WHAT YOU’RE GOING THROUGH",
  description = "Choosing care isn't easy. We know how overwhelming it feels when a loved one needs extra support. That's why our team listens first, plans carefully, and delivers care with empathy and experience.",
  buttonText = "Get started on Affectionate Care Living",
  href = "/contact-us"
}: CTABannerProps) {
  return (
    <section className="bg-brand-primary text-white py-16 md:py-20 relative overflow-hidden" id="cta-banner-section">
      {/* Abstract warm shapes simulating affectionate care, no slop blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full border border-white/5 translate-x-20 -translate-y-20 flex-shrink-0 pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-48 h-48 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text and Button content */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight leading-snug uppercase">
              {title}
            </h2>
            <p className="text-sky-100 text-sm md:text-base leading-relaxed max-w-3xl font-light">
              {description}
            </p>
            <div className="pt-2">
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                id="cta-banner-action-button"
              >
                <span>{buttonText}</span>
                <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Logo Mark Right */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-5 rounded-3xl border border-white/10 group hover:border-white/20 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-white relative">
                <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-lg text-white leading-tight">
                  Affectionate
                </span>
                <span className="font-heading font-medium text-xs text-sky-200 tracking-wider uppercase">
                  Living Care
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
