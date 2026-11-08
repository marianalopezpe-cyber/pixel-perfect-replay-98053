import { describe, expect, it } from "vitest";
import { validateServiceSearch } from "@/lib/service-search";

describe("Homepage service category destinations", () => {
  it.each(["Veterinaria", "Paseadores", "Cuidadores", "Hospedaje", "Guardería", "Peluquería", "Entrenamiento"])("preserves the %s category", (category) => {
    expect(validateServiceSearch({ category }).category).toBe(category);
  });
  it("preserves the Medellín search location", () => {
    expect(validateServiceSearch({ zone: "Medellín" }).zone).toBe("Medellín");
  });
  it("rejects unknown categories", () => {
    expect(validateServiceSearch({ category: "inventada" }).category).toBeUndefined();
  });
});