import { MainLayout } from "../../ui/layouts/MainLayout";
import { ProductsPage } from "./presentation/pages/ProductsPage";
import type { PathRoute } from "../../shared/types/path-routes.interface";
import { PRODUCT_ROUTES } from "./paths";


export const productsRoutes: PathRoute[] = [
  {
    path: PRODUCT_ROUTES.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <ProductsPage />,
      },
    ],
  },
];
