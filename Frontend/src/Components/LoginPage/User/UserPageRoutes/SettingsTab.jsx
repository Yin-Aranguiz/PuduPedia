import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SettingTabs.css';
import DeleteAccount from '../../signlog/DeleteAccount';
import ForgotPassword from '../../signlog/forgotPassword';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const navigate = useNavigate();

  const handleToggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
    setShowDeleteAccount(false); // Ocultar el formulario de eliminar cuenta
  };

  const handleToggleDeleteAccount = async () => {
    try {
      const response = await fetch('/delete-account', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar la cuenta');
      }
  
      
      alert('Cuenta eliminada con éxito');
      navigate('/signlog');
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error al eliminar la cuenta');
    }
    setShowDeleteAccount(!showDeleteAccount);
    setShowChangePassword(false);
  };

  return (
    <div className='fullPage2'>
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
            <nav>
              <Link to="/user/prof" className='linkToPages'>Perfil de Usuario</Link>
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
          <p>¿Deseas cambiar tu contraseña?:</p>
          <p onClick={handleToggleChangePassword} className='settingOption'>
            • Cambiar Contraseña del perfil
          </p>
          {showChangePassword && <ForgotPassword />}
          <p>¿Deseas eliminar tu cuenta de pudupedia?:</p>
          <p onClick={handleToggleDeleteAccount} className='settingOption'>
            • Eliminar la cuenta de usuario
          </p>
          {showDeleteAccount && <DeleteAccount />}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;