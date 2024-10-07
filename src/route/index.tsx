import { DefaultLayout } from "@/layouts";
import { HomePage, LoginPage, ProfilePage } from "@/pages";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <DefaultLayout>
              <Routes>
                <Route path="/" element={<Navigate to='dashboard' />} />
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </DefaultLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
