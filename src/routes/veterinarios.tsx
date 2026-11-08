import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Search, Siren, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import vet from "@/assets/vet-clinic.jpg";
import { CLINICS, ZONES } from "@/lib/demo-data";

export const Route = createFileRoute("/veterinarios")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Veterinarios y clínicas — MASConectados" },
      { name: "description", content: "Especialidades, horarios, tarifas y solicitud de citas con profesionales verificados." },
      { property: "og:title", content: "Veterinarios y clínicas — MASConectados" },
      { property: "og:description", content: "Especialidades, horarios, tarifas y solicitud de citas con profesionales verificados." },
    ],
  }),
  component: VeterinariosPage,
});

function VeterinariosPage() {
  const [query, setQuery] = useState("");
  const [zone, setZone] = useState("Todas");
  const [only24h, setOnly24h] = useState(false);

  const results = useMemo(() => CLINICS.filter((c) => {
    if (zone !== "Todas" && !c.zone.includes(zone)) return false;
    if (only24h && !c.emergency) return false;
    if (query && !`${c.name} ${c.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  }), [query, zone, only24h]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Veterinarios y clínicas</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Profesionales y clínicas cerca de ti</h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Compara especialidades, horarios y calificaciones, y solicita tu cita con clínicas del Valle de Aburrá.
          </p>
        </div>
        <img src={vet} alt="Veterinaria examinando a un perro" width={816} height={816} className="aspect-[16/10] w-full rounded-[2rem] object-cover shadow-soft" />
      </div>

      {/* Emergency banner */}
      <div className="mt-8 flex flex-col items-start gap-3 rounded-3xl bg-foreground p-6 text-background sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 font-medium"><Siren className="h-5 w-5 text-accent" /> ¿Emergencia? Hay clínicas con atención 24 horas.</p>
        <Button variant="hero" onClick={() => setOnly24h(true)}>Ver urgencias 24 h</Button>
      </div>

      {/* Filters */}
      <div className="mt-8 grid gap-2 rounded-3xl bg-card p-2 shadow-soft sm:grid-cols-[1fr_auto_auto]">
        <label className="flex items-center gap-2 rounded-2xl px-4 py-2 hover:bg-muted">
          <Search className="h-4 w-4 shrink-0 text-primary" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre o especialidad (cirugía, vacunación...)"
            className="w-full bg-transparent text-sm font-medium outline-none"
          />
        </label>
        <label className="flex items-center gap-2 rounded-2xl px-4 py-2 hover:bg-muted">
          <MapPin className="h-4 w-4 shrink-0 text-primary" />
          <select value={zone} onChange={(e) => setZone(e.target.value)} className="bg-transparent text-sm font-medium outline-none">
            <option>Todas</option>
            {ZONES.map((z) => <option key={z}>{z}</option>)}
          </select>
        </label>
        <button
          onClick={() => setOnly24h((v) => !v)}
          className={`rounded-2xl px-4 py-2 text-sm font-medium transition-colors ${only24h ? "bg-brand text-primary-foreground" : "bg-muted"}`}
        >
          Urgencias 24 h
        </button>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">{results.length} clínicas de ejemplo</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((c) => (
          <article key={c.name} className="flex flex-col rounded-3xl bg-card p-5 shadow-soft transition-shadow hover:shadow-lift">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-lg font-bold">{c.name}</h2>
              <span className="shrink-0 rounded-full bg-peach-light px-2.5 py-1 text-[11px] font-medium text-foreground/70">Ejemplo</span>
            </div>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{c.zone}</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />{c.hours}</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><Phone className="h-3.5 w-3.5" />{c.phone}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.tags.map((t) => <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">{t}</span>)}
              {c.emergency && <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-primary-foreground">24 h</span>}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="flex items-center gap-1 text-sm font-medium"><Star className="h-4 w-4 fill-primary text-primary" />{c.rating}</span>
              <Button asChild size="sm" variant="outline"><Link to="/ingresar">Solicitar cita</Link></Button>
            </div>
          </article>
        ))}
      </div>
      {results.length === 0 && (
        <div className="mt-8 rounded-3xl bg-card p-10 text-center shadow-soft">
          <p className="font-bold">No encontramos clínicas con esos filtros</p>
          <p className="mt-1 text-sm text-muted-foreground">Prueba con otra zona o especialidad.</p>
        </div>
      )}
    </div>
  );
}
