import type { Metadata } from "next";
import { getContactInfo } from "@/lib/data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Impressum | Maler & Gestalter Vogel",
  description: "Impressum von Maler & Gestalter Vogel im Landkreis Bamberg.",
};

export default async function Impressum() {
  const contact = await getContactInfo();

  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="bg-background-alt border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent text-sm transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {`Zur\u00fcck zur Startseite`}
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Impressum</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-none">
          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">{`Angaben gem\u00e4\u00df \u00a7 5 TMG`}</h2>
          <p className="text-foreground-muted leading-relaxed">
            {contact.full_name}<br />
            {contact.business_name}<br />
            {contact.street}<br />
            {contact.zip_city}<br />
            {contact.region}
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Kontakt</h2>
          <p className="text-foreground-muted leading-relaxed">
            Telefon: {contact.phone}<br />
            E-Mail: {contact.email}
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p className="text-foreground-muted leading-relaxed">
            {contact.tax_info}
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-foreground-muted leading-relaxed">
            Berufsbezeichnung: {contact.profession}<br />
            {`Zust\u00e4ndige Kammer: ${contact.chamber}`}<br />
            Verliehen in: Deutschland
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Streitschlichtung</h2>
          <p className="text-foreground-muted leading-relaxed">
            {`Die Europ\u00e4ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: `}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            {`. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`}
          </p>
        </div>
      </main>
    </div>
  );
}
