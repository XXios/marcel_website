import Image from "next/image";
import type { ContactInfo } from "@/lib/types";

interface FooterProps {
  contact: ContactInfo;
}

export default function Footer({ contact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Vogel Maler & Gestalter Logo"
                width={64}
                height={64}
                className="w-16 h-16 rounded-xl"
              />
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl text-foreground tracking-tight leading-tight">
                  Vogel
                </span>
                <span className="text-sm text-foreground-muted uppercase tracking-[0.3em]">
                  Maler & Gestalter
                </span>
              </div>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              Ihr Maler & Gestalter im Landkreis Bamberg.
              {" "}Qualität, Sauberkeit und Termintreue {"–"} darauf
              können Sie sich verlassen.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Leistungen", href: "/#leistungen" },
                { label: "Projekte", href: "/#portfolio" },
                { label: "Galerie", href: "/galerie" },
                { label: "\u00dcber mich", href: "/#ueber-mich" },
                { label: "Kundenstimmen", href: "/#kundenstimmen" },
                { label: "Kontakt", href: "/#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground-muted hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-foreground-muted">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={`tel:${contact.phone_raw}`} className="hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{contact.city}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted/50 text-xs">
            &copy; {currentYear} Maler & Gestalter Vogel. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/impressum"
              className="text-foreground-muted/50 hover:text-foreground-muted text-xs transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-foreground-muted/50 hover:text-foreground-muted text-xs transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="/admin"
              className="text-foreground-muted/50 hover:text-foreground-muted text-xs transition-colors"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
