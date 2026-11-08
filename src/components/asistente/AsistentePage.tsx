import { Send, Sparkles, TriangleAlert } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Msg = { from: "user" | "ai"; text: string };

const SUGGESTIONS = [
  "¿Cuántas veces al día debo alimentar a mi cachorro?",
  "Mi perro ladra mucho cuando se queda solo",
  "¿Cada cuánto debo bañar a mi gato?",
  "Recomiéndame un paseador en Laureles",
];

function demoAnswer(q: string): string {
  const t = q.toLowerCase();
  if (t.includes("aliment") || t.includes("comida") || t.includes("cachorro"))
    return "Como guía general, los cachorros suelen comer 3 a 4 veces al día hasta los 6 meses y luego 2 veces al día. La cantidad depende de su peso y del alimento que uses: revisa la tabla del empaque y ajusta según su condición corporal. Si notas cambios de apetito o digestión, consulta a tu veterinario.";
  if (t.includes("ladra") || t.includes("solo") || t.includes("ansiedad"))
    return "Los ladridos cuando se queda solo pueden indicar ansiedad por separación. Algunas ideas generales: salidas cortas y progresivas, dejarle juguetes interactivos y evitar despedidas muy emotivas. Un entrenador puede ayudarte con un plan a medida; en la sección de servicios encuentras opciones de entrenamiento.";
  if (t.includes("bañ") || t.includes("gato"))
    return "Los gatos se asean solos y rara vez necesitan baño; solo si se ensuciaron con algo que no deben lamer. Cepillarlo con frecuencia ayuda a reducir bolas de pelo. Si notas caspa, caída de pelo o piel irritada, mejor agenda una consulta veterinaria.";
  if (t.includes("paseador") || t.includes("cuidador") || t.includes("recomi"))
    return "En la sección Cuidadores encuentras perfiles con tarifas, experiencia y calificaciones. Por ejemplo, en Laureles hay paseadores desde $25.000 por paseo. Recuerda verificar su experiencia y pedir referencias antes de contratar.";
  return "Puedo orientarte sobre alimentación, comportamiento, higiene y cuidados generales, y recomendarte servicios y productos de la plataforma. Ten en cuenta que no emito diagnósticos ni prescribo medicamentos: ante cualquier síntoma, consulta siempre a tu veterinario.";
}

export function AsistentePage() {
  const [messages, setMessages] = useState<Msg[]>([
    { from: "ai", text: "¡Hola! Soy el asistente de bienestar animal de MASConectados. Puedo orientarte sobre alimentación, comportamiento y cuidados generales de tu mascota. ¿En qué te ayudo hoy?" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }, { from: "ai", text: demoAnswer(q) }]);
    setInput("");
    setTimeout(() => listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" }), 50);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center blob bg-brand text-primary-foreground shadow-lift"><Sparkles className="h-7 w-7" /></span>
        <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">Tu asistente de bienestar animal</h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
          Orientación sobre alimentación, comportamiento y cuidados, más recomendaciones de servicios y productos.
        </p>
      </div>

      {/* Chat */}
      <div className="mt-10 overflow-hidden rounded-[2rem] bg-card shadow-soft">
        <div ref={listRef} className="max-h-[26rem] space-y-3 overflow-y-auto p-5 sm:p-7">
          {messages.map((m, i) => (
            <div key={i} className={m.from === "user" ? "ml-auto max-w-xs rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-sm text-primary-foreground" : "max-w-md rounded-2xl rounded-bl-sm bg-muted px-4 py-3 text-sm"}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="border-t border-border p-3">
          <div className="flex flex-wrap gap-2 px-2 pb-3">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)} className="rounded-full bg-peach-light px-3 py-1.5 text-xs font-medium transition-colors hover:bg-peach">
                {s}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 rounded-2xl bg-muted p-1.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta sobre el cuidado de tu mascota..."
              className="w-full bg-transparent px-3 py-2 text-sm outline-none"
              aria-label="Escribe tu pregunta"
            />
            <Button type="submit" variant="hero" size="icon" aria-label="Enviar"><Send /></Button>
          </form>
        </div>
      </div>

      <p className="mt-6 flex items-start gap-2 rounded-3xl bg-peach-light p-5 text-sm font-medium">
        <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        Este asistente es una demostración con respuestas de ejemplo. No emite diagnósticos ni prescribe medicamentos; ante cualquier síntoma, consulta a tu veterinario.
      </p>
    </div>
  );
}
