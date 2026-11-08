import { createFileRoute } from "@tanstack/react-router";
import { AsistentePage } from "@/components/asistente/AsistentePage";

export const Route = createFileRoute("/mascotai")({
  head: () => ({
    meta: [
      { title: "Asistente IA — MASConectados" },
      { name: "description", content: "Orientación de ejemplo sobre alimentación, comportamiento y cuidados de mascotas. No diagnostica ni prescribe." },
      { property: "og:title", content: "Asistente IA — MASConectados" },
      { property: "og:description", content: "Orientación de ejemplo para el bienestar de tu mascota. No reemplaza la consulta veterinaria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AsistentePage,
});
