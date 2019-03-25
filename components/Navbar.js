import React, {useState} from 'react'
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

export default function Navbar({ locale, setLocale }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">

          <a role="button" className={`navbar-burger burger ${isExpanded ? 'is-active' : ''}`.trim()} aria-label="menu" aria-expanded="false"
             data-target="mainNav" onClick={() => setExpanded(!isExpanded)}>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>

        <div id="mainNav" className={`navbar-menu ${isExpanded ? 'is-active' : ''}`.trim()}>
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">
                <FormattedMessage id={'holidaysInHetzdorf'} />
              </a>
            </Link>

            <Link href="/belegung">
              <a className="navbar-item">
                <FormattedMessage id={'availability'} />
              </a>
            </Link>

            <Link href="/buchen">
              <a className="navbar-item">
                <FormattedMessage id={'booking'} />
              </a>
            </Link>

            <Link href="/anfahrt">
              <a className="navbar-item">
                <FormattedMessage id={'directions'} />
              </a>
            </Link>

            <Link href="/ferienwohnung">
              <a className="navbar-item">
                <FormattedMessage id={'apartment'} />
              </a>
            </Link>

            <Link href="/ferienhaus">
              <a className="navbar-item">
                <FormattedMessage id={'house'} />
              </a>
            </Link>

            <button onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}>
              <FormattedMessage id={`${locale === 'de' ? 'English' : 'German'}`} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
