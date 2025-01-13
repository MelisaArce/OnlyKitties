import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Registro() {
  const [nombredeUsuario, setNombredeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log({
      nombredeUsuario,
      email,
      contraseña,
    });

    alert("Registro exitoso");
  };

  return (
    <div className="formRegister">
      <h1>Registro</h1>
      <form className="Registro" onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="nombredeUsuario"
            placeholder="Ingrese su nombre de usuario"
            value={nombredeUsuario}
            onChange={(e) => setNombredeUsuario(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese su Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            placeholder="Ingrese su Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirmarContraseña"
            placeholder="Confirme su contraseña"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
          />
        </div>
        <div className="boton-registrar">
         <button type="submit">Registrar</button>
         </div>
      </form>
         <p>Si ya tenes una cuenta:</p>
         <Link to="/login"> 
                  <button>Inicia Sesión</button>
          </Link>
    </div>
  );
}












