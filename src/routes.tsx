import { authRoutes } from "./modules/auth/routes";
import { sitesRoutes } from "./modules/sites/routes";
import { productsRoutes } from "./modules/products/routes";
import type { PathRoute } from "./shared/types/path-routes.interface";

export const routes: PathRoute[] = [
  ...authRoutes,
  ...sitesRoutes,
  ...productsRoutes,
];
