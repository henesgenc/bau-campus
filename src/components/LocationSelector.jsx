function sortNodes(nodes) {
  return [...nodes]
    .filter((node) => ['room', 'entrance', 'stairs', 'elevator', 'hall'].includes(node.type))
    .sort((a, b) => a.label.localeCompare(b.label, 'tr'));
}

export default function LocationSelector({ nodes, startId, endId, onChangeStart, onChangeEnd }) {
  const options = sortNodes(nodes);

  return (
    <div className="card">
      <h2>Konum Seçimi</h2>
      <label>
        Bulunduğum yer
        <select value={startId} onChange={(e) => onChangeStart(e.target.value)}>
          {options.map((node) => (
            <option key={node.id} value={node.id}>
              {node.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Gitmek istediğim yer
        <select value={endId} onChange={(e) => onChangeEnd(e.target.value)}>
          {options.map((node) => (
            <option key={node.id} value={node.id}>
              {node.label}
            </option>
          ))}
        </select>
      </label>

      <p className="hint">
        Sonraki aşamada bu alan QR kod ile otomatik doldurulabilir.
      </p>
    </div>
  );
}
