import React, {useEffect, useState} from 'react';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || {};

export default function useBookedDates(changeToRerun) {

  const [bookedDatesHouse, setBookedDatesHouse] = useState([]);
  const [bookedDatesApartment, setBookedDatesApartment] = useState([]);

  useEffect(() => {
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
  }, changeToRerun);

  return [bookedDatesApartment, bookedDatesHouse];
}

