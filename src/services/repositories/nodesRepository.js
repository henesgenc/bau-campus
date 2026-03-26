import { createDocument, deleteDocument, listCollection, updateDocument } from '../firebase/firestore.js';

const COLLECTION = 'nodes';

export const nodesRepository = {
  list: () => listCollection(COLLECTION, 'label'),
  create: (payload) => createDocument(COLLECTION, payload),
  update: (id, payload) => updateDocument(COLLECTION, id, payload),
  remove: (id) => deleteDocument(COLLECTION, id),
};
