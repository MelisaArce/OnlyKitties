import Home from './page/Home/Home';
import Header from './components/header/headern/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import AuthProvider from './components/context/authcontext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crear-publicacion" element={<Home />} />
          <Route path="modificar-cuenta/:idUser" element={<Home />} />
          <Route path="register" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
