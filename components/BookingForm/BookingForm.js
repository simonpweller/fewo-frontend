import React, { Component } from 'react';
import getConfig from 'next/config';
import axios from 'axios/index';
import { injectIntl, FormattedMessage } from 'react-intl';
import css from './bookingForm.scss';

const { publicRuntimeConfig = {} } = getConfig() || {};

const initialState = {
  accommodation: 'apartment',
  guest: {
    firstName: '',
    lastName: '',
    streetAddress: '',
    zipCode: '',
    city: '',
    phone: '',
    email: '',
  },
  arrivalDate: '',
  departureDate: '',
  comments: '',
};

class BookingForm extends Component {

  state = initialState;

  handleInputChange = (event) => {
    const { value, name } = event.target;
    if (name.startsWith('guest.')) {
      const guestAttribute = name.split('.')[1];
      const guest = {
        ...this.state.guest,
        [guestAttribute]: value,
      };
      this.setState({ guest });
    } else {
      this.setState({ [name]: value });
    }
    if (name === 'accommodation') {
      this.props.onChangeAccommodation(value);
    }
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${publicRuntimeConfig.apiUrl}/bookings`, this.state);
      this.setState(initialState);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { intl: { formatMessage } } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className={css.formRow}>
          <div className={css.formField}>
            <label htmlFor="accommodation" className={css.formLabel}>
              <FormattedMessage id='accomodation' />
            </label>
            <select
              name="accommodation"
              value={this.state.accommodation}
              onChange={this.handleInputChange}
              className={css.input}
            >
              <option value="apartment">
                {formatMessage({ id: 'apartment' })}
              </option>
              <option value="house">
                {formatMessage({ id: 'house' })}
              </option>
            </select>
          </div>
        </div>
        <div className={css.formRow}>
          <div className={css.formField}>
            <label htmlFor="guest.firstName" className={css.formLabel}>
              <FormattedMessage id='firstName' />
            </label>
            <input
              name="guest.firstName"
              type="text"
              value={this.state.guest.firstName}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
          <div className={css.formField}>
            <label htmlFor="guest.lastName" className={css.formLabel}>
              <FormattedMessage id='lastName' />
            </label>
            <input
              name="guest.lastName"
              type="text"
              value={this.state.guest.lastName}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
        </div>
        <div className={css.formRow}>
          <div className={css.formField}>
            <label htmlFor="guest.streetAddress" className={css.formLabel}>
              <FormattedMessage id='streetAddress' />
            </label>
            <input
              name="guest.streetAddress"
              type="text"
              value={this.state.guest.streetAddress}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
        </div>
        <div className={css.formRow}>
          <div className={css.formField}>
            <label htmlFor="guest.zipCode" className={css.formLabel}>
              <FormattedMessage id='zipcode' />
            </label>
            <input
              name="guest.zipCode"
              type="text"
              value={this.state.guest.zipCode}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
          <div className={css.formField}>
            <label htmlFor="guest.city" className={css.formLabel}>
              <FormattedMessage id='city' />
            </label>
            <input
              name="guest.city"
              type="text"
              value={this.state.guest.city}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
        </div>
        <div className={css.formRow}>
          <div className={css.formField}>
            <label htmlFor="arrivalDate" className={css.formLabel}>
              <FormattedMessage id='arrivalDate' />
            </label>
            <input
              name="arrivalDate"
              type="date"
              value={this.state.arrivalDate}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
          <div className={css.formField}>
            <label htmlFor="departureDate" className={css.formLabel}>
              <FormattedMessage id='departureDate' />
            </label>
            <input
              name="departureDate"
              type="date"
              value={this.state.departureDate}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
        </div>
        <div className={css.formRow}>
          <div className={css.formField}>
            <label htmlFor="guest.phone" className={css.formLabel}>
              <FormattedMessage id='phoneNumber' />
            </label>
            <input
              name="guest.phone"
              type="tel"
              value={this.state.guest.phone}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
          <div className={css.formField}>
            <label htmlFor="guest.email" className={css.formLabel}>
              <FormattedMessage id='email' />
            </label>
            <input
              name="guest.email"
              type="email"
              value={this.state.guest.email}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
        </div>
        <div className={css.formRow}>
          <div className={css.formField}>
            <label htmlFor="comments" className={css.formLabel}>
              <FormattedMessage id='comments' />
            </label>
            <textarea
              name="comments"
              value={this.state.comments}
              onChange={this.handleInputChange}
              className={css.input}
            />
          </div>
        </div>

        <button type="submit" className={css.submitButton}>
          <FormattedMessage id='requestBooking' />
        </button>
      </form>
    )
  }
}

export default injectIntl(BookingForm);