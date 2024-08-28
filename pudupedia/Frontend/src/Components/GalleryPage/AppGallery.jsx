import React from 'react';
import GalleryPage from './GalleryPage';
import { animales } from './animales';

const AppGallery = () => {
  return (
    <div className='App'>
        <GalleryPage animal={animales.pudu} />
        
        </div>
  )
}

export default AppGallery