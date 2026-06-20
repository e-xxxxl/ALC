/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from '../lib/router';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ExternalLink 
} from 'lucide-react';
import { 
  SERVICES_DATA, 
  PHONE_PRIMARY, 
  PHONE_SECONDARY, 
  EMAIL_PRIMARY, 
  EMAIL_SECONDARY, 
  ADDRESS_UK 
} from '../data/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800" id="main-site-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Main Footer Links & Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Company Info & Contact */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 text-white fill-white/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-white tracking-tight text-base leading-none">
                  Affectionate
                </span>
                <span className="font-heading font-medium text-[10px] text-brand-accent tracking-widest uppercase">
                  Living Care
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Registered and compliant standard UK provider delivering warm, respectful care across Bedfordshire households.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-accent flex-shrink-0 mt-0.5" />
                <div className="text-neutral-400 leading-normal">
                  <span className="underline block font-semibold text-neutral-200">Office Address</span>
                  {ADDRESS_UK}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-brand-accent flex-shrink-0" />
                <a href={`mailto:${EMAIL_PRIMARY}`} className="hover:text-brand-accent transition-colors leading-normal font-light">
                  {EMAIL_PRIMARY}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-brand-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-neutral-400 font-light">
                  <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-brand-accent transition-colors">
                    {PHONE_PRIMARY}
                  </a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-brand-accent transition-colors">
                    {PHONE_SECONDARY}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Service Links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-accent pb-2">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-400 font-light">
              {SERVICES_DATA.slice(0, 10).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/our-services/${service.slug}`} 
                    className="hover:text-brand-accent flex items-center justify-between group transition-colors py-0.5"
                  >
                    <span>{service.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-accent pb-2">
              About
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-accent transition-colors">About us</Link></li>
              <li><Link href="/career" className="hover:text-brand-accent transition-colors">Career</Link></li>
              <li><Link href="/governance" className="hover:text-brand-accent transition-colors">Governance</Link></li>
              <li><Link href="/contact-us" className="hover:text-brand-accent transition-colors">Contact us</Link></li>
              <li><Link href="/faqs" className="hover:text-brand-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Links & Compliance */}
          <div className="space-y-5">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-brand-accent pb-2">
              Social Links
            </h4>
            
            {/* Round Circle Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on X or Twitter"
                className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>

           
          </div>

        </div>

        {/* Bottom Bar: Center Email and Copyright details */}
        <div className="pt-8 text-center space-y-4 text-xs font-light text-neutral-500">
          <div>
            <a 
              href={`mailto:${EMAIL_SECONDARY}`} 
              className="text-neutral-400 hover:text-brand-accent transition-colors font-semibold"
            >
              {EMAIL_SECONDARY}
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>&copy; {currentYear} Affectionate Living Care. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span>
              Built with <Heart size={10} className="inline text-rose-500 fill-rose-500 mx-0.5" /> by <a href="#" className="hover:underline hover:text-brand-accent transition-colors">Tekuvo</a> &amp; <a href="#" className="hover:underline hover:text-brand-accent transition-colors">Marvex</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
