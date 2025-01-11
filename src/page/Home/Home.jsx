const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h4>Quieres adoptar un gatito?, haz click en el botón de abajo</h4>
      <Link to="/adoptar-gatito">
        <button>Adoptar un gatito</button>
      </Link>
    </div>
  );
};

export default Home;