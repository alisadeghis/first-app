import { RouteObject } from "react-router-dom";
import AuthLayout from "./components";
import { LoginRoute } from "./subPages/Login/route";

export const AuthRoutes: RouteObject = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    LoginRoute,
  ]
};
