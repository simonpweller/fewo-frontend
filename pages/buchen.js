import React from 'react';
import Head from 'next/head';
import {FormattedMessage, injectIntl} from 'react-intl';
import BookingForm from '../components/BookingForm/BookingForm';

function Buchen({intl}) {
  return (
    <div className="container">
      <Head>
        <title>
          {intl.formatMessage({id: 'booking'})}
        </title>
      </Head>

      <h1><FormattedMessage id={'booking'}/></h1>
      <BookingForm/>
    </div>
  )
}

export default injectIntl(Buchen);