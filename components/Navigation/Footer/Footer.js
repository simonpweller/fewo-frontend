import React from 'react';
import {FormattedMessage} from 'react-intl';
import css from './footer.scss';
import ActiveLink from '../Navbar/ActiveLink';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.innerWrapper}>
          <ul className={css.linkList}>
            <li>
              <ActiveLink href={'/impressum'}>
                <FormattedMessage id={'imprint'}/>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href={'/datenschutz'}>
                <FormattedMessage id={'privacy'}/>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;