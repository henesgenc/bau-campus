import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBNBf58774uUUWjO3Hr5hDm657OpnGCHKg',
  authDomain: 'bau-campus-44357.firebaseapp.com',
  projectId: 'bau-campus-44357',
  storageBucket: 'bau-campus-44357.firebasestorage.app',
  messagingSenderId: '963778625447',
  appId: '1:963778625447:web:706a7897fc2ad9399b8082',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { firebaseConfig };
export default app;
