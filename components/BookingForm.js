import React, { Component } from 'react';
import getConfig from 'next/config';
import axios from 'axios';
import { injectIntl, FormattedMessage } from 'react-intl';

const { publicRuntimeConfig = {} } = getConfig() || {};

const initialState = {
  accommodation: '',
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
}

class BookingForm extends Component {

  state = initialState;

  handleInputChange = (event) => {
    const { value, name } = event.target;
    if (name.startsWith('guest.')) {
      const guestAttribute = name.split('.')[1];
      const guest = {
        ...this.state.guest,
        [guestAttribute]: value,
      }
      this.setState({ guest });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${publicRuntimeConfig.apiUrl}/bookings`, this.state);
      this.setState(initialState);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { intl: { formatMessage } } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="accommodation">
              <FormattedMessage id='accomodation' />
            </label>
            <select
              name="accommodation"
              className="form-control"
              value={this.state.accommodation}
              onChange={this.handleInputChange}
            >
              <option />
              <option value="house">
                {formatMessage({ id: 'house' })}
              </option>
              <option value="apartment">
                {formatMessage({ id: 'apartment' })}
              </option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="guest.firstName"><FormattedMessage id='firstName' /></label>
            <input
              name="guest.firstName"
              type="text"
              className="form-control"
              value={this.state.guest.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="guest.lastName"><FormattedMessage id='lastName' /></label>
            <input
              name="guest.lastName"
              type="text"
              className="form-control"
              value={this.state.guest.lastName}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="guest.streetAddress"><FormattedMessage id='streetAddress' /></label>
          <input
            name="guest.streetAddress"
            type="text"
            className="form-control"
            value={this.state.guest.streetAddress}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="guest.zipCode"><FormattedMessage id='zipcode' /></label>
            <input
              name="guest.zipCode"
              type="text"
              className="form-control"
              value={this.state.guest.zipCode}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="guest.city"><FormattedMessage id='city' /></label>
            <input
              name="guest.city"
              type="text"
              className="form-control"
              value={this.state.guest.city}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="arrivalDate"><FormattedMessage id='arrivalDate' /></label>
            <input
              name="arrivalDate"
              type="date"
              className="form-control"
              value={this.state.arrivalDate}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="departureDate"><FormattedMessage id='departureDate' /></label>
            <input
              name="departureDate"
              type="date"
              className="form-control"
              value={this.state.departureDate}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="guest.phone"><FormattedMessage id='phoneNumber' /></label>
            <input
              name="guest.phone"
              type="tel"
              className="form-control"
              value={this.state.guest.phone}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="guest.email"><FormattedMessage id='email' /></label>
            <input
              name="guest.email"
              type="email"
              className="form-control"
              value={this.state.guest.email}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comments"><FormattedMessage id='comments' /></label>
          <textarea
            name="comments"
            className="form-control"
            value={this.state.comments}
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-success"><FormattedMessage id='requestBooking' /></button>
      </form>
    )
  }
}

export default injectIntl(BookingForm);