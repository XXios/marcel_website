// Shared TypeScript types for Supabase CMS

export interface ContactInfo {
  id: number;
  phone: string;
  phone_raw: string;
  email: string;
  whatsapp: string;
  instagram: string;
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

export interface SiteSettings {
  id: number;
  hero_image_url: string;
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
  before_image_url: string;
  after_image_url: string;
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

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  sort_order: number;
  created_at: string;
}

export interface Objekt {
  id: string;
  title: string;
  location: string;
  description: string;
  cover_image_url: string;
  review_name: string | null;
  review_text: string | null;
  review_rating: number | null;
  sort_order: number;
  created_at: string;
}

export interface ObjektImage {
  id: string;
  objekt_id: string;
  before_image_url: string;
  after_image_url: string | null;
  caption: string | null;
  sort_order: number;
  created_at: string;
}
