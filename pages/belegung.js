import Page from '../components/Page';
import getConfig from 'next/config';
import React, { Component } from 'react'
import axios from 'axios';
import { isSameDay } from 'date-fns';
import Calendar from '../components/Calendar';
import Spinner from '../components/Spinner';

const { publicRuntimeConfig } = getConfig();

export default class Belegung extends Component {
  state = {
    bookedDates: null,
  }

  async componentDidMount() {
    const res = await axios.get(`${publicRuntimeConfig.apiUrl}/booked-dates`);
    this.setState({
      bookedDates: res.data,
    });
  }

  hasDateBooking = date => {
    return Array.isArray(this.state.bookedDates) &&
      this.state.bookedDates.some(bookedDate => isSameDay(bookedDate, date));
  }

  render() {
    const { bookedDates } = this.state;
    return (
      <Page>
        {
          bookedDates
            ? <Calendar hasDateBooking={this.hasDateBooking} />
            : <Spinner color={'#065535'} />
        }
      </Page>
    )
  }
}
