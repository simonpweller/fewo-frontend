import React from 'react';
import css from './bookingForm.scss';
import {FormattedMessage} from 'react-intl';
import {Field} from 'react-final-form';

const CommentsField = () => {
  return (
      <div className={css.formRow}>
        <div className={css.formField}>
          <label htmlFor="comments" className={css.formLabel}>
            <FormattedMessage id='comments' />
          </label>
          <Field component="textarea" name="comments" className={css.input}/>
        </div>
      </div>
  );
};

export default CommentsField;