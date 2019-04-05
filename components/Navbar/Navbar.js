import React, {useState} from 'react'
import Link from 'next/link';
import {FormattedMessage} from 'react-intl';

export default function Navbar({locale, setLocale}) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={'navbar'}>
      <div className={'navbar__container'}>
        <div className={'navbar__innerWrapper'}>
          <Link href="/">
            <a className={'navbar__navLink'}><FormattedMessage id={'holidaysInHetzdorf'}/></a>
          </Link>
          <div className={`navbar__toggle ${isExpanded ? 'navbar__toggle--expanded' : ''}`} onClick={() => setExpanded(!isExpanded)}>
            <div className={'navbar__bar1'}/>
            <div className={'navbar__bar2'}/>
            <div className={'navbar__bar3'}/>
          </div>
          <nav>
            <ul className={`navbar__navItems ${isExpanded ? 'navbar__navItems--expanded' : ''}`}>
              <li>
                <Link href="/belegung">
                  <a className={'navbar__navLink'}>
                    <FormattedMessage id={'availability'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/buchen">
                  <a className={'navbar__navLink'}>
                    <FormattedMessage id={'booking'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/anfahrt">
                  <a className={'navbar__navLink'}>
                    <FormattedMessage id={'directions'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ferienwohnung">
                  <a className={'navbar__navLink'}>
                    <FormattedMessage id={'apartment'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ferienhaus">
                  <a className={'navbar__navLink'}>
                    <FormattedMessage id={'house'}/>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className={`navbar__languageToggle ${isExpanded ? 'navbar__languageToggle--expanded' : ''}`}
            onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
          >
            <FormattedMessage id={`${locale === 'de' ? 'English' : 'German'}`}/>
          </button>
        </div>
      </div>
    </div>
  )
}
