import { CATEGORIES, ZONES } from "@/lib/demo-data";

export function validateServiceSearch(search: Record<string, unknown>): { category?: string; zone?: string } {
  return {
    category: typeof search.category === "string" && CATEGORIES.includes(search.category) ? search.category : undefined,
    zone: typeof search.zone === "string" && ZONES.includes(search.zone) ? search.zone : undefined,
  };
}