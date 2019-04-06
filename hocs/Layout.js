import React from 'react';

import Head from 'next/head';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Footer from '../components/Navigation/Footer/Footer';
import css from './layout.scss';

export default function Layout({ locale, setLocale, children }) {

  return (
    <div className={css.layout}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar locale={locale} setLocale={setLocale} />
      <main className={css.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}