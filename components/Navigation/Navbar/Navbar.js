import React, {useState} from 'react'
import Link from 'next/link';
import {FormattedMessage} from 'react-intl';
import English from './flags/English';
import German from './flags/German';
import css from './navbar.scss';

export default function Navbar({locale, setLocale}) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={css.navbar}>
      <div className={css.container}>
        <div className={css.innerWrapper}>
          <Link href="/">
            <a className={css.navLink}><FormattedMessage id={'holidaysInHetzdorf'}/></a>
          </Link>
          <div className={css.toggle} onClick={() => setExpanded(!isExpanded)}>
            <div className={isExpanded ? css.bar1Expanded : css.bar}/>
            <div className={isExpanded ? css.bar2Expanded : css.bar}/>
            <div className={isExpanded ? css.bar3Expanded : css.bar}/>
          </div>
          <nav>
            <ul className={isExpanded ? css.navItemsExpanded : css.navItems}>
              <li>
                <Link href="/belegung">
                  <a className={css.navLink}>
                    <FormattedMessage id={'availability'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/buchen">
                  <a className={css.navLink}>
                    <FormattedMessage id={'booking'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/anfahrt">
                  <a className={css.navLink}>
                    <FormattedMessage id={'directions'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ferienwohnung">
                  <a className={css.navLink}>
                    <FormattedMessage id={'apartment'}/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ferienhaus">
                  <a className={css.navLink}>
                    <FormattedMessage id={'house'}/>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className={isExpanded ? css.languageToggleExpanded : css.languageToggle}
            onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
          >
            {locale === 'de'
              ? <English />
              : <German />
            }
          </button>
        </div>
      </div>
    </div>
  )
}
