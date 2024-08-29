import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

  // Recupera el estado de autenticación desde localStorage cuando el componente se monta
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      fetch('http://localhost:3001/user/profile', {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then(response => {
          console.log('Response:', response);
          return response.json();
        })
        .then(data => {
          console.log('User data:', data);
          if (data) {
            setIsAuthenticated(true);
            setUser(data);
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setIsAuthenticated(false);
        });
    }
  }, []);
  
  const login = (userData) => {
    localStorage.setItem('accessToken', userData.token); // Guardar el token
    setIsAuthenticated(true);
    setUser(userData.user); // Asignar datos del usuario
  };

  const logout = () => {
    localStorage.removeItem('accessToken'); // Elimina el token de acceso
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser  }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

