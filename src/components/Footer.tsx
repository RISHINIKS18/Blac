import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'careers') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: 'home' | 'about' | 'careers', hash?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer id="global-footer" className="relative z-20 bg-[#08232C] text-[#FAF6EC] border-t border-[#E5D7BC]/30">
      {/* Upper Footer: Branding & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#0C3844] flex items-center justify-center border border-[#9A7228]/40 shadow-xs">
                <Shield className="w-5 h-5 text-[#D4AF60]" />
              </div>
              <span className="font-serif tracking-tight text-2xl font-bold text-[#FAF6EC]">
                BLAC <span className="font-sans font-light text-sm ml-1.5 uppercase tracking-widest text-[#D4AF60]">Co.</span>
              </span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF60]">
              Bombay Litigation And Corporate Co.
            </div>
            <p className="text-xs sm:text-sm text-[#E5D7BC]/90 font-sans leading-relaxed max-w-sm">
              BLAC Co. is a law firm offering comprehensive legal counsel across diverse practice areas. We take a matter from inception to resolution, providing strategic guidance at every stage.
            </p>
            <div className="text-xs text-[#FAF6EC]/85 space-y-1.5 pt-1 font-sans">
              <p><strong className="text-[#D4AF60]">Mumbai Office:</strong> 37-38, Prospect Chambers Annex, Fort, Mumbai</p>
              <p><strong className="text-[#D4AF60]">Other Offices:</strong> BLAC has office in Mumbai and integrated network offices in Pune and Delhi.</p>
              <p>Telephone: <span className="text-[#FAF6EC] font-semibold">022-40068070</span> • Email: <a href="mailto:litigation@blac.co.in" className="text-[#D4AF60] hover:underline">litigation@blac.co.in</a> • Website: <span className="text-[#D4AF60] font-semibold">Blac.co.in</span></p>
            </div>
          </div>

          {/* Area of Practise Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF60] mb-4">
              Area of Practise
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E5D7BC]/80 font-sans">
              {PRACTICE_AREAS.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick('home', 'practice')}
                    className="hover:text-[#D4AF60] transition-colors block truncate text-left cursor-pointer"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF60] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E5D7BC]/80 font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#D4AF60] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('home', 'practice')}
                  className="hover:text-[#D4AF60] transition-colors cursor-pointer"
                >
                  Area of Practise
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('home', 'clients')}
                  className="hover:text-[#D4AF60] transition-colors cursor-pointer"
                >
                  Our Clients
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('home', 'testimonials')}
                  className="hover:text-[#D4AF60] transition-colors cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('home', 'updates')}
                  className="hover:text-[#D4AF60] transition-colors cursor-pointer"
                >
                  Firm Updates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('careers')}
                  className="hover:text-[#D4AF60] transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('home', 'contact')}
                  className="hover:text-[#D4AF60] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to top Row */}
        <div className="mt-12 pt-6 border-t border-[#E5D7BC]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5D7BC]/75">
          <div className="text-xs text-[#E5D7BC]/60 font-mono">
            Bombay Litigation And Corporate Co. (BLAC Co.)
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#D4AF60] hover:text-[#FAF6EC] transition-colors uppercase tracking-wider cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E5D7BC]/80 pt-4 border-t border-[#E5D7BC]/20">
          <div>
            &copy; {new Date().getFullYear()} BLAC Co. Bombay Litigation And Corporate Co. All rights reserved.
          </div>
          <div>
            Designed and developed by{' '}
            <a
              href="https://www.uniboxx.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF60] hover:text-[#FAF6EC] no-underline transition-colors"
            >
              <strong className="font-bold">Uniboxx</strong> : https://www.uniboxx.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
