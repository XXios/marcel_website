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
          title="Unsere Leistungen"
          subtitle="Vom Innenanstrich bis zur kompletten Renovierung – wir bieten Ihnen das volle Spektrum professioneller Malerarbeiten."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image_url}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center shadow-md">
                  {renderIcon(service.icon_name, "w-5 h-5")}
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
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
              className="text-accent font-semibold hover:text-accent-hover transition-colors underline underline-offset-4"
            >
              Sprechen Sie uns an
            </a>{" "}
            – wir beraten Sie gerne.
          </p>
        </div>
      </div>
    </section>
  );
}
