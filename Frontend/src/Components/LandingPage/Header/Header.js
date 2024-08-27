import React, { useState } from 'react';
import user_icon from './user_icon.png';
import { Link } from 'react-router-dom';
import share_arrow from './share_arrow.png';
import pudupedia_logo_sized2 from './pudupedia_logo_sized2.png';
import './Header.css';
import ShareMenu from './Share/ShareMenu';

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
          <Link to="/">
            <img src={pudupedia_logo_sized2} alt='pudu_logo' className='puduLogo' />
          </Link>
        </div>
        <div className="miscContainer">
          <div className="buttonsWrapper">
            <div className="shareButton" onClick={toggleShareMenu}>
              <img src={share_arrow} alt='share_icon' className='shareIcon' />
              <ShareMenu url={shareUrl} isVisible={isShareMenuVisible} />
            </div>
          </div>
          <div className="languageToggle">
            {/* Puedes agregar botones de idioma aquí si lo deseas */}
          </div>
          <div className="loginTab">
            <Link to="/signlog">
              <p>L O G I N</p>
            </Link>
            <Link to="/signlog">
              <img src={user_icon} alt="user_icon" className="userIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
