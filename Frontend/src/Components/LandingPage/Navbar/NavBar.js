import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link
import './NavBar.css';

const NavBar = () => {
    const [visible, setVisible] = useState(false);

    const isVisible = () => {
        setVisible(true);
    };
    const notVisible = () => {
        setVisible(false);
    };

    const fondo = (state) => {
        return state ? 'background' : 'none';
    };

    return (
        <div className={`allItemsNavBar ${fondo(visible)}`}>
            <button
                className='button'
                onMouseEnter={isVisible}
                onMouseLeave={notVisible}
            >
                {/* Botón para activar/desactivar el menú */}
            </button>

            {visible && (
                <div className="navBarItems" onMouseEnter={isVisible} onMouseLeave={notVisible}>
                    <Link to="/"><div className="circle"></div>Inicio</Link>
                    <Link to="/noticias"><div className="circle"></div>Noticias</Link> {/* Enlace actualizado a Noticias */}
                    <Link to="/vida-silvestre"><div className="circle"></div>Vida Silvestre</Link>
                    <Link to="/parques"><div className="circle"></div>Parques</Link>
                    <Link to="/juegos"><div className="circle"></div>Juegos</Link>
                    <Link to="/quienes-somos"><div className="circle"></div>Quienes Somos</Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
