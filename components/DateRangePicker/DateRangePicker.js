import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DateRangePicker.css';
import {FormattedMessage, injectIntl} from 'react-intl';

const DateRangePicker = ({bookedDates, intl, input: {onChange, value: {from, to}}}) => {

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

  function handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, {from, to});
    onChange({
      from: range.from,
      to: range.to,
    })
  }

  return (
    <>
      {!from && !to && <FormattedMessage id={'selectArrivalDate'}/>}
      {from && !to && <FormattedMessage id={'selectDepartureDate'}/>}
      {from && to && <FormattedMessage id={'selectedDates'} values={{arrival: from.toLocaleDateString(), departure: to.toLocaleDateString()}}/>}
      {from && to && (
        <button onClick={() => {onChange({from: null, to: null})}}>
          <FormattedMessage id={'reset'} />
        </button>
      )}
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
    </>
  );
};

export default injectIntl(DateRangePicker);