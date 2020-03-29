import css from './bookingForm.scss';
import {FormattedMessage} from 'react-intl';
import React from 'react';
import Field from './Field';

export const SelectAccommodation = ({formatMessage}) => (
    <div className={css.formRow}>
      <div className={css.formField}>
        <label className={css.formLabel}>
          <FormattedMessage id='accommodation'/>*
        </label>
        <Field name="accommodation" component="select" placeholder="First Name" className={css.input} required>
          <option value="apartment">
            {formatMessage({id: 'apartment'})}
          </option>
          <option value="house">
            {formatMessage({id: 'house'})}
          </option>
        </Field>
      </div>
    </div>
);