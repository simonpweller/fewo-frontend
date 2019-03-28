import React, {useState} from 'react'
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import classes from '../styles/navbar.scss';

export default function Navbar({ locale, setLocale }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={classes.navbar}>
      <div>
        <Link href="/">
          <a className={classes.navLink}><FormattedMessage id={'holidaysInHetzdorf'} /></a>
        </Link>
      </div>
      <div className={classes.toggle} onClick={() => setExpanded(!isExpanded)}>
        Toggle
      </div>
      <nav>
        <ul className={isExpanded ? classes.navItemsExpanded : classes.navItems}>
          <li>
            <Link href="/belegung">
              <a className={classes.navLink}>
                <FormattedMessage id={'availability'} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/buchen">
              <a className={classes.navLink}>
                <FormattedMessage id={'booking'} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/anfahrt">
              <a className={classes.navLink}>
                <FormattedMessage id={'directions'} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ferienwohnung">
              <a className={classes.navLink}>
                <FormattedMessage id={'apartment'} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ferienhaus">
              <a className={classes.navLink}>
                <FormattedMessage id={'house'} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={isExpanded ? classes.languageToggleExpanded : classes.languageToggle}
        onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
      >
        <FormattedMessage id={`${locale === 'de' ? 'English' : 'German'}`} />
      </button>
    </div>
  )
}
