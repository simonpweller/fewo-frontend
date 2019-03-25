import getConfig from 'next/config';
import React, { Component } from 'react'
import Head from 'next/head';
import axios from 'axios';
import { isSameDay } from 'date-fns';
import Calendar from '../components/Calendar';
import Spinner from '../components/Spinner';

import { primary } from '../theme/colors';
import {FormattedMessage, injectIntl} from 'react-intl';

const { publicRuntimeConfig = {} } = getConfig() || {};

export class Belegung extends Component {
  state = {
    bookedDates: null,
  };

  async componentDidMount() {
    const res = await axios.get(`${publicRuntimeConfig.apiUrl}/booked-dates`);
    this.setState({
      bookedDates: res.data,
    });
  }

  hasDateBooking = date => {
    return Array.isArray(this.state.bookedDates) &&
      this.state.bookedDates.some(bookedDate => isSameDay(bookedDate, date));
  };

  render() {
    const { bookedDates } = this.state;
    const { intl } = this.props;
    return (
      <>
        <Head>
          <title>
            {intl.formatMessage({id: 'availability'})}
          </title>
        </Head>
        <h1><FormattedMessage id={'availability'}/></h1>
        {bookedDates
          ? <Calendar hasDateBooking={this.hasDateBooking} />
          : <Spinner color={primary} />}
      </>
    )
  }
}

export default injectIntl(Belegung);