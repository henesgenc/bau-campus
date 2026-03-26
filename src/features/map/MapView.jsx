const FLOOR_SHAPES = {
  zemin: (
    <>
      <rect x="30" y="210" width="350" height="60" rx="12" fill="#eef4ff" stroke="#d0d5dd" />
      <rect x="120" y="90" width="100" height="60" rx="12" fill="#f9fafb" stroke="#d0d5dd" />
      <rect x="270" y="120" width="100" height="120" rx="12" fill="#fef3f2" stroke="#d0d5dd" />
    </>
  ),
  kat1: (
    <>
      <rect x="270" y="150" width="390" height="60" rx="12" fill="#eef4ff" stroke="#d0d5dd" />
      <rect x="570" y="70" width="90" height="80" rx="12" fill="#f9fafb" stroke="#d0d5dd" />
      <rect x="570" y="210" width="90" height="80" rx="12" fill="#f9fafb" stroke="#d0d5dd" />
    </>
  ),
  kat2: (
    <>
      <rect x="270" y="150" width="390" height="60" rx="12" fill="#eef4ff" stroke="#d0d5dd" />
      <rect x="570" y="70" width="90" height="80" rx="12" fill="#f9fafb" stroke="#d0d5dd" />
      <rect x="570" y="210" width="90" height="80" rx="12" fill="#f9fafb" stroke="#d0d5dd" />
    </>
  ),
};

export default function MapView({ floorId, nodes, pathNodeIds = [] }) {
  const floorNodes = nodes.filter((node) => node.floorId === floorId);
  const pathPoints = pathNodeIds
    .map((id) => floorNodes.find((node) => node.id === id))
    .filter(Boolean)
    .map((node) => `${node.x},${node.y}`)
    .join(' ');

  return (
    <div className="svg-wrapper">
      <svg viewBox="0 0 760 360" width="100%" height="460" role="img" aria-label="Kat planı">
        <rect width="760" height="360" fill="#ffffff" />
        {FLOOR_SHAPES[floorId]}
        {pathPoints ? (
          <polyline
            points={pathPoints}
            fill="none"
            stroke="#155eef"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}
        {floorNodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="10" fill={pathNodeIds.includes(node.id) ? '#12b76a' : '#344054'} />
            <text x={node.x + 14} y={node.y + 4} fontSize="12" fill="#101828">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
