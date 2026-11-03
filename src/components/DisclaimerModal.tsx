import React, { useState, useEffect } from 'react';
import { Shield, Scale, AlertCircle, CheckCircle2 } from 'lucide-react';

interface DisclaimerModalProps {
  onAccept?: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAccept }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDeclined, setHasDeclined] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer in the current session
    const accepted = sessionStorage.getItem('blac_firm_disclaimer_accepted');
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('blac_firm_disclaimer_accepted', 'true');
    setIsOpen(false);
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    setHasDeclined(true);
  };

  if (!isOpen) return null;

  return (
    <div
      id="disclaimer-modal-backdrop"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#08232C]/80 backdrop-blur-xs transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div
        id="disclaimer-modal-card"
        className="relative w-full max-w-2xl bg-[#FAF6EC] border border-[#E5D7BC] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header in Firm Theme */}
        <div className="bg-gradient-to-r from-[#092730] via-[#0C3844] to-[#061D24] px-5 sm:px-8 py-4 sm:py-5 border-b border-[#9A7228]/40 text-[#FAF6EC] flex items-center gap-3.5 shrink-0">
          <div className="w-10 h-10 rounded-xs bg-[#08232C] border border-[#D4AF60]/50 flex items-center justify-center shrink-0 shadow-xs">
            <Scale className="w-5 h-5 text-[#E5C178]" />
          </div>
          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#E5C178] block font-semibold">
              Regulatory Compliance
            </span>
            <h2
              id="disclaimer-title"
              className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#FAF6EC]"
            >
              Disclaimer &amp; Confirmation
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed font-sans font-light bg-[#FAF6EC]">
          {hasDeclined ? (
            <div className="py-8 px-4 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#F5EEDC] text-[#9A7228] border border-[#E5D7BC] flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0D2E3A]">
                Acknowledgment Required
              </h3>
              <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                As per the rules of the Bar Council of India, access to this website requires your acknowledgment and agreement to our regulatory disclaimer terms.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setHasDeclined(false)}
                  className="px-6 py-2.5 bg-[#0C3844] hover:bg-[#07242D] text-[#FAF6EC] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs transition-colors cursor-pointer border border-[#9A7228]/40"
                >
                  Review Disclaimer
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="font-medium text-[#0D2E3A]">
                Under the rules of the Bar Council of India, law firms in India are not permitted to solicit work or advertise in any form or manner.
              </p>

              <p className="text-[#475569]">
                By clicking <strong className="text-[#0D2E3A]">&ldquo;I AGREE&rdquo;</strong> below, you acknowledge and confirm the following:
              </p>

              <div className="bg-[#FFFDF9] border border-[#E5D7BC] rounded-xs p-4 space-y-3 text-xs sm:text-[13px] text-[#334155]">
                <div className="flex gap-2.5">
                  <span className="font-mono font-bold text-[#9A7228] shrink-0">1.</span>
                  <span>
                    You are accessing this website voluntarily to obtain general information about <strong className="text-[#0D2E3A]">BLAC Co. (Bombay Litigation And Corporate Co.)</strong>, its practice areas, and advocates solely for your personal informational knowledge.
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="font-mono font-bold text-[#9A7228] shrink-0">2.</span>
                  <span>
                    There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from BLAC Co. or any of its partners or advocates to solicit work through this website.
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="font-mono font-bold text-[#9A7228] shrink-0">3.</span>
                  <span>
                    The information provided on this website is made available at your specific request and should not be construed or interpreted as legal advice, formal counsel, or solicitation.
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="font-mono font-bold text-[#9A7228] shrink-0">4.</span>
                  <span>
                    Accessing this website or communicating through it does not create an advocate-client or attorney-client relationship between you and BLAC Co.
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="font-mono font-bold text-[#9A7228] shrink-0">5.</span>
                  <span>
                    BLAC Co. is not liable for any consequence of any action taken by the user relying on material or information provided on this website. For any specific legal issue, you should seek independent professional legal counsel.
                  </span>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-[#64748B] pt-1">
                The contents of this website are the intellectual property of BLAC Co.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer Actions in Firm Theme */}
        {!hasDeclined && (
          <div className="bg-[#F5EEDC] px-5 sm:px-8 py-3.5 sm:py-4 border-t border-[#E5D7BC] flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 sm:gap-3 shrink-0">
            <button
              id="disclaimer-decline-btn"
              type="button"
              onClick={handleDecline}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#64748B] hover:text-[#0D2E3A] transition-colors text-center cursor-pointer"
            >
              Decline
            </button>
            <button
              id="disclaimer-agree-btn"
              type="button"
              onClick={handleAgree}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#0C3844] hover:bg-[#07242D] text-[#FAF6EC] text-xs font-semibold uppercase tracking-widest rounded-xs shadow-xs transition-all flex items-center justify-center gap-2 border border-[#9A7228]/40 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-[#E5C178]" />
              <span>I Agree &amp; Proceed</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
