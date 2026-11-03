import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield } from 'lucide-react';

interface HeroImage {
  src: string;
  title: string;
  sub: string;
}

const HERO_IMAGES: HeroImage[] = [
  {
    src: '/BHC.png',
    title: 'Bombay High Court Illuminated Facade',
    sub: 'Mumbai Seat of Justice',
  },
  {
    src: '/BHC8.jpg',
    title: 'Gothic Revival West Elevation',
    sub: 'Historic Judicial Quarter, Fort',
  },
  {
    src: '/BHC1.jpg',
    title: 'Colonnaded Balconies & Chambers',
    sub: 'Advocates & Counsel Quarters',
  },
  {
    src: '/BHC4.jpg',
    title: 'Carved Gothic Archways & Colonnades',
    sub: 'Architectural Heritage of Bombay Law',
  },
  {
    src: '/BHC6.jpg',
    title: 'Historic Spiral Staircase',
    sub: 'Library & Archival Halls',
  },
  {
    src: '/BHC15.jpg',
    title: 'Fort Legal Precinct Quadrangle',
    sub: 'Mumbai • Pune • Delhi Network',
  },
  {
    src: '/BHC2.jpg',
    title: 'Historic Portico & Corridors',
    sub: 'Chambers of Legal Heritage',
  },
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Continuous auto-scroll slideshow across high court background imagery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative z-20 w-full min-h-[600px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#071E28] text-white"
    >
      {/* Auto-scrolling Multiple Hero Images Carousel Layer */}
      <div
        id="hero-background-image-container"
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {HERO_IMAGES.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={img.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-95 sm:opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full h-full object-cover object-center select-none transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* 
          Multi-layer gradient overlay:
          Deep navy blend on the text side ensures crystal-clear readability
          while allowing the illuminated court facades to remain visible.
        */}
        <div
          id="hero-gradient-overlay"
          className="absolute inset-0 z-2 bg-gradient-to-r from-[#071E28]/95 via-[#071E28]/75 via-50% to-[#071E28]/35 sm:to-transparent"
        />

        {/* Subtle radial ambient warmth */}
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[350px] bg-[#D4AF60]/10 rounded-full blur-3xl pointer-events-none z-2" />

        {/* Bottom divider with warm gold hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF60]/50 to-transparent z-3" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Institution Pre-title Badge */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0C3844]/95 border border-[#D4AF60]/60 rounded-xs mb-5 shadow-xs backdrop-blur-xs"
          >
            <Shield className="w-3.5 h-3.5 text-[#D4AF60] shrink-0" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#FAF6EC]">
              Bombay Litigation And Corporate Co.
            </span>
          </motion.div>

          {/* Main Headline with high-contrast typography */}
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#FAF6EC] tracking-tight leading-[1.14] drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
          >
            Ahead of The Curve<br />
            <span className="text-[#E5C178]">Breaking New Ground</span>
          </motion.h1>

          {/* Subheading with Identity & Metro Offices */}
          <motion.div
            id="hero-subheading-block"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 mb-6"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-[#D4AF60] font-serif drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
              PAN India Law Firm • Mumbai • Pune • Delhi
            </h2>
            <p className="text-sm sm:text-base text-[#D6E0E6] font-sans mt-2.5 max-w-xl leading-relaxed font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
              Advocates and corporate counsel providing trial-tested advocacy, corporate conveyancing, dispute resolution, and institutional advisory across India.
            </p>
          </motion.div>

          {/* Action Buttons: Area of Practise */}
          <motion.div
            id="hero-action-buttons"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6"
          >
            <a
              id="hero-btn-practice"
              href="#practice"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('practice');
              }}
              className="px-6 sm:px-7 py-3 bg-[#9A7228] hover:bg-[#835F1E] text-white text-xs sm:text-sm font-semibold rounded-sm transition-all shadow-md flex items-center gap-2 group cursor-pointer border border-[#E5C178]/30"
            >
              <span>Area of Practise</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#FAF6EC]" />
            </a>

            <a
              id="hero-btn-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="px-5 sm:px-6 py-3 bg-[#0C3844]/90 hover:bg-[#104858] text-[#FAF6EC] border border-[#D4AF60]/50 text-xs sm:text-sm font-semibold rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs backdrop-blur-xs group"
            >
              <span>Engage Counsel</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#FAF6EC]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
