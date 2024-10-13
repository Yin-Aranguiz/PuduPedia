import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    const [visible, setVisible] = useState(false)

    const isVisible = () => {
        setVisible(true);
    };
    const notVisible = () => {
        setVisible(false)
    }
    const fondo = (state) => {
        if (state === false) {
            return 'none'
        } else if (state === true) {
            return 'background'
        }


    }
    return (
        <div className={`allItemsNavBar ${fondo(visible)}`}>

            <button className='button-navbar'
                onMouseEnter={isVisible}
                onMouseLeave={notVisible}>
            </button>

            {visible && <div className="navBarItems" onMouseEnter={isVisible} onMouseLeave={notVisible}>
                <Link to="/Pupupedia"><div className="circle"></div>Inicio</Link>
                <Link to="/chile"><div className="circle"></div>Chile</Link>
                <Link to="/vida-silvestre"><div className="circle"></div>Vida Silvestre</Link>
                <Link to="/parques"><div className="circle"></div>Parques</Link>
                <Link to="/juegos"><div className="circle"></div>Juegos</Link>
                <Link to="/quienes-somos"><div className="circle"></div>Quienes Somos</Link>
            </div>}
        </div>
    );
};

export default NavBar;