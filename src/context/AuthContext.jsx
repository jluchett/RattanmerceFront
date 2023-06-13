// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Realizar la lógica de autenticación y obtener el token del usuario
    const token = 'TOKEN_DEL_USUARIO';

    // Establecer el usuario y el token en el estado global
    setUser({ ...userData, token });
  };

  const logout = () => {
    // Limpiar el usuario y el token del estado global
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
