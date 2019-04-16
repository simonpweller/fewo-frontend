import React from 'react';
import css from './image.scss';

const Image = ({path}) => {

  const image = require(`../../images/${path}?resize&sizes[]=600&sizes[]=400&sizes[]=200`);
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={image.src}
        srcSet={image.srcSet}
        sizes={'(max-width: 676px) calc(100vw - 40px), (max-width: 996px) calc((100vw - 60px) / 2), 400px'}
        alt={path}
      />
    </div>
  );
};

export default Image;