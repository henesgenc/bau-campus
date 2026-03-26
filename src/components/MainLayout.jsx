import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/useAuth.js';

export default function MainLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="layout">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">Okul İçi Navigasyon</Link>
          <nav className="nav">
            <Link to="/">Harita</Link>
            <Link to="/admin">Yönetim</Link>
            {user ? (
              <button type="button" className="button ghost" onClick={logout}>Çıkış</button>
            ) : (
              <Link to="/admin/login" className="button secondary">Admin Giriş</Link>
            )}
          </nav>
        </div>
      </header>
      <main className="page">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
