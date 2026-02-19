import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Maler & Gestalter Vogel",
  description: "Impressum von Maler & Gestalter Vogel im Landkreis Bamberg.",
};

export default function Impressum() {
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
            {`Zurück zur Startseite`}
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Impressum</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-none">
          <div className="bg-accent-light border border-accent/20 rounded-xl p-6 mb-8">
            <p className="text-accent font-semibold text-sm m-0">
              {`Hinweis: Diese Seite enthält Platzhalterangaben. Bitte ersetzen Sie diese durch die tatsächlichen Angaben gemäß § 5 TMG.`}
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">{`Angaben gemäß § 5 TMG`}</h2>
          <p className="text-foreground-muted leading-relaxed">
            Marcel Vogel<br />
            Maler & Gestalter Vogel<br />
            {`[Straße und Hausnummer]`}<br />
            [PLZ Ort]<br />
            Landkreis Bamberg
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Kontakt</h2>
          <p className="text-foreground-muted leading-relaxed">
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p className="text-foreground-muted leading-relaxed">
            {`Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:`}<br />
            [USt-IdNr. oder Hinweis auf Kleinunternehmerregelung]
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-foreground-muted leading-relaxed">
            Berufsbezeichnung: Maler und Lackierer<br />
            {`Zuständige Kammer: Handwerkskammer für Oberfranken`}<br />
            Verliehen in: Deutschland
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Streitschlichtung</h2>
          <p className="text-foreground-muted leading-relaxed">
            {`Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`}
          </p>
        </div>
      </main>
    </div>
  );
}
