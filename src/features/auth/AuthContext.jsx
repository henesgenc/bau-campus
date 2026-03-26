import { createContext, useEffect, useMemo, useState } from 'react';
import { loginWithEmail, logoutUser, watchAuthState } from '../../services/firebase/auth.js';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = watchAuthState((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      login: async (email, password) => loginWithEmail(email, password),
      logout: async () => logoutUser(),
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
