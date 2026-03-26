import { createDocument, deleteDocument, listCollection, updateDocument } from '../firebase/firestore.js';

const COLLECTION = 'rooms';

export const roomsRepository = {
  list: () => listCollection(COLLECTION, 'code'),
  create: (payload) => createDocument(COLLECTION, payload),
  update: (id, payload) => updateDocument(COLLECTION, id, payload),
  remove: (id) => deleteDocument(COLLECTION, id),
};
