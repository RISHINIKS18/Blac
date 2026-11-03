import React, { useState } from 'react';
import {
  Building2,
  Scale,
  Gavel,
  Briefcase,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PracticeArea } from '../types';
import { PracticeModal } from './PracticeModal';

interface CapabilitiesProps {
  onSelectPractice?: (practice: PracticeArea) => void;
  onOpenConsultation?: () => void;
}

interface TitleCardMeta {
  roman: string;
  categoryTag: string;
  landmarkBadge: string;
  accentQuote: string;
  photo: string;
  photoCaption: string;
}

const TITLE_CARD_METAS: Record<string, TitleCardMeta> = {
  'litigation': {
    roman: 'I',
    categoryTag: 'TRIAL & APPELLATE ADVOCACY',
    landmarkBadge: 'Spearheaded by Partner Aditi Phatak',
    accentQuote: 'Partner Aditi Phatak • Supreme Court • High Court • Benchmark: Abhyudaya Bank',
    photo: '/BHC1.jpg',
    photoCaption: 'Advocates at Court Balcony',
  },
  'corporate': {
    roman: 'II',
    categoryTag: 'TRANSACTIONAL LEADERSHIP',
    landmarkBadge: 'Headed by Ms. Shirin Hormuzdi',
    accentQuote: 'Ms. Shirin Hormuzdi • Sophisticated Conveyancing • Bespoke Contracts & NDAs',
    photo: '/BHC4.jpg',
    photoCaption: 'Carved Colonnades & Pillars',
  },
  'adr': {
    roman: 'III',
    categoryTag: 'ARBITRATION & MEDIATION',
    landmarkBadge: 'Domestic Arbitrations & Mediation',
    accentQuote: 'Construction & Infrastructure Disputes • Monetary Claims • Award Enforcement',
    photo: '/BHC6.jpg',
    photoCaption: 'The Spiral Staircase',
  },
  'real-estate': {
    roman: 'IV',
    categoryTag: 'PROPERTY & REDEVELOPMENT',
    landmarkBadge: 'Mumbai & Maharashtra Advisory',
    accentQuote: 'Redevelopment Projects • Turnkey Construction Contracts • Society Conveyancing',
    photo: '/BHC5.jpg',
    photoCaption: 'Historic Courtroom Wing',
  },
};

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectPractice, onOpenConsultation }) => {
  const [activeModalPractice, setActiveModalPractice] = useState<PracticeArea | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#E5C178]' };
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Scale':
        return <Scale {...props} />;
      case 'Gavel':
        return <Gavel {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Shield':
        return <Shield {...props} />;
      default:
        return <Scale {...props} />;
    }
  };

  const handleCardClick = (practice: PracticeArea) => {
    if (onSelectPractice) {
      onSelectPractice(practice);
    }
    setActiveModalPractice(practice);
  };

  return (
    <section
      id="practice"
      className="py-16 sm:py-20 lg:py-24 relative bg-[#FAF6EC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-5 border-b border-[#E5D7BC]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#9A7228]" />
              <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#9A7228]">
                Practice Areas & Disciplines
              </span>
              <span className="w-5 h-[2px] bg-[#9A7228]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0D2E3A] tracking-tight leading-tight">
              Area of Practise
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#2C3E50] max-w-md font-sans leading-relaxed">
            Authoritative counsel, trial-tested courtroom advocacy, and transactional excellence across Mumbai, Maharashtra, and pan-India forums.
          </p>
        </div>

        {/* 4 Core Practice Cards Grid (2x2) */}
        <div
          id="practice-areas-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {PRACTICE_AREAS.map((practice, index) => {
            const meta = TITLE_CARD_METAS[practice.id] || {
              roman: `0${index + 1}`,
              categoryTag: 'LEGAL COUNSEL',
              landmarkBadge: 'Specialized Practice Bench',
              accentQuote: practice.shortDesc,
              photo: '/BHC8.jpg',
              photoCaption: 'Bombay High Court Quadrangle',
            };

            return (
              <div
                key={practice.id}
                id={`practice-card-${practice.id}`}
                className="group relative bg-[#FFFDF9] border border-[#E5D7BC] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#9A7228] hover:shadow-[0_20px_40px_-12px_rgba(12,56,68,0.22)] hover:-translate-y-1.5"
              >
                {/* Glowing Top Gold Accent Hairline */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A7228] via-[#E5C178] to-[#9A7228] opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* 1. Title Card Header Plaque with Authentic BHC Architecture */}
                <div className="relative bg-gradient-to-br from-[#092730] via-[#0C3844] to-[#061D24] p-5 sm:p-6 text-white border-b border-[#9A7228]/40 overflow-hidden">
                  {/* Authentic Bombay High Court Photographic Backdrop Accent */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-500 overflow-hidden">
                    <img
                      src={meta.photo}
                      alt={meta.photoCaption}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092730] via-[#092730]/70 to-[#092730]/40" />
                  </div>

                  {/* Subtle decorative watermark icon */}
                  <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                    {getIcon(practice.iconName)}
                  </div>

                  {/* Top Bar: Roman Numeral Monogram & Category Plaque */}
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-xs bg-[#061D24] border border-[#D4AF60]/60 text-[#E5C178] text-xs font-serif font-bold tracking-wider shadow-2xs">
                        {meta.roman}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[#E5C178] uppercase truncate max-w-[200px]">
                        {meta.categoryTag}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-white/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Central Embellished Icon Plaque */}
                  <div className="w-12 h-12 rounded-sm bg-[#08232C]/90 backdrop-blur-xs border border-[#D4AF60]/50 flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(212,175,96,0.2)] group-hover:border-[#E5C178] group-hover:scale-105 transition-all duration-300 relative z-10">
                    {getIcon(practice.iconName)}
                  </div>

                  {/* Bold Practice Headline */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#F6E8C3] transition-colors relative z-10 min-h-[3.25rem] flex items-center">
                    {practice.title}
                  </h3>

                  {/* Subtitle / Focus Moniker */}
                  <p className="text-[11px] text-[#D4AF60] font-medium tracking-wide mt-1.5 italic line-clamp-1 relative z-10">
                    {meta.accentQuote}
                  </p>

                  {/* Expanding Gold Divider Accent */}
                  <div className="w-10 h-[2px] bg-[#9A7228] mt-3 group-hover:w-16 transition-all duration-300" />
                </div>

                {/* 2. Title Card Body Content (No Core Disciplines, No Representative Practice) */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    {/* Executive Scope Paragraph */}
                    <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed font-sans mb-4">
                      {practice.shortDesc}
                    </p>
                  </div>

                  {/* 3. Action Button */}
                  <button
                    type="button"
                    onClick={() => handleCardClick(practice)}
                    className="w-full py-2.5 px-4 bg-[#0C3844] group-hover:bg-[#07242D] text-white border border-[#9A7228]/40 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs mt-2"
                  >
                    <span>View Practice Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C178] transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalPractice && (
        <PracticeModal
          practice={activeModalPractice}
          onClose={() => setActiveModalPractice(null)}
          onConsult={() => {
            setActiveModalPractice(null);
            if (onOpenConsultation) {
              onOpenConsultation();
            } else {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      )}
    </section>
  );
};
