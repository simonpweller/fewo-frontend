import React from 'react';
import css from './banner.scss';
import {injectIntl} from 'react-intl';

const Banner = ({intl}) => {

  const banner = require('../../images/banner.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1200');

  return (
    <div className={css.banner}>
      <img className={css.img} src={banner.src} srcSet={banner.srcSet} sizes='100vw' alt={intl.formatMessage({id: 'bannerAltText'})} />
      <h1 className={css.text}>
        {intl.formatMessage({id: 'settlingDown'})}
      </h1>
    </div>
  );
};

export default injectIntl(Banner);