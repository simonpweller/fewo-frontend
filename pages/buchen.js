import React, {useState} from 'react';
import Head from 'next/head';
import BookingForm from '../components/BookingForm/BookingForm';
import {FormattedMessage, injectIntl} from 'react-intl';
import DateRangePicker from '../components/DateRangePicker/DateRangePicker';

function Buchen({intl}) {
  const [accommodation, setAccommodation] = useState('apartment');
  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);
  const onChangeAccommodation = (accommodation) => {
    setAccommodation(accommodation);
    setFrom(null);
    setTo(null);
  };

  return (
    <div className="container">
      <Head>
        <title>
          {intl.formatMessage({id: 'booking'})}
        </title>
      </Head>


      <h1><FormattedMessage id={'booking'}/></h1>
      <DateRangePicker accommodation={accommodation} from={from} to={to} setFrom={setFrom} setTo={setTo}/>
      <BookingForm onChangeAccommodation={onChangeAccommodation}/>
    </div>
  )
}

export default injectIntl(Buchen);