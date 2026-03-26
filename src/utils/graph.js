export function buildAdjacencyList(nodes, edges) {
  const graph = Object.fromEntries(nodes.map((node) => [node.id, []]));

  edges.forEach((edge) => {
    if (!graph[edge.from]) graph[edge.from] = [];
    if (!graph[edge.to]) graph[edge.to] = [];

    graph[edge.from].push({ node: edge.to, weight: Number(edge.weight) || 1, edge });
    graph[edge.to].push({ node: edge.from, weight: Number(edge.weight) || 1, edge });
  });

  return graph;
}
