import React, { useState } from 'react';
import './NavBar.css'

const NavBar2 = () => {
    const [visible, setVisible] = useState(false)

    const isVisible = () => {
        setVisible(true);
    };
    const notVisible = () => {
        setVisible(false)
    }
    return  (
        <div className={`allItemsNavBar ${visible ? 'visible' : ''}`}>
            <button
                onMouseEnter={isVisible}
                onMouseLeave={notVisible}>
                ___
            </button>
            <div className="navBarItems">
                {visible && <a href="#">Chile</a>}
                {visible && <a href="#">Vida Silvestre</a>}
                {visible && <a href="#">Parques</a>}
                {visible && <a href="#">Juegos</a>}
                {visible && <a href="#">Quienes Somos</a>}
            </div>
        </div>
    );
};

export default NavBar2;