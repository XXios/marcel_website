import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Exklusive Wandgestaltung"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Maler & Gestalter im Landkreis Bamberg
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight">
            Marcel Vogel
            <span className="block text-accent mt-2 md:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic">
              Oberflächen mit Charakter.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed">
            Spachteltechniken, Designoberflächen und exklusive Wandgestaltung
            – handwerkliche Präzision für Räume, die beeindrucken.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="#kontakt" size="lg">
              Projekt anfragen
            </Button>
            <Button href="#leistungen" variant="outline" size="lg">
              Leistungen entdecken
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-8 sm:gap-12">
            {[
              { label: "Landkreis Bamberg" },
              { label: "Meisterqualität" },
              { label: "Exklusive Oberflächen" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/30"
              >
                <div className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-xs font-medium uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#leistungen" className="flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Entdecken</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
