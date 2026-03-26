const items = [
  { label: 'Giriş', className: 'node-entrance' },
  { label: 'Sınıf / Ofis', className: 'node-room' },
  { label: 'Koridor / Hol', className: 'node-hall' },
  { label: 'Merdiven', className: 'node-stairs' },
  { label: 'Asansör', className: 'node-elevator' },
];

export default function Legend() {
  return (
    <div className="card compact">
      <h2>Lejant</h2>
      <div className="legend-list">
        {items.map((item) => (
          <div key={item.label} className="legend-item">
            <span className={`legend-dot ${item.className}`} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
