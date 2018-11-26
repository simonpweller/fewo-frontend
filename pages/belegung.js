import React, { Component } from 'react'
import axios from 'axios';
import { parse, format } from 'date-fns';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default class Belegung extends Component {
  state = {
    bookings: [],
  }

  async componentDidMount() {
    const res = await axios.get(`${publicRuntimeConfig.apiUrl}/booking-dates`);
    this.setState({
      bookings: res.data,
    });
  }

  static renderBooking(booking) {
    const { arrivalDate, departureDate } = booking;
    return (
      <li key={booking.id}>{format(parse(arrivalDate), 'DD-MM-YYYY')} - {format(parse(departureDate), 'DD-MM-YYYY')}</li>
    )
  }

  render() {
    const { bookings } = this.state;
    return (
      <ul>
        {bookings.map(Belegung.renderBooking)}
      </ul>
    )
  }
}
