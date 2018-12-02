import React from 'react';
import { getMonth, format, getYear, eachDay, startOfISOWeek, addWeeks, getDate } from 'date-fns';
import german from 'date-fns/locale/de'

const now = new Date();

class Calendar extends React.Component {
  state = {
    year: getYear(now),
    month: getMonth(now),
  }

  incrementMonth = () => {
    this.setState(state => (
      this.state.month === 11
        ? {
          month: 0,
          year: state.year + 1,
        }
        : {
          month: state.month + 1,
        }
    ));
  }

  decrementMonth = () => {
    this.setState(state => (
      this.state.month === 0
        ? {
          month: 11,
          year: state.year - 1,
        }
        : {
          month: state.month - 1,
        }
    ));
  }

  render() {
    const weekdays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
    const startingDate = startOfISOWeek(new Date(this.state.year, this.state.month, 1));
    const daysPerWeek = 7;
    const weeksToDisplay = 6;
    const dayList = eachDay(startingDate, addWeeks(startingDate, weeksToDisplay));

    return <div>
      <h1>{format(new Date(this.state.year, this.state.month, 1), 'MMMM YYYY', { locale: german })}</h1>

      <table>
        <thead>
          <tr>
            {weekdays.map(weekday => <th key={weekday}>{weekday}</th>)}
          </tr>
        </thead>
        <tbody>
          {[...Array(weeksToDisplay)].map((el, index) => (
            <tr key={index}>
              {dayList.slice(index * daysPerWeek, (index + 1) * daysPerWeek).map(day => (
                <td key={getDate(day)} className={this.props.hasDateBooking(day) ? 'booked' : ''}>
                  {getDate(day)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <style jsx>
          {`
            tr {
              display: flex;
              justify-content: space-between;
            }
            th {
              padding: 10px;
            }
            th, td {
              flex: 1;
              text-align: center;
            }
            .booked {
              color: red;
              font-weight: bold;
              color: red;
            }
          `}
        </style>
      </table>

      <button onClick={this.decrementMonth}>Back</button>
      <button onClick={this.incrementMonth}>Forward</button>
    </div >

  }
}

export default Calendar;