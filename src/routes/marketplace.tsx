import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — MASConectados" },
      { name: "description", content: "Alimentos, juguetes, accesorios, camas, higiene y snacks con carrito e historial de pedidos." },
      { property: "og:title", content: "Marketplace — MASConectados" },
      { property: "og:description", content: "Alimentos, juguetes, accesorios, camas, higiene y snacks con carrito e historial de pedidos." },
    ],
  }),
  component: () => (
    <ComingSoon icon={ShoppingBag} eyebrow="Marketplace" title="Productos para su bienestar" description="Alimentos, juguetes, accesorios, camas, higiene y snacks con carrito e historial de pedidos." />
  ),
});
