import React from 'react';
import {
  Scale,
  Shield,
  Building2,
  Briefcase,
  Gavel,
  ArrowRight,
  Landmark,
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';
import { FIRM_OVERVIEW_DATA, OFFICES_DATA } from '../data/firmData';

interface AboutPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onOpenConsultation?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onOpenConsultation }) => {
  return (
    <div className="bg-[#FAF6EC] min-h-screen text-[#0D2E3A] pt-24 pb-20">
      {/* Hero Banner with BHC Heritage Accent */}
      <section className="relative bg-gradient-to-r from-[#092730] via-[#0C3844] to-[#061D24] text-white py-16 sm:py-24 border-b border-[#9A7228]/40 overflow-hidden">
        {/* Background photo watermark */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src="/BHC8.jpg"
            alt="Bombay High Court Grand Elevation"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#08232C] border border-[#D4AF60]/50 rounded-xs mb-4">
            <Shield className="w-3.5 h-3.5 text-[#E5C178]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#E5C178]">
              Firm Overview &amp; About Us
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Bombay Litigation And Corporate Co. (BLAC Co.)
          </h1>
          <p className="text-sm sm:text-lg text-[#E5D7BC] max-w-3xl font-sans leading-relaxed">
            A premier law firm offering comprehensive legal counsel across diverse practice areas—from inception to resolution and beyond.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onNavigateHome('practice')}
              className="px-6 py-3 bg-[#D4AF60] hover:bg-[#E5C178] text-[#08232C] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Explore Practice Areas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigateHome('contact')}
              className="px-6 py-3 bg-[#08232C] hover:bg-[#0C3844] text-[#FAF6EC] border border-[#E5D7BC]/40 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Firm Overview / About Us Section */}
            <div className="space-y-4">
              <div className="border-l-3 border-[#9A7228] pl-6 py-1">
                <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#9A7228] block mb-1 font-mono">
                  Firm Overview / About Us
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2E3A] leading-snug">
                  Bombay Litigation And Corporate Co. ( BLAC Co.)
                </h2>
              </div>

              <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 sm:p-8 rounded-sm shadow-xs">
                <p className="text-sm sm:text-base text-[#2C3E50] leading-relaxed font-sans">
                  BLAC Co. is a law firm offering comprehensive legal counsel across diverse practice areas. We take a matter from inception to resolution, providing strategic guidance at every stage and continuing to support our clients even beyond the conclusion of a case. Our approach combines in-depth legal expertise, practical solutions, and unwavering commitment to our clients’ interests. Built on integrity and strong professional ethics, our reputation is defined by trust, diligence, and results.
                </p>
              </div>
            </div>

            {/* Core Values / Hallmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-5 rounded-xs">
                <div className="w-9 h-9 rounded-xs bg-[#FAF6EC] border border-[#E5D7BC] flex items-center justify-center text-[#9A7228] mb-3">
                  <Landmark className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-[#0D2E3A] text-base mb-1.5">
                  Decisive Results
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Strategic guidance at every stage from inception to resolution and beyond.
                </p>
              </div>

              <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-5 rounded-xs">
                <div className="w-9 h-9 rounded-xs bg-[#FAF6EC] border border-[#E5D7BC] flex items-center justify-center text-[#9A7228] mb-3">
                  <Scale className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-[#0D2E3A] text-base mb-1.5">
                  Legal Expertise
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  In-depth legal knowledge combined with practical, commercially viable solutions.
                </p>
              </div>

              <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-5 rounded-xs">
                <div className="w-9 h-9 rounded-xs bg-[#FAF6EC] border border-[#E5D7BC] flex items-center justify-center text-[#9A7228] mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-[#0D2E3A] text-base mb-1.5">
                  Integrity &amp; Ethics
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Built on strong professional ethics, diligence, and unwavering trust.
                </p>
              </div>
            </div>

            {/* Practice Areas and Sector Specializations Detailed Breakdown */}
            <div className="pt-6 border-t border-[#E5D7BC] space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#9A7228] block mb-2 font-mono">
                  Specialized Advisory &amp; Representation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2E3A]">
                  Practice areas and Sector Specializations
                </h3>
              </div>

              <div className="space-y-6">
                {/* 1. Litigation */}
                <div className="bg-[#FFFDF9] border border-[#E5D7BC] rounded-sm p-6 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#E5D7BC] pb-3">
                    <div className="w-8 h-8 rounded-xs bg-[#0C3844] text-[#E5C178] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                      1
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A7228] block font-semibold">
                        Dispute Resolution &amp; Court Advocacy
                      </span>
                      <h4 className="font-serif font-bold text-xl text-[#0D2E3A]">
                        Litigation
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-[#334155] leading-relaxed font-sans">
                    Commanding advocacy spearheaded by Partner Aditi Phatak and our seasoned litigation team. Representing Clients across Supreme Court of India, Bombay High Court, National Company Law Tribunal (NCLT), City Civil and Sessions Courts and advising them in civil, commercial, corporate, banking, regulatory, and arbitration matters before courts, tribunals, and other legal forums. Our practice covers the complete litigation process, from legal advice and drafting to representation, hearings, and resolution of disputes.
                  </p>

                  <div className="px-3.5 py-2.5 bg-[#F5EEDC] border-l-3 border-[#9A7228] rounded-r-xs flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#9A7228] shrink-0" />
                    <span className="text-xs font-semibold text-[#0D2E3A]">
                      Representative Benchmark Matter &ndash; Abhyudaya Bank
                    </span>
                  </div>
                </div>

                {/* 2. Corporate */}
                <div className="bg-[#FFFDF9] border border-[#E5D7BC] rounded-sm p-6 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#E5D7BC] pb-3">
                    <div className="w-8 h-8 rounded-xs bg-[#0C3844] text-[#E5C178] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                      2
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A7228] block font-semibold">
                        Transactional Leadership &amp; Governance
                      </span>
                      <h4 className="font-serif font-bold text-xl text-[#0D2E3A]">
                        Corporate
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-[#334155] leading-relaxed font-sans">
                    Headed by Ms. Shirin Hormuzdi with over two decades of transactional leadership, our corporate department advises multinational corporations, public sector undertakings, and private developers on sophisticated conveyancing, bespoke contracts, non-disclosure agreements, title reports, and corporate governance.
                  </p>
                </div>

                {/* 3. Arbitration & ADR */}
                <div className="bg-[#FFFDF9] border border-[#E5D7BC] rounded-sm p-6 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#E5D7BC] pb-3">
                    <div className="w-8 h-8 rounded-xs bg-[#0C3844] text-[#E5C178] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                      3
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A7228] block font-semibold">
                        Commercial Dispute Resolution
                      </span>
                      <h4 className="font-serif font-bold text-xl text-[#0D2E3A]">
                        Arbitration &amp; ADR
                      </h4>
                    </div>
                  </div>

                  <div className="bg-[#FAF6EC] border border-[#E5D7BC] p-3.5 rounded-xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9A7228] block mb-1">
                      Main Page Summary:
                    </span>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic font-sans">
                      &ldquo;Experience in ongoing domestic arbitrations and mediation matters, with extensive representation in construction and infrastructure disputes, monetary claims, and a wide range of commercial and contractual matters, including proceedings relating to enforcement of arbitral awards.&rdquo;
                    </p>
                  </div>

                  <div className="text-sm text-[#334155] leading-relaxed font-sans space-y-3 pt-1">
                    <p>
                      Our Arbitration and Alternative Dispute Resolution practice focuses on the effective and efficient resolution of commercial and contractual disputes. The Firm is presently engaged in ongoing arbitration and mediation proceedings and has extensive experience in representing clients in construction and infrastructure arbitrations, as well as disputes arising from a wide range of commercial and contractual arrangements.
                    </p>
                    <p>
                      Our experience includes advising and representing clients at various stages of arbitral proceedings, including pre-arbitration strategy, invocation of arbitration, drafting of pleadings and applications, evidence, cross-examination, hearings, interim reliefs, and enforcement and challenge of arbitral awards. We also assist clients in mediation, conciliation and negotiated settlements, with an emphasis on achieving practical and commercially viable resolutions.
                    </p>
                  </div>
                </div>

                {/* 4. Real estate, Redevelopment projects, construction contracts, conveyancing */}
                <div className="bg-[#FFFDF9] border border-[#E5D7BC] rounded-sm p-6 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#E5D7BC] pb-3">
                    <div className="w-8 h-8 rounded-xs bg-[#0C3844] text-[#E5C178] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                      4
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A7228] block font-semibold">
                        Property &amp; Infrastructure Advisory
                      </span>
                      <h4 className="font-serif font-bold text-xl text-[#0D2E3A]">
                        Real estate, Redevelopment projects, construction contracts, conveyancing
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-[#334155] leading-relaxed font-sans">
                    Our Real Estate practice covers the entire range of property-related legal work, including drafting and negotiation of development and construction agreements, turnkey project contracts, redevelopment arrangements, conveyance of property in favour of co-operative housing societies, and advising on property transactions. We represent developers, housing societies, and corporate clients in real estate matters across Mumbai and Maharashtra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column: Contact Us & Other Offices */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 sm:p-7 rounded-sm shadow-xs space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A7228] font-bold block">
                Contact Us
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0D2E3A]">
                Mumbai Office
              </h3>
              
              <div className="space-y-3.5 text-xs text-[#475569] font-sans">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A7228] block font-bold mb-1">
                    Address:
                  </span>
                  <div className="flex items-start gap-2.5 text-[#0D2E3A] font-medium text-sm">
                    <MapPin className="w-4 h-4 text-[#9A7228] shrink-0 mt-0.5" />
                    <span>37-38, Prospect Chambers Annex, Fort, Mumbai</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5D7BC]/70 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#9A7228] shrink-0" />
                    <span className="text-xs text-[#0D2E3A]">
                      <strong>Telephone:</strong> 022-40068070
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#9A7228] shrink-0" />
                    <span className="text-xs text-[#0D2E3A]">
                      <strong>Email address:</strong>{' '}
                      <a href="mailto:litigation@blac.co.in" className="text-[#9A7228] hover:underline font-medium">
                        litigation@blac.co.in
                      </a>
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#9A7228] shrink-0" />
                    <span className="text-xs text-[#0D2E3A]">
                      <strong>Website:</strong>{' '}
                      <span className="text-[#9A7228] font-medium">Blac.co.in</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Fort Legal Hub Proximity Image */}
              <div className="relative h-32 rounded-xs overflow-hidden border border-[#E5D7BC] mt-4">
                <img
                  src="/BHC9.jpg"
                  alt="Fort Legal Quarter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08232C] via-[#08232C]/40 to-transparent" />
                <div className="absolute bottom-2 inset-x-2 text-[10px] text-white flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1 text-[#E5C178]">
                    <Landmark className="w-3 h-3" />
                    Fort Legal Quarter
                  </span>
                  <span className="text-white/80">300m to High Court</span>
                </div>
              </div>
            </div>

            {/* Other Offices Box */}
            <div className="bg-[#0C3844] text-[#FAF6EC] border border-[#9A7228]/40 p-6 sm:p-7 rounded-sm shadow-sm space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C178] font-bold block">
                Jurisdictional Network
              </span>
              <h4 className="font-serif text-xl font-bold text-white">
                Other Offices:
              </h4>
              <p className="text-xs sm:text-sm text-[#E5D7BC] leading-relaxed font-sans font-medium">
                BLAC has office in Mumbai and integrated network offices in Pune and Delhi.
              </p>

              <div className="pt-3 border-t border-white/10 space-y-2.5 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C178]" />
                  <span><strong>Mumbai:</strong> 37-38, Prospect Chambers Annex, Fort</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C178]" />
                  <span><strong>Pune:</strong> Integrated Network Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C178]" />
                  <span><strong>Delhi:</strong> Integrated Network Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
