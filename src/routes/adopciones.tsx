import { createFileRoute, Link } from "@tanstack/react-router";
import { Cat, Dog, Heart, MapPin, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import puppy from "@/assets/adopt-puppy.jpg";
import { PETS } from "@/lib/demo-data";

export const Route = createFileRoute("/adopciones")({
  head: () => ({
    meta: [
      { title: "Adopciones — MASConectados" },
      { name: "description", content: "Mascotas de fundaciones y refugios con información sanitaria, requisitos y formulario de postulación." },
      { property: "og:title", content: "Adopciones — MASConectados" },
      { property: "og:description", content: "Mascotas de fundaciones y refugios con información sanitaria, requisitos y formulario de postulación." },
    ],
  }),
  component: AdopcionesPage,
});

function AdopcionesPage() {
  const [species, setSpecies] = useState<"Perro" | "Gato" | null>(null);
  const results = useMemo(() => PETS.filter((p) => !species || p.species === species || (species === "Gato" && p.species === "Gato")), [species]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Adopciones</p>
      <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Dale un hogar a quien lo espera</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Fundaciones y refugios del Valle de Aburrá publican sus peludos con información sanitaria y requisitos de adopción.
      </p>

      {/* Species filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {([["Perro", Dog], ["Gato", Cat]] as const).map(([label, Icon]) => {
          const active = species === label;
          return (
            <button
              key={label}
              onClick={() => setSpecies(active ? null : label)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft transition-all hover:-translate-y-0.5 ${active ? "bg-brand text-primary-foreground" : "bg-card"}`}
            >
              <Icon className="h-4 w-4" /> {label === "Perro" ? "Perros" : "Gatos"}
            </button>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">{results.length} mascotas de ejemplo</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <article key={p.name} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow hover:shadow-lift">
            {p.photo ? (
              <img src={puppy} alt={`${p.name}, ${p.breed} en adopción`} loading="lazy" width={816} height={816} className="aspect-[16/9] w-full object-cover" />
            ) : (
              <div className="grid aspect-[16/9] place-items-center bg-peach-light">
                <span className="grid h-16 w-16 place-items-center blob bg-brand font-display text-2xl font-extrabold text-primary-foreground">
                  {p.name[0]}
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold">{p.name}</h2>
                <span className="rounded-full bg-peach-light px-2.5 py-1 text-[11px] font-medium text-foreground/70">Ejemplo</span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{p.breed} · {p.age} · {p.sex}</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{p.zone} · {p.foundation}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.health.map((h) => (
                  <span key={h} className="flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                    <ShieldCheck className="h-3 w-3 text-primary" />{h}
                  </span>
                ))}
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <Button asChild size="sm" variant="hero" className="w-full"><Link to="/ingresar"><Heart /> Quiero postularme</Link></Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Process */}
      <div className="mt-14 rounded-[2.5rem] bg-card p-8 shadow-soft sm:p-10">
        <h2 className="text-2xl font-extrabold sm:text-3xl">¿Cómo funciona la adopción?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { n: "1", t: "Postúlate", d: "Completa el formulario de la fundación con tu información y estilo de vida." },
            { n: "2", t: "Entrevista y visita", d: "La fundación te contacta para conocerte y resolver tus dudas." },
            { n: "3", t: "Bienvenida a casa", d: "Firma el compromiso de adopción y recibe a tu nuevo compañero." },
          ].map((s) => (
            <div key={s.n} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand font-display text-lg font-extrabold text-primary-foreground">{s.n}</span>
              <div>
                <h3 className="font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
