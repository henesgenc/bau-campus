import { useMemo, useState } from 'react';
import SectionTitle from '../../components/SectionTitle.jsx';
import FloorTabs from '../../features/map/FloorTabs.jsx';
import MapView from '../../features/map/MapView.jsx';
import LocationSelector from '../../features/navigation/LocationSelector.jsx';
import RouteInstructions from '../../features/navigation/RouteInstructions.jsx';
import { sampleEdges, sampleFloors, sampleNodes } from '../../data/sampleGraph.js';
import { buildAdjacencyList } from '../../utils/graph.js';
import { dijkstra } from '../../utils/dijkstra.js';
import { pathToInstructions } from '../../utils/pathToInstructions.js';

export default function RouteTestPage() {
  const [activeFloorId, setActiveFloorId] = useState(sampleFloors[0].id);
  const [startId, setStartId] = useState('');
  const [endId, setEndId] = useState('');
  const [route, setRoute] = useState({ path: [], distance: Infinity });

  const graph = useMemo(() => buildAdjacencyList(sampleNodes, sampleEdges), []);
  const nodesById = useMemo(() => Object.fromEntries(sampleNodes.map((n) => [n.id, n])), []);
  const instructions = useMemo(() => pathToInstructions(route.path, nodesById), [route.path, nodesById]);
  const visiblePath = route.path.filter((nodeId) => nodesById[nodeId]?.floorId === activeFloorId);

  function handleCreateRoute() {
    if (!startId || !endId) return;
    const result = dijkstra(graph, startId, endId);
    setRoute(result);
  }

  return (
    <div className="grid grid-2">
      <div className="grid">
        <LocationSelector
          nodes={sampleNodes}
          startId={startId}
          endId={endId}
          onStartChange={setStartId}
          onEndChange={setEndId}
          onRoute={handleCreateRoute}
        />
        <RouteInstructions instructions={instructions} distance={route.distance} />
      </div>
      <div className="panel">
        <SectionTitle title="Rota Testi" description="Firestore’dan gelen gerçek node-edge verileri burada test edilecek." />
        <div className="map-shell">
          <FloorTabs floors={sampleFloors} activeFloorId={activeFloorId} onChange={setActiveFloorId} />
          <MapView floorId={activeFloorId} nodes={sampleNodes} pathNodeIds={visiblePath} />
        </div>
      </div>
    </div>
  );
}
