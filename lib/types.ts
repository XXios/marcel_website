// Shared TypeScript types for Supabase CMS

export interface ContactInfo {
  id: number;
  phone: string;
  phone_raw: string;
  email: string;
  whatsapp: string;
  address: string;
  city: string;
  hours: string;
  on_vacation: boolean;
  updated_at: string;
}

export interface AboutInfo {
  id: number;
  title: string;
  subtitle: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
  image_url: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  image_url: string;
  sort_order: number;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
  image_url: string;
  sort_order: number;
  created_at: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: number;
  sort_order: number;
  created_at: string;
}
