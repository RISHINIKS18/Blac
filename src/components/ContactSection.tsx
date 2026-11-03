import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Building,
  Landmark,
  Globe
} from 'lucide-react';
import { OFFICES_DATA } from '../data/firmData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    practiceArea: 'Litigation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#FAF6EC] relative overflow-hidden">
      {/* Lady Justice Classical Watermark - Unmistakably visible in Contact Us */}
      <div
        id="contact-lady-justice-watermark"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-5 border-b border-[#E5D7BC]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[2px] bg-[#9A7228]" />
              <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#9A7228]">
                Confidential Engagement
              </span>
              <span className="w-5 h-[2px] bg-[#9A7228]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D2E3A] tracking-tight leading-tight">
              Contact Us
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#475569] max-w-md font-sans leading-relaxed">
            Headquartered in Fort, Mumbai with integrated network offices across Pune and Delhi. Schedule a consultation or reach our senior partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Intake Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9]/92 backdrop-blur-xs border border-[#E5D7BC] p-6 sm:p-8 rounded-sm shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#0D2E3A] mb-2">
              Confidential Intake
            </h3>
            <p className="text-xs sm:text-sm text-[#526071] mb-6">
              Please submit your transactional, litigation, or advisory inquiry. All submissions are handled with strict privilege.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF6EC] border border-[#E5D7BC] text-[#9A7228] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#0D2E3A]">
                  Inquiry Received
                </h4>
                <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you for contacting BLAC Co. Our senior partners will review your briefing and respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      organization: '',
                      email: '',
                      phone: '',
                      practiceArea: 'Corporate & Commercial',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-[#0C3844] hover:bg-[#07242D] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Adv. Rajesh Verma"
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-org" className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      id="form-org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Acme Industries Ltd."
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1.5">
                      Official Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@enterprise.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1.5">
                      Contact Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-practice" className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1.5">
                    Area of Practice *
                  </label>
                  <select
                    id="form-practice"
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                  >
                    <option value="Litigation">Litigation</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Arbitration & ADR">Arbitration &amp; ADR</option>
                    <option value="Real estate, Redevelopment projects, construction contracts, conveyancing">
                      Real estate, Redevelopment projects, construction contracts, conveyancing
                    </option>
                    <option value="General Legal Inquiry">General Legal Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1.5">
                    Matter Summary / Inquiry Details *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please summarize the general nature of the transaction, dispute, or advisory requirement..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0C3844] hover:bg-[#07242D] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#9A7228]/40"
                >
                  <span>Initiate Confidential Inquiry</span>
                  <Send className="w-4 h-4 text-[#E5C178]" />
                </button>
              </form>
            )}
          </div>

          {/* Pan-India Offices & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FFFDF9]/92 backdrop-blur-xs border border-[#E5D7BC] p-6 sm:p-7 rounded-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Building className="w-5 h-5 text-[#9A7228]" />
                <h4 className="font-serif text-xl font-bold text-[#0D2E3A]">
                  Offices &amp; Coordinates
                </h4>
              </div>

              <div className="space-y-4">
                {OFFICES_DATA.map((office, idx) => (
                  <div key={idx} className="pb-4 border-b border-[#E5D7BC]/70 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div className="font-serif font-bold text-sm text-[#0D2E3A]">
                        {office.city}
                      </div>
                      {office.isHeadquarter && (
                        <span className="text-[9px] uppercase font-mono tracking-wider font-bold bg-[#F5EEDC] text-[#9A7228] px-2 py-0.5 rounded-xs border border-[#E5D7BC]">
                          Head Office
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#475569] mt-1 font-medium leading-relaxed">
                      {office.address}
                    </div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 font-mono">
                      {office.suite} {office.phone ? `• Tel: ${office.phone}` : ''}
                    </div>
                  </div>
                ))}
              </div>

              {/* Other Offices summary */}
              <div className="mt-3.5 pt-3 border-t border-[#E5D7BC] text-xs text-[#475569] font-sans">
                <strong className="text-[#0D2E3A]">Other Offices:</strong> BLAC has office in Mumbai and integrated network offices in Pune and Delhi.
              </div>

              {/* Fort, Mumbai Legal Precinct Visual */}
              <div className="mt-4 relative h-28 rounded-xs overflow-hidden border border-[#E5D7BC]">
                <img
                  src="/BHC15.jpg"
                  alt="Fort, Mumbai Legal Precinct"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08232C] via-[#08232C]/40 to-transparent" />
                <div className="absolute bottom-2 inset-x-3 text-[10px] text-white flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1.5 text-[#E5C178]">
                    <Landmark className="w-3.5 h-3.5" />
                    Fort, Mumbai Legal Hub
                  </span>
                  <span className="text-white/90">300m to High Court</span>
                </div>
              </div>
            </div>

            {/* Direct Channel Box */}
            <div className="bg-[#0C3844] text-[#FAF6EC] p-6 sm:p-7 rounded-sm border border-[#9A7228]/40 shadow-sm space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C178] block font-bold">
                Direct Litigation Desk
              </span>
              <h5 className="font-serif text-lg font-bold text-white">
                Mumbai Office &amp; Urgent Mentions
              </h5>
              <p className="text-xs text-[#E5D7BC]/90 leading-relaxed font-sans">
                For urgent mentions, interim applications before the Bombay High Court or Supreme Court, or immediate legal counsel:
              </p>

              <div className="pt-2 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E5C178] shrink-0" />
                  <span>37-38, Prospect Chambers Annex, Fort, Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E5C178] shrink-0" />
                  <span>Telephone: <strong>022-40068070</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E5C178] shrink-0" />
                  <span>Email address: </span>
                  <a href="mailto:litigation@blac.co.in" className="text-[#E5C178] hover:underline font-semibold">
                    litigation@blac.co.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#E5C178] shrink-0" />
                  <span>Website: <strong className="text-[#E5C178]">Blac.co.in</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
