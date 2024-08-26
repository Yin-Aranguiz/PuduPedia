import React, { useState } from 'react';
import user_icon from './user_icon.png';
import search_icon from './search_icon.png';
import share_arrow from './share_arrow.png';
import pudupedia_logo_sized2 from './pudupedia_logo_sized2.png';
import './Header.css';
import ShareMenu from './Share/ShareMenu'; // Importa el componente ShareMenu

const Header = ({ className = '' }) => {
  const [isShareMenuVisible, setShareMenuVisible] = useState(false);
  const shareUrl = encodeURIComponent(window.location.href);

  const toggleShareMenu = () => {
    setShareMenuVisible(!isShareMenuVisible);
  };

  return (
    <div className={`Header ${className}`}>
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={pudupedia_logo_sized2} alt='pudu_logo' className='puduLogo' />
        </div>
        <div className="miscContainer">
          <div className="buttonsWrapper">
            {/* <div className="searchContainer">
              <div className="searchButton">
                <img src={search_icon} alt="search_icon" className="searchIcon" />
                <input type="text" className="searchInput" placeholder="Buscar..." />
              </div>
            </div> */}
            <div className="shareButton" onClick={toggleShareMenu}>
              <img src={share_arrow} alt='share_icon' className='shareIcon' />
              <ShareMenu url={shareUrl} isVisible={isShareMenuVisible} /> {/* Muestra el menú de compartir */}
            </div>
            <div className="loginTab">
              <a href="/signlog" target="_blank" rel="noopener noreferrer">
                <p>L O G I N</p>
              </a>
              <a href="/signlog" target="_blank" rel="noopener noreferrer">
                <img src={user_icon} alt="user_icon" className="userIcon" />
              </a>
            </div>
          </div>
          <div className="languageToggle">
            {/* Aquí podrías agregar opciones de cambio de idioma */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

