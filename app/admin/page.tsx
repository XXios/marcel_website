"use client";

import { useState, useEffect, useCallback, useRef, type FormEvent, type DragEvent } from "react";
import type { ContactInfo, Service, Project, Testimonial } from "@/lib/types";
import { ICONS } from "@/lib/icons";

// ─── API helpers ───

function authHeaders(password: string) {
  return {
    Authorization: `Bearer ${password}`,
    "Content-Type": "application/json",
  };
}

async function apiFetch<T>(
  url: string,
  password: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...authHeaders(password),
      ...(options?.headers || {}),
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Unbekannter Fehler" }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// ─── Tabs ───

type Tab = "contact" | "services" | "projects" | "testimonials";

const TABS: { key: Tab; label: string }[] = [
  { key: "contact", label: "Kontaktdaten" },
  { key: "services", label: "Leistungen" },
  { key: "projects", label: "Projekte" },
  { key: "testimonials", label: "Kundenstimmen" },
];

// ─── Image Upload Component ───

function ImageUpload({
  password,
  folder,
  currentUrl,
  onUploaded,
}: {
  password: string;
  folder: string;
  currentUrl: string;
  onUploaded: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    setError("");
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${password}` },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Upload fehlgeschlagen" }));
        throw new Error(err.error);
      }

      const data = await res.json();
      onUploaded(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload fehlgeschlagen");
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) upload(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
  };

  return (
    <div className="space-y-2">
      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
          dragOver ? "border-amber-500 bg-amber-50" : "border-gray-300 hover:border-gray-400"
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        {uploading ? (
          <p className="text-sm text-gray-500">Wird hochgeladen...</p>
        ) : (
          <p className="text-sm text-gray-500">
            Bild hierher ziehen oder klicken zum Auswählen
          </p>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
      {error && <p className="text-red-600 text-xs">{error}</p>}
      {currentUrl && (
        <div className="mt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentUrl}
            alt="Vorschau"
            className="w-full max-w-[200px] h-auto rounded-lg border"
          />
        </div>
      )}
    </div>
  );
}

// ─── Icon Picker Component ───

function IconPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (key: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const current = ICONS.find((i) => i.key === value) || ICONS[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors w-full"
      >
        <span className="text-gray-700">{current.svg("w-5 h-5")}</span>
        <span className="text-sm text-gray-700 flex-1 text-left">{current.label}</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-2 grid grid-cols-4 gap-1">
          {ICONS.map((icon) => (
            <button
              key={icon.key}
              type="button"
              onClick={() => { onChange(icon.key); setOpen(false); }}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                icon.key === value ? "bg-amber-50 ring-2 ring-amber-500" : ""
              }`}
              title={icon.label}
            >
              <span className="text-gray-700">{icon.svg("w-5 h-5")}</span>
              <span className="text-[10px] text-gray-500 truncate w-full text-center">{icon.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Contact Form ───

function ContactTab({ password }: { password: string }) {
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadData = useCallback(async () => {
    try {
      const data = await apiFetch<ContactInfo>("/api/admin/contact", password);
      setContact(data);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => { loadData(); }, [loadData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contact) return;
    setSaving(true);
    setMessage("");
    try {
      const updated = await apiFetch<ContactInfo>("/api/admin/contact", password, {
        method: "PUT",
        body: JSON.stringify(contact),
      });
      setContact(updated);
      setMessage("Gespeichert!");
      setTimeout(() => setMessage(""), 3000);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Laden...</p>;
  if (!contact) return <p className="text-red-600">Kontaktdaten konnten nicht geladen werden.</p>;

  const field = (label: string, key: keyof ContactInfo) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={String(contact[key] || "")}
        onChange={(e) => setContact({ ...contact, [key]: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      {field("Telefon (Anzeige)", "phone")}
      {field("Telefon (Roh, für tel:-Link)", "phone_raw")}
      {field("E-Mail", "email")}
      {field("WhatsApp-Nummer (ohne +)", "whatsapp")}
      {field("Adresse", "address")}
      {field("Stadt / Region", "city")}
      {field("Öffnungszeiten", "hours")}

      {/* Vacation / no new orders toggle */}
      <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
        <button
          type="button"
          role="switch"
          aria-checked={contact.on_vacation}
          onClick={() => setContact({ ...contact, on_vacation: !contact.on_vacation })}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
            contact.on_vacation ? "bg-red-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              contact.on_vacation ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            Keine neuen Aufträge annehmen
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Wenn aktiv, wird auf der Website ein Hinweis angezeigt, dass derzeit keine neuen Aufträge angenommen werden. Besucher können Sie dennoch kontaktieren.
          </p>
          {contact.on_vacation && (
            <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              Hinweis ist aktiv
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-5 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 disabled:opacity-50 transition-colors"
        >
          {saving ? "Speichern..." : "Speichern"}
        </button>
        {message && (
          <span className={`text-sm ${message.startsWith("Fehler") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </span>
        )}
      </div>
    </form>
  );
}

// ─── Services Manager ───

function ServicesTab({ password }: { password: string }) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Service | null>(null);
  const [message, setMessage] = useState("");

  const loadData = useCallback(async () => {
    try {
      const data = await apiFetch<Service[]>("/api/admin/services", password);
      setServices(data);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => { loadData(); }, [loadData]);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    setMessage("");
    try {
      if (editing.id) {
        await apiFetch("/api/admin/services", password, {
          method: "PUT",
          body: JSON.stringify(editing),
        });
      } else {
        await apiFetch("/api/admin/services", password, {
          method: "POST",
          body: JSON.stringify(editing),
        });
      }
      setEditing(null);
      await loadData();
      setMessage("Gespeichert!");
      setTimeout(() => setMessage(""), 3000);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Wirklich löschen?")) return;
    try {
      await apiFetch("/api/admin/services", password, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      await loadData();
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    }
  };

  const newService = (): Service => ({
    id: "",
    title: "",
    description: "",
    icon_name: "paint-roller",
    image_url: "",
    sort_order: services.length,
    created_at: "",
  });

  if (loading) return <p className="text-gray-500">Laden...</p>;

  if (editing) {
    return (
      <form onSubmit={handleSave} className="space-y-4 max-w-lg">
        <h3 className="font-semibold text-gray-900">
          {editing.id ? "Leistung bearbeiten" : "Neue Leistung"}
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
          <input
            type="text"
            required
            value={editing.title}
            onChange={(e) => setEditing({ ...editing, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
          <textarea
            required
            rows={3}
            value={editing.description}
            onChange={(e) => setEditing({ ...editing, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
          <IconPicker
            value={editing.icon_name}
            onChange={(key) => setEditing({ ...editing, icon_name: key })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bild</label>
          <ImageUpload
            password={password}
            folder="services"
            currentUrl={editing.image_url}
            onUploaded={(url) => setEditing({ ...editing, image_url: url })}
          />
          <input
            type="text"
            value={editing.image_url}
            onChange={(e) => setEditing({ ...editing, image_url: e.target.value })}
            placeholder="Oder Bild-URL manuell eingeben"
            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sortierung</label>
          <input
            type="number"
            value={editing.sort_order}
            onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            Speichern
          </button>
          <button
            type="button"
            onClick={() => setEditing(null)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            Abbrechen
          </button>
        </div>
        {message && (
          <p className={`text-sm ${message.startsWith("Fehler") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{services.length} Leistungen</h3>
        <button
          onClick={() => setEditing(newService())}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          + Neue Leistung
        </button>
      </div>
      {message && (
        <p className={`text-sm ${message.startsWith("Fehler") ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}
      <div className="space-y-2">
        {services.map((s) => (
          <div key={s.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            {s.image_url && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={s.image_url} alt={s.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{s.title}</p>
              <p className="text-sm text-gray-500 truncate">{s.description}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => setEditing(s)}
                className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Bearbeiten
              </button>
              <button
                onClick={() => handleDelete(s.id)}
                className="px-3 py-1.5 text-xs bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
              >
                Löschen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Projects Manager ───

function ProjectsTab({ password }: { password: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Project | null>(null);
  const [tagsInput, setTagsInput] = useState("");
  const [message, setMessage] = useState("");

  const loadData = useCallback(async () => {
    try {
      const data = await apiFetch<Project[]>("/api/admin/projects", password);
      setProjects(data);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => { loadData(); }, [loadData]);

  const startEditing = (p: Project | null) => {
    if (p) {
      setEditing(p);
      setTagsInput((p.tags || []).join(", "));
    } else {
      const newProject: Project = {
        id: "",
        title: "",
        location: "",
        description: "",
        tags: [],
        image_url: "",
        sort_order: projects.length,
        created_at: "",
      };
      setEditing(newProject);
      setTagsInput("");
    }
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    setMessage("");
    const payload = {
      ...editing,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
    };
    try {
      if (editing.id) {
        await apiFetch("/api/admin/projects", password, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch("/api/admin/projects", password, {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }
      setEditing(null);
      await loadData();
      setMessage("Gespeichert!");
      setTimeout(() => setMessage(""), 3000);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Wirklich löschen?")) return;
    try {
      await apiFetch("/api/admin/projects", password, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      await loadData();
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    }
  };

  if (loading) return <p className="text-gray-500">Laden...</p>;

  if (editing) {
    return (
      <form onSubmit={handleSave} className="space-y-4 max-w-lg">
        <h3 className="font-semibold text-gray-900">
          {editing.id ? "Projekt bearbeiten" : "Neues Projekt"}
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
          <input
            type="text"
            required
            value={editing.title}
            onChange={(e) => setEditing({ ...editing, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Standort</label>
          <input
            type="text"
            value={editing.location}
            onChange={(e) => setEditing({ ...editing, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
          <textarea
            rows={3}
            value={editing.description}
            onChange={(e) => setEditing({ ...editing, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags (kommagetrennt)</label>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="z.B. Innenanstrich, Farbberatung"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bild</label>
          <ImageUpload
            password={password}
            folder="projects"
            currentUrl={editing.image_url}
            onUploaded={(url) => setEditing({ ...editing, image_url: url })}
          />
          <input
            type="text"
            value={editing.image_url}
            onChange={(e) => setEditing({ ...editing, image_url: e.target.value })}
            placeholder="Oder Bild-URL manuell eingeben"
            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sortierung</label>
          <input
            type="number"
            value={editing.sort_order}
            onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            Speichern
          </button>
          <button
            type="button"
            onClick={() => setEditing(null)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            Abbrechen
          </button>
        </div>
        {message && (
          <p className={`text-sm ${message.startsWith("Fehler") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{projects.length} Projekte</h3>
        <button
          onClick={() => startEditing(null)}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          + Neues Projekt
        </button>
      </div>
      {message && (
        <p className={`text-sm ${message.startsWith("Fehler") ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}
      <div className="space-y-2">
        {projects.map((p) => (
          <div key={p.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            {p.image_url && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={p.image_url} alt={p.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{p.title}</p>
              <p className="text-sm text-gray-500">{p.location}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => startEditing(p)}
                className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Bearbeiten
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="px-3 py-1.5 text-xs bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
              >
                Löschen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Testimonials Manager ───

function TestimonialsTab({ password }: { password: string }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [message, setMessage] = useState("");

  const loadData = useCallback(async () => {
    try {
      const data = await apiFetch<Testimonial[]>("/api/admin/testimonials", password);
      setTestimonials(data);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => { loadData(); }, [loadData]);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    setMessage("");
    try {
      if (editing.id) {
        await apiFetch("/api/admin/testimonials", password, {
          method: "PUT",
          body: JSON.stringify(editing),
        });
      } else {
        await apiFetch("/api/admin/testimonials", password, {
          method: "POST",
          body: JSON.stringify(editing),
        });
      }
      setEditing(null);
      await loadData();
      setMessage("Gespeichert!");
      setTimeout(() => setMessage(""), 3000);
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Wirklich löschen?")) return;
    try {
      await apiFetch("/api/admin/testimonials", password, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      await loadData();
    } catch (e) {
      setMessage(`Fehler: ${e instanceof Error ? e.message : "Unbekannt"}`);
    }
  };

  const newTestimonial = (): Testimonial => ({
    id: "",
    quote: "",
    name: "",
    location: "",
    rating: 5,
    sort_order: testimonials.length,
    created_at: "",
  });

  if (loading) return <p className="text-gray-500">Laden...</p>;

  if (editing) {
    return (
      <form onSubmit={handleSave} className="space-y-4 max-w-lg">
        <h3 className="font-semibold text-gray-900">
          {editing.id ? "Kundenstimme bearbeiten" : "Neue Kundenstimme"}
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zitat</label>
          <textarea
            required
            rows={4}
            value={editing.quote}
            onChange={(e) => setEditing({ ...editing, quote: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              value={editing.name}
              onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ort</label>
            <input
              type="text"
              value={editing.location}
              onChange={(e) => setEditing({ ...editing, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bewertung</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setEditing({ ...editing, rating: star })}
                className="p-1"
              >
                <svg
                  className={`w-6 h-6 ${star <= editing.rating ? "text-amber-500" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sortierung</label>
          <input
            type="number"
            value={editing.sort_order}
            onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            Speichern
          </button>
          <button
            type="button"
            onClick={() => setEditing(null)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            Abbrechen
          </button>
        </div>
        {message && (
          <p className={`text-sm ${message.startsWith("Fehler") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{testimonials.length} Kundenstimmen</h3>
        <button
          onClick={() => setEditing(newTestimonial())}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          + Neue Kundenstimme
        </button>
      </div>
      {message && (
        <p className={`text-sm ${message.startsWith("Fehler") ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}
      <div className="space-y-2">
        {testimonials.map((t) => (
          <div key={t.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? "text-amber-500" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic line-clamp-2">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs text-gray-500 mt-1">{t.name} – {t.location}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => setEditing(t)}
                  className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Bearbeiten
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="px-3 py-1.5 text-xs bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                >
                  Löschen
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Password Gate ───

function PasswordGate({ onAuth }: { onAuth: (password: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        onAuth(password);
      } else {
        setError("Falsches Passwort");
      }
    } catch {
      setError("Verbindungsfehler");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">Admin-Bereich</h1>
              <p className="text-xs text-gray-500">Malerbetrieb Vogel</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1">
                Passwort
              </label>
              <input
                type="password"
                id="admin-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                placeholder="Admin-Passwort eingeben"
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 disabled:opacity-50 transition-colors"
            >
              {loading ? "Prüfe..." : "Anmelden"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Page ───

export default function AdminPage() {
  const [password, setPassword] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("contact");

  // Check for stored session
  useEffect(() => {
    const stored = sessionStorage.getItem("admin_password");
    if (stored) setPassword(stored);
  }, []);

  const handleAuth = (pw: string) => {
    setPassword(pw);
    sessionStorage.setItem("admin_password", pw);
  };

  const handleLogout = () => {
    setPassword(null);
    sessionStorage.removeItem("admin_password");
  };

  if (!password) {
    return <PasswordGate onAuth={handleAuth} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-sm text-gray-900">Admin</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Zur Website
            </a>
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      </header>

      {/* Tab navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex gap-1 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? "border-amber-600 text-amber-700"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === "contact" && <ContactTab password={password} />}
        {activeTab === "services" && <ServicesTab password={password} />}
        {activeTab === "projects" && <ProjectsTab password={password} />}
        {activeTab === "testimonials" && <TestimonialsTab password={password} />}
      </div>
    </div>
  );
}
