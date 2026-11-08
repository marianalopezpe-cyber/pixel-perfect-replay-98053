import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

export function ServiceCarousel({ categories }: { categories: { icon: LucideIcon; label: string }[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [position, setPosition] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  useEffect(() => {
    if (!api) return;
    const update = () => { setPosition(api.selectedScrollSnap()); setSnaps(api.scrollSnapList()); };
    update();
    api.on("select", update);
    api.on("reInit", update);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => api.reInit({ duration: media.matches ? 0 : 25 });
    motion();
    media.addEventListener("change", motion);
    return () => { api.off("select", update); api.off("reInit", update); media.removeEventListener("change", motion); };
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ align: "start", slidesToScroll: 1 }} aria-label="Categorías de servicios" className="mt-8">
      <CarouselContent className="-ml-3 py-2">
        {categories.map(({ icon: Icon, label }) => (
          <CarouselItem key={label} className="basis-[46%] pl-3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
            <Link to="/servicios" search={{ category: label }} className="group flex h-36 flex-col items-center justify-center gap-3 rounded-3xl bg-card px-3 text-center shadow-soft transition-colors hover:bg-peach-light focus-visible:outline-2 focus-visible:outline-ring">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-peach-light text-primary"><Icon className="h-6 w-6" /></span>
              <span className="text-sm font-medium">{label}</span>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-5 flex items-center justify-center gap-4">
        <CarouselPrevious aria-label="Categoría anterior" title="Categoría anterior" className="static h-10 w-10 translate-y-0" />
        <div className="flex items-center gap-1" aria-label="Posición del carrusel">
          {snaps.map((_, index) => <Button key={index} variant="ghost" size="icon" aria-label={`Ir a la posición ${index + 1}`} aria-current={position === index ? "true" : undefined} onClick={() => api?.scrollTo(index)} className="h-8 w-8"><span className={`h-2 rounded-full transition-all ${position === index ? "w-5 bg-primary" : "w-2 bg-muted-foreground/30"}`} /></Button>)}
        </div>
        <CarouselNext aria-label="Categoría siguiente" title="Categoría siguiente" className="static h-10 w-10 translate-y-0" />
      </div>
    </Carousel>
  );
}