import React, { Component } from 'react';
import getConfig from 'next/config';
import axios from 'axios';

const { publicRuntimeConfig } = getConfig();

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
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="accommodation">Unterkunft</label>
            <select
              name="accommodation"
              className="form-control"
              value={this.state.accommodation}
              onChange={this.handleInputChange}
            >
              <option />
              <option value="house">Ferienhaus</option>
              <option value="apartment">Ferienwohnung</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="guest.firstName">Vorname</label>
            <input
              name="guest.firstName"
              type="text"
              className="form-control"
              value={this.state.guest.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="guest.lastName">Nachname</label>
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
          <label htmlFor="guest.streetAddress">Straße und Hausnummer</label>
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
            <label htmlFor="guest.zipCode">Postleitzahl</label>
            <input
              name="guest.zipCode"
              type="text"
              className="form-control"
              value={this.state.guest.zipCode}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="guest.city">Stadt</label>
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
            <label htmlFor="arrivalDate">Anreisetag</label>
            <input
              name="arrivalDate"
              type="date"
              className="form-control"
              value={this.state.arrivalDate}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="departureDate">Abreisetag</label>
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
            <label htmlFor="guest.phone">Telefonnummer</label>
            <input
              name="guest.phone"
              type="tel"
              className="form-control"
              value={this.state.guest.phone}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="guest.email">eMail-Adresse</label>
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
          <label htmlFor="comments">Anmerkungen</label>
          <textarea
            name="comments"
            className="form-control"
            value={this.state.comments}
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-success">Buchung anfragen</button>
      </form>
    )
  }
}

export default BookingForm;