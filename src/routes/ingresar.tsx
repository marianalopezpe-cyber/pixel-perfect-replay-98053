import { createFileRoute } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/ingresar")({
  head: () => ({
    meta: [
      { title: "Iniciar sesión — MASConectados" },
      { name: "description", content: "El acceso a tu cuenta llegará en la siguiente fase de la plataforma." },
      { property: "og:title", content: "Iniciar sesión — MASConectados" },
      { property: "og:description", content: "El acceso a tu cuenta llegará en la siguiente fase de la plataforma." },
    ],
  }),
  component: () => (
    <ComingSoon icon={LogIn} eyebrow="Iniciar sesión" title="Bienvenido de nuevo" description="El acceso a tu cuenta llegará en la siguiente fase de la plataforma." />
  ),
});
