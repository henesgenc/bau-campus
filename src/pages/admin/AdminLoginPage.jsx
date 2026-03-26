import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth.js';

export default function AdminLoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(form.email, form.password);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Giriş yapılamadı.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="panel" style={{ maxWidth: 420, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>Yönetim Paneli Girişi</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">E-posta</label>
          <input
            className="input"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </div>
        <div className="field">
          <label className="label">Şifre</label>
          <input
            className="input"
            type="password"
            value={form.password}
            onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
            required
          />
        </div>
        {error ? <div className="error" style={{ marginBottom: 12 }}>{error}</div> : null}
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
        </button>
      </form>
    </div>
  );
}
