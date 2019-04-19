import React from 'react';
import Head from 'next/head';
import {FormattedMessage, injectIntl} from 'react-intl';
import Banner from '../components/Banner/Banner';
import Accommodations from '../components/Accommodations/Accommodations';

export function Index({intl}) {
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({id: 'holidaysInHetzdorf'})}
        </title>
      </Head>

      <Banner />

      <div className="container">
        <h2><FormattedMessage id={'accommodationsInHetzdorf'}/></h2>

        <Accommodations />

        <p><FormattedMessage id={'index.welcome'}/></p>

        <p><FormattedMessage id={'index.area'}/></p>

        <p><FormattedMessage id={'index.outings'}/></p>

        <p><FormattedMessage id={'index.centralLocation'}/></p>
        <ul>
          <li><FormattedMessage id={'index.destination.1'}/></li>
          <li><FormattedMessage id={'index.destination.2'}/></li>
          <li><FormattedMessage id={'index.destination.3'}/></li>
          <li><FormattedMessage id={'index.destination.4'}/></li>
          <li><FormattedMessage id={'index.destination.5'}/></li>
        </ul>
      </div>
    </>
  )
}

export default injectIntl(Index);