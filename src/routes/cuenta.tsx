import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, CalendarDays, Cat, Dog, Plus, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/cuenta")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Mi cuenta — MASConectados" },
      { name: "description", content: "Registra varias mascotas con vacunas, alergias, historial veterinario y calendario de citas." },
      { property: "og:title", content: "Mi cuenta — MASConectados" },
      { property: "og:description", content: "Registra varias mascotas con vacunas, alergias, historial veterinario y calendario de citas." },
    ],
  }),
  component: CuentaPage,
});

const MY_PETS = [
  { name: "Luna", species: "Perro", breed: "Golden retriever", age: "3 años", icon: Dog, notes: ["Vacuna rabia: mar 2027", "Alergia al pollo"] },
  { name: "Simón", species: "Gato", breed: "Criollo", age: "2 años", icon: Cat, notes: ["Desparasitación: dic 2026", "Sin alergias conocidas"] },
];

const APPOINTMENTS = [
  { title: "Control general — Luna", where: "Clínica Patitas, Belén", when: "Sábado 14 de noviembre, 10:30 a.m." },
  { title: "Baño y corte — Simón", where: "Spa Canino La 10", when: "Miércoles 18 de noviembre, 3:00 p.m." },
];

const REMINDERS = [
  "Comprar alimento de Luna (quedan 4 días aprox.)",
  "Vacuna anual de Simón vence en 6 semanas",
];

function CuentaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Mi cuenta</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Tus mascotas, citas y recordatorios</h1>
        </div>
        <span className="rounded-full bg-peach-light px-3 py-1.5 text-xs font-medium text-foreground/70">Vista de ejemplo</span>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Pets */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">Mis mascotas</h2>
            <Button asChild size="sm" variant="outline"><Link to="/registro"><Plus /> Agregar</Link></Button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {MY_PETS.map((p) => (
              <article key={p.name} className="rounded-3xl bg-card p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-peach-light text-primary"><p.icon className="h-6 w-6" /></span>
                  <div>
                    <h3 className="font-bold">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.breed} · {p.age}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.notes.map((n) => (
                    <li key={n} className="flex items-center gap-2 text-sm text-muted-foreground"><Syringe className="h-3.5 w-3.5 text-primary" />{n}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Appointments + reminders */}
        <div className="space-y-6">
          <section className="rounded-3xl bg-card p-5 shadow-soft">
            <h2 className="flex items-center gap-2 text-lg font-bold"><CalendarDays className="h-5 w-5 text-primary" /> Próximas citas</h2>
            <ul className="mt-4 space-y-3">
              {APPOINTMENTS.map((a) => (
                <li key={a.title} className="rounded-2xl border border-border p-4">
                  <p className="text-sm font-bold">{a.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{a.where}</p>
                  <p className="mt-1 text-xs font-medium text-primary">{a.when}</p>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl bg-card p-5 shadow-soft">
            <h2 className="flex items-center gap-2 text-lg font-bold"><Bell className="h-5 w-5 text-primary" /> Recordatorios</h2>
            <ul className="mt-4 space-y-2">
              {REMINDERS.map((r) => (
                <li key={r} className="rounded-2xl bg-peach-light px-4 py-3 text-sm font-medium">{r}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <p className="mt-10 rounded-3xl bg-peach-light p-5 text-center text-sm font-medium">
        Esta es una vista de demostración. Cuando activemos las cuentas podrás registrar tus mascotas y sincronizar tus citas reales.
      </p>
    </div>
  );
}
