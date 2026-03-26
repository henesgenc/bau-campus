import { createDocument, deleteDocument, listCollection, updateDocument } from '../firebase/firestore.js';

const COLLECTION = 'edges';

export const edgesRepository = {
  list: () => listCollection(COLLECTION, 'from'),
  create: (payload) => createDocument(COLLECTION, payload),
  update: (id, payload) => updateDocument(COLLECTION, id, payload),
  remove: (id) => deleteDocument(COLLECTION, id),
};
