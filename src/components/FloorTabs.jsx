export default function FloorTabs({ floors, activeFloor, onChange, routeByFloor }) {
  const highlighted = new Set(routeByFloor.map((item) => item.floor));

  return (
    <div className="floor-tabs">
      {floors.map((floor) => (
        <button
          key={floor.id}
          type="button"
          className={`floor-tab ${activeFloor === floor.id ? 'active' : ''}`}
          onClick={() => onChange(floor.id)}
        >
          {floor.label}
          {highlighted.has(floor.id) && <span className="dot" />}
        </button>
      ))}
    </div>
  );
}
