import { useState } from "react";
import "./estiloRegister.css";

export default function Registro() {
  const [nombreyApellido, setNombreyApellido] = useState("");
  const [Email, setEmail] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    
    if (Contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    
    console.log({
      nombreyApellido,
      Email,
      Contraseña,
    });

    alert("Registro exitoso");
  };

  return (
    <div>
      <h1>Registro</h1>
      <form className="Registro" onSubmit={handlesubmit}>
        <input
          type="text"
          name="nombreyApellido"
          placeholder="Ingrese su nombre y apellido"
          value={nombreyApellido}
          onChange={(e) => setNombreyApellido(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Ingrese su Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="contraseña"
          placeholder="Ingrese su Contraseña"
          value={Contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <input
          type="password"
          name="confirmarContraseña"
          placeholder="Confirme su contraseña"
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

















