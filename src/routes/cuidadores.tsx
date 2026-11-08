import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, MapPin, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import caregiver from "@/assets/caregiver.jpg";
import { SITTERS, ZONES } from "@/lib/demo-data";

export const Route = createFileRoute("/cuidadores")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Cuidadores y paseadores — MASConectados" },
      { name: "description", content: "Perfiles con experiencia, tarifas en COP, disponibilidad, certificaciones y estado de verificación." },
      { property: "og:title", content: "Cuidadores y paseadores — MASConectados" },
      { property: "og:description", content: "Perfiles con experiencia, tarifas en COP, disponibilidad, certificaciones y estado de verificación." },
    ],
  }),
  component: CuidadoresPage,
});

function CuidadoresPage() {
  const [query, setQuery] = useState("");
  const [zone, setZone] = useState("Todas");

  const results = useMemo(() => SITTERS.filter((s) => {
    if (zone !== "Todas" && !s.zone.includes(zone)) return false;
    if (query && !`${s.name} ${s.services.join(" ")}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  }), [query, zone]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Cuidadores y paseadores</p>
      <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Personas de confianza para tu mascota</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Compara perfiles, experiencia, tarifas y calificaciones de cuidadores y paseadores cerca de ti.
      </p>

      {/* Filters */}
      <div className="mt-8 grid gap-2 rounded-3xl bg-card p-2 shadow-soft sm:grid-cols-[1fr_auto]">
        <label className="flex items-center gap-2 rounded-2xl px-4 py-2 hover:bg-muted">
          <Search className="h-4 w-4 shrink-0 text-primary" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre o servicio (paseos, hospedaje...)"
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
      </div>

      <p className="mt-8 text-sm text-muted-foreground">{results.length} perfiles de ejemplo</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((s) => (
          <article key={s.name} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow hover:shadow-lift">
            {s.photo ? (
              <img src={caregiver} alt={`${s.name}, cuidadora de mascotas`} loading="lazy" width={816} height={816} className="aspect-[16/9] w-full object-cover" />
            ) : (
              <div className="grid aspect-[16/9] place-items-center bg-peach-light">
                <span className="grid h-16 w-16 place-items-center blob bg-brand font-display text-2xl font-extrabold text-primary-foreground">
                  {s.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="truncate text-base font-bold">{s.name}</h2>
                <span className="rounded-full bg-peach-light px-2.5 py-1 text-[11px] font-medium text-foreground/70">Ejemplo</span>
              </div>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground"><BadgeCheck className="h-3.5 w-3.5 text-primary" />{s.experience}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {s.services.map((sv) => <span key={sv} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">{sv}</span>)}
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{s.zone}</span>
                <span className="flex items-center gap-1 font-medium"><Star className="h-3.5 w-3.5 fill-primary text-primary" />{s.rating} <span className="text-xs text-muted-foreground">({s.reviews})</span></span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <p className="font-display text-sm font-bold text-primary">{s.price}</p>
                <Button asChild size="sm" variant="outline"><Link to="/ingresar">Contactar</Link></Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {results.length === 0 && (
        <div className="mt-8 rounded-3xl bg-card p-10 text-center shadow-soft">
          <p className="font-bold">No encontramos cuidadores con esos filtros</p>
          <p className="mt-1 text-sm text-muted-foreground">Prueba con otra zona o término de búsqueda.</p>
        </div>
      )}
    </div>
  );
}
