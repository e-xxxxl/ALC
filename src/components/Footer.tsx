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
  MapPin 
} from 'lucide-react';
import { 
  SERVICES_DATA, 
  PHONE_PRIMARY, 
  PHONE_SECONDARY, 
  EMAIL_PRIMARY, 
  EMAIL_SECONDARY, 
  ADDRESS_UK 
} from '../data/site-data';

import navlogo from '../../assets/navlogoo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800" id="main-site-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Main Footer Links & Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Company Info & Contact */}
          <div className="space-y-5">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center shrink-0 group"
            aria-label="Affectionate Living Care - Home"
          >
            <img 
              src={navlogo} 
              alt="Affectionate Living Care Logo" 
              className="h-14 sm:h-12 md:h-13 lg:h-16 w-auto object-contain group-hover:opacity-85 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
          </Link>
            
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Registered and compliant standard UK provider delivering warm, respectful care across Bedfordshire households.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#e9cb8d] flex-shrink-0 mt-0.5" />
                <div className="text-neutral-400 leading-normal">
                  <span className="underline block font-semibold text-neutral-200">Office Address</span>
                  {ADDRESS_UK}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#e9cb8d] flex-shrink-0" />
                <a href={`mailto:${EMAIL_PRIMARY}`} className="hover:text-[#e9cb8d] transition-colors leading-normal font-light">
                  {EMAIL_PRIMARY}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#e9cb8d] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-neutral-400 font-light">
                  <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-[#e9cb8d] transition-colors">
                    {PHONE_PRIMARY}
                  </a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-[#e9cb8d] transition-colors">
                    {PHONE_SECONDARY}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Service Links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#e9cb8d] pb-2">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-400 font-light">
              {SERVICES_DATA.slice(0, 10).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/our-services/${service.slug}`} 
                    className="hover:text-[#e9cb8d] flex items-center justify-between group transition-colors py-0.5"
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
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#e9cb8d] pb-2">
              About
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li><Link href="/" className="hover:text-[#e9cb8d] transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#e9cb8d] transition-colors">About us</Link></li>
              <li><Link href="/career" className="hover:text-[#e9cb8d] transition-colors">Career</Link></li>
              <li><Link href="/governance" className="hover:text-[#e9cb8d] transition-colors">Governance</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#e9cb8d] transition-colors">Contact us</Link></li>
              <li><Link href="/faqs" className="hover:text-[#e9cb8d] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Links & Compliance */}
          <div className="space-y-5">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#e9cb8d] pb-2">
              Social Links
            </h4>
            
            {/* Round Circle Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61561896989739" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-[#122e42] hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/affectionatelivingcareuk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-[#122e42] hover:text-white hover:scale-110 active:scale-95 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com/affection_care" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on X or Twitter"
                className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-[#122e42] hover:text-white hover:scale-110 active:scale-95 transition-all"
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
              className="text-neutral-400 hover:text-[#e9cb8d] transition-colors font-semibold"
            >
              {EMAIL_SECONDARY}
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>&copy; {currentYear} Affectionate Living Care. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-700">|</span>
          </div>
          <div className="text-xs text-neutral-500">
            Digital experience by Vista Creative Agency
          </div>
        </div>

      </div>
    </footer>
  );
}
