import { Route, RouteObject } from "react-router-dom";

const RenderRoute = ({ routes }: { routes: RouteObject[] }) => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element}>
      {route.children && RenderRoute({ routes: route.children })}
    </Route>
  ));
};

export default RenderRoute;
