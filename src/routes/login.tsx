import { createFileRoute, redirect } from "@tanstack/react-router";

// Alias: /login redirige a /ingresar
export const Route = createFileRoute("/login")({
  beforeLoad: () => {
    throw redirect({ to: "/ingresar" });
  },
});
