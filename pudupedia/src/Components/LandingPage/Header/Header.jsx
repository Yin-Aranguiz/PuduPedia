import React from 'react';
import user_icon from './user_icon.png';
import search_icon from './search_icon.png';
import share_arrow from './share_arrow.png';
import pudupedia_logo_sized2 from './pudupedia_logo_sized2.png';
import './Header.css'

const Header = ({ className = '' }) => {
  return (
    <div className={`Header ${className}`}>
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={pudupedia_logo_sized2} alt='pudu_logo' className='puduLogo'></img>
        </div>
        <div className="miscContainer">
          <div className="buttonsWrapper">
            <div className="shareButton">
              <img src={share_arrow} alt='share_icon' className='shareIcon'></img>
            </div>
            <div className="searchContainer">
              <div className="searchButton">
                <img src={search_icon} alt="search_icon" className="searchIcon" />
                <input type="text" className="searchInput" placeholder="Buscar..." />
              </div>
            </div>
          </div>
          <div className="languageToggle">
            <p>Español | Inglés</p>
          </div>
          <div className="loginTab">
            <p>L O G I N</p>
            <img src={user_icon} alt="user_icon" className="userIcon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;