import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'careers';
  onNavigate?: (page: 'home' | 'about' | 'careers', sectionId?: string) => void;
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', page: 'home' as const },
    { name: 'About us', page: 'about' as const },
    { name: 'Area of Practise', page: 'home' as const, sectionId: 'practice' },
    { name: 'Updates', page: 'home' as const, sectionId: 'updates' },
    { name: 'Careers', page: 'careers' as const },
    { name: 'Contact us', page: 'home' as const, sectionId: 'contact' },
  ];

  const handleLinkClick = (page: 'home' | 'about' | 'careers', sectionId?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="global-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF6EC] border-b border-[#E5D7BC] ${
          isScrolled ? 'shadow-sm py-3' : 'py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              type="button"
              id="brand-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 text-left cursor-pointer"
              aria-label="BLAC firm homepage"
            >
              {/* Modern spiral / balance legal icon */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0D2E3A]/25 flex items-center justify-center shrink-0 bg-[#FAF6EC] text-[#0D2E3A] group-hover:border-[#0D2E3A] transition-colors">
                <svg className="w-5 h-5 text-[#0D2E3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
                  <path d="M12 3a9 9 0 0 1 9 9 6 6 0 0 1-6 6 3 3 0 0 1-3-3" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.24em] text-lg sm:text-xl font-bold uppercase text-[#0D2E3A] leading-none">
                  B L A C <span className="font-light text-[#9A7228]">C O.</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-[#6B7280] font-sans font-medium mt-0.5">
                  Bombay Litigation And Corporate Co.
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  (link.page === currentPage && !link.sectionId) ||
                  (currentPage === 'home' && link.page === 'home' && !link.sectionId && link.name === 'Home');

                return (
                  <button
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    type="button"
                    onClick={() => handleLinkClick(link.page, link.sectionId)}
                    className={`text-sm font-medium tracking-normal transition-colors duration-200 relative group py-1 cursor-pointer ${
                      isActive
                        ? 'text-[#0C3844] font-semibold'
                        : 'text-[#1E293B] hover:text-[#0C3844]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#0C3844] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Mobile & Tablet Right Controls */}
            <div className="flex lg:hidden items-center">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 rounded-sm text-[#0D2E3A] hover:bg-[#F5EEDC] transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0D2E3A]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="lg:hidden bg-[#FAF6EC] border-t border-b border-[#E5D7BC] px-4 sm:px-6 py-5 shadow-xl transition-all duration-200"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleLinkClick(link.page, link.sectionId)}
                  className="min-h-[44px] text-base font-medium text-[#0D2E3A] hover:text-[#0C3844] py-2.5 px-3 border-b border-[#E5D7BC]/40 flex items-center justify-between rounded-xs transition-colors hover:bg-[#F5EEDC] text-left cursor-pointer"
                >
                  <span className="font-serif tracking-tight">{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#9A7228]" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-backdrop"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#0A192F]/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}
    </>
  );
};
