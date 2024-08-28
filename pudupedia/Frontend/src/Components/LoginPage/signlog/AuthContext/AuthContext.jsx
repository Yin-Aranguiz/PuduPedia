import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Recupera el estado de autenticación desde localStorage cuando el componente se monta
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

   const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken'); // Elimina el token de acceso
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
