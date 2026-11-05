import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/cuidadores", label: "Cuidadores" },
  { to: "/veterinarios", label: "Veterinarios" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/adopciones", label: "Adopciones" },
  { to: "/asistente", label: "Asistente IA" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Inicio MASConectados" className="shrink-0">
          <Logo className="h-9 sm:h-10" />
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:bg-peach-light data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <Button asChild variant="ghost" size="sm"><Link to="/ingresar">Iniciar sesión</Link></Button>
          <Button asChild variant="outline" size="sm"><Link to="/registro">Registrarse</Link></Button>
          <Button asChild size="sm"><Link to="/publicar">Publicar servicio</Link></Button>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-card shadow-soft xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 xl:hidden" aria-label="Móvil">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
              className="block rounded-xl px-3 py-3 font-medium data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2">
            <Button asChild variant="outline"><Link to="/ingresar" onClick={() => setOpen(false)}>Iniciar sesión</Link></Button>
            <Button asChild variant="outline"><Link to="/registro" onClick={() => setOpen(false)}>Registrarse</Link></Button>
            <Button asChild><Link to="/publicar" onClick={() => setOpen(false)}>Publicar servicio</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}
