import React, { useEffect } from 'react';
import { X, CheckCircle2, Award, ArrowRight, Shield } from 'lucide-react';
import { PracticeArea } from '../types';

interface PracticeModalProps {
  practice: PracticeArea | null;
  onClose: () => void;
  onConsult: () => void;
}

const PRACTICE_PHOTOS: Record<string, string> = {
  'litigation': '/BHC1.jpg',
  'corporate': '/BHC4.jpg',
  'adr': '/BHC6.jpg',
  'real-estate': '/BHC5.jpg',
};

export const PracticeModal: React.FC<PracticeModalProps> = ({ practice, onClose, onConsult }) => {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!practice) return null;

  const photoSrc = PRACTICE_PHOTOS[practice.id] || '/BHC8.jpg';

  return (
    <div
      id="practice-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#08232C]/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-modal-title"
    >
      <div
        id="practice-detail-modal-card"
        className="relative w-full max-w-2xl max-h-[92vh] bg-[#FAF6EC] border border-[#E5D7BC] rounded-sm shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Auto-Adjusting Header Bar */}
        <div className="bg-[#0C3844] text-white px-4 sm:px-5 py-3 flex items-center justify-between border-b border-[#E5D7BC]/20 gap-2 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-sm bg-[#08232C] border border-[#9A7228]/40 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-[#D4AF60]" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF60] uppercase block truncate">
                Practice Scope & Advisory Framework
              </span>
              <h3
                id="practice-modal-title"
                className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-white leading-tight truncate"
              >
                {practice.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 sm:p-1.5 text-white/80 hover:text-white rounded-sm hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Firm Practice Banner */}
        <div className="relative h-16 sm:h-20 w-full overflow-hidden bg-[#071E28] shrink-0 border-b border-[#E5D7BC]">
          <img
            src={photoSrc}
            alt={practice.title}
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08232C] via-[#08232C]/60 to-transparent" />
          <div className="absolute bottom-2 inset-x-4 flex items-center justify-between text-[11px] text-[#FAF6EC] font-mono">
            <span className="text-[#E5C178] font-semibold tracking-wide">
              BLAC Co. • {practice.title}
            </span>
            <span className="text-white/70 text-[10px] hidden sm:inline uppercase tracking-widest">
              Executive Legal Counsel
            </span>
          </div>
        </div>

        {/* Content Body: Auto-adjusting compact layout fitting all screens with zero scrolling */}
        <div className="p-4 sm:p-5 space-y-3.5 overflow-y-auto">
          {/* Practice Overview Paragraphs */}
          <div className="space-y-2.5">
            {practice.fullDesc.split('\n\n').map((para, pIdx) => (
              <p key={pIdx} className="text-xs sm:text-[13px] text-[#2C3E50] leading-relaxed font-sans">
                {para}
              </p>
            ))}
          </div>

          {/* Key Services 2x2 Grid */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#9A7228] mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A7228]" />
              Key Advisory & Transactional Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {practice.keyServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#FFFDF9] border border-[#E5D7BC] text-xs text-[#0D2E3A] shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7228] shrink-0" />
                  <span className="font-medium truncate">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Representative Benchmark Matter Highlight - Rendered only when present */}
          {practice.notableDeals && practice.notableDeals.trim() !== '' && (
            <div className="px-3.5 py-2.5 bg-[#F5EEDC] border-l-2 border-[#9A7228] rounded-r-sm space-y-0.5">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#0D2E3A] uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#9A7228] shrink-0" />
                <span>Representative Benchmark Matter</span>
              </div>
              <p className="text-xs text-[#334155] font-medium leading-snug">
                {practice.notableDeals.includes('Benchmark Matter')
                  ? practice.notableDeals
                  : `Representative Benchmark Matter &ndash; ${practice.notableDeals}`}
              </p>
            </div>
          )}
        </div>

        {/* Compact Footer Actions */}
        <div className="bg-[#F5EEDC] px-4 sm:px-5 py-2.5 border-t border-[#E5D7BC] flex items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] text-[#64748B] hidden sm:inline truncate">
            Confidential conflict clearance conducted prior to engagement.
          </span>
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold text-[#0D2E3A] hover:bg-[#FAF6EC] rounded-sm transition-colors cursor-pointer"
            >
              Dismiss
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onConsult();
              }}
              className="px-4 py-1.5 bg-[#0C3844] text-white hover:bg-[#07242D] text-xs font-semibold uppercase tracking-wider rounded-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Engage Counsel</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF60]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
