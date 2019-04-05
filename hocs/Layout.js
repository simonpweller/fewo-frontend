import React from 'react';

import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/styles.scss'

export default function Layout({ locale, setLocale, children }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx global>
        {`
          .leaflet-container {
            height: 500px;
          }
        `}
      </style>

      <Navbar locale={locale} setLocale={setLocale} />
      <main className="container">
        {children}
      </main>
      <Footer/>
    </>
  )
}