import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bone, Dog, GraduationCap, Home, MapPin, Scissors, Search, Star, Stethoscope, Sun } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, SERVICES, ZONES } from "@/lib/demo-data";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — MASConectados" },
      { name: "description", content: "Veterinaria, paseos, hospedaje, guardería, peluquería y entrenamiento con filtros por precio, zona y disponibilidad." },
      { property: "og:title", content: "Servicios — MASConectados" },
      { property: "og:description", content: "Veterinaria, paseos, hospedaje, guardería, peluquería y entrenamiento con filtros por precio, zona y disponibilidad." },
    ],
  }),
  component: ServiciosPage,
});

const CAT_ICONS: Record<string, typeof Stethoscope> = {
  Veterinaria: Stethoscope, Paseadores: Dog, Cuidadores: Bone, Hospedaje: Home,
  Guardería: Sun, Peluquería: Scissors, Entrenamiento: GraduationCap,
};

function ServiciosPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [zone, setZone] = useState("Todas");

  const results = useMemo(() => SERVICES.filter((s) => {
    if (cat && s.category !== cat) return false;
    if (zone !== "Todas" && s.zone !== zone) return false;
    if (query && !`${s.name} ${s.provider}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  }), [query, cat, zone]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Servicios</p>
      <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Todos los servicios para tu mascota</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Explora veterinaria, paseos, hospedaje, guardería, peluquería y entrenamiento en el Valle de Aburrá.
      </p>

      {/* Filters */}
      <div className="mt-8 grid gap-2 rounded-3xl bg-card p-2 shadow-soft sm:grid-cols-[1fr_auto_auto]">
        <label className="flex items-center gap-2 rounded-2xl px-4 py-2 hover:bg-muted">
          <Search className="h-4 w-4 shrink-0 text-primary" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por servicio o proveedor"
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
        <Button variant="hero" onClick={() => { setQuery(""); setCat(null); setZone("Todas"); }}>Limpiar filtros</Button>
      </div>

      {/* Category chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const Icon = CAT_ICONS[c] ?? Bone;
          const active = cat === c;
          return (
            <button
              key={c}
              onClick={() => setCat(active ? null : c)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft transition-all hover:-translate-y-0.5 ${active ? "bg-brand text-primary-foreground" : "bg-card"}`}
            >
              <Icon className="h-4 w-4" /> {c}
            </button>
          );
        })}
      </div>

      {/* Results */}
      <p className="mt-8 text-sm text-muted-foreground">{results.length} servicios de ejemplo</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((s) => {
          const Icon = CAT_ICONS[s.category] ?? Bone;
          return (
            <article key={s.name} className="flex flex-col rounded-3xl bg-card p-5 shadow-soft transition-shadow hover:shadow-lift">
              <div className="flex items-start justify-between gap-2">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-peach-light text-primary"><Icon className="h-5 w-5" /></span>
                <span className="rounded-full bg-peach-light px-2.5 py-1 text-[11px] font-medium text-foreground/70">Ejemplo</span>
              </div>
              <h2 className="mt-4 text-lg font-bold">{s.name}</h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{s.provider}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{s.zone}</span>
                <span className="flex items-center gap-1 font-medium"><Star className="h-3.5 w-3.5 fill-primary text-primary" />{s.rating}</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <p className="font-display font-bold text-primary">{s.price}</p>
                <Button asChild size="sm" variant="outline"><Link to="/ingresar">Reservar</Link></Button>
              </div>
            </article>
          );
        })}
      </div>
      {results.length === 0 && (
        <div className="mt-8 rounded-3xl bg-card p-10 text-center shadow-soft">
          <p className="font-bold">No encontramos servicios con esos filtros</p>
          <p className="mt-1 text-sm text-muted-foreground">Prueba con otra categoría o zona.</p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-[2.5rem] bg-foreground p-8 text-background sm:flex-row sm:p-10">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">¿Ofreces servicios para mascotas?</h2>
          <p className="mt-2 text-background/75">Publica tu servicio y llega a miles de propietarios en el Valle de Aburrá.</p>
        </div>
        <Button asChild variant="hero" size="lg"><Link to="/publicar">Publicar mi servicio <ArrowRight /></Link></Button>
      </div>
    </div>
  );
}
