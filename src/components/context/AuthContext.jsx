import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(() => {
    // Leer el estado inicial desde localStorage
    const storedLogin = localStorage.getItem("isLogin");
    return storedLogin ? JSON.parse(storedLogin) : false;
  });

  const login = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", JSON.stringify(true)); // Guardar estado en localStorage
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("isLogin"); // Eliminar estado de localStorage
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
