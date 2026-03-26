import { Link } from 'react-router-dom';
import KpiCard from '../../components/KpiCard.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';

export default function AdminDashboardPage() {
  return (
    <div className="grid">
      <div className="hero">
        <span className="badge">Admin</span>
        <h1 style={{ margin: '12px 0 8px' }}>Yönetim Paneli</h1>
        <p className="muted" style={{ margin: 0 }}>
          Kat planlarını, node-edge ağını, odaları ve rota testlerini bu panel üzerinden yönetmek için temel iskelet hazırlandı.
        </p>
      </div>

      <div className="panel">
        <SectionTitle title="Genel Özet" />
        <div className="kpis">
          <KpiCard label="Bina" value="1" />
          <KpiCard label="Kat" value="3" />
          <KpiCard label="Node" value="12" />
          <KpiCard label="Edge" value="11" />
        </div>
      </div>

      <div className="panel">
        <SectionTitle title="Hızlı İşlemler" />
        <div className="button-row">
          <Link className="button" to="/admin/floors">Kat Yönetimi</Link>
          <Link className="button secondary" to="/admin/graph">Node / Edge Yönetimi</Link>
          <Link className="button ghost" to="/admin/route-test">Rota Testi</Link>
        </div>
      </div>
    </div>
  );
}
