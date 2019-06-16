import React, {useState} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DateRangePicker.css';

const DateRangePicker = () => {

  const [from, setFrom] = useState(undefined);
  const [to, setTo] = useState(undefined);

  function handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, {from, to});
    setFrom(range.from);
    setTo(range.to);
  }

  return (
    <DayPicker
      className="Selectable"
      numberOfMonths={2}
      selectedDays={[from, { from, to }]}
      modifiers={{start: from, end: to}}
      onDayClick={handleDayClick}
    />
  );
};

export default DateRangePicker;