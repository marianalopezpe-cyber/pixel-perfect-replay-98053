import { createFileRoute, redirect } from "@tanstack/react-router";

// Preserve the existing assistant URL while using /mascotai as its canonical page.
export const Route = createFileRoute("/asistente")({
  beforeLoad: () => {
    throw redirect({ to: "/mascotai" });
  },
});
