import { useState } from "react";
import "./estiloRegister.css";

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
          <h2>Nombre de usuario:</h2>
          <input
            type="text"
            name="nombredeUsuario"
            placeholder="Ingrese su nombre de usuario"
            value={nombredeUsuario}
            onChange={(e) => setNombredeUsuario(e.target.value)}
          />
        </div>

        <div>
          <h2>Email:</h2>
          <input
            type="email"
            name="email"
            placeholder="Ingrese su Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <h2>Contraseña:</h2>
          <input
            type="password"
            name="contraseña"
            placeholder="Ingrese su Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <div>
          <h2>Confirmar Contraseña:</h2>
          <input
            type="password"
            name="confirmarContraseña"
            placeholder="Confirme su contraseña"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
          />
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}












