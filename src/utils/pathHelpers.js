export function groupPathByFloor(path, nodes) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const grouped = [];

  path.forEach((nodeId) => {
    const node = nodeMap.get(nodeId);
    if (!node) return;

    const last = grouped[grouped.length - 1];
    if (!last || last.floor !== node.floor) {
      grouped.push({ floor: node.floor, points: [node] });
    } else {
      last.points.push(node);
    }
  });

  return grouped;
}

export function getFloorRoutePoints(routeByFloor, floorId) {
  const segment = routeByFloor.find((item) => item.floor === floorId);
  return segment?.points || [];
}

export function pathToInstructionSteps(path, nodes) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  if (!path.length) {
    return ['Rota bulunamadı.'];
  }

  const steps = [];

  for (let i = 0; i < path.length; i += 1) {
    const current = nodeMap.get(path[i]);
    const next = nodeMap.get(path[i + 1]);

    if (i === 0) {
      steps.push(`${current.label} konumundan başlayın.`);
      continue;
    }

    if (!next) {
      steps.push(`${current.label} konumuna ulaşacaksınız.`);
      break;
    }

    if (current.floor !== next.floor) {
      if (current.type === 'stairs') {
        steps.push(`${current.label} üzerinden ${next.floor}. kata geçin.`);
      } else if (current.type === 'elevator') {
        steps.push(`${current.label} ile ${next.floor}. kata çıkın/inin.`);
      }
      continue;
    }

    steps.push(`${current.label} noktasından ${next.label} noktasına ilerleyin.`);
  }

  return steps;
}
