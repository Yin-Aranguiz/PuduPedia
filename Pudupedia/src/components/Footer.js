import React from 'react';
import './Footer.css';

const Footer = () => {
  const logoUrl = '/logoPudu.png'; // Ruta desde la carpeta public
  const twitterLogoUrl = '/Twitter.png'; // Asegúrate de tener esta imagen en tu proyecto
  const phoneLogoUrl = '/Phone.png'; // Asegúrate de tener esta imagen en tu proyecto
  const loveLogoUrl = '/Love.png'; //Love

  return (
    <div className='app-container'>
      {/* Otros componentes de la aplicación */}
      <div className='Footer'>
        <div className='Forus'>
          <h1>
            S o b r e &nbsp; n o s o t r o s
          </h1>
          <p>
            Somos un grupo de desarrolladores que busca visibilizar los ecosistemas terrestres en Chile, con el 
            fin de mapear especies de flora y fauna y sus respectivos parques de la naturaleza.
          </p> 
        </div>
        <div className='ContactUs'>
          <h1>C o n t á c t a n o s</h1>
          <div className='Contact-item'>
            <img src={twitterLogoUrl} alt="Twitter" className='Contact-logo' />
            <a href="https://twitterfalsonuestros.com" target="_blank" rel="noopener noreferrer">
              https://twitterfalsonuestros.com
            </a>
          </div>
          <div className='Contact-item'>
            <img src={phoneLogoUrl} alt="Teléfono" className='Contact-logo' />
            <p>+569 1234 5678</p>
          </div>
        </div>
        <div className='Logo'>
          <h1>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src={logoUrl} alt="Logo" style={{ width: '350px', height: 'auto' }} />
            </a>
          </h1>
          <button className='Footer-button'> 
              <img src={loveLogoUrl} alt='Donar' style={{width: 'auto', height: 'auto' }}/>
            C O M P A R T E
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
