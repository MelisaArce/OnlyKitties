import './estilo.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/authcontext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isLogin, setIsLogin } = useContext(AuthContext);

    return (
        <header>
            <div className="header-logo">
                <a href="/">
                    <img
                        src="https://i.imgur.com/AQd8S1w.jpeg"
                        alt="Logo de Only Kitties"
                        style={{ 
                            height: '50px',  
                            width: 'auto', 
                            border: 'none' 
                        }}
                    />
                </a>
                <h1>OnlyKitties</h1>
            </div>
            <nav>
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
            </nav>
        </header>
    );
};

export default Header;
