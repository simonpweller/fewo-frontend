import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import css from './accommodations.scss';

const Accommodations = ({intl}) => {

  const imgApartment = require('../../images/FW.jpg?resize&sizes[]=200&sizes[]=400');
  const imgHouse = require('../../images/FH.jpg?resize&sizes[]=200&sizes[]=400');
  const sizes = '(max-width: 456px) 100vw, (max-width: 1200px) 50vw, 600px';

  return (
    <div className={css.accommodations}>
      <div className={css.tile}>
        <img
          src={imgApartment.src}
          srcSet={imgApartment.srcSet}
          sizes={sizes}
          alt={intl.formatMessage({id: 'apartment'})}
        />
        <h3 className={css.title}>
          <FormattedMessage id={'apartment'}/>
        </h3>
      </div>
      <div className={css.tile}>
        <img
          src={imgHouse.src}
          srcSet={imgHouse.srcSet}
          sizes={sizes}
          alt={intl.formatMessage({id: 'house'})}
        />
        <h3 className={css.title}>
          <FormattedMessage id={'house'}/>
        </h3>
      </div>
    </div>
  );
};

export default injectIntl(Accommodations);