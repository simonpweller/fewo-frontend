import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({title}) => {

  const banner = require('../../images/banner.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1200');

  return (
    <div className="banner">
      <img className="banner__img" src={banner.src} srcSet={banner.srcSet} sizes='100vw' alt=""/>
      <h1 className="container banner__text">
        {title}
      </h1>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
};

export default Banner;