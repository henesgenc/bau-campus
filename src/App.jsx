import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import HomePage from './pages/public/HomePage.jsx';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import AdminDashboardPage from './pages/admin/AdminDashboardPage.jsx';
import FloorManagerPage from './pages/admin/FloorManagerPage.jsx';
import GraphManagerPage from './pages/admin/GraphManagerPage.jsx';
import RouteTestPage from './pages/admin/RouteTestPage.jsx';
import ProtectedRoute from './features/auth/ProtectedRoute.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/floors"
          element={
            <ProtectedRoute>
              <FloorManagerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/graph"
          element={
            <ProtectedRoute>
              <GraphManagerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/route-test"
          element={
            <ProtectedRoute>
              <RouteTestPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
