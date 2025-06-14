import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/login/AuthPage";
import DashboardPage from "./pages/dashboard/DashboardPage";


const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<AuthPage />} />
    <Route path='/dashboard' element={<DashboardPage />} />
  </Routes>
);

export default AppRoutes;