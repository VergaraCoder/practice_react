import { AuthPage } from "./presentation/pages/page";
import { LoginPage } from "./presentation/pages/LoginPage";
import { RegisterPage } from "./presentation/pages/RegisterPage";
import { VerifyEmailPage } from "./presentation/pages/VerifyEmailPage";
import type { PathRoute } from "../../shared/types/path-routes.interface";
import { AuthLayout } from "../../ui/layouts/AuthLayout";
import { AUTH_ROUTES } from "./paths";

export const authRoutes: PathRoute[] = [
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: AUTH_ROUTES.ROOT,
        element: <AuthPage />,
        children: [
          {
            path: "verify-email",
            element: <VerifyEmailPage />,
          },
        ]
      }
    ],
  },
  {
    path: AUTH_ROUTES.LOGIN,
    element: <LoginPage />,
  },
];
