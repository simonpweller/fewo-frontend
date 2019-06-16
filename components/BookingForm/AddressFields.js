import React from 'react';
import css from './bookingForm.scss';
import {FormattedMessage} from 'react-intl';
import {Field} from 'react-final-form';

const AddressFields = ({name}) => {
  return (
    <>
      <div className={css.formRow}>
        <div className={css.formField}>
          <label htmlFor={`${name}.firstName`} className={css.formLabel}>
            <FormattedMessage id='firstName' />
          </label>
          <Field
            name={`${name}.firstName`}
            component="input"
            className={css.input}
          />
        </div>
        <div className={css.formField}>
          <label htmlFor={`${name}.lastName`} className={css.formLabel}>
            <FormattedMessage id='lastName' />
          </label>
          <Field
            name={`${name}.lastName`}
            component="input"
            className={css.input}
          />
        </div>
      </div>
      <div className={css.formRow}>
        <div className={css.formField}>
          <label htmlFor={`${name}.streetAddress`} className={css.formLabel}>
            <FormattedMessage id='streetAddress' />
          </label>
          <Field
            name={`${name}.streetAddress`}
            component="input"
            className={css.input}
          />
        </div>
      </div>
      <div className={css.formRow}>
        <div className={css.formField}>
          <label htmlFor={`${name}.zipCode`} className={css.formLabel}>
            <FormattedMessage id='zipcode' />
          </label>
          <Field
            name={`${name}.zipCode`}
            component="input"
            className={css.input}
          />
        </div>
        <div className={css.formField}>
          <label htmlFor={`${name}.city`} className={css.formLabel}>
            <FormattedMessage id='city' />
          </label>
          <Field
            name={`${name}.city`}
            component="input"
            className={css.input}
          />
        </div>
      </div>
    </>
  );
};

export default AddressFields;