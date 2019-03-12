import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Navbar from './Navbar';


export default ({ children }) => (
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

    <Navbar />
    <main>
      {children}
    </main>
  </>
)