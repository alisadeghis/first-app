import { RouteObject } from "react-router-dom";
import AboutPage from "./components";

export const AboutRoute: RouteObject = {
    path: '/about',
    element: <AboutPage />,
}