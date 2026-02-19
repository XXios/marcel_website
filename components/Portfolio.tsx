"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import type { Project } from "@/lib/types";

interface PortfolioProps {
  projects: Project[];
}

/* ──────────────────────────────────────────
   Desktop grid card
   ────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
          <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-xs font-medium text-primary">{project.location}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-foreground-muted text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-accent-light text-accent px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Mobile card deck with shuffle animation
   ────────────────────────────────────────── */
function MobileCardDeck({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef(false);

  const count = projects.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      requestAnimationFrame(() => {
        setActive(index);
      });
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % count, "next");
  }, [active, count, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + count) % count, "prev");
  }, [active, count, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!pauseRef.current) {
        next();
      }
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    pauseRef.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) {
        next();
      } else {
        prev();
      }
    }
    setTimeout(() => {
      pauseRef.current = false;
    }, 3000);
  };

  return (
    <div className="md:hidden">
      {/* Card deck container */}
      <div
        className="relative mx-auto"
        style={{ height: 420, maxWidth: 380 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, i) => {
          const offset = i - active;
          const normalizedOffset =
            offset > count / 2 ? offset - count : offset < -count / 2 ? offset + count : offset;

          const isActive = normalizedOffset === 0;
          const isBehind1 = normalizedOffset === 1 || (normalizedOffset === -(count - 1));
          const isBehind2 = normalizedOffset === 2 || (normalizedOffset === -(count - 2));

          let zIndex = 0;
          let translateY = "0px";
          let scale = 1;
          let opacity = 0;

          if (isActive) {
            zIndex = 30;
            translateY = "0px";
            scale = 1;
            opacity = 1;
          } else if (isBehind1) {
            zIndex = 20;
            translateY = "12px";
            scale = 0.95;
            opacity = 0.6;
          } else if (isBehind2) {
            zIndex = 10;
            translateY = "24px";
            scale = 0.9;
            opacity = 0.3;
          } else {
            zIndex = 0;
            translateY = "36px";
            scale = 0.85;
            opacity = 0;
          }

          return (
            <div
              key={project.id}
              className="absolute inset-0 rounded-2xl overflow-hidden bg-white border border-border shadow-lg"
              style={{
                zIndex,
                transform: `translateY(${translateY}) scale(${scale})`,
                opacity,
                transition: isAnimating
                  ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
                pointerEvents: isActive ? "auto" : "none",
              }}
              onTransitionEnd={() => {
                if (isActive) setIsAnimating(false);
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-xs font-medium text-primary">{project.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary mb-1.5">{project.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-accent-light text-accent px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              pauseRef.current = true;
              goTo(i, i > active ? "next" : "prev");
              setTimeout(() => { pauseRef.current = false; }, 3000);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 h-2.5 bg-accent"
                : "w-2.5 h-2.5 bg-border hover:bg-foreground-muted"
            }`}
            aria-label={`Projekt ${i + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-foreground-muted/50 text-xs mt-3">
        Wischen zum Blättern
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────
   Main Portfolio section
   ────────────────────────────────────────── */
export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Unsere Projekte"
          subtitle="Ein Auszug unserer Arbeiten – überzeugen Sie sich selbst von der Qualität."
        />

        {/* Desktop: 2-col grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile: card deck */}
        <MobileCardDeck projects={projects} />

        <div className="mt-12 text-center">
          <p className="text-foreground-muted text-sm">
            Fotos werden laufend ergänzt. Gerne zeigen wir Ihnen weitere Referenzen im persönlichen Gespräch.
          </p>
        </div>
      </div>
    </section>
  );
}
