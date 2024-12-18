import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/Home/Home';
import Login from './page/login/Login';
import Footer from './components/footer/Footer';
import "./App.css";


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
  );
}

export default App
