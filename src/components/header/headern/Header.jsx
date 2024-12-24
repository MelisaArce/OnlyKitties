import './estilo.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/authcontext';
import { Link } from 'react-router-dom';

const Header = () => { 
    const { isLogin, setIsLogin } = useContext(AuthContext);

    return (
        <header>
            <div className="header-logo">
                <iframe 
                    src="https://assets.pinterest.com/ext/embed.html?id=528961918750929262" 
                    height="336" 
                    width="236" 
                    frameBorder="0" 
                    scrolling="no"
                    title="Only Kitties Logo"
                    style={{ border: 'none' }}
                ></iframe>
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
}

export default Header;




 
