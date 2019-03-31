import React from 'react';
import ImageGallery from 'react-image-gallery';

const IndexGallery = () => {
  const images = [
    {
      original: require('../images/1.jpg?resize&size=960'),
      thumbnail: require('../images/1.jpg?resize&size=100'),
    },
    {
      original: require('../images/2.jpg?resize&size=960'),
      thumbnail: require('../images/2.jpg?resize&size=100'),
    },
    {
      original: require('../images/3.jpg?resize&size=960'),
      thumbnail: require('../images/3.jpg?resize&size=100'),
    }
  ];

  return <ImageGallery items={images} />;
};

export default IndexGallery;