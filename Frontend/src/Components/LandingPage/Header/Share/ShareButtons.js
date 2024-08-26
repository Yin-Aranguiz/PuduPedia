import React from 'react';

// URL que deseas compartir (puede ser dinámica)
const shareUrl = encodeURIComponent(window.location.href); // O cualquier otra URL que desees compartir

const ShareButtons = () => {
  return (
    <div className="share-buttons">
      {/* Botón para compartir en Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-facebook"
      >
        Compartir en Facebook
      </a>

      {/* Botón para compartir en Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=¡Mira esto!`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-twitter"
      >
        Compartir en Twitter
      </a>

      {/* Botón para compartir en Reddit */}
      <a
        href={`https://www.reddit.com/submit?url=${shareUrl}&title=¡Mira esto!`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-reddit"
      >
        Compartir en Reddit
      </a>

      {/* Botón para compartir en LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=¡Mira esto!&summary=Interesante contenido en esta página&source=TuWeb.com`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button share-linkedin"
      >
        Compartir en LinkedIn
      </a>
    </div>
  );
};

export default ShareButtons;
