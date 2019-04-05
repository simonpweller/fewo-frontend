import React from 'react';
import Head from 'next/head';
import {FormattedMessage, injectIntl} from 'react-intl';
import Address from '../components/Address';

const Impressum = ({intl}) => {
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({id: 'imprint'})}
        </title>
      </Head>

      <h1>
        <FormattedMessage id={'imprint'}/>
      </h1>

      <h2>
        <FormattedMessage id={'address.contact'}/>
      </h2>
      <Address/>
    </>
  );
};

export default injectIntl(Impressum);