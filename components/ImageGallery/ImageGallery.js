import React from 'react';
import Image from './Image';
import css from './imageGallery.scss';

const ImageGallery = ({images = []}) => {
  return (
    <div className={css.gallery}>
      {images.map(image => <Image path={image}/>)}
    </div>
  );
};

export default ImageGallery;