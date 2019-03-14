import React from 'react';

import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Layout({ locale, setLocale, children }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <style jsx global>
        {`
          body {
            padding: 0;
            margin: 0;
            font-family: sans-serif;
          }
          main {
            max-width: 960px;
            margin: auto;
          }
          .leaflet-container {
            height: 500px;
          }
        `}
      </style>

      <Navbar locale={locale} setLocale={setLocale} />
      <main>
        {children}
      </main>
    </>
  )
}