import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { renderIcon } from "@/lib/icons";
import type { Service } from "@/lib/types";

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Leistungen"
          subtitle="Vom feinen Spachtel bis zur kompletten Raumgestaltung – exklusive Oberflächen, die beeindrucken."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500"
            >
              {/* Service image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image_url}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-accent/90 text-primary-dark flex items-center justify-center shadow-md backdrop-blur-sm">
                  {renderIcon(service.icon_name, "w-5 h-5")}
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust note */}
        <div className="mt-16 text-center">
          <p className="text-foreground-muted">
            Sie haben ein spezielles Projekt?{" "}
            <a
              href="#kontakt"
              className="text-accent font-semibold hover:text-accent-hover transition-colors underline underline-offset-4 decoration-accent/30"
            >
              Lassen Sie sich beraten
            </a>{" "}
            – individuell und unverbindlich.
          </p>
        </div>
      </div>
    </section>
  );
}
