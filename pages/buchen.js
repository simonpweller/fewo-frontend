import React, {useState} from 'react';
import Head from 'next/head';
import BookingForm from '../components/BookingForm/BookingForm';
import {FormattedMessage, injectIntl} from 'react-intl';
import DateRangePicker from '../components/DateRangePicker/DateRangePicker';

function Buchen({intl}) {
  const [accommodation, setAccommodation] = useState('apartment');

  return (
    <div className="container">
      <Head>
        <title>
          {intl.formatMessage({id: 'booking'})}
        </title>
      </Head>


      <h1><FormattedMessage id={'booking'}/></h1>
      <DateRangePicker accommodation={accommodation}/>
      <BookingForm setAccommodation={setAccommodation}/>
    </div>
  )
}

export default injectIntl(Buchen);