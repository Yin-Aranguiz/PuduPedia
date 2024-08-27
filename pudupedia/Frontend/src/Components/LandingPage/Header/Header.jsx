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
            <img src={pudupedia_logo_sized2} alt='pudu_logo' className='puduLogo'></img>
          </Link>
        </div>
        <div className="miscContainer">
          <div className="buttonsWrapper">
            <div className="shareButton" onClick={toggleShareMenu}>

              <img src={share_arrow} alt='share_icon' className='shareIcon'></img>
              <ShareMenu url={shareUrl} isVisible={isShareMenuVisible} />
            </div>
          </div>
          <div className="languageToggle">

          </div>
          <div className="loginTab">
            <a href="/signlog" target="_blank" rel="noopener noreferrer">
              <p>L O G I N</p>
            </a>
            <a href="/signlog" target="_blank" rel="noopener noreferrer">
              <img src={user_icon} alt="user_icon" className="userIcon"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
