"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import SectionHeading from "./ui/SectionHeading";
import type { Testimonial } from "@/lib/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-accent" : "text-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef(false);
  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!pauseRef.current) {
        setActive((prev) => (prev + 1) % count);
      }
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [count]);

  const pauseAutoplay = useCallback(() => {
    pauseRef.current = true;
    setTimeout(() => {
      pauseRef.current = false;
    }, 4000);
  }, []);

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
    }, 4000);
  };

  return (
    <section id="kundenstimmen" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kundenstimmen"
          subtitle="Was Kunden über die Zusammenarbeit sagen."
        />

        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Left arrow */}
          <button
            onClick={() => { prev(); pauseAutoplay(); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-14 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/30 transition-all"
            aria-label="Vorherige Bewertung"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => { next(); pauseAutoplay(); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-14 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/30 transition-all"
            aria-label="Nächste Bewertung"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Cards viewport */}
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-surface rounded-2xl p-8 sm:p-10 border border-border">
                    {/* Quote mark */}
                    <div className="text-accent/15 mb-4">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <StarRating rating={t.rating} />

                    {/* Quote */}
                    <blockquote className="text-foreground/80 leading-relaxed mt-4 mb-6 text-base sm:text-lg font-heading italic">
                      „{t.quote}“
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-foreground-muted text-xs">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); pauseAutoplay(); }}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2 bg-accent"
                    : "w-2 h-2 bg-border hover:bg-foreground-muted"
                }`}
                aria-label={`Bewertung ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google review hint */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-surface rounded-full px-6 py-3 border border-border">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-foreground-muted font-medium">
              [Platzhalter für Google-Bewertungen Link]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
