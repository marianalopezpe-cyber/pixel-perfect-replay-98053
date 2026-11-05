import { createFileRoute } from "@tanstack/react-router";
import { PawPrint } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/adopciones")({
  head: () => ({
    meta: [
      { title: "Adopciones — MASConectados" },
      { name: "description", content: "Mascotas de fundaciones y refugios con información sanitaria, requisitos y formulario de postulación." },
      { property: "og:title", content: "Adopciones — MASConectados" },
      { property: "og:description", content: "Mascotas de fundaciones y refugios con información sanitaria, requisitos y formulario de postulación." },
    ],
  }),
  component: () => (
    <ComingSoon icon={PawPrint} eyebrow="Adopciones" title="Dale un hogar a quien lo espera" description="Mascotas de fundaciones y refugios con información sanitaria, requisitos y formulario de postulación." />
  ),
});
