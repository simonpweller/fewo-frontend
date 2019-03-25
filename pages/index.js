import React from 'react';
import Head from 'next/head';
import {FormattedMessage, injectIntl} from 'react-intl';

export function Index({intl}) {
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({id: 'holidaysInHetzdorf'})}
        </title>
      </Head>

      <h1><FormattedMessage id={'holidaysInHetzdorf'}/></h1>
    </>
  )
}

export default injectIntl(Index);