import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ComingSoon({ icon: Icon, eyebrow, title, description }: {
  icon: LucideIcon; eyebrow: string; title: string; description: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-20 text-center sm:px-6">
      <div className="mx-auto grid h-20 w-20 place-items-center blob bg-brand text-primary-foreground shadow-lift">
        <Icon className="h-9 w-9" />
      </div>
      <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{description}</p>
      <p className="mx-auto mt-6 inline-block rounded-full bg-peach-light px-4 py-2 text-sm font-medium">
        Este módulo estará disponible muy pronto.
      </p>
      <div className="mt-8"><Button asChild variant="outline"><Link to="/">Volver al inicio</Link></Button></div>
    </section>
  );
}
