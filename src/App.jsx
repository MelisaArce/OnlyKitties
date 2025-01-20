import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";

import Home from "./page/Home/Home";
import Login from "./page/login/Login";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Registro from "./page/register/Register";
import GatitosPage from "./page/gatitos/GatitosPage";
import AdoptanteForm from "./components/adoptante/AdoptanteForm";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gatitos" element={<GatitosPage />} />

          {/* Rutas protegidas */}
          <Route
            path="/crear-publicacion"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/modificar-cuenta/:idUser"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/adoptar-gatito"
            element={
              <PrivateRoute>
                <AdoptanteForm />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
