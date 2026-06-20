/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-[#122e42]
] text-white rounded-full shadow-lg hover:bg-[#e9cb8d] hover:scale-110 active:scale-95 z-40 transition-all duration-300 group"
      aria-label="Scroll back to top of page"
      id="scroll-to-top-button"
    >
      <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
}
