export default function RouteInstructions({ instructions, distance }) {
  return (
    <div className="panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h3 style={{ margin: 0 }}>Yol Tarifi</h3>
        <span className="badge">Toplam Ağırlık: {Number.isFinite(distance) ? distance : '-'}</span>
      </div>
      {instructions.length ? (
        <ol className="instructions">
          {instructions.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ol>
      ) : (
        <div className="muted">Başlangıç ve hedef seçip rota oluşturun.</div>
      )}
    </div>
  );
}
