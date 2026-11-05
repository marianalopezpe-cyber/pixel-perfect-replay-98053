import { createFileRoute } from "@tanstack/react-router";
import { UserPlus } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/registro")({
  head: () => ({
    meta: [
      { title: "Registrarse — MASConectados" },
      { name: "description", content: "Crea tu cuenta como propietario, cuidador, veterinario, vendedor o fundación." },
      { property: "og:title", content: "Registrarse — MASConectados" },
      { property: "og:description", content: "Crea tu cuenta como propietario, cuidador, veterinario, vendedor o fundación." },
    ],
  }),
  component: () => (
    <ComingSoon icon={UserPlus} eyebrow="Registrarse" title="Únete a MASConectados" description="Crea tu cuenta como propietario, cuidador, veterinario, vendedor o fundación." />
  ),
});
