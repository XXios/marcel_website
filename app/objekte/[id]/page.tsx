import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getContactInfo, getObjektById, getObjektImages } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ObjektReview from "@/components/ObjektReview";
import WhatsAppButton from "@/components/WhatsAppButton";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const objekt = await getObjektById(id);

  if (!objekt) {
    return { title: "Objekt nicht gefunden" };
  }

  return {
    title: `${objekt.title} | Marcel Vogel \u2013 Maler & Gestalter`,
    description: objekt.description
      ? objekt.description.slice(0, 160)
      : `Projekt ${objekt.title} in ${objekt.location} \u2013 Maler & Gestalter Vogel.`,
  };
}

export default async function ObjektDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [contact, objekt] = await Promise.all([
    getContactInfo(),
    getObjektById(id),
  ]);

  if (!objekt) {
    notFound();
  }

  const images = await getObjektImages(objekt.id);

  const hasReview = objekt.review_text && objekt.review_name;

  return (
    <>
      <Header contact={contact} />
      <main className="min-h-screen bg-background">
        {/* Hero area */}
        <section className="pt-28 sm:pt-36 pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <div className="mb-12">
            <a
              href="/objekte"
              className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <span className="text-sm font-medium">Zur{"\u00fc"}ck zu Objekte</span>
            </a>
            </div>

            {/* Location badge */}
            {objekt.location && (
              <div className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-2 mb-6">
                <svg
                  className="w-3.5 h-3.5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="text-accent text-sm font-medium tracking-wide">
                  {objekt.location}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              {objekt.title}
            </h1>
            <div className="w-16 h-0.5 bg-accent mt-4 mb-6" />

            {/* Description */}
            {objekt.description && (
              <p className="text-foreground-muted text-lg leading-relaxed max-w-2xl">
                {objekt.description}
              </p>
            )}
          </div>
        </section>

        {/* Images section */}
        {images.length > 0 && (
          <section className="pb-16 md:pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-12">
                {images.map((img) => {
                  const hasAfter = !!img.after_image_url;

                  return (
                    <div key={img.id}>
                      {hasAfter ? (
                        <BeforeAfterSlider
                          beforeImage={img.before_image_url}
                          afterImage={img.after_image_url!}
                          className="aspect-[16/10] rounded-xl"
                        />
                      ) : (
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                          <Image
                            src={img.before_image_url}
                            alt={img.caption || objekt.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 896px"
                          />
                          {/* Subtle vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none" />
                        </div>
                      )}
                      {img.caption && (
                        <p className="text-foreground-muted text-sm mt-3 leading-relaxed">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Review section */}
        {hasReview && (
          <section className="pb-16 md:pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Kundenbewertung
              </h2>
              <ObjektReview
                name={objekt.review_name!}
                text={objekt.review_text!}
                rating={objekt.review_rating ?? 5}
              />
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
