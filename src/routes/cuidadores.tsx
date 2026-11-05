import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/cuidadores")({
  head: () => ({
    meta: [
      { title: "Cuidadores y paseadores — MASConectados" },
      { name: "description", content: "Perfiles con experiencia, tarifas en COP, disponibilidad, certificaciones y estado de verificación." },
      { property: "og:title", content: "Cuidadores y paseadores — MASConectados" },
      { property: "og:description", content: "Perfiles con experiencia, tarifas en COP, disponibilidad, certificaciones y estado de verificación." },
    ],
  }),
  component: () => (
    <ComingSoon icon={HeartHandshake} eyebrow="Cuidadores y paseadores" title="Personas de confianza para tu mascota" description="Perfiles con experiencia, tarifas en COP, disponibilidad, certificaciones y estado de verificación." />
  ),
});
