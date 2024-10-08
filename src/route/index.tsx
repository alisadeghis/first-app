import { DefaultLayout } from "@/layouts";
import { AuthLayout } from "@/layouts/Auth";
import { HomePage, LoginPage, ProfilePage } from "@/pages";
import { AuthProvider } from "@/provider/AuthProvider";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <DefaultLayout>
                  <Routes>
                    <Route path="/" element={<Navigate to="dashboard" />} />
                    <Route path="/dashboard" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Routes>
                </DefaultLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/auth/*"
            element={
              <AuthLayout>
                <Routes>
                  <Route path="/" element={<Navigate to="login" />} />
                  <Route path="login" element={<LoginPage />} />
                </Routes>
              </AuthLayout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
