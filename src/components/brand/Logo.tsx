import horizontal from "@/assets/logo-horizontal.png.asset.json";
import icon from "@/assets/logo-icon.png.asset.json";
import { cn } from "@/lib/utils";

type Props = { variant?: "horizontal" | "isotipo"; className?: string };

/** Official MASConectados logo — uses the approved artwork, never redrawn. */
export function Logo({ variant = "horizontal", className }: Props) {
  if (variant === "isotipo") {
    return <img src={icon.url} alt="MASConectados" className={cn("h-10 w-auto", className)} />;
  }
  return (
    <img
      src={horizontal.url}
      alt="MASConectados — Conectamos vidas, creamos bienestar"
      className={cn("h-11 w-auto mix-blend-multiply", className)}
    />
  );
}
