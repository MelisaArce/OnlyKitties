import React from 'react';
import './estilo.css';
import { useState } from 'react';
import { useContext } from 'react';

import {Authcontext} from  ../context/Authcontext 
import { useOutletContext } from 'react-router-dom';




const Header = () => { 
    const { Islogin, setIsLogin } = useContext(Authcontext);
    return (
        <header>
            <div>
                <img 
                    src="https://scontent.fepa1-1.fna.fbcdn.net/v/t39.30808-6/469170851_8835878499862631_4336393283978189877_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GqD8NjGhJ1UQ7kNvgG49VL6&_nc_zt=23&_nc_ht=scontent.fepa1-1.fna&_nc_gid=AuzUHZhMXrCSzwjnyR4daOx&oh=00_AYBAnPt0yumAVB7cLFRDJHoFeriqt_jJ7Ws1LgIbSrPm8w&oe=675AA15A" 
                    alt="Only Kitties" 
                    style={{ width: '150px', height: 'auto' }} 
                />
                <h1>OnlyKitties</h1>
            </div>
            <nav>
                <a href="#" className="nav-link">Registrar</a>
                <a href="#" className="nav-link">Iniciar sesión</a>
            </nav>
        </header>
    );
}

export default Header;

 
