import React from 'react'
import Link from 'next/link';
import { primary, textLight } from '../theme/colors';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Ferien in Hetzdorf</a>
          </Link>
        </li>
        <li>
          <Link href="/belegung">
            <a>Belegung</a>
          </Link>
        </li>
        <li>
          <Link href="/buchen">
            <a>Buchen</a>
          </Link>
        </li>
        <li>
          <Link href="/anfahrt">
            <a>Anfahrt</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            background-color: ${primary};
            color: ${textLight};
            height: 50px;
          }
          ul {
            max-width: 960px;
            margin: auto;
            list-style: none;
            padding: 0;
            display: flex;
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
