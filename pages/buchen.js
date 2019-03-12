import React from 'react';
import withPage from '../components/Page';
import BookingForm from '../components/BookingForm';

function Buchen() {
  return (
    <BookingForm />
  )
}

export default withPage(Buchen);