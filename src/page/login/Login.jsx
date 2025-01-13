import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const { setIsLogin } = useContext(AuthContext); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (email === "admin@onlykitties.com" && password === "1234") {
        alert("Login exitoso");
        setIsLogin(true);
      } else {
        alert("Credenciales incorrectas");
      }
    };
  
    return (
      <div className="login-container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Si no tenes una cuenta:</p>
         <Link to="/register"> 
                  <button>¡Registrate!</button>
          </Link>
      </div>
    );
  };
  
export default Login;
