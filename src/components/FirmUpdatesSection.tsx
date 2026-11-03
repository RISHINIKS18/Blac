import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ArrowRight,
  X
} from 'lucide-react';
import { FIRM_UPDATES_DATA } from '../data/firmData';
import { FirmUpdate } from '../types';

const UPDATE_PHOTOS: Record<string, { src: string; caption: string }> = {
  'sc-arbitration-limitation-2026': { src: '/BHC3.jpg', caption: 'Supreme Court & High Court Bench' },
  'sebi-lodr-governance-amendments': { src: '/BHC12.jpg', caption: 'Law Library & Corporate Jurisprudence' },
  'rera-title-due-diligence-developments': { src: '/BHC10.jpg', caption: 'Historic Chambers & Conveyancing' },
};

export const FirmUpdatesSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<FirmUpdate | null>(null);

  // Keep concise selection of updates
  const updates = FIRM_UPDATES_DATA.slice(0, 3);

  return (
    <section
      id="updates"
      className="py-16 sm:py-20 bg-[#F5EEDC]/40 border-t border-b border-[#E5D7BC] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-5 border-b border-[#E5D7BC]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#9A7228]" />
              <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#9A7228]">
                Legal Insights
              </span>
              <span className="w-5 h-[2px] bg-[#9A7228]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D2E3A] tracking-tight leading-tight">
              Firm Updates
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#475569] max-w-md font-sans leading-relaxed">
            Key legal briefings and analyses of landmark Supreme Court rulings, statutory amendments, and commercial precedents.
          </p>
        </div>

        {/* Clean, Scannable 3-Column Updates Grid */}
        <div
          id="firm-updates-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {updates.map((update) => {
            const photo = UPDATE_PHOTOS[update.id] || { src: '/BHC8.jpg', caption: 'High Court Precedent' };
            return (
              <article
                key={update.id}
                id={`update-${update.id}`}
                className="bg-[#FFFDF9] border border-[#E5D7BC] rounded-xs hover:border-[#9A7228] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group p-5 sm:p-6"
              >
                <div>
                  {/* Authentic Court Photographic Header Banner */}
                  <div className="relative h-36 w-full -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-4 overflow-hidden bg-[#071E28]">
                    <img
                      src={photo.src}
                      alt={update.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-1.5 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-[#0D2E3A]">
                      <span className="bg-[#FAF6EC]/90 backdrop-blur-xs px-2 py-0.5 rounded-2xs border border-[#E5D7BC] font-semibold text-[#9A7228]">
                        {photo.caption}
                      </span>
                    </div>
                  </div>

                  {/* Meta info bar */}
                  <div className="flex items-center justify-between gap-2 text-xs text-[#64748B] mb-3.5 pb-2.5 border-b border-[#E5D7BC]/70">
                    <span className="px-2 py-0.5 rounded-xs bg-[#FAF6EC] text-[#9A7228] font-semibold text-[11px] border border-[#E5D7BC]">
                      {update.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono">
                      <Calendar className="w-3 h-3 text-[#9A7228]" />
                      {update.date}
                    </span>
                  </div>

                {/* Headline */}
                <h3 className="font-serif text-lg font-bold text-[#0D2E3A] leading-snug group-hover:text-[#0C3844] transition-colors mb-2.5">
                  {update.title}
                </h3>

                {/* Short Summary */}
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-sans line-clamp-3">
                  {update.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-4 border-t border-[#E5D7BC]/70 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#94A3B8]">
                  {update.readTime}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveArticle(update)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0C3844] group-hover:text-[#9A7228] transition-colors cursor-pointer"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
            );
          })}
        </div>
      </div>

      {/* Concise Article Detail Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08232C]/75 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF6EC] border border-[#D4AF60]/60 max-w-xl w-full rounded-sm shadow-2xl p-6 sm:p-7 relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-1.5 text-[#0D2E3A] hover:bg-[#F5EEDC] rounded-sm transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-xs bg-[#0C3844] text-white text-xs font-semibold">
                {activeArticle.category}
              </span>
              <span className="px-2.5 py-1 rounded-xs bg-[#F5EEDC] text-[#9A7228] border border-[#E5D7BC] text-xs font-semibold">
                {activeArticle.tag}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#0D2E3A] mb-3 leading-snug">
              {activeArticle.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-[#64748B] pb-3 mb-4 border-b border-[#E5D7BC]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#9A7228]" /> {activeArticle.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#9A7228]" /> {activeArticle.readTime}
              </span>
            </div>

            <div className="text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3 font-sans mb-6">
              <div className="p-3 bg-[#FFFDF9] border-l-2 border-[#9A7228] text-[#0D2E3A] font-medium text-xs leading-relaxed">
                {activeArticle.summary}
              </div>
              <p>
                {activeArticle.fullContent}
              </p>
            </div>

            <div className="flex justify-end pt-3 border-t border-[#E5D7BC]">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 bg-[#0C3844] text-white text-xs font-semibold rounded-xs hover:bg-[#07242D] transition-colors cursor-pointer"
              >
                Close Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
