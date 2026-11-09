import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, ArrowLeft, HelpCircle, Lightbulb, MessageSquareWarning, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pqrs")({
  head: () => ({
    meta: [
      { title: "PQRS — MASConectados" },
      { name: "description", content: "Envía peticiones, quejas, reclamos, sugerencias o felicitaciones a MASConectados." },
      { property: "og:title", content: "PQRS — MASConectados" },
      { property: "og:description", content: "Canal de peticiones, quejas, reclamos y sugerencias de MASConectados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PqrsPage,
});

const TYPES = [
  { id: "Petición", icon: HelpCircle, desc: "Solicita información o un servicio." },
  { id: "Queja", icon: MessageSquareWarning, desc: "Inconformidad con la atención recibida." },
  { id: "Reclamo", icon: AlertCircle, desc: "Un servicio o producto no cumplió lo ofrecido." },
  { id: "Sugerencia", icon: Lightbulb, desc: "Ideas para mejorar la plataforma." },
  { id: "Felicitación", icon: ThumbsUp, desc: "Reconoce una buena experiencia." },
];

const field = "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary";

function PqrsPage() {
  const [type, setType] = useState("Petición");
  const [sent, setSent] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"><ArrowLeft className="h-4 w-4" /> Volver al inicio</Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">Atención al usuario</p>
      <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">PQRS</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">Peticiones, quejas, reclamos, sugerencias y felicitaciones. Cuéntanos qué pasó y te responderemos lo antes posible.</p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {TYPES.map((t) => (
          <button key={t.id} type="button" onClick={() => setType(t.id)} aria-pressed={type === t.id}
            className={`rounded-2xl border p-4 text-left transition-colors ${type === t.id ? "border-primary bg-peach-light" : "border-border bg-card hover:border-primary/50"}`}>
            <t.icon className="h-5 w-5 text-primary" />
            <p className="mt-2 text-sm font-bold">{t.id}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
          </button>
        ))}
      </div>

      {sent ? (
        <div className="mt-8 rounded-3xl bg-card p-8 shadow-soft">
          <h2 className="text-2xl font-bold">¡Gracias! Recibimos tu {sent.toLowerCase()}.</h2>
          <p className="mt-2 text-sm text-muted-foreground">Esta es una versión de ejemplo: el envío aún no se guarda. Pronto podrás hacer seguimiento con un número de radicado.</p>
          <Button className="mt-5" variant="outline" onClick={() => setSent(null)}>Enviar otra</Button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(type); }} className="mt-8 grid gap-4 rounded-3xl bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8">
          <label className="grid gap-1.5 text-sm font-medium">Nombre completo<input required className={field} /></label>
          <label className="grid gap-1.5 text-sm font-medium">Correo electrónico<input required type="email" className={field} /></label>
          <label className="grid gap-1.5 text-sm font-medium">Teléfono (opcional)<input type="tel" className={field} /></label>
          <label className="grid gap-1.5 text-sm font-medium">Tipo de solicitud
            <select value={type} onChange={(e) => setType(e.target.value)} className={field}>{TYPES.map((t) => <option key={t.id}>{t.id}</option>)}</select>
          </label>
          <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Asunto<input required className={field} /></label>
          <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Descripción<textarea required rows={5} className={field} /></label>
          <div className="flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
            <p className="text-xs text-muted-foreground">Formulario de ejemplo. Tiempo de respuesta estimado: hasta 15 días hábiles.</p>
            <Button type="submit">Enviar {type.toLowerCase()}</Button>
          </div>
        </form>
      )}
    </div>
  );
}
