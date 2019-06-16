import React, {useState, useEffect} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DateRangePicker.css';
import {injectIntl} from 'react-intl';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || {};

const DateRangePicker = ({accommodation, intl, to, from, setTo, setFrom}) => {

  function handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, {from, to});
    setFrom(range.from);
    setTo(range.to);
  }

  const WEEKDAYS_LONG = [
    intl.formatMessage({id: 'Sunday'}),
    intl.formatMessage({id: 'Monday'}),
    intl.formatMessage({id: 'Tuesday'}),
    intl.formatMessage({id: 'Wednesday'}),
    intl.formatMessage({id: 'Thursday'}),
    intl.formatMessage({id: 'Friday'}),
    intl.formatMessage({id: 'Saturday'}),
  ];

  const WEEKDAYS_SHORT = [
    intl.formatMessage({id: 'SundayShort'}),
    intl.formatMessage({id: 'MondayShort'}),
    intl.formatMessage({id: 'TuesdayShort'}),
    intl.formatMessage({id: 'WednesdayShort'}),
    intl.formatMessage({id: 'ThursdayShort'}),
    intl.formatMessage({id: 'FridayShort'}),
    intl.formatMessage({id: 'SaturdayShort'}),
  ];

  const MONTHS = [
    intl.formatMessage({id: 'January'}),
    intl.formatMessage({id: 'February'}),
    intl.formatMessage({id: 'March'}),
    intl.formatMessage({id: 'April'}),
    intl.formatMessage({id: 'May'}),
    intl.formatMessage({id: 'June'}),
    intl.formatMessage({id: 'July'}),
    intl.formatMessage({id: 'August'}),
    intl.formatMessage({id: 'September'}),
    intl.formatMessage({id: 'October'}),
    intl.formatMessage({id: 'November'}),
    intl.formatMessage({id: 'December'}),
  ];

  const [bookedDatesHouse, setBookedDatesHouse] = useState([]);
  const [bookedDatesApartment, setBookedDatesApartment] = useState([]);

  useEffect(() => {
    axios.get(`${publicRuntimeConfig.apiUrl}/booked-dates/apartment`)
      .then(res => {
        setBookedDatesApartment(res.data.map(d => new Date(d)));
      })
      .catch(err => {
        console.error(err);
      });

    axios.get(`${publicRuntimeConfig.apiUrl}/booked-dates/house`)
      .then(res => {
        setBookedDatesHouse(res.data.map(d => new Date(d)));
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const bookedDates = accommodation === 'house'
    ? bookedDatesHouse
    : accommodation === 'apartment'
      ? bookedDatesApartment
      : [];

  return (
    <DayPicker
      locale={intl.locale}
      firstDayOfWeek={parseFloat(intl.formatMessage({id: 'firstDayOfWeek'}))}
      weekdaysLong={WEEKDAYS_LONG}
      weekdaysShort={WEEKDAYS_SHORT}
      months={MONTHS}
      className="Selectable"
      numberOfMonths={2}
      selectedDays={[from, { from, to }]}
      modifiers={{start: from, end: to, booked: bookedDates}}
      onDayClick={handleDayClick}
    />
  );
};

export default injectIntl(DateRangePicker);