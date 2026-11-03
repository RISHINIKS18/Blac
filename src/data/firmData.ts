import { PracticeArea, Client, Testimonial, FirmUpdate, JobOpening, TeamMember, Office } from '../types';

export const FIRM_OVERVIEW_DATA = {
  name: 'Bombay Litigation And Corporate Co. ( BLAC Co.)',
  fullName: 'Bombay Litigation And Corporate Co. ( BLAC Co.)',
  shortName: 'BLAC Co.',
  tagline: 'Bombay Litigation And Corporate Co.',
  heroHeadline: 'Ahead of The Curve\nBreaking New Ground',
  overview:
    'BLAC Co. is a law firm offering comprehensive legal counsel across diverse practice areas. We take a matter from inception to resolution, providing strategic guidance at every stage and continuing to support our clients even beyond the conclusion of a case. Our approach combines in-depth legal expertise, practical solutions, and unwavering commitment to our clients’ interests. Built on integrity and strong professional ethics, our reputation is defined by trust, diligence, and results.',
  founder: 'Mr. Parag Sharma',
  heritage:
    'BLAC Co. was set up by Mr. Parag Sharma, who was the litigation partner with the prominent law firm Udwadia & Co. (erstwhile Udwadia & Udeshi). Subsequent to retirement of Mr. Udwadia, Mr. Parag Sharma carried forward the legacy with the firm BLAC Co. along with the same team.',
  mission:
    'Our commitment to our Client and result oriented work has kept the firm growing. Our ethics and perseverance towards the success of our clients in their legal challenges is the hallmark of our firm.',
  headquarters: '37-38, Prospect Chambers Annex, Fort, Mumbai',
  phone: '022-40068070',
  email: 'litigation@blac.co.in',
  website: 'Blac.co.in',
  officesSummary: 'BLAC has office in Mumbai and integrated network offices in Pune and Delhi.',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'litigation',
    title: 'Litigation',
    shortDesc:
      'Commanding advocacy spearheaded by Partner Aditi Phatak and our seasoned litigation team. Representing Clients across Supreme Court of India, Bombay High Court, National Company Law Tribunal (NCLT), City Civil and Sessions Courts and advising them in civil, commercial, corporate, banking, regulatory, and arbitration matters before courts, tribunals, and other legal forums.',
    fullDesc:
      'Commanding advocacy spearheaded by Partner Aditi Phatak and our seasoned litigation team. Representing Clients across Supreme Court of India, Bombay High Court, National Company Law Tribunal (NCLT), City Civil and Sessions Courts and advising them in civil, commercial, corporate, banking, regulatory, and arbitration matters before courts, tribunals, and other legal forums. Our practice covers the complete litigation process, from legal advice and drafting to representation, hearings, and resolution of disputes.',
    iconName: 'Scale',
    keyServices: [
      'Supreme Court of India & Bombay High Court Representation',
      'National Company Law Tribunal (NCLT & NCLAT)',
      'City Civil and Sessions Courts Advocacy',
      'Civil, Commercial, Corporate, Banking, Regulatory & Arbitration Matters'
    ],
    notableDeals: 'Abhyudaya Bank'
  },
  {
    id: 'corporate',
    title: 'Corporate',
    shortDesc:
      'Headed by Ms. Shirin Hormuzdi with over two decades of transactional leadership, our corporate department advises multinational corporations, public sector undertakings, and private developers on sophisticated conveyancing, bespoke contracts, non-disclosure agreements, title reports, and corporate governance.',
    fullDesc:
      'Headed by Ms. Shirin Hormuzdi with over two decades of transactional leadership, our corporate department advises multinational corporations, public sector undertakings, and private developers on sophisticated conveyancing, bespoke contracts, non-disclosure agreements, title reports, and corporate governance.',
    iconName: 'Briefcase',
    keyServices: [
      'Sophisticated Conveyancing & Title Reports',
      'Bespoke Contracts & Non-Disclosure Agreements (NDAs)',
      'Corporate Governance & Transactional Advisory',
      'Multinational Corporations, PSUs & Private Developers Counsel'
    ]
    // Representation benchmark matter – REMOVE
  },
  {
    id: 'adr',
    title: 'Arbitration & ADR',
    shortDesc:
      'Experience in ongoing domestic arbitrations and mediation matters, with extensive representation in construction and infrastructure disputes, monetary claims, and a wide range of commercial and contractual matters, including proceedings relating to enforcement of arbitral awards.',
    fullDesc:
      'Our Arbitration and Alternative Dispute Resolution practice focuses on the effective and efficient resolution of commercial and contractual disputes. The Firm is presently engaged in ongoing arbitration and mediation proceedings and has extensive experience in representing clients in construction and infrastructure arbitrations, as well as disputes arising from a wide range of commercial and contractual arrangements.\n\nOur experience includes advising and representing clients at various stages of arbitral proceedings, including pre-arbitration strategy, invocation of arbitration, drafting of pleadings and applications, evidence, cross-examination, hearings, interim reliefs, and enforcement and challenge of arbitral awards. We also assist clients in mediation, conciliation and negotiated settlements, with an emphasis on achieving practical and commercially viable resolutions.',
    iconName: 'Gavel',
    keyServices: [
      'Construction & Infrastructure Disputes',
      'Monetary Claims & Commercial Contractual Matters',
      'Pre-arbitration Strategy, Pleadings, Evidence & Hearings',
      'Interim Reliefs, Enforcement & Challenge of Arbitral Awards'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real estate, Redevelopment projects, construction contracts, conveyancing',
    shortDesc:
      'Our Real Estate practice covers the entire range of property-related legal work, including drafting and negotiation of development and construction agreements, turnkey project contracts, redevelopment arrangements, conveyance of property in favour of co-operative housing societies, and advising on property transactions. We represent developers, housing societies, and corporate clients in real estate matters across Mumbai and Maharashtra.',
    fullDesc:
      'Our Real Estate practice covers the entire range of property-related legal work, including drafting and negotiation of development and construction agreements, turnkey project contracts, redevelopment arrangements, conveyance of property in favour of co-operative housing societies, and advising on property transactions. We represent developers, housing societies, and corporate clients in real estate matters across Mumbai and Maharashtra.',
    iconName: 'Building2',
    keyServices: [
      'Development & Construction Agreements',
      'Turnkey Project Contracts & Redevelopment Arrangements',
      'Conveyance of Property in favour of Housing Societies',
      'Advising Developers, Housing Societies & Corporate Clients'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'parag-sharma',
    name: 'Mr. Parag Sharma',
    role: 'Founding Partner',
    designationType: 'partner',
    experience: '17+ Years in Litigation & Corporate Law',
    bio: 'Mr. Parag Sharma is an experienced litigator, having experience in this field for more than 17 years. Parag Sharma was the litigation partner with the firm Udwadia & Co. (erstwhile Udwadia & Udeshi). Subsequent to retirement of Mr. Udwadia, Mr. Parag Sharma carried forward the legacy with the firm BLAC Co. along with the same team.',
    specializations: [
      'Writ Petitions & Constitutional Matters',
      'Trial Courts & Commercial Litigation',
      'Contractual & Monetary Disputes',
      'Property and Real Estate Disputes',
      'Arbitration (Monetary, Construction, Contractual)',
      'Drafting of Contracts and High-Stakes Negotiations'
    ],
    previousFirmOrChamber: 'Former Litigation Partner at Udwadia & Co. (erstwhile Udwadia & Udeshi)',
    courtsAndForums: ['Supreme Court of India', 'Bombay High Court', 'NCLAT', 'Arbitral Tribunals'],
    avatarInitial: 'PS'
  },
  {
    id: 'aditi-phatak',
    name: 'Ms. Aditi Phatak',
    role: 'Associate Partner',
    designationType: 'partner',
    experience: '13+ Years in Litigation & Arbitration',
    bio: 'Ms. Aditi Phatak is from the chamber of late Mr. J.B. Chinai and has more than 13 years of experience in litigation. She commands commanding trial and appellate advocacy across specialized tribunals and courts.',
    specializations: [
      'Arbitration & Alternate Dispute Resolution',
      'Company Law Tribunal (NCLT & NCLAT)',
      'IPR Disputes & Trade Secrets',
      'Appearing before various courts including High Courts, Lower Courts, Arbitral Proceedings and Tribunals'
    ],
    previousFirmOrChamber: 'Chamber of Late Mr. J.B. Chinai',
    courtsAndForums: ['Bombay High Court', 'Company Law Tribunals (NCLT)', 'Arbitral Tribunals', 'Trial Courts'],
    avatarInitial: 'AP'
  },
  {
    id: 'shirin-hormuzdi',
    name: 'Ms. Shirin Hormuzdi',
    role: 'Head of Corporate & Company Law Department',
    designationType: 'partner',
    experience: '20+ Years in Corporate Law & Conveyancing',
    bio: 'Shirin Hormuzdi has experience of over 20 years in corporate law, conveyancing, and documentation with regards to companies and the real estate sector. She has vast experience in handling complex company matters and has worked previously in top law firms like Solomon and Co.',
    specializations: [
      'Corporate & Company Law Advisory',
      'Conveyancing & High-Value Documentation',
      'Real Estate Sector Structuring',
      'Commercial Contracts & Joint Ventures',
      'Regulatory Compliances & MCA Governance'
    ],
    previousFirmOrChamber: 'Solomon & Co. (Premier Corporate Law Firm)',
    courtsAndForums: ['Corporate Boardrooms', 'MCA / ROC', 'Regulatory Authorities'],
    avatarInitial: 'SH'
  },
  {
    id: 'astha-tahmankar',
    name: 'Ms. Astha Tahmankar',
    role: 'Firm In-house Counsel',
    designationType: 'counsel',
    experience: '15+ Years Practicing Counsel',
    bio: 'Astha has been practicing as a Counsel in the Bombay High Court, City Civil and Session Courts, NCLT, and DRT/DRAT for more than 15 years, bringing formidable courtroom acumen and brief strategy to institutional clients.',
    specializations: [
      'Counsel Practice before Bombay High Court',
      'City Civil & Sessions Courts Advocacy',
      'National Company Law Tribunal (NCLT)',
      'Debt Recovery Tribunals (DRT & DRAT)'
    ],
    previousFirmOrChamber: 'Counsel Practice at Bombay High Court Bar',
    courtsAndForums: ['Bombay High Court', 'City Civil & Sessions Court', 'NCLT', 'DRT & DRAT'],
    avatarInitial: 'AT'
  },
  {
    id: 'kirti-ojha',
    name: 'Ms. Kirti Ojha',
    role: 'Senior Associate (Litigation)',
    designationType: 'senior-associate',
    experience: 'Senior Litigation Practitioner',
    bio: 'Kirti Ojha has vast litigation experience in handling High Court matters, Labour Court matters, and Family Court matters. She represents clients before DRT, NCLT, and various other Tribunals and District Courts.',
    specializations: [
      'High Court Commercial & Civil Litigation',
      'Labour Court & Industrial Employment Matters',
      'Family Court & Matrimonial Settlements',
      'DRT, NCLT & District Court Representation'
    ],
    previousFirmOrChamber: 'BLAC Co. Senior Litigation Team',
    courtsAndForums: ['Bombay High Court', 'Labour Courts', 'DRT', 'NCLT', 'District Courts'],
    avatarInitial: 'KO'
  },
  {
    id: 'priya-mehra',
    name: 'Ms. Priya Mehra',
    role: 'Senior Associate (Litigation)',
    designationType: 'senior-associate',
    experience: 'Senior Dispute Resolution Practitioner',
    bio: 'Priya Mehra has experience in handling District Court matters, Arbitrations, and SRA matters. She also appears regularly before various judicial forums across Mumbai and Maharashtra.',
    specializations: [
      'District Court Litigation & Injunctions',
      'Commercial Arbitrations & Evidence Hearings',
      'Slum Rehabilitation Authority (SRA) Matters',
      'Judicial Forum Representations'
    ],
    previousFirmOrChamber: 'BLAC Co. Senior Litigation Team',
    courtsAndForums: ['District Courts', 'Arbitral Tribunals', 'SRA Apex Grievance Redressal Body'],
    avatarInitial: 'PM'
  },
  {
    id: 'vijay-salokhe',
    name: 'Mr. Vijay Salokhe',
    role: 'Senior Associate (Corporate)',
    designationType: 'senior-associate',
    experience: 'Senior Corporate Practitioner',
    bio: 'Vijay Salokhe has extensive experience in drafting contracts, conveyancing, and representation in matters before Company Law tribunals and corporate registries.',
    specializations: [
      'Commercial Contract Drafting & Master Agreements',
      'Property Conveyancing & Title Deeds',
      'Company Law Tribunal (NCLT) Matters',
      'Corporate Transactional Documentation'
    ],
    previousFirmOrChamber: 'BLAC Co. Corporate Practice Group',
    courtsAndForums: ['Company Law Tribunals', 'Registrar of Companies', 'Sub-Registrar Offices'],
    avatarInitial: 'VS'
  },
  {
    id: 'megha-more',
    name: 'Ms. Megha More',
    role: 'Associate (Litigation)',
    designationType: 'associate',
    experience: 'Civil & Sessions Courts Advocate',
    bio: 'Megha More has experience in handling contentious matters before City Civil & Sessions Courts and Small Causes Courts in Mumbai, specializing in tenancy, summary suits, and interim applications.',
    specializations: [
      'City Civil & Sessions Courts Litigation',
      'Small Causes Courts & Tenancy Disputes',
      'Summary Suits & Execution Applications',
      'Pleadings & Interim Reliefs'
    ],
    previousFirmOrChamber: 'BLAC Co. Litigation Team',
    courtsAndForums: ['City Civil & Sessions Court, Mumbai', 'Court of Small Causes'],
    avatarInitial: 'MM'
  },
  {
    id: 'ankit-upadhyay',
    name: 'Mr. Ankit Upadhyay',
    role: 'Associate (Litigation)',
    designationType: 'associate',
    experience: 'Criminal & White Collar Crimes Practitioner',
    bio: 'Ankit Upadhyay has specialized experience in handling matters with regards to white collar crimes, corporate fraud inquiries, and defense before High Courts and Criminal Courts.',
    specializations: [
      'White Collar Crime Defense & Regulatory Inquiries',
      'High Court Criminal Applications & Writs',
      'Sessions Court Criminal Trials & Bail Applications',
      'Economic Offences & Financial Fraud Proceedings'
    ],
    previousFirmOrChamber: 'BLAC Co. Litigation Team',
    courtsAndForums: ['Bombay High Court (Criminal Bench)', 'Special CBI / PMLA Courts', 'Sessions Courts'],
    avatarInitial: 'AU'
  },
  {
    id: 'saloni-chorodia',
    name: 'Ms. Saloni Chorodia',
    role: 'Associate (Litigation)',
    designationType: 'associate',
    experience: 'Trial & Magistrate Courts Advocate',
    bio: 'Saloni Chorodia has experience in handling matters before Magistrate Courts and Lower Courts. She also handles trial court cases and arbitration trials with meticulous preparation and witness examinations.',
    specializations: [
      'Magistrate Courts & Lower Court Trials',
      'Arbitration Evidence & Cross-Examinations',
      'Commercial Trial Court Practice',
      'Section 138 Negotiable Instruments Act Proceedings'
    ],
    previousFirmOrChamber: 'BLAC Co. Litigation Team',
    courtsAndForums: ['Metropolitan Magistrate Courts', 'Civil Lower Courts', 'Arbitral Tribunals'],
    avatarInitial: 'SC'
  }
];

export const CLIENTS_DATA: Client[] = [
  {
    id: 'rbi',
    name: 'Reserve Bank of India',
    category: 'Central Banking & Sovereign Authority',
    logo: '/RBI.png',
    descriptor: 'India’s Central Bank & Supreme Monetary Regulator'
  },
  {
    id: 'bpcl',
    name: 'Bharat Petroleum Corporation Ltd.',
    category: 'Maharatna Public Sector Undertaking',
    logo: '/Bharat.png',
    descriptor: 'Fortune Global 500 National Energy Maharatna'
  },
  {
    id: 'colgate',
    name: 'Colgate Palmolive (India) Ltd.',
    category: 'Multinational FMCG & Consumer Products',
    logo: '/colgate.png',
    descriptor: 'Global Consumer Products & Household Conglomerate'
  },
  {
    id: 'iocl',
    name: 'Indian Oil Corporation Ltd.',
    category: 'Maharatna Public Sector Undertaking',
    logo: '/IndianOil.png',
    descriptor: 'India’s Flagship National Oil Major & Energy Leader'
  },
  {
    id: 'jnj',
    name: 'Johnson & Johnson Pvt Ltd.',
    category: 'Multinational Healthcare & Pharmaceuticals',
    logo: '/johnson-johnson-logo.png',
    descriptor: 'World’s Leading Healthcare & Medical Technology Pioneer'
  },
  {
    id: 'parle-agro',
    name: 'Parle Agro Pvt. Ltd.',
    category: 'National Food & Beverage Giant',
    logo: '/parle.png',
    descriptor: 'Iconic Indian Beverage & Consumer Products Major'
  },
  {
    id: 'itd-cementation',
    name: 'ITD Cementation Ltd.',
    category: 'Infrastructure & Heavy EPC Construction',
    logo: '/ITD.png',
    descriptor: 'Premier Marine, Industrial & Highway EPC Contractor'
  },
  {
    id: 'tlg-starcom',
    name: 'TLG Starcom Pvt. Ltd.',
    category: 'Global Media & Advertising Network',
    logo: '/clients/yesbank.webp',
    descriptor: 'Multinational Media Investment & Communications Network'
  },
  {
    id: 'rizvi-builders',
    name: 'Rizvi Builders',
    category: 'Urban Real Estate & Infrastructure',
    logo: '/clients/idbi.webp',
    descriptor: 'Pioneering Mumbai Real Estate & Urban Redevelopment Group'
  },
  {
    id: 'kumar-builders',
    name: 'Kumar Builders (Pune group)',
    category: 'Real Estate & Megaproject Development',
    logo: '/clients/pnb.webp',
    descriptor: 'Premier Western India Real Estate & Township Developer'
  },
  {
    id: 'kalyani-group',
    name: 'Kalyani Group (Pune Group)',
    category: 'Industrial Manufacturing & Forging Giant',
    logo: '/clients/rbl.webp',
    descriptor: 'Global Engineering, Defense & Heavy Industry Conglomerate'
  },
  {
    id: 'exim-bank',
    name: 'Exim Bank',
    category: 'Sovereign Financial Institution',
    logo: '/clients/sbi.webp',
    descriptor: 'Export-Import Bank of India (Apex Trade Financial Institution)'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'BLAC Co.’s commercial dispute strategy and courtroom command saved our infrastructure consortium in complex cross-border arbitration. Mr. Parag Sharma and his litigation team possess rare forensic depth and formidable trial mastery.',
    author: 'Sunil Mathur',
    title: 'Executive Director & General Counsel',
    organization: 'Global Infrastructure & Heavy EPC Conglomerate',
    practiceArea: 'Arbitration & ADR',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'In high-stakes debt recovery and NCLT proceedings, BLAC Co.’s speed and mastery of Indian banking statutes are unparalleled. Their ethics and perseverance towards client success make them our primary counsel.',
    author: 'Rajiv Malhotra',
    title: 'Chief Legal Officer',
    organization: 'National Financial Institution',
    practiceArea: 'Litigation & Insolvency',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Ms. Shirin Hormuzdi and the corporate department provided flawless execution for our multi-jurisdictional contracts and regulatory structuring. Their 20+ years of transactional rigor ensure complete boardroom confidence.',
    author: 'Ananya Deshmukh',
    title: 'Head of Corporate Legal & Governance',
    organization: 'Multinational FMCG Corporation',
    practiceArea: 'Corporate & Company Law',
    rating: 5
  },
  {
    id: 'test-4',
    quote: 'Navigating large-scale urban redevelopment, society conveyancing, and RERA approvals requires deep Mumbai market insight. BLAC Co. delivered exceptional clarity, contractual security, and prompt results.',
    author: 'Vikramaditya Rao',
    title: 'Managing Director',
    organization: 'Leading Real Estate Development Group',
    practiceArea: 'Real Estate & Redevelopment',
    rating: 5
  }
];

export const FIRM_UPDATES_DATA: FirmUpdate[] = [
  {
    id: 'sc-arbitration-limitation-2026',
    title: 'Supreme Court Clarifies Limitation Period in International Commercial Arbitration under Section 11',
    category: 'Litigation & ADR',
    date: 'March 2026',
    readTime: '5 min read',
    tag: 'Landmark Precedent',
    summary: 'A definitive analysis of the Constitution Bench ruling determining referral jurisdiction and the scope of judicial intervention under Section 11(6) of the Arbitration Act.',
    fullContent: 'In a landmark verdict, the Supreme Court of India reaffirmed that referral courts must restrict their inquiry strictly to the prima facie existence of an arbitration agreement. The ruling significantly curbs protracted pre-arbitral litigation, reinforcing India as a preferred global arbitration hub.'
  },
  {
    id: 'sebi-lodr-governance-amendments',
    title: 'SEBI (LODR) Amendments: Enhanced Governance Framework for Listed Entities and RPT Compliances',
    category: 'Corporate & Commercial',
    date: 'February 2026',
    readTime: '6 min read',
    tag: 'Regulatory Directive',
    summary: 'Key compliance takeaways on related-party transaction approvals, verification of market rumors, and mandatory board disclosure timelines.',
    fullContent: 'SEBI has rolled out rigorous disclosure mandates for listed companies, requiring quantitative and qualitative thresholds for material transactions. Our corporate governance brief breaks down operational steps for board audit committees.'
  },
  {
    id: 'rera-title-due-diligence-developments',
    title: 'RERA and Land Title Due Diligence: Precedents in Joint Development Agreements and Consumer Protection',
    category: 'Real Estate',
    date: 'February 2026',
    readTime: '4 min read',
    tag: 'Industry Briefing',
    summary: 'Examining recent High Court rulings upholding homebuyer security interests in mortgaged residential projects and developer obligations.',
    fullContent: 'The interplay between RERA obligations and SARFAESI enforcement has gained crucial legal clarity. Our real estate team reviews how institutional lenders and developers must structure project escrows and developer warranties.'
  },
  {
    id: 'nclat-prepackaged-insolvency',
    title: 'Insolvency & Bankruptcy Code: NCLAT Rules on Pre-Packaged Resolution Framework',
    category: 'Corporate & Commercial',
    date: 'January 2026',
    readTime: '5 min read',
    tag: 'Tribunal Ruling',
    summary: 'Evaluating the viability, creditor approvals, and speed of pre-packaged insolvency resolutions for corporate debtors navigating debt stress.',
    fullContent: 'The appellate tribunal upheld the expedited approval timeline for pre-packaged resolution plans, validating debtor-in-possession management safeguards while securing financial creditor consensus.'
  }
];

export const CAREER_OPENINGS_DATA: JobOpening[] = [
  {
    id: 'pos-1',
    title: 'Associate / Senior Associate – High Court & Commercial Litigation',
    department: 'Litigation Practice Group',
    location: 'Mumbai (Fort Office)',
    type: 'Full-Time',
    experience: '3–7 Years PQE',
    description: 'Lead trial research, pleadings drafting, briefing senior counsels, and appearing before the Bombay High Court, NCLT, and City Civil Courts.'
  },
  {
    id: 'pos-2',
    title: 'Associate – Corporate Conveyancing & Real Estate Contracts',
    department: 'Corporate Department',
    location: 'Mumbai / Pune Network Office',
    type: 'Full-Time',
    experience: '2–5 Years PQE',
    description: 'Drafting commercial contracts, NDAs, title search diligence, and redevelopment project documentation under Ms. Shirin Hormuzdi.'
  },
  {
    id: 'pos-3',
    title: 'Associate – Commercial Arbitration & SRA Disputes',
    department: 'ADR & Real Estate',
    location: 'Mumbai Office',
    type: 'Full-Time',
    experience: '2–5 Years PQE',
    description: 'Handling statement of claims, arbitration hearings, evidence filing, and slum rehabilitation authority dispute resolution.'
  },
  {
    id: 'pos-4',
    title: 'Internship & Judicial Clerkship Program',
    department: 'Chambers of BLAC Co.',
    location: 'Mumbai / Pune / Delhi',
    type: 'Internship (4–8 Weeks)',
    experience: 'Law Students (3rd–5th Year)',
    description: 'Immersive courtroom exposure, statutory drafting, citation research, and arbitration file preparation with founding partners.'
  }
];

export const AUTHORITY_METRICS = [
  { label: 'Cumulative Litigation & Deal Track Record', value: '₹40,000+ Cr' },
  { label: 'Years of Combined Practice Heritage', value: '25+ Years' },
  { label: 'Advocates & Specialized Legal Bench', value: '10+ Counsel' },
  { label: 'Mumbai Fort HQ & Network Hubs', value: 'Mumbai • Pune • Delhi' },
];

export const OFFICES_DATA: Office[] = [
  {
    city: 'Mumbai Office',
    country: 'India',
    address: '37-38, Prospect Chambers Annex, Fort, Mumbai',
    suite: 'Fort Legal Heritage District',
    phone: '022-40068070',
    email: 'litigation@blac.co.in',
    website: 'Blac.co.in',
    isHeadquarter: true
  },
  {
    city: 'Pune Office',
    country: 'India',
    address: 'Integrated Network Office, Pune',
    suite: 'Corporate & Dispute Resolution Network',
    phone: '022-40068070',
    email: 'litigation@blac.co.in',
    website: 'Blac.co.in',
    isHeadquarter: false
  },
  {
    city: 'Delhi Office',
    country: 'India',
    address: 'Integrated Network Office, Delhi',
    suite: 'Supreme Court & Appellate Tribunal Network',
    phone: '022-40068070',
    email: 'litigation@blac.co.in',
    website: 'Blac.co.in',
    isHeadquarter: false
  }
];
