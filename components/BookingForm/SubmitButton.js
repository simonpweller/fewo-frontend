import css from './bookingForm.scss';
import {FormattedMessage} from 'react-intl';
import React from 'react';

export const SubmitButton = () => (
  <button type="submit" className={css.submitButton}>
    <FormattedMessage id='requestBooking'/>
  </button>
);