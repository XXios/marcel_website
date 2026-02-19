import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Malerbetrieb Vogel",
  description: "Datenschutzerklärung des Malerbetrieb Vogel im Landkreis Bamberg.",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Zurück zur Startseite
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-foreground">
          <div className="bg-accent-light/50 border border-accent/20 rounded-xl p-6 mb-8">
            <p className="text-accent font-semibold text-sm m-0">
              Hinweis: Diese Datenschutzerklärung ist ein Platzhalter. Bitte
              lassen Sie eine rechtskonforme Datenschutzerklärung gemäß
              DSGVO erstellen (z.{'\u2009'}B. über einen Datenschutz-Generator oder
              einen Rechtsanwalt).
            </p>
          </div>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-semibold text-primary mt-6 mb-3">Allgemeine Hinweise</h3>
          <p className="text-foreground-muted leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber,
            was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Verantwortlicher</h2>
          <p className="text-foreground-muted leading-relaxed">
            Marcel Vogel<br />
            Malerbetrieb Vogel<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            Landkreis Bamberg<br /><br />
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-lg font-semibold text-primary mt-6 mb-3">Kontaktformular</h3>
          <p className="text-foreground-muted leading-relaxed">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
            Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
            Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-3">Hosting</h3>
          <p className="text-foreground-muted leading-relaxed">
            [Angaben zum Hosting-Anbieter ergänzen, z.{'\u2009'}B. Vercel, Netlify, etc.]
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Ihre Rechte</h2>
          <p className="text-foreground-muted leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über
            Herkunft, Empfänger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben außerdem das
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit an uns wenden.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Cookies</h2>
          <p className="text-foreground-muted leading-relaxed">
            Diese Website verwendet derzeit keine Cookies. Sollte sich dies
            ändern, wird diese Datenschutzerklärung entsprechend
            aktualisiert.
          </p>
        </div>
      </main>
    </div>
  );
}
