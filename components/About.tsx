import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import type { AboutInfo } from "@/lib/types";

interface AboutProps {
  about: AboutInfo;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="ueber-mich" className="py-20 md:py-28 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            {about.image_url ? (
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <Image
                  src={about.image_url}
                  alt="Marcel Vogel bei der Arbeit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="aspect-[4/5] rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center px-8">
                  <svg
                    className="w-20 h-20 mx-auto text-foreground-muted/20 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={0.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <p className="text-foreground-muted/40 text-sm font-medium">
                    Foto von Marcel bei der Arbeit
                  </p>
                  <p className="text-foreground-muted/30 text-xs mt-1">
                    (Platzhalter – echtes Foto wird ergänzt)
                  </p>
                </div>
              </div>
            )}
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/5 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-accent/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              title={about.title}
              subtitle={about.subtitle}
              centered={false}
            />

            <div className="space-y-5 text-foreground-muted leading-relaxed">
              <p>{about.paragraph_1}</p>
              <p>{about.paragraph_2}</p>
              <p>{about.paragraph_3}</p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  ),
                  label: "Präzision",
                  text: "Perfekte Kanten, makellose Oberflächen – bis ins Detail.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Zuverlässigkeit",
                  text: "Termine werden eingehalten. Verlässlich wie ein Handschlag.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: "Regional",
                  text: "Aus dem Landkreis Bamberg, für den Landkreis Bamberg.",
                },
              ].map((value) => (
                <div key={value.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-light text-accent mb-2 sm:mb-3">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-foreground text-xs sm:text-sm mb-1">{value.label}</h4>
                  <p className="hidden sm:block text-foreground-muted text-xs leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
