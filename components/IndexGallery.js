import React from 'react';
import ImageGallery from 'react-image-gallery';

const IndexGallery = () => {

  const image1 = require('../images/1.jpg?resize&sizes[]=480&sizes[]=960');
  const image2 = require('../images/2.jpg?resize&sizes[]=480&sizes[]=960');
  const image3 = require('../images/3.jpg?resize&sizes[]=480&sizes[]=960');

  const images = [
    {
      original: image1.src,
      srcSet: image1.srcSet,
      sizes: "(max-width: 960px) 100vw, 960px"
    },
    {
      original: image2.src,
      srcSet: image2.srcSet,
      sizes: "(max-width: 960px) 100vw, 960px"
    },
    {
      original: image3.src,
      srcSet: image3.srcSet,
      sizes: "(max-width: 960px) 100vw, 960px"
    },
  ];

  return <ImageGallery items={images} showThumbnails={false} />;
};

export default IndexGallery;