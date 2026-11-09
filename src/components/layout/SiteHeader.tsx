import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/mascotai", label: "Asistente IA" },
] as const;

// Modules grouped under the "Servicios" menu.
export const SERVICES_MENU = [
  { to: "/servicios", label: "Todos los servicios" },
  { to: "/cuidadores", label: "Cuidadores" },
  { to: "/veterinarios", label: "Veterinarios" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/adopciones", label: "Adopciones" },
] as const;

const linkCls =
  "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:bg-peach-light data-[status=active]:text-primary";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobileSvc, setMobileSvc] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svcOpen) return;
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setSvcOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSvcOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [svcOpen]);

  const closeAll = () => { setOpen(false); setMobileSvc(false); };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Inicio MASConectados" className="shrink-0">
          <Logo className="h-9 sm:h-10" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          <Link to="/" activeOptions={{ exact: true }} className={linkCls}>Inicio</Link>
          <div ref={ref} className="relative">
            <button
              type="button"
              onClick={() => setSvcOpen((o) => !o)}
              aria-expanded={svcOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              Servicios <ChevronDown className={`h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            {svcOpen && (
              <div role="menu" className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-border bg-card p-2 shadow-lift">
                {SERVICES_MENU.map((s) => (
                  <Link key={s.to} to={s.to} role="menuitem" onClick={() => setSvcOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-peach-light hover:text-primary data-[status=active]:text-primary">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/mascotai" className={linkCls}>Asistente IA</Link>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm"><Link to="/ingresar">Ingresar</Link></Button>
          <Button asChild variant="outline" size="sm"><Link to="/registro">Registrarse</Link></Button>
          <Button asChild size="sm"><Link to="/publicar">Publicar</Link></Button>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-card shadow-soft lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden" aria-label="Móvil">
          <Link to="/" onClick={closeAll} activeOptions={{ exact: true }} className="block rounded-xl px-3 py-3 font-medium data-[status=active]:text-primary">Inicio</Link>
          <button type="button" onClick={() => setMobileSvc((o) => !o)} aria-expanded={mobileSvc}
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-medium">
            Servicios <ChevronDown className={`h-4 w-4 transition-transform ${mobileSvc ? "rotate-180" : ""}`} />
          </button>
          {mobileSvc && (
            <div className="ml-3 border-l border-border pl-3">
              {SERVICES_MENU.map((s) => (
                <Link key={s.to} to={s.to} onClick={closeAll} className="block rounded-xl px-3 py-2.5 text-sm font-medium data-[status=active]:text-primary">{s.label}</Link>
              ))}
            </div>
          )}
          <Link to="/mascotai" onClick={closeAll} className="block rounded-xl px-3 py-3 font-medium data-[status=active]:text-primary">Asistente IA</Link>
          <div className="mt-3 grid gap-2">
            <Button asChild variant="outline"><Link to="/ingresar" onClick={closeAll}>Iniciar sesión</Link></Button>
            <Button asChild variant="outline"><Link to="/registro" onClick={closeAll}>Registrarse</Link></Button>
            <Button asChild><Link to="/publicar" onClick={closeAll}>Publicar servicio</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}
