import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";

const cols = [
  { title: "Plataforma", links: [
    { to: "/servicios", label: "Servicios" }, { to: "/cuidadores", label: "Cuidadores y paseadores" },
    { to: "/veterinarios", label: "Veterinarios" }, { to: "/marketplace", label: "Marketplace" } ] },
  { title: "Comunidad", links: [
    { to: "/adopciones", label: "Adopciones" }, { to: "/mascotai", label: "Asistente IA" },
    { to: "/publicar", label: "Publicar servicios" } ] },
  { title: "Tu cuenta", links: [
    { to: "/ingresar", label: "Iniciar sesión" }, { to: "/registro", label: "Registrarse" },
    { to: "/cuenta", label: "Mis mascotas" } ] },
  { title: "PQRS", links: [
    { to: "/pqrs", label: "Peticiones y quejas" }, { to: "/pqrs", label: "Reclamos y sugerencias" } ] },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="max-w-xs">
          <Logo className="h-10" />
          <p className="mt-4 text-sm text-muted-foreground">
            Conectamos propietarios de mascotas con profesionales, servicios y productos en Medellín y el Valle de Aburrá.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-bold">{c.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm text-muted-foreground hover:text-primary">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} MASConectados. Conectamos vidas, creamos bienestar.</span>
          <span>Medellín, Colombia</span>
        </div>
      </div>
    </footer>
  );
}
