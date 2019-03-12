import React, { useState } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_de from '../translations/de.json';
import messages_en from '../translations/en.json';

import Head from 'next/head';
import Navbar from './Navbar';


export default function withPage(WrappedComponent) {

  return function WithPage(props) {
    addLocaleData([...locale_en, ...locale_de]);

    const messages = {
      'de': messages_de,
      'en': messages_en,
    }
    const [locale, setLocale] = useState('de');


    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
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
            <WrappedComponent {...props} />
          </main>
        </>
      </IntlProvider>
    )
  }
}