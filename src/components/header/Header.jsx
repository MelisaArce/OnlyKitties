import './header.css';
import { useContext } from 'react';
import { AuthContext } from "../../components/context/AuthContext";
import { Link } from 'react-router-dom';

const Header = () => {
    const { isLogin, setIsLogin } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <div className="header-logo">
                    <a href="/">
                        <img src="https://i.imgur.com/AQd8S1w.jpeg" alt="Logo de Only Kitties" />
                    </a>
                </div>
                <div className="nav-links">
                    {!isLogin ? (
                        <>
                            <Link to="/register" className="nav-link">Registrar</Link>
                            <Link to="/login" className="nav-link">Iniciar sesión</Link>
                        </>
                    ) : (
                        <button onClick={() => setIsLogin(false)} className="nav-link">
                            Cerrar sesión
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
