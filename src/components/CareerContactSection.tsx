import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ChevronRight,
  Upload,
  Building,
  GraduationCap
} from 'lucide-react';
import { CAREER_OPENINGS_DATA, OFFICES_DATA } from '../data/firmData';
import { JobOpening } from '../types';

export const CareerContactSection: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    practiceArea: 'Corporate & Commercial',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Career Application Modal State
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCareerSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setCareerSubmitted(false);
    }, 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#FAF6EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================================================================= */}
        {/* PART 1: CAREERS AT BLAC FIRM                                      */}
        {/* ================================================================= */}
        <div id="careers" className="mb-20 sm:mb-24 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#E5D7BC]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="w-5 h-[2px] bg-[#9A7228]" />
                <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#9A7228]">
                  Talent & Lateral Hiring
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D2E3A] tracking-tight leading-tight">
                Careers at the Firm
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-sm text-[#2C3E50] max-w-md font-sans leading-relaxed">
              We foster intellectual vigor, courtroom readiness, and rigorous ethical standards. Discover opportunities to shape landmark commercial outcomes.
            </p>
          </div>

          {/* Job Openings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_OPENINGS_DATA.map((job) => (
              <div
                key={job.id}
                id={`job-card-${job.id}`}
                className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 sm:p-7 rounded-sm hover:border-[#0C3844] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C3844] bg-[#F5EEDC] px-2.5 py-0.5 rounded-xs border border-[#E5D7BC]">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.department}
                    </span>
                    <span className="text-xs font-medium text-[#64748B]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0D2E3A] mb-2 leading-snug">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-[#526071] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9A7228]" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-[#9A7228]" /> {job.experience}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 font-sans">
                    {job.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E5D7BC]/70">
                  <span className="text-[11px] text-[#64748B]">
                    Send resume to <strong className="text-[#0D2E3A]">litigation@blac.co.in</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="px-4 py-1.5 bg-[#0C3844] text-white text-xs font-semibold rounded-sm hover:bg-[#07242D] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* PART 2: CONTACT US INTAKE & OFFICES                               */}
        {/* ================================================================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#E5D7BC]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="w-5 h-[2px] bg-[#9A7228]" />
                <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#9A7228]">
                  Direct Intake & Offices
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D2E3A] tracking-tight leading-tight">
                Contact Us
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-sm text-[#2C3E50] max-w-md font-sans leading-relaxed">
              Initiate a confidential consultation or conflict clearance inquiry. Senior partners respond to institutional matters within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Consultation Intake Form */}
            <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#E5D7BC] p-7 sm:p-9 rounded-sm shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-[#0D2E3A] mb-2">
                Confidential Counsel Intake
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                All inquiries undergo rigorous Bar Council conflict clearance protocols before formal engagement.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#F5EEDC] border border-[#E5D7BC] rounded-sm text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#9A7228] mx-auto mb-3" />
                  <h4 className="font-serif text-xl font-bold text-[#0D2E3A] mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-[#334155] leading-relaxed max-w-md mx-auto mb-4">
                    Thank you, <strong className="text-[#0D2E3A]">{formData.name}</strong>. Our Managing Partner's office has logged your confidential inquiry. We will contact you at <span className="font-mono text-xs">{formData.email}</span> shortly.
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
                    className="px-5 py-2 bg-[#0C3844] text-white text-xs font-semibold rounded-sm hover:bg-[#07242D] transition-colors cursor-pointer"
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
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-org" className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1.5">
                        Enterprise / Organization
                      </label>
                      <input
                        id="form-org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Infrastructure Consortium Ltd."
                        className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
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
                        className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
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
                        className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
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
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                    >
                      <option value="Corporate & Commercial">Corporate & Commercial</option>
                      <option value="Litigation">Litigation</option>
                      <option value="Alternative Dispute Resolution (ADR)">Alternative Dispute Resolution (ADR)</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Career Inquiry">Career / Internship Inquiry</option>
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
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0C3844] hover:bg-[#07242D] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Initiate Confidential Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Pan-India Offices & Coordinates */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-[#FFFDF9] border border-[#E5D7BC] p-6 sm:p-7 rounded-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <Building className="w-5 h-5 text-[#9A7228]" />
                  <h4 className="font-serif text-xl font-bold text-[#0D2E3A]">
                    Offices & Coordinates
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
                      <div className="text-xs text-[#526071] mt-1 font-medium">
                        {office.address}
                      </div>
                      <div className="text-[11px] text-[#64748B] mt-0.5">
                        {office.suite}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#0C3844] mt-2 font-medium">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-[#9A7228]" /> Telephone: {office.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-[#9A7228]" /> Email: {office.email}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#526071] mt-1 font-mono">
                        Website: <strong className="text-[#0D2E3A]">{office.website}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Network Offices Summary Note */}
              <div className="bg-[#F5EEDC] border border-[#E5D7BC] p-6 rounded-sm">
                <div className="font-serif text-base font-bold text-[#0D2E3A] mb-1">
                  BLAC Co. Integrated Network
                </div>
                <p className="text-xs text-[#475569] leading-relaxed mb-3">
                  BLAC Co. has office in Mumbai and integrated network offices in Pune and Delhi, ensuring seamless courtroom appearances before the Supreme Court of India, Bombay High Court, NCLAT, and regional tribunals.
                </p>
                <div className="text-xs text-[#0D2E3A] space-y-1 font-sans">
                  <div><strong>Official Email:</strong> litigation@blac.co.in</div>
                  <div><strong>Official Website:</strong> blac.co.in</div>
                  <div><strong>Central Telephone:</strong> 022 40068070</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Career Application Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/60 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF6EC] border border-[#E5D7BC] max-w-lg w-full rounded-sm shadow-2xl p-6 sm:p-7 relative">
            <h3 className="font-serif text-xl font-bold text-[#0D2E3A] mb-1">
              Apply: {selectedJob.title}
            </h3>
            <p className="text-xs text-[#64748B] mb-4">
              {selectedJob.location} • {selectedJob.type} • {selectedJob.experience}
            </p>

            {careerSubmitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#9A7228] mx-auto mb-2" />
                <div className="font-serif font-bold text-lg text-[#0D2E3A]">
                  Application Submitted
                </div>
                <p className="text-xs text-[#475569] mt-1">
                  Our talent committee will review your credentials and contact you directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCareerSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Advocate Name"
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                    Law School & Year of Call / PQE *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. NLSIU Bangalore (2020), 4 Years PQE"
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D2E3A] uppercase tracking-wider mb-1">
                    Curriculum Vitae (PDF Link or Notes)
                  </label>
                  <input
                    type="text"
                    placeholder="Link to CV (Google Drive, LinkedIn) or attach via careers@blacfirm.com"
                    className="w-full px-3 py-2 bg-[#FFFDF9] border border-[#E5D7BC] text-sm text-[#0D2E3A] rounded-sm focus:outline-none focus:border-[#0C3844]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E5D7BC]">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 border border-[#E5D7BC] text-[#0D2E3A] text-xs font-semibold rounded-sm hover:bg-[#F5EEDC] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#0C3844] text-white text-xs font-semibold rounded-sm hover:bg-[#07242D] cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
