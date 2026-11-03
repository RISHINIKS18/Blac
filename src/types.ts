export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyServices: string[];
  notableDeals?: string;
}

export interface Client {
  id: string;
  name: string;
  category: string;
  logo: string;
  descriptor?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  practiceArea: string;
  rating: number;
}

export interface FirmUpdate {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  fullContent?: string;
  tag: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export interface Partner {
  name: string;
  role: string;
  admissions: string;
  education: string;
  bio: string;
  focus: string[];
  imageUrl: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designationType: 'partner' | 'counsel' | 'senior-associate' | 'associate';
  experience?: string;
  bio: string;
  specializations: string[];
  previousFirmOrChamber?: string;
  courtsAndForums?: string[];
  avatarInitial: string;
}

export interface Office {
  city: string;
  country: string;
  address: string;
  suite: string;
  phone: string;
  email: string;
  website?: string;
  isHeadquarter?: boolean;
}
