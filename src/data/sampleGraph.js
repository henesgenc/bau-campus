export const sampleFloors = [
  { id: 'zemin', name: 'Zemin Kat', level: 0 },
  { id: 'kat1', name: '1. Kat', level: 1 },
  { id: 'kat2', name: '2. Kat', level: 2 },
];

export const sampleNodes = [
  { id: 'entrance', label: 'Ana Giriş', floorId: 'zemin', type: 'entrance', x: 60, y: 240 },
  { id: 'hall_z_1', label: 'Zemin Koridor 1', floorId: 'zemin', type: 'hall', x: 180, y: 240 },
  { id: 'stairs_z', label: 'Merdiven Zemin', floorId: 'zemin', type: 'stairs', x: 320, y: 180 },
  { id: 'security', label: 'Güvenlik', floorId: 'zemin', type: 'office', x: 160, y: 120 },
  { id: 'stairs_1', label: 'Merdiven 1. Kat', floorId: 'kat1', type: 'stairs', x: 320, y: 180 },
  { id: 'hall_1_1', label: '1. Kat Koridor', floorId: 'kat1', type: 'hall', x: 470, y: 180 },
  { id: 'b101', label: 'B101', floorId: 'kat1', type: 'classroom', x: 600, y: 110 },
  { id: 'b105', label: 'B105', floorId: 'kat1', type: 'classroom', x: 600, y: 250 },
  { id: 'stairs_2', label: 'Merdiven 2. Kat', floorId: 'kat2', type: 'stairs', x: 320, y: 180 },
  { id: 'hall_2_1', label: '2. Kat Koridor', floorId: 'kat2', type: 'hall', x: 470, y: 180 },
  { id: 'b201', label: 'B201', floorId: 'kat2', type: 'classroom', x: 600, y: 110 },
  { id: 'b205', label: 'B205', floorId: 'kat2', type: 'classroom', x: 600, y: 250 },
];

export const sampleEdges = [
  { id: 'e1', from: 'entrance', to: 'hall_z_1', weight: 8, accessible: true },
  { id: 'e2', from: 'hall_z_1', to: 'stairs_z', weight: 10, accessible: true },
  { id: 'e3', from: 'hall_z_1', to: 'security', weight: 6, accessible: true },
  { id: 'e4', from: 'stairs_z', to: 'stairs_1', weight: 12, accessible: false },
  { id: 'e5', from: 'stairs_1', to: 'hall_1_1', weight: 8, accessible: true },
  { id: 'e6', from: 'hall_1_1', to: 'b101', weight: 8, accessible: true },
  { id: 'e7', from: 'hall_1_1', to: 'b105', weight: 8, accessible: true },
  { id: 'e8', from: 'stairs_1', to: 'stairs_2', weight: 12, accessible: false },
  { id: 'e9', from: 'stairs_2', to: 'hall_2_1', weight: 8, accessible: true },
  { id: 'e10', from: 'hall_2_1', to: 'b201', weight: 8, accessible: true },
  { id: 'e11', from: 'hall_2_1', to: 'b205', weight: 8, accessible: true },
];
