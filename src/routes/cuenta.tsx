import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/cuenta")({
  head: () => ({
    meta: [
      { title: "Mi cuenta — MASConectados" },
      { name: "description", content: "Registra varias mascotas con vacunas, alergias, historial veterinario y calendario de citas." },
      { property: "og:title", content: "Mi cuenta — MASConectados" },
      { property: "og:description", content: "Registra varias mascotas con vacunas, alergias, historial veterinario y calendario de citas." },
    ],
  }),
  component: () => (
    <ComingSoon icon={UserRound} eyebrow="Mi cuenta" title="Tus mascotas, citas y recordatorios" description="Registra varias mascotas con vacunas, alergias, historial veterinario y calendario de citas." />
  ),
});
