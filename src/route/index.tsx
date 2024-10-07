import { HomePage, LoginPage } from "@/pages";
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
