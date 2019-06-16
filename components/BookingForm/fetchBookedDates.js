import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || {};

export default function fetchData(setBookedDatesApartment, setBookedDatesHouse) {
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
}
