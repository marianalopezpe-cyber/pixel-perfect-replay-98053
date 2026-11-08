import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight, Bone, Dog, GraduationCap, Home, MapPin, Scissors,
  Search, Sparkles, Star, Stethoscope, Sun, Quote,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-pets.jpg";
import caregiver from "@/assets/caregiver.jpg";
import vet from "@/assets/vet-clinic.jpg";
import puppy from "@/assets/adopt-puppy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "MASConectados — Todo lo que tu mascota necesita" },
      { name: "description", content: "Encuentra veterinarios, cuidadores, paseadores, productos y adopciones en Medellín y el Valle de Aburrá." },
      { property: "og:title", content: "MASConectados — Todo lo que tu mascota necesita" },
      { property: "og:description", content: "Profesionales, servicios y productos para el cuidado de tu mascota en Medellín." },
    ],
  }),
  component: Index,
});

const ZONES = ["Medellín", "Envigado", "Sabaneta", "Itagüí", "Bello", "La Estrella", "Caldas", "Copacabana", "Girardota", "Barbosa"];
const CATEGORIES = [
  { icon: Stethoscope, label: "Veterinaria" },
  { icon: Dog, label: "Paseadores" },
  { icon: Bone, label: "Cuidadores" },
  { icon: Home, label: "Hospedaje" },
  { icon: Sun, label: "Guardería" },
  { icon: Scissors, label: "Peluquería" },
  { icon: GraduationCap, label: "Entrenamiento" },
];

const SITTERS = [
  { name: "Valentina R.", zone: "Laureles", service: "Paseos y cuidado en casa", price: "Desde $25.000", rating: 4.9 },
  { name: "Andrés M.", zone: "Envigado", service: "Hospedaje en hogar", price: "Desde $60.000 / noche", rating: 4.8 },
  { name: "Camila T.", zone: "El Poblado", service: "Guardería diurna", price: "Desde $40.000 / día", rating: 5.0 },
  { name: "Santiago G.", zone: "Bello", service: "Cuidado nocturno", price: "Desde $35.000", rating: 4.7 },
];
const CLINICS = [
  { name: "Clínica Patitas", zone: "Belén", tags: ["Medicina general", "Vacunación"], hours: "Lun–Sáb 8:00–19:00" },
  { name: "Centro Veterinario Aburrá", zone: "Sabaneta", tags: ["Cirugía", "Urgencias 24h"], hours: "Todos los días, 24 h" },
];
const PRODUCTS = [
  { name: "Alimento natural adulto 3 kg", cat: "Alimentos", price: "$89.900" },
  { name: "Cama ortopédica mediana", cat: "Camas", price: "$149.000" },
  { name: "Kit de juguetes interactivos", cat: "Juguetes", price: "$45.500" },
  { name: "Snacks dentales x 20", cat: "Snacks", price: "$28.900" },
];
const TESTIMONIALS = [
  { text: "Encontré una paseadora a dos cuadras de mi casa. Luna llega feliz y cansada todos los días.", who: "Mariana, Laureles" },
  { text: "Pude comparar clínicas y horarios en un solo lugar. Me ahorró muchísimo tiempo.", who: "Julián, Envigado" },
  { text: "Adoptamos a Toby gracias a una fundación que conocimos aquí. Cambió nuestra familia.", who: "Paula, Bello" },
];

function DemoBadge() {
  return <span className="rounded-full bg-peach-light px-2.5 py-1 text-[11px] font-medium text-foreground/70">Ejemplo</span>;
}

function SectionHead({ eyebrow, title, to, cta }: { eyebrow: string; title: string; to: "/cuidadores" | "/veterinarios" | "/marketplace" | "/adopciones" | "/servicios"; cta: string }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      </div>
      <Link to={to} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function Index() {
  const navigate = useNavigate();
  const [zone, setZone] = useState("Medellín");
  const [cat, setCat] = useState("Veterinaria");

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 blob bg-peach-light" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft">
              <MapPin className="h-4 w-4 text-primary" /> Medellín y Valle de Aburrá
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Todo lo que tu mascota necesita, <span className="text-brand">en un solo lugar</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Encuentra profesionales, servicios y productos para darle a tu mascota el cuidado que merece.
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); navigate({ to: "/servicios" }); }}
              className="mt-8 grid gap-2 rounded-3xl bg-card p-2 shadow-lift sm:grid-cols-[1fr_1fr_auto]"
              aria-label="Buscar servicios"
            >
              <label className="flex items-center gap-2 rounded-2xl px-4 py-2 hover:bg-muted">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-[11px] font-medium text-muted-foreground">Ubicación</span>
                  <select value={zone} onChange={(e) => setZone(e.target.value)} className="bg-transparent text-sm font-medium outline-none">
                    {ZONES.map((z) => <option key={z}>{z}</option>)}
                  </select>
                </span>
              </label>
              <label className="flex items-center gap-2 rounded-2xl px-4 py-2 hover:bg-muted">
                <Search className="h-4 w-4 shrink-0 text-primary" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-[11px] font-medium text-muted-foreground">Categoría</span>
                  <select value={cat} onChange={(e) => setCat(e.target.value)} className="bg-transparent text-sm font-medium outline-none">
                    {CATEGORIES.map((c) => <option key={c.label}>{c.label}</option>)}
                  </select>
                </span>
              </label>
              <Button type="submit" variant="hero" size="lg" className="h-full min-h-12">
                <Search /> Buscar
              </Button>
            </form>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden className="absolute inset-4 -rotate-6 blob bg-brand" />
            <img src={hero} alt="Perro golden retriever y gato atigrado juntos en un sofá" width={1280} height={1024}
              className="relative aspect-[5/4] w-full blob object-cover shadow-lift" />
            <div className="absolute -bottom-4 left-0 flex items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-lift sm:-left-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-peach-light text-primary"><Stethoscope className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-bold">7 categorías de servicio</p>
                <p className="text-xs text-muted-foreground">Veterinaria, paseos, hospedaje y más</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHead eyebrow="Servicios" title="¿Qué necesita tu mascota hoy?" to="/servicios" cta="Ver todos los servicios" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map(({ icon: Icon, label }) => (
            <Link key={label} to="/servicios"
              className="group flex flex-col items-center gap-3 rounded-3xl bg-card p-5 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-peach-light text-primary transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Sitters */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHead eyebrow="Cuidadores" title="Cuidadores destacados" to="/cuidadores" cta="Explorar cuidadores" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SITTERS.map((s, i) => (
            <article key={s.name} className="overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow hover:shadow-lift">
              {i === 0 ? (
                <img src={caregiver} alt="Paseadora con dos perros" loading="lazy" width={816} height={816} className="aspect-[16/9] w-full object-cover" />
              ) : (
                <div className="grid aspect-[16/9] place-items-center bg-peach-light">
                  <span className="grid h-16 w-16 place-items-center blob bg-brand font-display text-2xl font-extrabold text-primary-foreground">
                    {s.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate text-base font-bold">{s.name}</h3>
                  <DemoBadge />
                </div>
                <p className="mt-0.5 truncate text-sm text-muted-foreground">{s.service}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{s.zone}</span>
                  <span className="flex items-center gap-1 font-medium"><Star className="h-3.5 w-3.5 fill-primary text-primary" />{s.rating}</span>
                </div>
                <p className="mt-2 font-display text-sm font-bold text-primary">{s.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Clinics */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <img src={vet} alt="Veterinaria examinando a un perro" loading="lazy" width={816} height={816}
            className="aspect-square w-full rounded-[2rem] object-cover" />
          <div>
            <SectionHead eyebrow="Veterinarios" title="Clínicas veterinarias cerca de ti" to="/veterinarios" cta="Ver directorio" />
            <div className="mt-8 space-y-4">
              {CLINICS.map((c) => (
                <div key={c.name} className="rounded-2xl border border-border p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold">{c.name}</h3><DemoBadge />
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{c.zone} · {c.hours}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHead eyebrow="Marketplace" title="Productos populares" to="/marketplace" cta="Ir a la tienda" />
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="rounded-3xl bg-card p-4 shadow-soft">
              <div className="grid aspect-square place-items-center rounded-2xl bg-peach-light">
                <Bone className="h-12 w-12 text-accent" />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.cat}</p>
              <h3 className="mt-1 text-sm font-bold sm:text-base">{p.name}</h3>
              <p className="mt-2 font-display font-bold text-primary">{p.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Adoption + AI */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-card shadow-soft">
          <img src={puppy} alt="Cachorro mestizo en adopción" loading="lazy" width={816} height={816} className="aspect-[16/10] w-full object-cover" />
          <div className="p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Adopciones</p>
            <h2 className="mt-2 text-3xl font-extrabold">Mascotas que buscan un hogar</h2>
            <p className="mt-3 text-muted-foreground">Fundaciones y refugios del Valle de Aburrá publican sus peludos con información sanitaria y requisitos.</p>
            <Button asChild className="mt-6"><Link to="/adopciones">Conocer mascotas <ArrowRight /></Link></Button>
          </div>
        </div>
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background sm:p-10">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 blob bg-brand opacity-90" />
          <div className="relative">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-background/10"><Sparkles className="h-6 w-6 text-accent" /></span>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">Tu asistente de bienestar animal</h2>
            <p className="mt-4 max-w-md text-background/75">
              Orientación sobre alimentación, comportamiento y cuidados, más recomendaciones de servicios y productos.
            </p>
          </div>
          <div className="relative mt-8 space-y-3">
            <div className="ml-auto max-w-xs rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-sm text-primary-foreground">¿Cuántas veces al día debo alimentar a mi cachorro?</div>
            <div className="max-w-sm rounded-2xl rounded-bl-sm bg-background/10 px-4 py-3 text-sm">Depende de su edad y tamaño. Te doy una guía general y, si notas algo inusual, consulta a tu veterinario.</div>
            <p className="pt-2 text-xs text-background/60">No emite diagnósticos ni prescribe medicamentos.</p>
            <Button asChild variant="hero" className="mt-2"><Link to="/mascotai">Probar el asistente <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">Comunidad</p>
        <h2 className="mt-2 text-center text-3xl font-extrabold sm:text-4xl">Historias que nos inspiran</h2>
        <p className="mt-2 text-center text-xs text-muted-foreground">Testimonios ilustrativos</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.who} className="rounded-3xl bg-card p-7 shadow-soft">
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-4 text-foreground/85">{t.text}</blockquote>
              <figcaption className="mt-5 text-sm font-bold">{t.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
