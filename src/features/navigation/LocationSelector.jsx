export default function LocationSelector({ nodes, startId, endId, onStartChange, onEndChange, onRoute }) {
  return (
    <div className="panel">
      <div className="field">
        <label className="label">Bulunduğum Yer</label>
        <select className="select" value={startId} onChange={(event) => onStartChange(event.target.value)}>
          <option value="">Seçiniz</option>
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>{node.label}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="label">Gitmek İstediğim Yer</label>
        <select className="select" value={endId} onChange={(event) => onEndChange(event.target.value)}>
          <option value="">Seçiniz</option>
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>{node.label}</option>
          ))}
        </select>
      </div>
      <button type="button" className="button" onClick={onRoute}>Rota Oluştur</button>
    </div>
  );
}
