import { createFileRoute } from "@tanstack/react-router";
import { Bone, Check, ShoppingCart, Tag } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATS, PRODUCTS, formatCOP } from "@/lib/demo-data";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Marketplace — MASConectados" },
      { name: "description", content: "Alimentos, juguetes, accesorios, camas, higiene y snacks con carrito e historial de pedidos." },
      { property: "og:title", content: "Marketplace — MASConectados" },
      { property: "og:description", content: "Alimentos, juguetes, accesorios, camas, higiene y snacks con carrito e historial de pedidos." },
    ],
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  const [cat, setCat] = useState<string | null>(null);
  const [cart, setCart] = useState<Record<string, number>>({});

  const results = useMemo(() => PRODUCTS.filter((p) => !cat || p.cat === cat), [cat]);
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [name, qty]) => {
    const p = PRODUCTS.find((x) => x.name === name);
    return sum + (p ? p.price * qty : 0);
  }, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Marketplace</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Productos para su bienestar</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Alimentos, juguetes, camas, higiene y accesorios de tiendas locales del Valle de Aburrá.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-3xl bg-card px-5 py-3 shadow-soft">
          <ShoppingCart className="h-5 w-5 text-primary" />
          <div className="text-sm">
            <p className="font-bold">{cartCount} {cartCount === 1 ? "producto" : "productos"}</p>
            <p className="text-muted-foreground">{formatCOP(cartTotal)}</p>
          </div>
        </div>
      </div>

      {/* Category chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {PRODUCT_CATS.map((c) => {
          const active = cat === c;
          return (
            <button
              key={c}
              onClick={() => setCat(active ? null : c)}
              className={`rounded-full px-4 py-2 text-sm font-medium shadow-soft transition-all hover:-translate-y-0.5 ${active ? "bg-brand text-primary-foreground" : "bg-card"}`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">{results.length} productos de ejemplo · precios en COP</p>
      <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {results.map((p) => {
          const inCart = cart[p.name] ?? 0;
          return (
            <article key={p.name} className="flex flex-col rounded-3xl bg-card p-4 shadow-soft transition-shadow hover:shadow-lift">
              <div className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl bg-peach-light">
                {p.image ? (
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <Bone className="h-12 w-12 text-accent" />
                )}
                {p.oldPrice && (
                  <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
                    <Tag className="h-3 w-3" /> Oferta
                  </span>
                )}
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.cat} · {p.brand}</p>
              <h2 className="mt-1 text-sm font-bold sm:text-base">{p.name}</h2>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="font-display font-bold text-primary">{formatCOP(p.price)}</p>
                {p.oldPrice && <p className="text-xs text-muted-foreground line-through">{formatCOP(p.oldPrice)}</p>}
              </div>
              <Button
                size="sm"
                variant={inCart ? "outline" : "hero"}
                className="mt-3"
                onClick={() => setCart((c) => ({ ...c, [p.name]: (c[p.name] ?? 0) + 1 }))}
              >
                {inCart ? <><Check /> En el carrito ({inCart})</> : <><ShoppingCart /> Agregar</>}
              </Button>
            </article>
          );
        })}
      </div>

      <p className="mt-10 rounded-3xl bg-peach-light p-5 text-center text-sm font-medium">
        Catálogo de demostración: los precios y productos son de ejemplo y las compras están deshabilitadas en esta fase.
      </p>
    </div>
  );
}
