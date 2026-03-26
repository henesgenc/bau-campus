export function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const unvisited = new Set(Object.keys(graph));

  for (const node of unvisited) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  while (unvisited.size) {
    let current = null;
    for (const node of unvisited) {
      if (current === null || distances[node] < distances[current]) {
        current = node;
      }
    }

    if (current === null || distances[current] === Infinity) break;
    if (current === end) break;

    unvisited.delete(current);

    for (const neighbor of graph[current] || []) {
      if (!unvisited.has(neighbor.node)) continue;
      const tentative = distances[current] + neighbor.weight;
      if (tentative < distances[neighbor.node]) {
        distances[neighbor.node] = tentative;
        previous[neighbor.node] = current;
      }
    }
  }

  const path = [];
  let cursor = end;
  while (cursor) {
    path.unshift(cursor);
    cursor = previous[cursor];
  }

  if (path[0] !== start) {
    return { path: [], distance: Infinity };
  }

  return { path, distance: distances[end] };
}
