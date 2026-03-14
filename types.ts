import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: ServiceItem[];
  image: string;
  benefits: string[];
}

export interface Partner {
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  image: string;
}

export interface Sector {
  title: string;
  description: string;
  icon: LucideIcon;
}