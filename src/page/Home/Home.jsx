import React from "react";
import { Link } from "react-router-dom";
import gatitosMock from "../../util/mockData";
import GatitoList from "../../components/gatitos/GatitoList";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Only Kitties</h1>
      <h2>Gatitos en Adopción</h2>
        <div>
          <GatitoList />
        </div>
      <h4>Quieres adoptar un gatito?, haz click en el botón de abajo</h4>
      <Link to="/register">
        <button>¡Registrate!</button>
      </Link>
    </div>
  );
};

export default Home;

