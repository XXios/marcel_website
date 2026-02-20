import type { Metadata } from "next";
import { getContactInfo, getObjekte } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ObjekteGrid from "@/components/ObjekteGrid";
import WhatsAppButton from "@/components/WhatsAppButton";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Objekte | Marcel Vogel \u2013 Maler & Gestalter",
  description:
    "Entdecken Sie abgeschlossene Projekte: Vorher-Nachher-Vergleiche, Spachteltechniken und kreative Raumgestaltung im Landkreis Bamberg.",
};

export default async function ObjektePage() {
  const [contact, objekte] = await Promise.all([
    getContactInfo(),
    getObjekte(),
  ]);

  return (
    <>
      <Header contact={contact} />
      <main className="min-h-screen bg-background">
        {/* Hero area */}
        <section className="pt-28 sm:pt-36 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-sm font-medium tracking-wide">
                Maler & Gestalter Vogel
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight">
              Objekte
            </h1>
            <div className="w-16 h-0.5 bg-accent mt-4 mb-6" />
            <p className="text-foreground-muted text-lg max-w-2xl leading-relaxed">
              Entdecken Sie abgeschlossene Projekte {"\u2013"} von klassischen
              Renovierungen bis hin zu exklusiven Gestaltungen mit Vorher-Nachher-Vergleichen.
            </p>
          </div>
        </section>

        {/* Objekte grid */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ObjekteGrid objekte={objekte} />
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface rounded-2xl p-10 md:p-14 text-center border border-border">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ihr Projekt k{"ö"}nnte das N{"ä"}chste sein.
              </h2>
              <p className="text-foreground-muted max-w-lg mx-auto mb-8">
                Sie m{"ö"}chten Ihre R{"ä"}ume verwandeln? Kontaktieren Sie mich f{"ü"}r eine
                kostenlose Erstberatung.
              </p>
              <a
                href="/#kontakt"
                className="inline-block bg-accent text-primary-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-hover transition-all shadow-sm hover:shadow-md"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer contact={contact} />
      <WhatsAppButton contact={contact} />
    </>
  );
}
