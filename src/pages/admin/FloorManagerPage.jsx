import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle.jsx';
import { sampleFloors } from '../../data/sampleGraph.js';

export default function FloorManagerPage() {
  const [form, setForm] = useState({ name: '', level: '', svgUrl: '' });

  function handleSubmit(event) {
    event.preventDefault();
    alert('Bu form Firestore bağlantısı için hazır. floorsRepository.create() ile bağlanacak.');
  }

  return (
    <div className="grid grid-2">
      <div className="panel">
        <SectionTitle title="Kat Ekle / Güncelle" description="SVG dosyası URL’si veya Storage upload çıktısı burada tutulur." />
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Kat Adı</label>
            <input className="input" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
          </div>
          <div className="field">
            <label className="label">Kat Seviyesi</label>
            <input className="input" value={form.level} onChange={(e) => setForm((p) => ({ ...p, level: e.target.value }))} />
          </div>
          <div className="field">
            <label className="label">SVG URL</label>
            <input className="input" value={form.svgUrl} onChange={(e) => setForm((p) => ({ ...p, svgUrl: e.target.value }))} />
          </div>
          <button type="submit" className="button">Kaydet</button>
        </form>
      </div>

      <div className="panel">
        <SectionTitle title="Mevcut Katlar" />
        <table className="table">
          <thead>
            <tr>
              <th>Kat</th>
              <th>Seviye</th>
            </tr>
          </thead>
          <tbody>
            {sampleFloors.map((floor) => (
              <tr key={floor.id}>
                <td>{floor.name}</td>
                <td>{floor.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
