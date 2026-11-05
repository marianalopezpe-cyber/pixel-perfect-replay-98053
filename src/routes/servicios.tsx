import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — MASConectados" },
      { name: "description", content: "Veterinaria, paseos, hospedaje, guardería, peluquería y entrenamiento con filtros por precio, zona y disponibilidad." },
      { property: "og:title", content: "Servicios — MASConectados" },
      { property: "og:description", content: "Veterinaria, paseos, hospedaje, guardería, peluquería y entrenamiento con filtros por precio, zona y disponibilidad." },
    ],
  }),
  component: () => (
    <ComingSoon icon={Stethoscope} eyebrow="Servicios" title="Todos los servicios para tu mascota" description="Veterinaria, paseos, hospedaje, guardería, peluquería y entrenamiento con filtros por precio, zona y disponibilidad." />
  ),
});
