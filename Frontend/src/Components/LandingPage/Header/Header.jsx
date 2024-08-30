import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user_icon from './user_icon.png';
import share_arrow from './share_arrow.png';
import pudupedia_logo_sized2 from './pudupedia_logo_sized2.png';
import './Header.css';
import ShareMenu from './Share/ShareMenu';
import { useAuth } from '../../LoginPage/signlog/AuthContext/AuthContext';

const Header = ({ className = '' }) => {
  const [isShareMenuVisible, setShareMenuVisible] = useState(false);
  const shareUrl = encodeURIComponent(window.location.href);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const toggleShareMenu = () => {
    setShareMenuVisible(!isShareMenuVisible);
  };

  const handleLogout = () => {
    logout();
    // Redirige al usuario a la página de inicio de sesión 
    navigate('/signlog'); 
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
          {isAuthenticated ? (
            <>
              <Link className="loginTab" to="/user/prof">
                <p>PERFIL</p>
              </Link>
              <Link className="loginTab" to="/user">
                <img src={user_icon} alt="user_icon" className="userIcon"></img>
              </Link>
              <p onClick={handleLogout} className="logoutButton">
                CERRAR &nbsp; SESIÓN
              </p>
            </>
          ) : (
            <>
              <Link className="loginTab" to="/signlog">
                <p>INGRESAR</p>
              </Link>
              <Link className="loginTab" to="/signlog">
                <img src={user_icon} alt="user_icon" className="userIcon"></img>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;