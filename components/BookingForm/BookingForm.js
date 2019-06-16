import React, {useEffect, useState} from 'react';
import {Form} from 'react-final-form';
import {injectIntl} from 'react-intl';
import {SelectAccommodation} from './SelectAccommodation';
import AddressFields from './AddressFields';
import ContactFields from './ContactFields';
import CommentsField from './CommentsField';
import {SubmitButton} from './SubmitButton';
import axios from 'axios';
import getConfig from 'next/config';
import {DatesFields} from './DatesFields';
import fetchBookedDates from './fetchBookedDates';

const { publicRuntimeConfig = {} } = getConfig() || {};

const BookingForm = ({intl: {formatMessage}}) => {

  const [bookedDatesHouse, setBookedDatesHouse] = useState([]);
  const [bookedDatesApartment, setBookedDatesApartment] = useState([]);

  useEffect(() => fetchBookedDates(setBookedDatesApartment, setBookedDatesHouse), []);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        accommodation: 'apartment',
      }}
      render={({handleSubmit, values}) => {
        const bookedDates = values.accommodation === 'house' ? bookedDatesHouse : bookedDatesApartment;
        return (
          <form onSubmit={handleSubmit}>
            <SelectAccommodation formatMessage={formatMessage}/>
            <DatesFields bookedDates={bookedDates}/>
            <AddressFields name="guest"/>
            <ContactFields name="guest"/>
            <CommentsField/>
            <SubmitButton/>
          </form>
        );
      }}
    />
  );

  async function onSubmit(values, form) {
    try {
      await axios.post(`${publicRuntimeConfig.apiUrl}/bookings`, values);
      fetchBookedDates(setBookedDatesApartment, setBookedDatesHouse);
      form.reset();
    } catch (err) {
      console.error(err);
    }
  }
};

export default injectIntl(BookingForm);