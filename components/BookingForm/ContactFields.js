import React from 'react';
import css from './bookingForm.scss';
import {FormattedMessage} from 'react-intl';
import {Field} from 'react-final-form';

const ContactFields = ({name}) => {
  return (
    <div className={css.formRow}>
      <div className={css.formField}>
        <label htmlFor={`${name}.phone`} className={css.formLabel}>
          <FormattedMessage id='phoneNumber' />
        </label>
        <Field
          name={`${name}.phone`}
          component="input"
          type="tel"
          className={css.input}
        />
      </div>
      <div className={css.formField}>
        <label htmlFor={`${name}.email`} className={css.formLabel}>
          <FormattedMessage id='email' />
        </label>
        <Field
          name={`${name}.email`}
          component="input"
          type="email"
          className={css.input}
        />
      </div>
    </div>
  );
};

export default ContactFields;