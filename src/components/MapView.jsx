import { getFloorRoutePoints } from '../utils/pathHelpers';

const typeClassMap = {
  entrance: 'node-entrance',
  room: 'node-room',
  hall: 'node-hall',
  stairs: 'node-stairs',
  elevator: 'node-elevator',
};

export default function MapView({ floor, nodes, edges, routeByFloor, startId, endId, onSelectNode }) {
  const floorNodes = nodes.filter((node) => node.floor === floor.id);
  const floorEdges = edges.filter((edge) => {
    const from = nodes.find((node) => node.id === edge.from);
    const to = nodes.find((node) => node.id === edge.to);
    return from?.floor === floor.id && to?.floor === floor.id;
  });

  const routePoints = getFloorRoutePoints(routeByFloor, floor.id);

  return (
    <div className="map-card">
      <div className="map-header">
        <div>
          <h2>{floor.label}</h2>
          <p>{floor.description}</p>
        </div>
      </div>

      <svg viewBox={`0 0 ${floor.width} ${floor.height}`} className="map-svg" role="img">
        <rect x="0" y="0" width={floor.width} height={floor.height} rx="24" className="floor-bg" />

        {floorEdges.map((edge) => {
          const from = nodes.find((node) => node.id === edge.from);
          const to = nodes.find((node) => node.id === edge.to);
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className="edge-line"
            />
          );
        })}

        {routePoints.length > 1 && (
          <polyline
            points={routePoints.map((point) => `${point.x},${point.y}`).join(' ')}
            className="route-line"
          />
        )}

        {floorNodes.map((node) => {
          const extraClass = typeClassMap[node.type] || '';
          const isStart = node.id === startId;
          const isEnd = node.id === endId;
          return (
            <g key={node.id} onClick={() => onSelectNode(node.id)} className="node-group">
              <circle
                cx={node.x}
                cy={node.y}
                r={isStart || isEnd ? 14 : 10}
                className={`node-circle ${extraClass} ${isStart ? 'node-start' : ''} ${isEnd ? 'node-end' : ''}`}
              />
              <text x={node.x + 14} y={node.y - 14} className="node-label">
                {node.shortLabel || node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
