import React from 'react';
import Link from 'next/link';
import {FormattedMessage} from 'react-intl';

const Footer = () => {
  return (
    <footer className="footer">
      <div className={'footer__container'}>
        <div className={'footer__innerWrapper'}>
          <ul className={'footer__linkList'}>
            <li>
              <Link href="/impressum">
                <a className={'footer__link'}>
                  <FormattedMessage id={'imprint'}/>
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