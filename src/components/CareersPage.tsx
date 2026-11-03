import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Scale,
  Building,
  CheckCircle2,
  Upload,
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { CAREER_OPENINGS_DATA } from '../data/firmData';
import { JobOpening } from '../types';

interface CareersPageProps {
  onNavigateHome: (sectionId?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigateHome }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [careerSubmitted, setCareerSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    pqe: '1-3 Years',
    lawSchool: '',
    coverNote: ''
  });

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCareerSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setCareerSubmitted(false);
      setApplicantData({
        name: '',
        email: '',
        phone: '',
        pqe: '1-3 Years',
        lawSchool: '',
        coverNote: ''
      });
    }, 2500);
  };

  return (
    <div className="bg-[#FAF6EC] min-h-screen text-[#0D2E3A] pt-24 pb-20">
      {/* Header Banner with BHC1.jpg Advocates Accent */}
      <section className="relative bg-gradient-to-r from-[#092730] via-[#0C3844] to-[#061D24] text-white py-16 sm:py-24 border-b border-[#9A7228]/40 overflow-hidden">
        {/* Background photo watermark showing counsel on High Court balcony */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src="/BHC1.jpg"
            alt="Advocates at Bombay High Court"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#08232C] border border-[#D4AF60]/50 rounded-xs mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#E5C178]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#E5C178]">
              Talent &amp; Lateral Practice
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Careers at BLAC Co.
          </h1>
          <p className="text-sm sm:text-lg text-[#E5D7BC] max-w-2xl font-sans leading-relaxed">
            We foster intellectual vigor, courtroom readiness, and rigorous ethical standards. Discover opportunities to shape landmark commercial and dispute outcomes before India&apos;s pre-eminent courts.
          </p>
        </div>
      </section>

      {/* Main Careers Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Culture & Philosophy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 rounded-xs">
            <div className="w-10 h-10 rounded-xs bg-[#FAF6EC] border border-[#E5D7BC] flex items-center justify-center text-[#9A7228] mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0D2E3A] mb-2">
              High-Stakes Exposure
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Work alongside senior partners on prominent Supreme Court, Bombay High Court, and NCLT matters from day one.
            </p>
          </div>

          <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 rounded-xs">
            <div className="w-10 h-10 rounded-xs bg-[#FAF6EC] border border-[#E5D7BC] flex items-center justify-center text-[#9A7228] mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0D2E3A] mb-2">
              Direct Mentorship
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Direct learning from former Udwadia &amp; Co. partners, refining trial advocacy, legal drafting, and commercial negotiations.
            </p>
          </div>

          <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 rounded-xs">
            <div className="w-10 h-10 rounded-xs bg-[#FAF6EC] border border-[#E5D7BC] flex items-center justify-center text-[#9A7228] mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0D2E3A] mb-2">
              Professional Integrity
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              A collaborative, merit-based culture grounded in fiduciary ethics and unwavering dedication to client excellence.
            </p>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5D7BC]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A7228] font-bold block mb-1">
                Current Opportunities
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2E3A]">
                Open Positions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 md:mt-0 font-mono">
              Offices: Mumbai • Pune • Delhi
            </p>
          </div>

          <div className="space-y-4">
            {CAREER_OPENINGS_DATA.map((job) => (
              <div
                key={job.id}
                className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 rounded-sm hover:border-[#9A7228] hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9A7228] bg-[#FAF6EC] px-2.5 py-0.5 rounded-xs border border-[#E5D7BC]">
                      {job.department}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0D2E3A]">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-[#526071]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9A7228]" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9A7228]" /> {job.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="px-5 py-2.5 bg-[#0C3844] hover:bg-[#07242D] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer border border-[#9A7228]/40"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C178]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Callout */}
        <div className="bg-[#0C3844] text-[#FAF6EC] border border-[#9A7228]/40 p-8 rounded-sm mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Internships &amp; General Applications
            </h3>
            <p className="text-xs sm:text-sm text-[#E5D7BC]/90 leading-relaxed font-sans">
              Law students and experienced practitioners wishing to be considered for future openings or judicial clerkship internships may submit their curriculum vitae directly to our recruitment desk.
            </p>
          </div>
          <a
            href="mailto:careers@blac.co.in"
            className="px-6 py-3 bg-[#D4AF60] hover:bg-[#E5C178] text-[#08232C] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 shadow-xs"
          >
            Email CV: careers@blac.co.in
          </a>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08232C]/80 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF6EC] border border-[#D4AF60]/60 max-w-xl w-full rounded-sm shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5D7BC]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A7228] font-bold block">
                  Application Dossier
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0D2E3A]">
                  {selectedJob.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="text-xs text-[#64748B] hover:text-[#0D2E3A] uppercase font-mono tracking-wider cursor-pointer"
              >
                Close [✕]
              </button>
            </div>

            {careerSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#0D2E3A]">
                  Application Dispatched
                </h4>
                <p className="text-xs text-[#526071] max-w-sm mx-auto">
                  Your credentials have been submitted to the recruitment committee. We will review and reach out accordingly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCareerSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantData.name}
                    onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-xs text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                    placeholder="Full Legal Name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-xs text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                      placeholder="advocate@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-xs text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                      placeholder="+91 98200 00000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                      Post-Qualification Experience
                    </label>
                    <select
                      value={applicantData.pqe}
                      onChange={(e) => setApplicantData({ ...applicantData, pqe: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-xs text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                    >
                      <option value="Fresher / 0-1 Year">Fresher / 0-1 Year</option>
                      <option value="1-3 Years">1-3 Years PQE</option>
                      <option value="3-5 Years">3-5 Years PQE</option>
                      <option value="5+ Years">5+ Years PQE</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                      Law School / Alma Mater
                    </label>
                    <input
                      type="text"
                      value={applicantData.lawSchool}
                      onChange={(e) => setApplicantData({ ...applicantData, lawSchool: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-xs text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                      placeholder="e.g. GLC Mumbai / NLU"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                    Brief Statement of Interest / Highlights
                  </label>
                  <textarea
                    rows={3}
                    value={applicantData.coverNote}
                    onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-xs text-[#0D2E3A] rounded-xs focus:outline-none focus:border-[#0C3844]"
                    placeholder="Summary of court appearances, drafting experience, or research interests..."
                  />
                </div>

                <div className="p-3 border border-dashed border-[#E5D7BC] bg-[#FFFDF9] rounded-xs flex items-center justify-center gap-2 text-xs text-[#64748B]">
                  <Upload className="w-4 h-4 text-[#9A7228]" />
                  <span>Resume upload attached with inquiry</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#0C3844] hover:bg-[#07242D] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer border border-[#9A7228]/40"
                >
                  Submit Application Dossier
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
