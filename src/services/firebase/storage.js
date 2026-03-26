import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './config.js';

export async function uploadFile(path, file) {
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}
