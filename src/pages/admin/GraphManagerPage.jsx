import SectionTitle from '../../components/SectionTitle.jsx';
import { sampleEdges, sampleNodes } from '../../data/sampleGraph.js';

export default function GraphManagerPage() {
  return (
    <div className="grid">
      <div className="panel">
        <SectionTitle title="Node Yönetimi" description="Gerçek sürümde SVG üstünde node sürükleme / ekleme yapılabilir." />
        <table className="table">
          <thead>
            <tr>
              <th>Etiket</th>
              <th>Tip</th>
              <th>Kat</th>
              <th>Koordinat</th>
            </tr>
          </thead>
          <tbody>
            {sampleNodes.map((node) => (
              <tr key={node.id}>
                <td>{node.label}</td>
                <td>{node.type}</td>
                <td>{node.floorId}</td>
                <td>{node.x}, {node.y}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel">
        <SectionTitle title="Edge Yönetimi" description="Bağlantılar arası ağırlık, erişilebilirlik ve bağlantı tipi burada tutulur." />
        <table className="table">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Ağırlık</th>
              <th>Erişilebilir</th>
            </tr>
          </thead>
          <tbody>
            {sampleEdges.map((edge) => (
              <tr key={edge.id}>
                <td>{edge.from}</td>
                <td>{edge.to}</td>
                <td>{edge.weight}</td>
                <td>{edge.accessible ? 'Evet' : 'Hayır'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
