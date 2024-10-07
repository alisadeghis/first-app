import { DefaultLayout } from "@/layouts";
import { AuthLayout } from "@/layouts/Auth";
import { HomePage, LoginPage, ProfilePage } from "@/pages";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <DefaultLayout>
              <Routes>
                <Route path="/" element={<Navigate to="dashboard" />} />
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </DefaultLayout>
          }
        />
        <Route
          path="/auth/*"
          element={
            <AuthLayout>
              <Routes>
                <Route path="/auth" element={<Navigate to="login" />} />
                <Route path="login" element={<LoginPage />} />
              </Routes>
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
