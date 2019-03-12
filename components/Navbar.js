import React from 'react'
import Link from 'next/link';
import { primary, textLight } from '../theme/colors';
import { FormattedMessage } from 'react-intl';

export default function Navbar({ locale, setLocale }) {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>
                <FormattedMessage id={'HolidaysInHetzdorf'} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/belegung">
              <a>
                <FormattedMessage id={'Availability'} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/buchen">
              <a>
                <FormattedMessage id={'Booking'} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/anfahrt">
              <a>
                <FormattedMessage id={'Directions'} />
              </a>
            </Link>
          </li>
        </ul>
        {
          <button onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}>
            <FormattedMessage id={`${locale === 'de' ? 'English' : 'German'}`} />
          </button>
        }
      </div>
      <style jsx>
        {`
          nav {
            background-color: ${primary};
            color: ${textLight};
            height: 50px;
          }
          div {
            max-width: 960px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          ul {
            margin: auto 0;
            padding: 0;
            display: flex;
            list-style: none;
          }
          li {
            padding: 0 15px;
          }
          li:first-child {
            padding-left: 0;
          }
          li:last-child {
            padding-right: 0;
          }
          a {
            color: inherit;
            text-decoration: none;
            line-height: 50px;
          }
        `}
      </style>
    </nav>
  )
}
