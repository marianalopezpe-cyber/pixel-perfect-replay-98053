import { createFileRoute, redirect } from "@tanstack/react-router";

// Alias: /mascotai redirige a /asistente
export const Route = createFileRoute("/mascotai")({
  beforeLoad: () => {
    throw redirect({ to: "/asistente" });
  },
});
