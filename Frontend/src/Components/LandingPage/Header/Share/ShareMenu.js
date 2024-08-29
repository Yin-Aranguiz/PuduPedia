import React from 'react';
import './ShareMenu.css'; // Importa el archivo CSS

const ShareMenu = ({ url, isVisible }) => {
  return (
    <div className={`share-buttons ${isVisible ? 'share-menu-visible' : ''}`}>
      {/* Botón para compartir en Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-facebook"
      >
        Compartir en Facebook
      </a>

      {/* Botón para compartir en Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${url}&text=¡Mira esto!`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-twitter"
      >
        Compartir en Twitter
      </a>

      {/* Botón para compartir en Reddit */}
      <a
        href={`https://www.reddit.com/submit?url=${url}&title=¡Mira esto!`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-reddit"
      >
        Compartir en Reddit
      </a>

      {/* Botón para compartir en LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=¡Mira esto!&summary=Interesante contenido en esta página&source=TuWeb.com`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-linkedin"
      >
        Compartir en LinkedIn
      </a>
    </div>
  );
};

export default ShareMenu;
