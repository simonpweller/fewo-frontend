import React from 'react';
import Link from 'next/link';
import {FormattedMessage} from 'react-intl';
import css from './footer.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.innerWrapper}>
          <ul className={css.linkList}>
            <li>
              <Link href="/impressum">
                <a className={css.link}>
                  <FormattedMessage id={'imprint'}/>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/datenschutz">
                <a className={css.link}>
                  <FormattedMessage id={'privacy'}/>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;