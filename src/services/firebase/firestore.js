import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from './config.js';

export async function listCollection(collectionName, orderField = 'createdAt') {
  const q = query(collection(db, collectionName), orderBy(orderField));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
}

export async function createDocument(collectionName, payload) {
  const result = await addDoc(collection(db, collectionName), {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return result.id;
}

export async function updateDocument(collectionName, id, payload) {
  await updateDoc(doc(db, collectionName, id), {
    ...payload,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteDocument(collectionName, id) {
  await deleteDoc(doc(db, collectionName, id));
}
