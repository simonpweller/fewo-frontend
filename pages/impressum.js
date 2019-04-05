import React from 'react';
import Head from 'next/head';
import {FormattedMessage, injectIntl} from 'react-intl';

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
    </>
  );
};

export default injectIntl(Impressum);