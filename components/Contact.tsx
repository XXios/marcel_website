"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import type { ContactInfo } from "@/lib/types";

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(200,165,92,0.4) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kontakt"
          subtitle="Beschreiben Sie kurz Ihr Projekt – ich melde mich zeitnah bei Ihnen."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-10 text-center border border-border">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">Vielen Dank!</h3>
                <p className="text-foreground-muted">
                  Ihre Nachricht wurde gesendet. Ich melde mich in Kürze bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground-muted mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground-muted mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-muted mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-muted mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground-muted/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Projekt (Raum, Fläche, gewünschte Arbeiten...)"
                  />
                </div>
                <Button type="submit" size="lg" className={`w-full sm:w-auto ${contact.on_vacation ? "!bg-red-600 hover:!bg-red-700 !shadow-red-600/20" : ""}`}>
                  Projekt anfragen
                </Button>
                {contact.on_vacation && (
                  <div className="flex items-start gap-3 mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      Aufgrund hoher Auftragslage nehme ich derzeit leider keine neuen Projekte an.
                      Sie können mich dennoch gerne kontaktieren – ich prüfe gemeinsam mit Ihnen, wann ich mich
                      Ihrem Vorhaben widmen kann.
                    </p>
                  </div>
                )}
                <p className="text-foreground-muted/40 text-xs mt-2">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                <a href={`tel:${contact.phone_raw}`} className="text-foreground-muted hover:text-accent transition-colors">
                  {contact.phone}
                </a>
                <p className="text-foreground-muted/50 text-sm mt-1">{contact.hours}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                <a href={`mailto:${contact.email}`} className="text-foreground-muted hover:text-accent transition-colors">
                  {contact.email}
                </a>
                <p className="text-foreground-muted/50 text-sm mt-1">Antwort innerhalb von 24 Stunden</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Standort</h4>
                <p className="text-foreground-muted">{contact.address}</p>
                <p className="text-foreground-muted">{contact.city}</p>
              </div>
            </div>

            {/* Service area note */}
            <div className="p-5 bg-background/50 rounded-xl border border-border">
              <p className="text-foreground-muted/60 text-sm leading-relaxed">
                Einsatzgebiet: gesamter Landkreis Bamberg und Umgebung. Für eine
                kostenlose Erstberatung vor Ort kontaktieren Sie mich einfach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
