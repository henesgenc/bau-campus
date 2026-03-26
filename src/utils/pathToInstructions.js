export function pathToInstructions(path, nodesById) {
  if (!path.length) return [];

  const steps = [];
  for (let i = 0; i < path.length - 1; i += 1) {
    const current = nodesById[path[i]];
    const next = nodesById[path[i + 1]];

    if (!current || !next) continue;

    if (current.floorId !== next.floorId) {
      steps.push(`${current.label} noktasından ${next.label} noktasına geçin.`);
    } else {
      steps.push(`${current.label} noktasından ${next.label} yönüne ilerleyin.`);
    }
  }

  return steps;
}
