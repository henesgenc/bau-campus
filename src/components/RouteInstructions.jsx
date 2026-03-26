export default function RouteInstructions({ instructions }) {
  return (
    <div className="card">
      <h2>Yol Tarifi</h2>
      <ol className="instruction-list">
        {instructions.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
