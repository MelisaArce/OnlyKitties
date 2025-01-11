import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';

import Home from './page/Home/Home';
import Login from './page/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Registro from './page/register/Register';
import GatitosPage from './page/gatitos/GatitosPage';
import "./App.css";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crear-publicacion" element={<Home />} />
          <Route path="modificar-cuenta/:idUser" element={<Home />} />
          <Route path="/gatitos" element={<GatitosPage />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
