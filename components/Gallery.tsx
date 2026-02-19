"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/types";

interface GalleryProps {
  items: GalleryItem[];
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  // Vary aspect ratios for masonry effect
  const aspects = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-[5/6]", "aspect-square"];
  const aspectClass = aspects[index % aspects.length];

  return (
    <div
      className={`relative ${aspectClass} overflow-hidden rounded-lg group cursor-pointer break-inside-avoid`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.image_url ? (
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-surface flex items-center justify-center">
          <svg className="w-12 h-12 text-foreground-muted/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
        </div>
      )}

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content overlay */}
      <div
        className={`absolute inset-x-0 bottom-0 p-5 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <h3 className="font-heading text-lg font-semibold text-white leading-tight mb-1">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>
        )}
      </div>

      {/* Subtle border */}
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5 pointer-events-none" />
    </div>
  );
}

export default function Gallery({ items }: GalleryProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <svg className="w-16 h-16 text-foreground-muted/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
        </svg>
        <p className="text-foreground-muted text-lg">Noch keine Bilder vorhanden.</p>
        <p className="text-foreground-muted/50 text-sm mt-1">Bald gibt es hier mehr zu sehen.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {items.map((item, index) => (
        <GalleryCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
