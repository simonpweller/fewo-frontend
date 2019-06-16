import React, {useEffect} from 'react';

import Head from 'next/head';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Footer from '../components/Navigation/Footer/Footer';
import css from './layout.scss';

export default function Layout({ locale, setLocale, children }) {

  useEffect(function loadFont() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Kalam:700';
    link.rel = 'stylesheet';

    document.head.appendChild(link);
  }, []);

  return (
    <div className={css.layout}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png" />
      </Head>

      <Navbar locale={locale} setLocale={setLocale} />
      <main className={css.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}