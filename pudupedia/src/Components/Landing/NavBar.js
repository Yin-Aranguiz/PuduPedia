import React, { useState } from 'react';
import './NavBar.css';
import MenuImg from './menuIcon.png';

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
                <img src={MenuImg} alt='Menu' className='menuHamburguer'/>
            </button>
            
            {visible && <div className="navBarItems" onMouseEnter={isVisible} onMouseLeave={notVisible}>
                <a href="#"><div className="circle"></div>Chile</a>
                <a href="#"><div className="circle"></div>Vida Silvestre</a>
                <a href="#"><div className="circle"></div>Parques</a>
                <a href="#"><div className="circle"></div>Juegos</a>
                <a href="#"><div className="circle"></div>Quienes Somos</a>
            </div>}
        </div>
    );
};

export default NavBar;