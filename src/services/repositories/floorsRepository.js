import { createDocument, deleteDocument, listCollection, updateDocument } from '../firebase/firestore.js';

const COLLECTION = 'floors';

export const floorsRepository = {
  list: () => listCollection(COLLECTION, 'level'),
  create: (payload) => createDocument(COLLECTION, payload),
  update: (id, payload) => updateDocument(COLLECTION, id, payload),
  remove: (id) => deleteDocument(COLLECTION, id),
};
