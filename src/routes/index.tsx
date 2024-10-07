import {
  Route,
  RouteObject,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RenderRoute from "./RenderRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthProvider } from "../providers/AuthProviders";
import { AuthRoutes } from "../pages/Auth/route";

const AppRoutes = ({ routes }: { routes: RouteObject[] }) => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<div>Error</div>} />
          {RenderRoute({ routes: [AuthRoutes] })}
          <Route element={<ProtectedRoute />}>{RenderRoute({ routes })}</Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
