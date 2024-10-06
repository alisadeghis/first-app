import {
  Route,
  RouteObject,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RenderRoute from "./RenderRoute";

const AppRoutes = ({ routes }: { routes: RouteObject[] }) => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>Error</div>} />
        {RenderRoute({ routes })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
