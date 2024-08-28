import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SettingTabs.css';
import DeleteAccount from '../../signlog/DeleteAccount';
import ForgotPassword from '../../signlog/forgotPassword';

const SettingsPage = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);

  const handleToggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
    setShowDeleteAccount(false); // Ocultar el formulario de eliminar cuenta
  };

  const handleToggleDeleteAccount = () => {
    setShowDeleteAccount(!showDeleteAccount);
    setShowChangePassword(false); // Ocultar el formulario de cambiar contraseña
  };

  return (
    <div className='fullPage2'>
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
            <nav>
              <Link to="/user" className='linkToPages'>Perfil de Usuario</Link>
            </nav>
          </div>
        </div>
        <button className='sideBoxes'>
          <nav>
            <Link to="/user/notifs" className='linkToPages'>Logros</Link>
          </nav>
        </button>
        <button className='sideBoxes'>
          <Link to="/user/faves" className='linkToPages'>Avistamientos</Link>
        </button>
        <button className='sideBoxes'>
          <Link to="/user/settings" className='linkToPages'>Configuración</Link>
        </button>
        <button className='sideBoxes'>
          <Link to="/user/help" className='linkToPages'>Ayuda</Link>
        </button>
      </div>
      <div className='shownTab'>
        <div className='topTab'>
          <div className='topTabName'>Configuración</div>
        </div>
        <div className='contentTab'>
          <p onClick={handleToggleChangePassword} className='settingOption'>
            • Cambiar Contraseña
          </p>
          {showChangePassword && <ForgotPassword />}
          
          <p onClick={handleToggleDeleteAccount} className='settingOption'>
            • Eliminar Cuenta
          </p>
          {showDeleteAccount && <DeleteAccount />}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;