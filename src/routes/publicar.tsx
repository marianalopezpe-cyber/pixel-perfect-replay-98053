import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Megaphone, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, ZONES } from "@/lib/demo-data";

export const Route = createFileRoute("/publicar")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Publicar servicios — MASConectados" },
      { name: "description", content: "Publica tus servicios y llega a propietarios de mascotas en el Valle de Aburrá." },
      { property: "og:title", content: "Publicar servicios — MASConectados" },
      { property: "og:description", content: "Publica tus servicios y llega a propietarios de mascotas en el Valle de Aburrá." },
    ],
  }),
  component: PublicarPage,
});

const BENEFITS = [
  { icon: Users, title: "Miles de propietarios", desc: "Tu servicio visible para familias con mascotas en todo el Valle de Aburrá." },
  { icon: BadgeCheck, title: "Perfil verificado", desc: "Destaca con insignia de verificación y acumula reseñas de clientes." },
  { icon: TrendingUp, title: "Crece a tu ritmo", desc: "Gestiona tu disponibilidad, tarifas y reservas desde un solo lugar." },
];

function PublicarPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Publicar servicios</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Haz crecer tu servicio con MASConectados</h1>
          <p className="mt-3 max-w-lg text-lg text-muted-foreground">
            Si eres cuidador, paseador, veterinario, peluquero o entrenador, publica tu servicio y conecta con propietarios cerca de ti.
          </p>
          <div className="mt-8 space-y-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-light text-primary"><b.icon className="h-5 w-5" /></span>
                <div>
                  <h2 className="font-bold">{b.title}</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-card p-8 shadow-soft">
          <h2 className="flex items-center gap-2 text-xl font-extrabold"><Megaphone className="h-5 w-5 text-primary" /> Cuéntanos sobre tu servicio</h2>
          {sent ? (
            <div className="mt-6 rounded-2xl bg-peach-light p-5 text-sm font-medium">
              ¡Recibimos tu solicitud de ejemplo! La publicación real de servicios se habilitará cuando activemos las cuentas en la siguiente fase.
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label className="block">
                <span className="text-sm font-medium">Nombre del servicio o negocio</span>
                <input required placeholder="Ej. Paseos con Valentina"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium">Categoría</span>
                  <select className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Municipio</span>
                  <select className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                    {ZONES.map((z) => <option key={z}>{z}</option>)}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium">Tarifa desde (COP)</span>
                <input required inputMode="numeric" placeholder="Ej. 25000"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Descripción</span>
                <textarea required rows={4} placeholder="Describe tu experiencia, qué incluye el servicio y tu disponibilidad..."
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
              <Button type="submit" variant="hero" size="lg" className="w-full">Enviar solicitud</Button>
            </form>
          )}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            ¿Ya tienes cuenta? <Link to="/ingresar" className="font-medium text-primary hover:underline">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
