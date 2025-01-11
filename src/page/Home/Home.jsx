import React from "react";
import gatitosMock from "../../util/mockData";
import GatitoCard from "../../components/gatitos/GatitoCard";

const Home = () => {
  return (
    <div className="home">
      <h1>Only Kitties</h1>
      <h2>Gatitos en Adopción</h2>
      <div className="gatitos-grid">
        {gatitosMock.map((gatito) => (
          <GatitoCard key={gatito.id} gatito={gatito} />
        ))}
      </div>
        <h4>Quieres adoptar un gatito?, haz click en el botón de abajo</h4>
        <button>Adoptar un gatito</button>
    </div>
  );
};

export default Home;

