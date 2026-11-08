import { createFileRoute, Link } from "@tanstack/react-router";
import { Bone, Heart, ShoppingBag, Stethoscope, UserRound, UserPlus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";

export const Route = createFileRoute("/registro")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Registrarse — MASConectados" },
      { name: "description", content: "Crea tu cuenta como propietario, cuidador, veterinario, vendedor o fundación." },
      { property: "og:title", content: "Registrarse — MASConectados" },
      { property: "og:description", content: "Crea tu cuenta como propietario, cuidador, veterinario, vendedor o fundación." },
    ],
  }),
  component: RegistroPage,
});

const ROLES = [
  { icon: UserRound, label: "Propietario", desc: "Busca servicios y productos para tu mascota" },
  { icon: Bone, label: "Cuidador o paseador", desc: "Ofrece paseos, cuidado y hospedaje" },
  { icon: Stethoscope, label: "Veterinario", desc: "Publica tu consultorio o clínica" },
  { icon: ShoppingBag, label: "Vendedor", desc: "Vende productos en el marketplace" },
  { icon: Heart, label: "Fundación", desc: "Publica mascotas en adopción" },
];

function RegistroPage() {
  const [role, setRole] = useState("Propietario");
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="rounded-[2rem] bg-card p-8 shadow-soft sm:p-10">
        <Logo className="h-10" />
        <h1 className="mt-6 text-3xl font-extrabold">Únete a MASConectados</h1>
        <p className="mt-2 text-sm text-muted-foreground">Crea tu cuenta en minutos y empieza a conectar.</p>

        {sent ? (
          <div className="mt-8 rounded-2xl bg-peach-light p-5 text-sm font-medium">
            ¡Gracias por tu interés! Esta es una demostración: el registro real se habilitará cuando activemos las cuentas en la siguiente fase.
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <fieldset>
              <legend className="text-sm font-medium">¿Cómo quieres usar MASConectados?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {ROLES.map(({ icon: Icon, label, desc }) => {
                  const active = role === label;
                  return (
                    <button
                      type="button"
                      key={label}
                      onClick={() => setRole(label)}
                      aria-pressed={active}
                      className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors ${active ? "border-primary bg-peach-light" : "border-border bg-background hover:border-primary/50"}`}
                    >
                      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${active ? "text-primary" : "text-muted-foreground"}`} />
                      <span>
                        <span className="block text-sm font-bold">{label}</span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">{desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Nombre completo</span>
                <input required placeholder="Tu nombre"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Correo electrónico</span>
                <input type="email" required placeholder="tucorreo@ejemplo.com"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Contraseña</span>
                <input type="password" required minLength={8} placeholder="Mínimo 8 caracteres"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Municipio</span>
                <input required placeholder="Ej. Medellín"
                  className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </label>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full"><UserPlus /> Crear mi cuenta</Button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ¿Ya tienes cuenta? <Link to="/ingresar" className="font-medium text-primary hover:underline">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
