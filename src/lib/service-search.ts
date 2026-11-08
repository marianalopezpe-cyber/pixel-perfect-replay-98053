import { CATEGORIES, ZONES } from "@/lib/demo-data";

export function validateServiceSearch(search: Record<string, unknown>): { category?: string | undefined; zone?: string | undefined } {
  const category = search["category"];
  const zone = search["zone"];
  return {
    category: typeof category === "string" && CATEGORIES.includes(category) ? category : undefined,
    zone: typeof zone === "string" && ZONES.includes(zone) ? zone : undefined,
  };
}