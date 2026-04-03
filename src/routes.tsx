import { sitesRoutes } from "./modules/sites/routes";
import type { PathRoute } from "./shared/types/path-routes.interface";


export const routes :PathRoute[]=[
    ...sitesRoutes
];