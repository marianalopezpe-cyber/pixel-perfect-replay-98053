import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { NAV, SERVICES_MENU } from "@/components/layout/SiteHeader";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  const modulePaths = ["/", "/servicios", "/cuidadores", "/veterinarios", "/marketplace", "/adopciones", "/mascotai"];

  it.each(modulePaths)("renders its own page directly at %s", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const match = router.matchRoutes(path).at(-1);
    expect(match?.routeId).toBe(path);
    const route = match ? router.routesById[match.routeId] : undefined;
    expect(route?.options.component).toBeDefined();
    expect(route?.options.beforeLoad).toBeUndefined();
  });

  it("keeps each module assigned to a different component", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const components = modulePaths.map((path) => {
      const match = router.matchRoutes(path).at(-1);
      return match ? router.routesById[match.routeId]?.options.component : undefined;
    });
    expect(new Set(components).size).toBe(modulePaths.length);
  });

  it("links the main menu to every requested module", () => {
    expect(NAV.map((item) => item.to)).toEqual(["/", "/servicios", "/mascotai"]);
    expect(SERVICES_MENU.map((item) => item.to)).toEqual(["/servicios", "/cuidadores", "/veterinarios", "/marketplace", "/adopciones"]);
  });

  it("has a PQRS page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/pqrs").at(-1)?.routeId).toBe("/pqrs");
  });
});
