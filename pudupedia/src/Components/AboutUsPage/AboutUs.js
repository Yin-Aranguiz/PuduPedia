import React from 'react';
import './AboutUs.css';
import Header from '../LandingPage/Header/Header';

import userIcon from './user-icon-placeholder.png';
import LinkedLogo from './LinkedIn_logo.png';
import GitHubLogo from './GitHub_Logo.png';

const AboutUs = () => {

  return (
    <div className='all'>
      <div className='background'>
        <Header />
        <div className='teamTitle'>
          <p className='title'>E Q U I P O &nbsp; D E &nbsp; D E S A R R O L L A D O R E S</p>
        </div>
        <div className='teamContainer'>
          <div className='memberContainer'>
            <div className='picAndName'>
              <img src={userIcon} className='Icon'></img>
              <p className='name'>BIANCA DE PETRIS</p>
            </div>
            <div className='links'>
              <a href='https://www.linkedin.com/in/bianca-de-petris/' target='blank'>
                <img src={LinkedLogo} className='Linked'></img>
                <p className='linkName'>LinkedIn</p>
              </a> <br></br>
              <a href='https://github.com/Biank123' target='blank'>
                <img src={GitHubLogo} className='GitHub'></img>
                <p className='linkName'>GitHub</p>
              </a>
            </div>
          </div>
          <div className='memberContainer'>
            <div className='picAndName'>
              <img src={userIcon} className='Icon'></img>
              <p className='name'>MARTIN ARANGUIZ</p>
            </div>
            <div className='links'>
              <a href='https://www.linkedin.com/in/martin-aranguiz-morales/' target='blank'>
                <img src={LinkedLogo} className='Linked'></img>
                <p className='linkName'>LinkedIn</p>
              </a> <br></br>
              <a href='https://github.com/Yin-Aranguiz' target='blank'>
                <img src={GitHubLogo} className='GitHub'></img>
                <p className='linkName'>GitHub</p>
              </a>
            </div>
          </div>
          <div className='memberContainer'>
            <div className='picAndName'>
              <img src={userIcon} className='Icon'></img>
              <p className='name'>LORETO ESPINOZA</p>
            </div>
            <div className='links'>
              <a href='https://www.linkedin.com/in/loreto-esp-pez/' target='blank'>
                <img src={LinkedLogo} className='Linked'></img>
                <p className='linkName'>LinkedIn</p>
              </a> <br></br>
              <a href='https://github.com/larkemiz' target='blank'>
                <img src={GitHubLogo} className='GitHub'></img>
                <p className='linkName'>GitHub</p>
              </a>
            </div>
          </div>
          <div className='memberContainer'>
            <div className='picAndName'>
              <img src={userIcon} className='Icon'></img>
              <p className='name'>CRISTIAN VENEGAS</p>
            </div>
            <div className='links'>
              <a href='https://www.linkedin.com/in/c-venegas-ruiz' target='blank'>
                <img src={LinkedLogo} className='Linked'></img>
                <p className='linkName'>LinkedIn</p>
              </a> <br></br>
              <a href='https://github.com/Cvenru' target='blank'>
                <img src={GitHubLogo} className='GitHub'></img>
                <p className='linkName'>GitHub</p>
              </a>
            </div>
          </div>
          <div className='memberContainer'>
            <div className='picAndName'>
              <img src={userIcon} className='Icon'></img>
              <p className='name'>LORENZO GUZMAN</p>
            </div>
            <div className='links'>
              <a href='https://www.linkedin.com/in/lorenzo-ignacio-guzman-orellana/' target='blank'>
                <img src={LinkedLogo} className='Linked'></img>
                <p className='linkName'>LinkedIn</p>
              </a> <br></br>
              <a href='https://github.com/ghiraghira' className='linkText' target='blank'>
                <img src={GitHubLogo} className='GitHub'></img>
                <p className='linkName'>GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div className='AboutUsPage'>
          <div className='bigContainer'>
            <div className='aboutUsContainer'>
              <div className='whoAreWe'>
                <p className='boxTitle'>Q U I E N E S &nbsp; S O M O S</p>
                <p className='content'>
                  Somos un grupo de desarrolladores junior unidos por <br></br>
                  la motivación de dedicarnos a informar sobre <br />
                  la biodiversidad y los ecosistemas terrestres en Chile. <br></br>
                  Utilizamos nuestra pasión por la tecnología y un enfoque<br></br>
                  moderno que busca fomentar la participación e impulsar <br></br>
                  el interés de la población en soluciones y herramientas <br />
                  digitales de manera gratuita, desde un sitio web intuitivo <br />
                  con altos estándares para su funcionamiento. Deseamos <br />
                  hacer de este un espacio que impulse el conocimiento <br />
                  sobre nuestro entorno natural y las diversas especies <br />
                  que habitan en él.
                </p>
              </div>
              <div className='misionAndVision'>
                <div className='mision'>
                  <p className='subtitles'>M I S I Ó N</p>
                  <p className='contentBit'>
                    Desarrollamos herramientas tecnológicas y <br></br>
                    plataformas digitales para fomentar <br></br>
                    y contribuir a la conservación de la <br />
                    biodiversidad en Chile. Buscamos educar y <br />
                    sensibilizar a la comunidad, creando <br />
                    y potenciando espacios de información <br />
                    desde la recreación e interactividad. </p>
                </div>
                <div className='vision'>
                  <p className='subtitles'>V I S I Ó N</p>
                  <p className='contentBit'>
                    Aspiramos por un Chile en donde la tecnología <br />
                    y la innovación sean un factor importante en <br />
                    la protección de ecosistemas terrestres. <br />
                    Apuntamos a liderar en soluciones digitales <br />
                    para resaltar la importancia de la conservación <br />
                    del medio ambiente, inspirando a futuras <br />
                    generaciones a cuidar nuestro planeta.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs;