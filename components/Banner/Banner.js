import React from 'react';
import PropTypes from 'prop-types';
import css from './banner.scss';

const Banner = ({title}) => {

  const banner = require('../../images/banner.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1200');

  return (
    <div className={css.banner}>
      <img className={css.img} src={banner.src} srcSet={banner.srcSet} sizes='100vw' alt=""/>
      <h1 className={css.text}>
        {title}
      </h1>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Banner;