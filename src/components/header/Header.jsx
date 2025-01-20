import './header.css';
import { useContext } from 'react';
import { AuthContext } from "../../components/context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const { isLogin, logout } = useContext(AuthContext); // Corrección del nombre
    const navigate = useNavigate(); // Hook para redirección

    const handleLogout = () => {
        logout(); // Llama a la función de logout del contexto
        navigate("/"); // Redirige al usuario a la página principal tras cerrar sesión
    };

    return (
        <header>
            <nav>
                <div className="header-logo">
                    <Link to="/" aria-label="Volver a la página principal">
                        <img src="/logo.jpeg" alt="Logo de Only Kitties" />
                    </Link>
                </div>
                <div className="nav-links">
                    {!isLogin ? (
                        <>
                            <Link to="/register" className="nav-link">Registrar</Link>
                            <Link to="/login" className="nav-link">Iniciar sesión</Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="nav-link">
                            Cerrar sesión
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
