export default function FloorTabs({ floors, activeFloorId, onChange }) {
  return (
    <div className="floor-tabs">
      {floors.map((floor) => (
        <button
          key={floor.id}
          type="button"
          className={`floor-tab ${activeFloorId === floor.id ? 'active' : ''}`}
          onClick={() => onChange(floor.id)}
        >
          {floor.name}
        </button>
      ))}
    </div>
  );
}
