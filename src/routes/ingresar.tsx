import { createFileRoute, Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";

export const Route = createFileRoute("/ingresar")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Iniciar sesión — MASConectados" },
      { name: "description", content: "Accede a tu cuenta para gestionar tus mascotas, citas y servicios." },
      { property: "og:title", content: "Iniciar sesión — MASConectados" },
      { property: "og:description", content: "Accede a tu cuenta para gestionar tus mascotas, citas y servicios." },
    ],
  }),
  component: IngresarPage,
});

function IngresarPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-md place-items-center px-4 py-16 sm:px-6">
      <div className="w-full rounded-[2rem] bg-card p-8 shadow-soft sm:p-10">
        <Logo className="h-10" />
        <h1 className="mt-6 text-3xl font-extrabold">Bienvenido de nuevo</h1>
        <p className="mt-2 text-sm text-muted-foreground">Ingresa para gestionar tus mascotas, citas y servicios.</p>

        {sent ? (
          <div className="mt-8 rounded-2xl bg-peach-light p-5 text-sm font-medium">
            Esta es una demostración: el acceso con correo y contraseña se habilitará cuando activemos las cuentas en la siguiente fase.
          </div>
        ) : (
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <label className="block">
              <span className="text-sm font-medium">Correo electrónico</span>
              <input type="email" required placeholder="tucorreo@ejemplo.com"
                className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Contraseña</span>
              <input type="password" required placeholder="••••••••"
                className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </label>
            <Button type="submit" variant="hero" className="w-full" size="lg"><LogIn /> Ingresar</Button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ¿No tienes cuenta? <Link to="/registro" className="font-medium text-primary hover:underline">Regístrate gratis</Link>
        </p>
      </div>
    </div>
  );
}
