import { MainLayout } from "../../ui/layouts/MainLayout";
import { ProductsPage } from "./presentation/pages/ProductsPage";
import type { PathRoute } from "../../shared/types/path-routes.interface";

export const productsRoutes: PathRoute[] = [
  {
    path: "/products",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <ProductsPage />,
      },
    ],
  },
];
