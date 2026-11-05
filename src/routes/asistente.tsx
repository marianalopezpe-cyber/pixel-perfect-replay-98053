import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/asistente")({
  head: () => ({
    meta: [
      { title: "Asistente IA — MASConectados" },
      { name: "description", content: "Alimentación, comportamiento y recomendaciones de servicios. No reemplaza la consulta veterinaria." },
      { property: "og:title", content: "Asistente IA — MASConectados" },
      { property: "og:description", content: "Alimentación, comportamiento y recomendaciones de servicios. No reemplaza la consulta veterinaria." },
    ],
  }),
  component: () => (
    <ComingSoon icon={Sparkles} eyebrow="Asistente IA" title="Orientación sobre el cuidado de tu mascota" description="Alimentación, comportamiento y recomendaciones de servicios. No reemplaza la consulta veterinaria." />
  ),
});
