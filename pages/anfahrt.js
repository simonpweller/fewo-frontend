import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {FormattedMessage, injectIntl} from 'react-intl';

const ClientSideMap = dynamic(() => import('../components/Map'), { ssr: false });

export function Anfahrt({intl}) {
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({id: 'directions'})}
        </title>
      </Head>

      <h1><FormattedMessage id={'directions'}/></h1>
      <ClientSideMap />
    </>
  )
}

export default injectIntl(Anfahrt);