import React from 'react';
import Head from 'next/head';
import BookingForm from '../components/BookingForm/BookingForm';
import {FormattedMessage, injectIntl} from 'react-intl';
import DateRangePicker from '../components/DateRangePicker/DateRangePicker';

function Buchen({intl}) {
  return (
    <div className="container">
      <Head>
        <title>
          {intl.formatMessage({id: 'booking'})}
        </title>
      </Head>


      <h1><FormattedMessage id={'booking'}/></h1>
      <DateRangePicker />
      <BookingForm />
    </div>
  )
}

export default injectIntl(Buchen);