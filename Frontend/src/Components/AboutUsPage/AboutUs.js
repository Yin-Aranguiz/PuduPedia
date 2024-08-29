import React from 'react';
import './AboutUs.css';

import userIcon from './user-icon-placeholder.png';
import LinkedLogo from './LinkedIn_logo.png';
import GitHubLogo from './GitHub_Logo.png';

const AboutUs = () => {

  return (
    <div className='all'>
      <div className='aboutUsBackground'>
       
        <div className='teamTitle'>
          <p className='dtitle'>E Q U I P O &nbsp; D E &nbsp; D E S A R R O L L A D O R E S</p>
        </div>
        <div className='teamContainer'>
          <div className='memberContainer'>
            <div className='picAndName'>
              <img src={userIcon} className='Icon'alt='user'></img>
              <p className='name'>Bianca De Petris</p>
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
              <p className='name'>Martín Aránguiz</p>
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
              <p className='name'>Loreto Espinoza</p>
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
              <img src='https://i.imgur.com/jl2c8s6.png' className='Icon'></img>
              <p className='name'>Cristián Venegas</p>
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
              <p className='name'>Lorenzo Guzman</p>
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
                <p className='boxTitle'>QUIÉNES SOMOS</p>
                <p className='content'>
                  Somos un grupo de desarrolladores junior unidos por 
                  la motivación de dedicarnos a informar sobre 
                  la biodiversidad y los ecosistemas terrestres en Chile. 
                  Utilizamos nuestra pasión por la tecnología y un enfoque
                  moderno que busca fomentar la participación e impulsar 
                  el interés de la población en soluciones y herramientas 
                  digitales de manera gratuita, desde un sitio web intuitivo 
                  con altos estándares para su funcionamiento. Deseamos 
                  hacer de este un espacio que impulse el conocimiento 
                  sobre nuestro entorno natural y las diversas especies 
                  que habitan en él.
                </p>
              </div>
              <div className='misionAndVision'>
                <div className='mision'>
                  <p className='subtitles'>M I S I Ó N</p>
                  <div className='contentBit'>
                    Desarrollamos herramientas tecnológicas y 
                    plataformas digitales para fomentar 
                    y contribuir a la conservación de la 
                    biodiversidad en Chile. Buscamos educar y 
                    sensibilizar a la comunidad, creando 
                    y potenciando espacios de información 
                    desde la recreación e interactividad. </div>
                </div>
                <div className='vision'>
                  <p className='subtitles'>V I S I Ó N</p>
                  <div className='contentBit'>
                    Aspiramos por un Chile en donde la tecnología 
                    y la innovación sean un factor importante en 
                    la protección de ecosistemas terrestres.
                    Apuntamos a liderar en soluciones digitales 
                    para resaltar la importancia de la conservación 
                    del medio ambiente, inspirando a futuras 
                    generaciones a cuidar nuestro planeta.</div>
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