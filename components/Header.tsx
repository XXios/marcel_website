"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import type { ContactInfo } from "@/lib/types";

const sectionLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#portfolio" },
  { label: "\u00dcber mich", href: "#ueber-mich" },
  { label: "Kundenstimmen", href: "#kundenstimmen" },
  { label: "Kontakt", href: "#kontakt" },
];

const pageLinks = [
  { label: "Galerie", href: "/galerie" },
  { label: "Objekte", href: "/objekte" },
];

const allNavLinks = [...sectionLinks, ...pageLinks];

function resolveHref(href: string, pathname: string): string {
  // Anchor links: on homepage use as-is, on other pages prefix with /
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

interface HeaderProps {
  contact: ContactInfo;
}

export default function Header({ contact }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
              <Image
                src="/images/logo.png"
                alt="Vogel Maler & Gestalter Logo"
                width={56}
                height={56}
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm sm:text-lg tracking-tight text-foreground">
                  Vogel
                </span>
                <span className="text-[10px] sm:text-xs text-foreground-muted tracking-widest uppercase">
                  Maler & Gestalter
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 ml-6">
              {sectionLinks.map((link) => (
                <a
                  key={link.label}
                  href={resolveHref(link.href, pathname)}
                  className="text-sm font-medium whitespace-nowrap transition-colors hover:text-accent text-foreground-muted"
                >
                  {link.label}
                </a>
              ))}

              {/* Spacer to push page links right */}
              <span className="w-px h-5 bg-border mx-1" />

              {pageLinks.map((link) => (
                <a
                  key={link.label}
                  href={resolveHref(link.href, pathname)}
                  className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-accent ${
                    (link.href === "/galerie" && pathname === "/galerie") ||
                    (link.href === "/objekte" && pathname.startsWith("/objekte"))
                      ? "text-accent"
                      : "text-accent/70"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Phone + CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-4 ml-6">
              <a
                href={`tel:${contact.phone_raw}`}
                className="flex items-center gap-2 text-sm font-medium transition-colors text-foreground-muted hover:text-foreground"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{contact.phone}</span>
              </a>
              <a
                href={pathname === "/" ? "#kontakt" : "/#kontakt"}
                className="bg-accent text-primary-dark px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap hover:bg-accent-hover transition-all shadow-sm hover:shadow-md"
              >
                Projekt anfragen
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-surface transition-colors"
              aria-label="Menü öffnen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/98 backdrop-blur-md transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Content */}
        <div
          className={`relative h-full flex flex-col transition-all duration-300 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-20 flex-shrink-0">
            <a href="/" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/logo.png"
                alt="Vogel Maler & Gestalter Logo"
                width={56}
                height={56}
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm sm:text-lg tracking-tight text-foreground">
                  Vogel
                </span>
                <span className="text-[10px] sm:text-xs text-foreground-muted tracking-widest uppercase">
                  Maler & Gestalter
                </span>
              </div>
            </a>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Menü schließen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
            {allNavLinks.map((link, i) => (
              <a
                key={link.label}
                href={resolveHref(link.href, pathname)}
                onClick={closeMenu}
                className={`text-2xl sm:text-3xl font-heading font-semibold py-3 transition-colors ${
                  (link.href === "/galerie" && pathname === "/galerie") ||
                  (link.href === "/objekte" && pathname.startsWith("/objekte"))
                    ? "text-accent"
                    : "text-foreground-muted hover:text-accent"
                }`}
                style={{ transitionDelay: `${(i + 1) * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom: phone + CTA */}
          <div className="flex-shrink-0 px-6 pb-10 space-y-4">
            <a
              href={`tel:${contact.phone_raw}`}
              className="flex items-center justify-center gap-2 text-foreground-muted hover:text-foreground font-medium transition-colors py-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {contact.phone}
            </a>
            <a
              href={pathname === "/" ? "#kontakt" : "/#kontakt"}
              onClick={closeMenu}
              className="block w-full text-center bg-accent text-primary-dark px-6 py-4 rounded-xl text-lg font-semibold hover:bg-accent-hover transition-all shadow-lg"
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
