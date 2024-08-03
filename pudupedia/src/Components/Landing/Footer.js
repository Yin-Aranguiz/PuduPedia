import React from 'react';
import './Footer.css';
import logoUrl from './pudupedia_logo_sized2.png';
import twitterLogoUrl from './Twitter.png';
import phoneLogoUrl from './Phone.png';
import shareIcon from './shareIcon.png'

const Footer = ({ className }) => {
  return (
    <div className={`Footer ${className || ''}`}>
      <div className='Forus'>
        <h1>S o b r e &nbsp; n o s o t r o s</h1>
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
            <img src={logoUrl} alt="Logo" style={{ width: '250px', height: 'auto' }} />
          </a>
        </h1>
        <button className='Footer-button'>
          <div className='Share-button'>
            <img src={shareIcon} alt='Share' style={{ width: '24px', height: 'auto' }} />
            <p>C O M P A R T E</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Footer;