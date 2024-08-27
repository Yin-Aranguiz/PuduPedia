import React, {useState} from "react";
import './User.css';
import monito from './monito-del-monte.jpg';

const UserProfile = () => {
  return (
    <div>
    <div className="container">
      <div className="picAndName">
        <div className="circle">
          <img src={monito} alt="monito del monte" className="imagePic"></img>
        </div>
        <p className="username">Nombre</p>
      </div>
      <div class="dropdown">
        <button class="dropButton">« Notificaciones</button>
        <div class="dropdownContent">
          <a href="#">Actividad Reciente</a>
          <a href="#">Publicaciones</a>
          <a href="#">Logros</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropButton">« Favoritos</button>
        <div class="dropdownContent">
          <a href="#">Flora</a>
          <a href="#">Fauna</a>
          <a href="#">Parques</a>
          <a href="#">Todo</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropButton">« Historial</button>
        <div class="dropdownContent">
          <a href="#">Partidas</a>
          <a href="#">Puntajes</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropButton">« Configuración</button>
        <div class="dropdownContent">
          <a href="#">Perfil</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropButton">? Ayuda</button>
        <div class="dropdownContent">
        </div>
      </div>
      <div className="logOut">
        <button className="closing">Cerrar Sesión</button>
      </div>
    </div>
    
    </div>
  )
}

export default UserProfile;