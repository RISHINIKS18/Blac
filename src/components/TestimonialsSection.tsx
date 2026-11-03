import React, { useState } from 'react';
import {
  Star,
  Quote,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Volume2,
  Copy,
  Check,
  Award,
  Building
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/firmData';

interface TestimonialMeta {
  initials: string;
  mandateBadge: string;
  industry: string;
  tenure: string;
}

const TESTIMONIAL_METAS: Record<string, TestimonialMeta> = {
  'test-1': {
    initials: 'SM',
    mandateBadge: '₹1,200 Cr Saved in Cross-Border SIAC Arbitration',
    industry: 'Infrastructure & Heavy EPC',
    tenure: 'Client Since 2018',
  },
  'test-2': {
    initials: 'RM',
    mandateBadge: 'Lead Counsel on ₹4,800 Cr Debt Restructuring & NCLT',
    industry: 'National Banking & Credit',
    tenure: 'Client Since 2015',
  },
  'test-3': {
    initials: 'AD',
    mandateBadge: 'Cross-Border FDI & Multidivisional JV Antitrust',
    industry: 'Consumer Goods & Retail',
    tenure: 'Client Since 2020',
  },
  'test-4': {
    initials: 'VR',
    mandateBadge: 'Pan-India 120-Acre RERA Project Structuring',
    industry: 'Urban Real Estate Development',
    tenure: 'Client Since 2017',
  },
};

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeItem = TESTIMONIALS_DATA[activeIndex] || TESTIMONIALS_DATA[0];
  const activeMeta = TESTIMONIAL_METAS[activeItem.id] || {
    initials: 'GC',
    mandateBadge: 'Retained Institutional Legal Mandate',
    industry: 'Commercial Enterprise',
    tenure: 'Client Since 2019',
  };

  const handleCopyQuote = (quote: string, id: string) => {
    navigator.clipboard.writeText(`"${quote}" — ${activeItem.author}, ${activeItem.title} (${activeItem.organization})`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF6EC] relative overflow-hidden"
    >
      {/* Lady Justice Classical Watermark - Unmistakably visible in Client Testimonials */}
      <div
        id="testimonials-lady-justice-watermark"
        className="absolute right-[-20px] sm:right-4 lg:right-16 xl:right-28 top-1/2 -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center opacity-30 sm:opacity-40 select-none"
        aria-hidden="true"
      >
        <img
          src="/Lady_justice.png"
          alt="Lady Justice Scales and Sword"
          className="h-[540px] sm:h-[660px] lg:h-[780px] w-auto object-contain mix-blend-multiply filter contrast-125 brightness-95"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-5 border-b border-[#E5D7BC]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#9A7228]" />
              <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#9A7228]">
                Endorsements & Trust
              </span>
              <span className="w-5 h-[2px] bg-[#9A7228]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D2E3A] tracking-tight leading-tight">
              Client Testimonials
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#2C3E50] max-w-md font-sans leading-relaxed">
            What General Counsels, Managing Directors, and Corporate Boards say about our tactical precision and relentless client advocacy.
          </p>
        </div>

        {/* Creative Spotlight Dossier Showcase */}
        <div
          id="testimonial-spotlight-dossier"
          className="bg-[#FFFDF9]/92 backdrop-blur-xs border-2 border-[#D4AF60]/60 rounded-sm shadow-[0_20px_45px_-10px_rgba(12,56,68,0.12)] p-6 sm:p-8 lg:p-10 mb-10 relative overflow-hidden"
        >
          {/* Subtle Gilded Seal Background Emblem */}
          <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full border border-[#D4AF60]/20 flex items-center justify-center opacity-40 pointer-events-none">
            <div className="w-48 h-48 rounded-full border-2 border-dashed border-[#D4AF60]/20" />
          </div>

          {/* Dossier Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#E5D7BC]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0C3844] text-white text-xs font-semibold tracking-wide shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C178]" />
                <span>Verified General Counsel Directive</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xs bg-[#F5EEDC] text-[#0D2E3A] text-[11px] font-semibold border border-[#E5D7BC]">
                <Award className="w-3.5 h-3.5 text-[#9A7228]" />
                <span>{activeItem.practiceArea}</span>
              </span>
              <span className="text-xs text-[#64748B] font-mono hidden sm:inline">
                {activeMeta.tenure}
              </span>
            </div>

            {/* Star Rating + Interactive Navigation Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(activeItem.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#9A7228] text-[#9A7228]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-1 border-l border-[#E5D7BC] pl-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-xs border border-[#E5D7BC] bg-[#FAF6EC] hover:bg-[#0C3844] hover:text-white hover:border-[#0C3844] flex items-center justify-center text-[#0D2E3A] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-xs border border-[#E5D7BC] bg-[#FAF6EC] hover:bg-[#0C3844] hover:text-white hover:border-[#0C3844] flex items-center justify-center text-[#0D2E3A] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Core Spotlight Quotation Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="relative">
                <Quote className="w-10 h-10 text-[#9A7228]/30 mb-2 -scale-x-100" />
                <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#0D2E3A] leading-relaxed italic">
                  &ldquo;{activeItem.quote}&rdquo;
                </blockquote>
              </div>

              {/* Verified Mandate Scope Callout */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF6EC] border border-[#E5D7BC] rounded-xs text-xs text-[#0D2E3A] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#9A7228]" />
                <span className="font-semibold text-[#9A7228]">Mandate Scope:</span>
                <span>{activeMeta.mandateBadge}</span>
              </div>
            </div>

            {/* Author Executive Card */}
            <div className="lg:col-span-4 bg-[#FAF6EC] border border-[#E5D7BC] rounded-xs p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-3.5">
                {/* Executive Initials Monogram Badge */}
                <div className="w-12 h-12 rounded-sm bg-[#0C3844] text-[#E5C178] border border-[#D4AF60]/60 flex items-center justify-center font-serif text-lg font-bold shadow-xs shrink-0">
                  {activeMeta.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif text-base font-bold text-[#0D2E3A] leading-tight truncate">
                    {activeItem.author}
                  </h4>
                  <p className="text-xs text-[#9A7228] font-semibold truncate">
                    {activeItem.title}
                  </p>
                  <p className="text-[11px] text-[#64748B] flex items-center gap-1 truncate mt-0.5">
                    <Building className="w-3 h-3 shrink-0" />
                    <span className="truncate">{activeItem.organization}</span>
                  </p>
                </div>
              </div>

              {/* Creative Audio Transcript / Verified Citation Ribbon */}
              <div className="pt-3 border-t border-[#E5D7BC] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                  <Volume2 className="w-3.5 h-3.5 text-[#9A7228]" />
                  <span>Audited Statement</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyQuote(activeItem.quote, activeItem.id)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0C3844] hover:text-[#9A7228] transition-colors cursor-pointer"
                >
                  {copiedId === activeItem.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Selector Pill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isSelected = activeIndex === idx;
            const meta = TESTIMONIAL_METAS[item.id] || {
              initials: 'GC',
              mandateBadge: '',
              industry: '',
              tenure: '',
            };

            return (
              <div
                key={item.id}
                id={`testimonial-tab-${item.id}`}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 rounded-xs border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0C3844] border-[#9A7228] text-white shadow-md -translate-y-1'
                    : 'bg-[#FFFDF9]/92 backdrop-blur-xs border-[#E5D7BC] text-[#0D2E3A] hover:border-[#0C3844] hover:bg-[#FAF6EC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                        isSelected
                          ? 'bg-[#08232C] text-[#E5C178] border border-[#D4AF60]/40'
                          : 'bg-[#F5EEDC] text-[#9A7228]'
                      }`}
                    >
                      {item.practiceArea}
                    </span>
                    <span
                      className={`text-xs font-serif font-bold ${
                        isSelected ? 'text-[#E5C178]' : 'text-[#9A7228]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-sm font-bold truncate mb-1">
                    {item.author}
                  </h4>
                  <p
                    className={`text-[11px] truncate mb-2 ${
                      isSelected ? 'text-white/80' : 'text-[#64748B]'
                    }`}
                  >
                    {item.title}
                  </p>
                </div>

                <div
                  className={`pt-2 border-t text-[10px] flex items-center justify-between font-mono ${
                    isSelected ? 'border-white/20 text-[#E5C178]' : 'border-[#E5D7BC] text-[#8C9AA8]'
                  }`}
                >
                  <span className="truncate">{item.organization}</span>
                  <span className="shrink-0">{isSelected ? '● ACTIVE' : 'VIEW'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
