import React, { useState } from 'react';
import './NavBar.css'

const NavBar = () => {
    const [visible, setVisible] = useState(false)

    const isVisible = () => {
        setVisible(true);
    };
    const notVisible = () => {
        setVisible(false)
    }
    const fondo = (state)=>{
        if (state===false){
            return 'none'
        }else if (state===true){
            return 'background'
        }

        
    }
    return (
        <div className={`allItemsNavBar ${fondo(visible)}`}>

            <button className='button'
                onMouseEnter={isVisible}
                onMouseLeave={notVisible}>
                ___
            </button>
            {visible && <div className="navBarItems" onMouseEnter={isVisible} onMouseLeave={notVisible}>
                <a href="#">Chile</a>
                <a href="#">Vida Silvestre</a>
                <a href="#">Parques</a>
                <a href="#">Juegos</a>
                <a href="#">Quienes Somos</a>
            </div>}
        </div>
    );
};

export default NavBar;