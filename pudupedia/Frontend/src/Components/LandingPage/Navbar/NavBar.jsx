import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBarOld = () => {
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

            

            {visible && <div className="navBarItems" onMouseEnter={isVisible} onClick={notVisible}>
                <Link to="/"><div className="circle"><img src='https://cdn-icons-png.flaticon.com/512/25/25694.png'/></div>Inicio</Link>
                <Link to="/chile"><div className="circle"><img src='https://static.thenounproject.com/png/3391157-200.png'/></div>Chile</Link>
                <Link to="/vida-silvestre"><div className="circle"></div>Vida Silvestre</Link>
                <Link to="/parques"><div className="circle"></div>Parques</Link>
                <Link to="/juegos"><div className="circle"></div>Juegos</Link>
                <Link to="/quienes-somos"><div className="circle"></div>Quienes Somos</Link>
            </div>}

            <button className='button-navbar'
                onMouseEnter={isVisible}
                onClick={notVisible}>
            </button>
        </div>
    );
};

export default NavBarOld;