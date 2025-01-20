import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(AuthContext);

  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
