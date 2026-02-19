import { supabase } from "./supabase";
import type { ContactInfo, AboutInfo, SiteSettings, Service, Project, Testimonial, GalleryItem } from "./types";

// Fallback data (matches the seeded DB values)
// Used if Supabase is unreachable so the site never breaks.

const fallbackContact: ContactInfo = {
  id: 1,
  phone: "[Telefonnummer]",
  phone_raw: "+4901234567890",
  email: "[E-Mail-Adresse]",
  whatsapp: "4901234567890",
  instagram: "",
  address: "[Adresse]",
  city: "Landkreis Bamberg",
  hours: "Mo\u2013Fr: 7:00\u201318:00 Uhr",
  on_vacation: false,
  updated_at: new Date().toISOString(),
};

const fallbackAbout: AboutInfo = {
  id: 1,
  title: "\u00dcber mich",
  subtitle: "Leidenschaft f\u00fcr Oberfl\u00e4chen und Gestaltung",
  paragraph_1:
    "Mein Name ist Marcel Vogel \u2013 ich bin 19 Jahre alt und bereits in der Meisterausbildung zum Maler und Lackierer. Was andere in meinem Alter noch suchen, habe ich l\u00e4ngst gefunden: meine Berufung. Schon fr\u00fch habe ich erkannt, dass Malerarbeiten f\u00fcr mich mehr sind als ein Handwerk \u2013 es ist die Kunst, R\u00e4ume zu verwandeln.",
  paragraph_2:
    "Mein Fokus liegt auf dem, was Standardmaler nicht bieten: Spachteltechniken, Strukturoberfl\u00e4chen und individuelle Wandgestaltung. Ich arbeite mit hochwertigen Materialien wie Kalkputz und dekorativen Beschichtungen, um Oberfl\u00e4chen zu schaffen, die man nicht nur sieht \u2013 sondern sp\u00fcrt.",
  paragraph_3:
    "Trotz meines jungen Alters stehe ich f\u00fcr h\u00f6chste Qualit\u00e4t, absolute Zuverl\u00e4ssigkeit und ein Auge f\u00fcrs Detail, das man sonst nur bei erfahrenen Meistern findet. Aus dem Landkreis Bamberg, f\u00fcr Menschen, die das Besondere sch\u00e4tzen.",
  image_url: "",
  updated_at: new Date().toISOString(),
};

const fallbackSiteSettings: SiteSettings = {
  id: 1,
  hero_image_url: "/images/hero-bg.jpg",
  updated_at: new Date().toISOString(),
};

const fallbackServices: Service[] = [
  {
    id: "1",
    title: "Innenanstriche",
    description: "Ob einzelne R\u00e4ume oder die komplette Wohnung \u2013 wir sorgen f\u00fcr ein perfektes Finish mit sauberen Kanten und gleichm\u00e4\u00dfiger Deckkraft. Inklusive Beratung zur richtigen Farbwahl.",
    icon_name: "paint-roller",
    image_url: "/images/services/innenanstriche.jpg",
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Lackierarbeiten",
    description: "T\u00fcren, Fensterrahmen, Heizk\u00f6rper und Gel\u00e4nder \u2013 wir lackieren pr\u00e4zise und sauber. F\u00fcr einen frischen Look, der lange h\u00e4lt.",
    icon_name: "spray-can",
    image_url: "/images/services/lackierarbeiten.jpg",
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Spachtel- & Strukturtechniken",
    description: "Von feinem Spachtel bis zur dekorativen Wandgestaltung. Wir schaffen individuelle Oberfl\u00e4chen, die Ihrem Raum Charakter verleihen.",
    icon_name: "palette",
    image_url: "/images/services/spachteltechnik.jpg",
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Renovierung & Modernisierung",
    description: "Komplettrenovierung von Wohnungen und Gewerber\u00e4umen. Tapeten entfernen, W\u00e4nde vorbereiten, streichen \u2013 alles aus einer Hand.",
    icon_name: "home",
    image_url: "/images/services/renovierung.jpg",
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
];

const fallbackProjects: Project[] = [
  {
    id: "1",
    title: "Wohnzimmer-Renovation",
    location: "Bamberg",
    description: "Komplette Neugestaltung eines Wohnzimmers mit modernem Farbkonzept in warmen T\u00f6nen.",
    tags: ["Innenanstrich", "Farbberatung"],
    image_url: "/images/portfolio/wohnzimmer.jpg",
    before_image_url: "",
    after_image_url: "",
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Treppenhaus-Sanierung",
    location: "Hallstadt",
    description: "Sanierung und Neuanstrich eines Mehrfamilienhaus-Treppenhauses inkl. Decke und Gel\u00e4nder.",
    tags: ["Lackierarbeiten", "Renovierung"],
    image_url: "/images/portfolio/treppenhaus.jpg",
    before_image_url: "",
    after_image_url: "",
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Spachteltechnik Esszimmer",
    location: "Stegaurach",
    description: "Exklusive Wandgestaltung mit feiner Spachteltechnik f\u00fcr ein modernes Esszimmer.",
    tags: ["Spachteltechnik", "Kreative Gestaltung"],
    image_url: "/images/portfolio/spachtel-esszimmer.jpg",
    before_image_url: "",
    after_image_url: "",
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "B\u00fcrofl\u00e4chen Modernisierung",
    location: "Bamberg Innenstadt",
    description: "Renovierung und frischer Anstrich einer 200m\u00b2 B\u00fcrofl\u00e4che \u2013 au\u00dferhalb der Gesch\u00e4ftszeiten.",
    tags: ["Gewerbe", "Renovierung"],
    image_url: "/images/portfolio/buero.jpg",
    before_image_url: "",
    after_image_url: "",
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
];

const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Herr Vogel hat unsere komplette Wohnung gestrichen \u2013 super sauber, p\u00fcnktlich und das Ergebnis ist einwandfrei. Wir k\u00f6nnen ihn nur weiterempfehlen!",
    name: "Familie M.",
    location: "Bamberg",
    rating: 5,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    quote: "Endlich ein Maler, der h\u00e4lt, was er verspricht. Die Spachteltechnik im Wohnzimmer sieht fantastisch aus. Sehr professionell und freundlich.",
    name: "S. Weber",
    location: "Hallstadt",
    rating: 5,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    quote: "Wir haben Herrn Vogel f\u00fcr die Renovierung von drei Mietwohnungen beauftragt. Alles lief reibungslos, z\u00fcgig und die Abrechnung war korrekt. Gerne wieder!",
    name: "K. Bauer, Hausverwaltung",
    location: "Bamberg",
    rating: 5,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
];

const fallbackGallery: GalleryItem[] = [];

// Data fetching functions

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    const { data, error } = await supabase
      .from("contact_info")
      .select("*")
      .eq("id", 1)
      .single();

    if (error || !data) {
      console.error("Failed to fetch contact_info:", error?.message);
      return fallbackContact;
    }
    return data as ContactInfo;
  } catch {
    return fallbackContact;
  }
}

export async function getAboutInfo(): Promise<AboutInfo> {
  try {
    const { data, error } = await supabase
      .from("about_info")
      .select("*")
      .eq("id", 1)
      .single();

    if (error || !data) {
      console.error("Failed to fetch about_info:", error?.message);
      return fallbackAbout;
    }
    return data as AboutInfo;
  } catch {
    return fallbackAbout;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .eq("id", 1)
      .single();

    if (error || !data) {
      console.error("Failed to fetch site_settings:", error?.message);
      return fallbackSiteSettings;
    }
    return data as SiteSettings;
  } catch {
    return fallbackSiteSettings;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      console.error("Failed to fetch services:", error?.message);
      return fallbackServices;
    }
    return data as Service[];
  } catch {
    return fallbackServices;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      console.error("Failed to fetch projects:", error?.message);
      return fallbackProjects;
    }
    return data as Project[];
  } catch {
    return fallbackProjects;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      console.error("Failed to fetch testimonials:", error?.message);
      return fallbackTestimonials;
    }
    return data as Testimonial[];
  } catch {
    return fallbackTestimonials;
  }
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const { data, error } = await supabase
      .from("gallery_items")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      console.error("Failed to fetch gallery_items:", error?.message);
      return fallbackGallery;
    }
    return data as GalleryItem[];
  } catch {
    return fallbackGallery;
  }
}
