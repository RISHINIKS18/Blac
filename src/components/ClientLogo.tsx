import React, { useState } from 'react';

interface ClientLogoProps {
  clientId: string;
  className?: string;
  logoSrc?: string;
}

interface ImageConfig {
  src: string;
  alt: string;
  heightClass: string;
}

const CLIENT_IMAGES: Record<string, ImageConfig> = {
  'rbi': {
    src: '/RBI.png',
    alt: 'Reserve Bank of India',
    heightClass: 'max-h-16 sm:max-h-18 max-w-[85%]',
  },
  'bpcl': {
    src: '/Bharat.png',
    alt: 'Bharat Petroleum Corporation Ltd.',
    heightClass: 'max-h-16 sm:max-h-18 max-w-[85%]',
  },
  'colgate': {
    src: '/colgate.png',
    alt: 'Colgate-Palmolive (India) Ltd.',
    heightClass: 'max-h-10 sm:max-h-12 max-w-[85%]',
  },
  'iocl': {
    src: '/IndianOil.png',
    alt: 'Indian Oil Corporation Ltd.',
    heightClass: 'max-h-16 sm:max-h-18 max-w-[85%]',
  },
  'jnj': {
    src: '/johnson-johnson-logo.png',
    alt: 'Johnson & Johnson Pvt Ltd.',
    heightClass: 'max-h-9 sm:max-h-11 max-w-[85%]',
  },
  'parle-agro': {
    src: '/parle.png',
    alt: 'Parle Agro Pvt. Ltd.',
    heightClass: 'max-h-10 sm:max-h-12 max-w-[85%]',
  },
  'itd-cementation': {
    src: '/ITD.png',
    alt: 'ITD Cementation Ltd.',
    heightClass: 'max-h-14 sm:max-h-16 max-w-[85%]',
  },
};

export const ClientLogo: React.FC<ClientLogoProps> = ({ clientId, className = 'w-full h-full' }) => {
  const [imgError, setImgError] = useState(false);

  // If a dedicated PNG asset exists and hasn't failed to load, render the official logo image
  if (CLIENT_IMAGES[clientId] && !imgError) {
    const config = CLIENT_IMAGES[clientId];
    return (
      <div className={`flex items-center justify-center w-full h-full ${className}`}>
        <img
          src={config.src}
          alt={config.alt}
          onError={() => setImgError(true)}
          className={`${config.heightClass} w-auto object-contain transition-all duration-300 group-hover:scale-105 select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]`}
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback vector representations for clients without uploaded bitmap files or if image load fails
  switch (clientId) {
    case 'tlg-starcom':
      return (
        <div className={`flex items-center justify-center gap-2.5 ${className}`}>
          <div className="w-9 h-9 bg-[#0C1E38] rounded-full flex items-center justify-center shrink-0 border border-[#D4AF60]/40 shadow-xs">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E5C178]" fill="currentColor">
              <path d="M12 2L14.4 8.6L21.5 9.2L16 13.8L17.7 20.8L12 17.2L6.3 20.8L8 13.8L2.5 9.2L9.6 8.6L12 2Z" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans text-xs font-black tracking-wider text-[#0C1E38] uppercase leading-tight">
              Starcom
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#9A7228] uppercase font-semibold">
              TLG Starcom Pvt. Ltd.
            </span>
          </div>
        </div>
      );

    case 'rizvi-builders':
      return (
        <div className={`flex items-center justify-center gap-2.5 ${className}`}>
          <div className="w-9 h-9 rounded-sm bg-[#004225] flex items-center justify-center shrink-0 border border-[#D4AF60] shadow-xs">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E5C178]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6M9 18h6" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-xs font-bold text-[#004225] tracking-tight uppercase leading-tight">
              Rizvi Builders
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#9A7228] uppercase font-semibold">
              Mumbai Real Estate
            </span>
          </div>
        </div>
      );

    case 'kumar-builders':
      return (
        <div className={`flex items-center justify-center gap-2.5 ${className}`}>
          <div className="w-9 h-9 rounded-xs bg-[#B3192B] flex items-center justify-center shrink-0 text-white font-sans font-black text-xs tracking-tighter shadow-xs">
            KUL
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans text-xs font-black text-[#B3192B] uppercase tracking-tight leading-tight">
              Kumar Builders
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#64748B] uppercase font-semibold">
              Pune Group
            </span>
          </div>
        </div>
      );

    case 'kalyani-group':
      return (
        <div className={`flex items-center justify-center gap-2.5 ${className}`}>
          <div className="w-9 h-9 rounded-full bg-[#0D2E3A] border-2 border-[#9A7228] flex items-center justify-center shrink-0 shadow-xs">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E5C178]" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-xs font-bold text-[#0D2E3A] tracking-wider uppercase leading-tight">
              Kalyani Group
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#9A7228] uppercase font-semibold">
              Pune Group • Bharat Forge
            </span>
          </div>
        </div>
      );

    case 'exim-bank':
      return (
        <div className={`flex items-center justify-center gap-2.5 ${className}`}>
          <div className="w-9 h-9 rounded-sm bg-[#800000] flex items-center justify-center shrink-0 border border-[#D4AF60]/50 shadow-xs">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FAF6EC]" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M7 15h10M7 9l5 3 5-3" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-xs font-bold text-[#800000] tracking-tight uppercase leading-tight">
              Exim Bank
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#9A7228] uppercase font-semibold">
              Export-Import Bank of India
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center text-xs font-serif font-bold text-[#0D2E3A] ${className}`}>
          <span>{clientId.toUpperCase()}</span>
        </div>
      );
  }
};
