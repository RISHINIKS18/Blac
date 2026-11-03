import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Capabilities } from './Capabilities';
import { ClientsSection } from './ClientsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FirmUpdatesSection } from './FirmUpdatesSection';
import { ContactSection } from './ContactSection';
import { AboutPage } from './AboutPage';
import { CareersPage } from './CareersPage';
import { Footer } from './Footer';
import { DisclaimerModal } from './DisclaimerModal';

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBelowHero, setIsBelowHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsBelowHero(scrollPosition > 160);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page, sectionId) => {
    setCurrentPage(page);
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const nameInput = document.getElementById('form-name');
            if (nameInput) nameInput.focus();
          }, 350);
        }
      }, 150);
    } else {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const nameInput = document.getElementById('form-name');
          if (nameInput) nameInput.focus();
        }, 350);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#0D2E3A] flex flex-col selection:bg-[#0C3844] selection:text-white relative">
      {/* Sticky Global Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Fixed Lady Justice Watermark Background Layer for Home Page */}
      {currentPage === 'home' && (
        <div
          id="fixed-lady-justice-watermark"
          aria-hidden="true"
          className={`fixed inset-0 pointer-events-none z-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
            isBelowHero ? 'opacity-15' : 'opacity-0'
          }`}
        >
          <img
            src="/Lady_justice.png"
            alt=""
            className="h-[80vh] max-h-[820px] w-auto max-w-[80vw] object-contain select-none mix-blend-multiply"
          />
        </div>
      )}

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow relative z-10">
        {currentPage === 'home' && (
          <>
            {/* #1. Hero Section */}
            <Hero />

            {/* #2. Area of Practise */}
            <Capabilities onOpenConsultation={handleOpenConsultation} />

            {/* #3. Clients (Logos Only) */}
            <ClientsSection />

            {/* #4. Client Testimonials */}
            <TestimonialsSection />

            {/* #5. Firm Updates (Streamlined & Concise) */}
            <FirmUpdatesSection />

            {/* #6. Contact Us (Dedicated Form & Office Coordinates - Careers separated to its own page) */}
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateHome={(sectionId) => handleNavigate('home', sectionId)}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'careers' && (
          <CareersPage
            onNavigateHome={(sectionId) => handleNavigate('home', sectionId)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={(page) => handleNavigate(page)} />

      {/* Themed Regulatory Disclaimer Popup */}
      <DisclaimerModal />
    </div>
  );
}
