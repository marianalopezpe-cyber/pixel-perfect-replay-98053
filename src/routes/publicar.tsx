import { createFileRoute } from "@tanstack/react-router";
import { Megaphone } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/publicar")({
  head: () => ({
    meta: [
      { title: "Publicar servicios — MASConectados" },
      { name: "description", content: "Publica tus servicios y llega a propietarios de mascotas en el Valle de Aburrá." },
      { property: "og:title", content: "Publicar servicios — MASConectados" },
      { property: "og:description", content: "Publica tus servicios y llega a propietarios de mascotas en el Valle de Aburrá." },
    ],
  }),
  component: () => (
    <ComingSoon icon={Megaphone} eyebrow="Publicar servicios" title="Haz crecer tu servicio" description="Publica tus servicios y llega a propietarios de mascotas en el Valle de Aburrá." />
  ),
});
