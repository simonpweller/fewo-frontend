import {Field} from 'react-final-form';
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import React from 'react';

export const DatesFields = ({bookedDates}) => (
  <Field
    component={DateRangePicker}
    name="dates"
    bookedDates={bookedDates}
  />
);