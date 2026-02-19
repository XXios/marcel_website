import { supabase } from "./supabase";
import type { ContactInfo, AboutInfo, Service, Project, Testimonial } from "./types";

// Fallback data (matches the seeded DB values)
// Used if Supabase is unreachable so the site never breaks.

const fallbackContact: ContactInfo = {
  id: 1,
  phone: "[Telefonnummer]",
  phone_raw: "+4901234567890",
  email: "[E-Mail-Adresse]",
  whatsapp: "4901234567890",
  address: "[Adresse]",
  city: "Landkreis Bamberg",
  hours: "Mo–Fr: 7:00–18:00 Uhr",
  on_vacation: false,
  updated_at: new Date().toISOString(),
};

const fallbackAbout: AboutInfo = {
  id: 1,
  title: "Über mich",
  subtitle: "Leidenschaft für Oberflächen und Gestaltung",
  paragraph_1:
    "Mein Name ist Marcel Vogel – ich bin 19 Jahre alt und bereits in der Meisterausbildung zum Maler und Lackierer. Was andere in meinem Alter noch suchen, habe ich längst gefunden: meine Berufung. Schon früh habe ich erkannt, dass Malerarbeiten für mich mehr sind als ein Handwerk – es ist die Kunst, Räume zu verwandeln.",
  paragraph_2:
    "Mein Fokus liegt auf dem, was Standardmaler nicht bieten: Spachteltechniken, Strukturoberflächen und individuelle Wandgestaltung. Ich arbeite mit hochwertigen Materialien wie Kalkputz und dekorativen Beschichtungen, um Oberflächen zu schaffen, die man nicht nur sieht – sondern spürt.",
  paragraph_3:
    "Trotz meines jungen Alters stehe ich für höchste Qualität, absolute Zuverlässigkeit und ein Auge fürs Detail, das man sonst nur bei erfahrenen Meistern findet. Aus dem Landkreis Bamberg, für Menschen, die das Besondere schätzen.",
  image_url: "",
  updated_at: new Date().toISOString(),
};

const fallbackServices: Service[] = [
  {
    id: "1",
    title: "Innenanstriche",
    description: "Ob einzelne Räume oder die komplette Wohnung – wir sorgen für ein perfektes Finish mit sauberen Kanten und gleichmäßiger Deckkraft. Inklusive Beratung zur richtigen Farbwahl.",
    icon_name: "paint-roller",
    image_url: "/images/services/innenanstriche.jpg",
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Lackierarbeiten",
    description: "Türen, Fensterrahmen, Heizkörper und Geländer – wir lackieren präzise und sauber. Für einen frischen Look, der lange hält.",
    icon_name: "spray-can",
    image_url: "/images/services/lackierarbeiten.jpg",
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Spachtel- & Strukturtechniken",
    description: "Von feinem Spachtel bis zur dekorativen Wandgestaltung. Wir schaffen individuelle Oberflächen, die Ihrem Raum Charakter verleihen.",
    icon_name: "palette",
    image_url: "/images/services/spachteltechnik.jpg",
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Renovierung & Modernisierung",
    description: "Komplettrenovierung von Wohnungen und Gewerberäumen. Tapeten entfernen, Wände vorbereiten, streichen – alles aus einer Hand.",
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
    description: "Komplette Neugestaltung eines Wohnzimmers mit modernem Farbkonzept in warmen Tönen.",
    tags: ["Innenanstrich", "Farbberatung"],
    image_url: "/images/portfolio/wohnzimmer.jpg",
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Treppenhaus-Sanierung",
    location: "Hallstadt",
    description: "Sanierung und Neuanstrich eines Mehrfamilienhaus-Treppenhauses inkl. Decke und Geländer.",
    tags: ["Lackierarbeiten", "Renovierung"],
    image_url: "/images/portfolio/treppenhaus.jpg",
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Spachteltechnik Esszimmer",
    location: "Stegaurach",
    description: "Exklusive Wandgestaltung mit feiner Spachteltechnik für ein modernes Esszimmer.",
    tags: ["Spachteltechnik", "Kreative Gestaltung"],
    image_url: "/images/portfolio/spachtel-esszimmer.jpg",
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Büroflächen Modernisierung",
    location: "Bamberg Innenstadt",
    description: "Renovierung und frischer Anstrich einer 200m² Bürofläche – außerhalb der Geschäftszeiten.",
    tags: ["Gewerbe", "Renovierung"],
    image_url: "/images/portfolio/buero.jpg",
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
];

const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Herr Vogel hat unsere komplette Wohnung gestrichen – super sauber, pünktlich und das Ergebnis ist einwandfrei. Wir können ihn nur weiterempfehlen!",
    name: "Familie M.",
    location: "Bamberg",
    rating: 5,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    quote: "Endlich ein Maler, der hält, was er verspricht. Die Spachteltechnik im Wohnzimmer sieht fantastisch aus. Sehr professionell und freundlich.",
    name: "S. Weber",
    location: "Hallstadt",
    rating: 5,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    quote: "Wir haben Herrn Vogel für die Renovierung von drei Mietwohnungen beauftragt. Alles lief reibungslos, zügig und die Abrechnung war korrekt. Gerne wieder!",
    name: "K. Bauer, Hausverwaltung",
    location: "Bamberg",
    rating: 5,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
];

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
