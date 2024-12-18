import Home from './page/Home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
function App() {
  return (
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
  );
}

export default App
