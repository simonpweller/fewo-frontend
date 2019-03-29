import React from 'react';
import ImageGallery from 'react-image-gallery';

const IndexGallery = () => {
  const images = [
    {
      original: '/static/images/20180402_141032.jpg',
      thumbnail: '/static/images/20180402_141032.jpg',
    },
    {
      original: '/static/images/20180407_172659.jpg',
      thumbnail: '/static/images/20180407_172659.jpg',
    },
    {
      original: '/static/images/IMG_6680.JPG',
      thumbnail: '/static/images/IMG_6680.JPG',
    }
  ];

  return <ImageGallery items={images} />;
};

export default IndexGallery;