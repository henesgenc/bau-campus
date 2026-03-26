import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './config.js';

function mapFirebaseAuthError(error) {
  const code = error?.code || '';

  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
    case 'auth/invalid-email':
      return 'E-posta veya şifre hatalı.';
    case 'auth/too-many-requests':
      return 'Çok fazla başarısız giriş denemesi yapıldı. Lütfen biraz sonra tekrar deneyin.';
    case 'auth/network-request-failed':
      return 'Firebase ağına bağlanılamadı. Authorized Domains ayarını, internet bağlantınızı, VPN/proxy durumunu ve tarayıcı engelleyicilerini kontrol edin.';
    default:
      return error?.message || 'Giriş işlemi sırasında bir hata oluştu.';
  }
}

export function watchAuthState(callback) {
  return onAuthStateChanged(auth, callback, (error) => {
    console.error('Auth state listener error:', error);
    callback(null);
  });
}

export async function loginWithEmail(email, password) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const friendlyError = new Error(mapFirebaseAuthError(error));
    friendlyError.code = error?.code;
    friendlyError.original = error;
    throw friendlyError;
  }
}

export function logoutUser() {
  return signOut(auth);
}
