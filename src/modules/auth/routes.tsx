import { AuthPage } from "./presentation/pages/page";
import { LoginPage } from "./presentation/pages/LoginPage";
import { RegisterPage } from "./presentation/pages/RegisterPage";
import { VerifyEmailPage } from "./presentation/pages/VerifyEmailPage";
import type { PathRoute } from "../../shared/types/path-routes.interface";
import { AuthLayout } from "../../ui/layouts/AuthLayout";

export const authRoutes: PathRoute[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <AuthPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
        children: [
          {
            path: "verify-email",
            element: <VerifyEmailPage />,
          },
        ],
      },
    ],
  },
];
