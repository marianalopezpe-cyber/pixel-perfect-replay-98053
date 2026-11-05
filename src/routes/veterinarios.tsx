import { createFileRoute } from "@tanstack/react-router";
import { Hospital } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/veterinarios")({
  head: () => ({
    meta: [
      { title: "Veterinarios y clínicas — MASConectados" },
      { name: "description", content: "Especialidades, horarios, tarifas y solicitud de citas con profesionales verificados." },
      { property: "og:title", content: "Veterinarios y clínicas — MASConectados" },
      { property: "og:description", content: "Especialidades, horarios, tarifas y solicitud de citas con profesionales verificados." },
    ],
  }),
  component: () => (
    <ComingSoon icon={Hospital} eyebrow="Veterinarios y clínicas" title="Profesionales y clínicas cerca de ti" description="Especialidades, horarios, tarifas y solicitud de citas con profesionales verificados." />
  ),
});
