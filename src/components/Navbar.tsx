/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../lib/router';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Heart,
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { SERVICES_DATA, PHONE_PRIMARY } from '../data/site-data';

export default function Navbar() {
  const { path } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isWhyUsDropdownOpen, setIsWhyUsDropdownOpen] = useState(false);

  // Scroll listener to toggle navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsWhyUsDropdownOpen(false);
  }, [path]);

  const activeClass = (linkPath: string) => {
    return path === linkPath 
      ? "text-brand-primary font-semibold border-b-2 border-brand-primary" 
      : "text-gray-700 hover:text-brand-primary border-b-2 border-transparent transition-all duration-200";
  };

  const mobileActiveClass = (linkPath: string) => {
    return path === linkPath
      ? "bg-sky-50 text-brand-primary font-semibold"
      : "text-gray-700 hover:bg-slate-50";
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
        : "bg-white py-4 border-b border-gray-100"
    }`}>
      {/* Top Banner (Mini Info Panel) */}
      <div className="bg-brand-primary text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Serving Biggleswade & surrounding areas</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_PRIMARY}`} className="flex items-center gap-1 hover:text-brand-accent transition-colors">
              <Phone size={12} className="inline" /> Urgent Advisor Hotline: {PHONE_PRIMARY}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-5 h-5 text-white fill-white/25 absolute animate-pulse" />
            </div> */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-brand-primary leading-tight tracking-tight">
                Affectionate
              </span>
              <span className="font-heading font-medium text-xs md:text-sm text-brand-accent tracking-widest uppercase">
                Living Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={activeClass('/')}>Home</Link>
            <Link href="/about-us" className={activeClass('/about-us')}>About us</Link>

            {/* Our Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                  setIsWhyUsDropdownOpen(false);
                }}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className="flex items-center gap-1 text-gray-700 hover:text-brand-primary py-1 transition-colors cursor-pointer"
              >
                <span>Our services</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown panel */}
              {isServicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                >
                  <div className="col-span-2 border-b border-gray-100 pb-2 mb-1">
                    <Link href="/our-services" className="font-semibold text-brand-primary hover:underline text-xs tracking-wider uppercase block">
                      Explore All Support Categories &rarr;
                    </Link>
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/our-services/${service.slug}`}
                      className="p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-brand-accent group-hover:scale-125 transition-transform"></div>
                      <div className="flex flex-col">
                        <span className="text-gray-950 font-semibold text-xs py-0.5">{service.title}</span>
                        <span className="text-gray-500 font-light text-[10px] line-clamp-1">{service.shortDescription}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Why Us Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsWhyUsDropdownOpen(!isWhyUsDropdownOpen);
                  setIsServicesDropdownOpen(false);
                }}
                onMouseEnter={() => setIsWhyUsDropdownOpen(true)}
                className="flex items-center gap-1 text-gray-700 hover:text-brand-primary py-1 transition-colors cursor-pointer"
              >
                <span>Why us?</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isWhyUsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown panel */}
              {isWhyUsDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsWhyUsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                >
                  <Link href="/why-us" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-gray-800 hover:text-brand-primary font-medium text-xs transition-colors">
                    <ShieldCheck size={16} className="text-brand-primary" />
                    <span>Why Choose Us?</span>
                  </Link>
                  <Link href="/career" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-gray-800 hover:text-brand-primary font-medium text-xs transition-colors">
                    <Briefcase size={16} className="text-brand-primary" />
                    <span>Join Our Team (Careers)</span>
                  </Link>
                  <Link href="/governance" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-gray-800 hover:text-brand-primary font-medium text-xs transition-colors">
                    <FileCheck size={16} className="text-brand-primary" />
                    <span>Clinical Governance</span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/faqs" className={activeClass('/faqs')}>FAQs</Link>
          </nav>

          {/* Contact us CTA right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/contact-us" 
              className="bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
              id="nav-contact-btn"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-primary rounded-lg hover:bg-slate-50 transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] md:top-[103px] bg-white z-40 flex flex-col justify-between overflow-y-auto border-t border-gray-100 p-6 animate-in slide-in-from-right duration-300">
          <div className="space-y-6">
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Main Menu</span>
              <div className="space-y-1 pt-1">
                <Link href="/" className={`block py-3 px-3 rounded-lg ${mobileActiveClass('/')}`}>
                  Home
                </Link>
                <Link href="/about-us" className={`block py-3 px-3 rounded-lg ${mobileActiveClass('/about-us')}`}>
                  About us
                </Link>
                <Link href="/faqs" className={`block py-3 px-3 rounded-lg ${mobileActiveClass('/faqs')}`}>
                  FAQs & Core Guides
                </Link>
              </div>
            </div>

            {/* Services List inside Mobile Drawer */}
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Our Support Services</span>
              <div className="grid grid-cols-1 gap-1 pt-2">
                <Link href="/our-services" className="font-semibold text-brand-primary py-2 px-3 text-xs flex items-center gap-1.5 hover:bg-sky-50 rounded-lg">
                  Explore All Services Dashboard &rarr;
                </Link>
                {SERVICES_DATA.map((service) => (
                  <Link 
                    key={service.slug} 
                    href={`/our-services/${service.slug}`} 
                    className="py-2.5 px-4 text-xs text-gray-700 hover:bg-slate-50 rounded-lg flex items-center justify-between border-l-2 border-slate-100 hover:border-brand-primary leading-snug transition-all"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-gray-400 font-mono font-light">{service.badge || "Support"}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Why Choose Us</span>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link href="/why-us" className="text-xs p-3 text-center border border-gray-100 hover:border-brand-primary rounded-xl flex flex-col items-center gap-1 hover:bg-slate-50">
                  <ShieldCheck size={16} className="text-brand-primary" />
                  <span className="font-semibold">Why us?</span>
                </Link>
                <Link href="/career" className="text-xs p-3 text-center border border-gray-100 hover:border-brand-primary rounded-xl flex flex-col items-center gap-1 hover:bg-slate-50">
                  <Briefcase size={16} className="text-brand-primary" />
                  <span className="font-semibold">Careers</span>
                </Link>
                <Link href="/governance" className="text-xs p-3 text-center border border-gray-100 hover:border-brand-primary rounded-xl flex flex-col items-center gap-1 hover:bg-slate-50 col-span-2">
                  <FileCheck size={16} className="text-brand-primary" />
                  <span className="font-semibold">Clinical Governance</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8 pb-4 border-t border-gray-100">
            <div className="bg-slate-50 p-3.5 rounded-2xl flex flex-col gap-1 items-center text-center">
              <span className="text-xs font-semibold text-gray-700">Need Immediate Advice?</span>
              <a href={`tel:${PHONE_PRIMARY}`} className="text-brand-primary font-bold text-lg hover:underline flex items-center gap-1.5 justify-center">
                <Phone size={18} /> {PHONE_PRIMARY}
              </a>
            </div>
            <Link 
              href="/contact-us" 
              className="bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold py-3.5 rounded-xl block text-center shadow-md text-sm"
            >
              Get In Touch &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
