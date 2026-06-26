/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface MarqueeProps {
  className?: string;
}

export default function Marquee({ className = "" }: MarqueeProps) {
  // We define a repeating list of our premium regulatory trust badges
  const badgesGroup = [
    {
      type: 'ico',
      title: 'ico.',
      subtitle: "Information Commissioner's Office"
    },
    {
      type: 'cqc',
      title: 'CareQuality',
      subtitle: 'Commission'
    },
    {
      type: 'ico',
      title: 'ico.',
      subtitle: "Information Commissioner's Office"
    },
    {
      type: 'cqc',
      title: 'CareQuality',
      subtitle: 'Commission'
    },
    {
      type: 'ico',
      title: 'ico.',
      subtitle: "Information Commissioner's Office"
    },
    {
      type: 'cqc',
      title: 'CareQuality',
      subtitle: 'Commission'
    }
  ];

  return (
    <div 
      className={`relative w-full bg-[#11233b] border-t border-b border-white/10 py-7 overflow-hidden flex items-center select-none ${className}`}
      id="regulatory-trust-marquee"
    >
      {/* Premium left & right gradient fade overlays to smoothly mask the scrolling items */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#11233b] via-[#11233b]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#11233b] via-[#11233b]/90 to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track - Consists of two identical tracks to guarantee a perfect seamless infinite loop */}
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
        
        {/* Track 1 */}
        <div className="flex items-center gap-12 md:gap-24 shrink-0 px-6 md:px-12">
          {badgesGroup.map((badge, idx) => (
            <div 
              key={`track1-${idx}`} 
              className="flex items-center gap-12 shrink-0 transition-all duration-300 hover:scale-105"
            >
              {badge.type === 'ico' ? (
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-2xl md:text-3.5xl font-serif font-black tracking-tight text-white leading-none">
                      ico<span className="text-teal-400 font-sans">.</span>
                    </span>
                    <span className="text-[7px] md:text-[8px] tracking-widest text-slate-300 font-sans font-medium uppercase leading-none mt-2">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3.5">
                  <svg 
                    className="w-8 h-8 md:w-9 h-9 text-slate-100 shrink-0" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="45" cy="45" r="30" stroke="currentColor" strokeWidth="6" />
                    <path d="M45 23 C33 23 23 33 23 45 C23 57 33 67 45 67" stroke="currentColor" strokeWidth="3.5" opacity="0.75" />
                    <path d="M45 31 C37 31 31 37 31 45 C31 53 37 59 45 59" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
                    <path d="M64 64 L82 82" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-xs md:text-sm font-extrabold tracking-tight text-white leading-none">
                      {badge.title}
                    </span>
                    <span className="text-[10px] md:text-xs font-light tracking-wide text-slate-300 leading-none mt-1">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              )}
              {/* Visual separator dot between items */}
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 ml-4 md:ml-8" />
            </div>
          ))}
        </div>

        {/* Track 2 (Identical duplicate for seamless transition) */}
        <div className="flex items-center gap-12 md:gap-24 shrink-0 px-6 md:px-12" aria-hidden="true">
          {badgesGroup.map((badge, idx) => (
            <div 
              key={`track2-${idx}`} 
              className="flex items-center gap-12 shrink-0 transition-all duration-300 hover:scale-105"
            >
              {badge.type === 'ico' ? (
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-2xl md:text-3.5xl font-serif font-black tracking-tight text-white leading-none">
                      ico<span className="text-teal-400 font-sans">.</span>
                    </span>
                    <span className="text-[7px] md:text-[8px] tracking-widest text-slate-300 font-sans font-medium uppercase leading-none mt-2">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3.5">
                  <svg 
                    className="w-8 h-8 md:w-9 h-9 text-slate-100 shrink-0" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="45" cy="45" r="30" stroke="currentColor" strokeWidth="6" />
                    <path d="M45 23 C33 23 23 33 23 45 C23 57 33 67 45 67" stroke="currentColor" strokeWidth="3.5" opacity="0.75" />
                    <path d="M45 31 C37 31 31 37 31 45 C31 53 37 59 45 59" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
                    <path d="M64 64 L82 82" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-xs md:text-sm font-extrabold tracking-tight text-white leading-none">
                      {badge.title}
                    </span>
                    <span className="text-[10px] md:text-xs font-light tracking-wide text-slate-300 leading-none mt-1">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              )}
              {/* Visual separator dot between items */}
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 ml-4 md:ml-8" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

