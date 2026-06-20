/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './lib/router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Import Views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import WhyUsView from './views/WhyUsView';
import FaqView from './views/FaqView';
import ContactView from './views/ContactView';
import CareerView from './views/CareerView';
import GovernanceView from './views/GovernanceView';
import ServicesHubView from './views/ServicesHubView';
import ServiceDetailView from './views/ServiceDetailView';

// Self-rendering schema data for LocalBusiness (UK home-care provider)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Affectionate Living Care",
  "image": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format",
  "url": "https://affectionatelivingcare.com",
  "telephone": "07932880794",
  "email": "info@affectionatelivingcare.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 Evans Grove",
    "addressLocality": "Biggleswade",
    "postalCode": "SG18 8JG",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.0850254,
    "longitude": -0.260655
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};

function AppContent() {
  const { path } = useRouter();

  // Simple routing matcher
  const renderView = () => {
    if (path === '/') return <HomeView />;
    if (path === '/about-us') return <AboutView />;
    if (path === '/why-us') return <WhyUsView />;
    if (path === '/faqs') return <FaqView />;
    if (path === '/contact-us') return <ContactView />;
    if (path === '/career') return <CareerView />;
    if (path === '/governance') return <GovernanceView />;
    if (path === '/our-services') return <ServicesHubView />;
    if (path.startsWith('/our-services/')) return <ServiceDetailView />;
    
    // Fallback simple view
    return (
      <div className="pt-[140px] pb-24 text-center space-y-6">
        <h2 className="text-2xl font-bold font-heading text-slate-900">404: Page Not Found</h2>
        <p className="text-gray-550 font-light text-xs max-w-sm mx-auto">
          We can't find the requested directory on affectionatelivingcare.com. Let's return to safety.
        </p>
        <div className="pt-2">
          <a href="/" className="inline-flex items-center gap-1.5 bg-[#122e42]
] text-white font-semibold text-xs px-5 py-3 rounded-xl shadow-md">
            Return Home &rarr;
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/25 text-slate-800 flex flex-col justify-between" id="app-viewport">
      {/* Self-injecting LocalBusiness structured schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Navbar />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

