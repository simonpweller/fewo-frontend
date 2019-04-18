import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import css from './accommodations.scss';
import Link from 'next/link';

const Accommodations = ({intl}) => {

  const imgApartment = require('../../images/FW.jpg?resize&sizes[]=600&sizes[]=400&sizes[]=200');
  const imgHouse = require('../../images/FH.jpg?resize&sizes[]=600&sizes[]=400&sizes[]=200');
  const sizes = '(max-width: 756px) 100vw, (max-width: 1200px) 50vw, 600px';

  return (
    <div className={css.accommodations}>
      <Link href="/ferienwohnung">
        <a href="/ferienwohnung" className={css.link}>
          <div className={css.tile}>
            <img
              className={css.img}
              src={imgApartment.src}
              srcSet={imgApartment.srcSet}
              sizes={sizes}
              alt={intl.formatMessage({id: 'apartmentAltText'})}
            />
            <div className={css.overlay}>
              <h3 className={css.title}>
                <FormattedMessage id={'apartment'}/>
              </h3>
              <div className={css.subtitle}>
                <div>1-3 Personen</div>
                <div>ab 25€ / Nacht</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href={"/ferienhaus"}>
        <a href={"/ferienhaus"} className={css.link}>
          <div className={css.tile}>
            <img
              className={css.img}
              src={imgHouse.src}
              srcSet={imgHouse.srcSet}
              sizes={sizes}
              alt={intl.formatMessage({id: 'houseAltText'})}
            />
            <div className={css.overlay}>
              <h3 className={css.title}>
                <FormattedMessage id={'house'}/>
              </h3>
              <div className={css.subtitle}>
                <div>2-5 Personen</div>
                <div>ab 40€ / Nacht</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default injectIntl(Accommodations);