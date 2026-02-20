"use client";

import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import BeforeAfterSlider from "./BeforeAfterSlider";
import type { Project } from "@/lib/types";

interface PortfolioProps {
  projects: Project[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 !== 0;
  const hasBeforeAfter = project.before_image_url && project.after_image_url;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-stretch ${
        isReversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image or Before/After Slider */}
      {hasBeforeAfter ? (
        <div className={`${isReversed ? "lg:order-2" : ""}`}>
          <BeforeAfterSlider
            beforeImage={project.before_image_url}
            afterImage={project.after_image_url}
            className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]"
          />
        </div>
      ) : (
        <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Atmospheric vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-surface ${isReversed ? "lg:order-1" : ""}`}>
        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-xs font-medium text-foreground-muted uppercase tracking-widest">{project.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">{project.title}</h3>

        {/* Description */}
        <p className="text-foreground-muted leading-relaxed mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium border border-accent/20 text-accent px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projekte"
          subtitle="Ausgewählte Arbeiten, die für sich sprechen."
        />
      </div>

      {/* Staggered project cards — full width */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-px">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* CTA to Objekte page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <a
          href="/objekte"
          className="inline-block bg-accent text-primary-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-hover transition-all shadow-sm hover:shadow-md"
        >
          Alle Objekte ansehen
        </a>
      </div>
    </section>
  );
}
