import React from 'react';
import {injectIntl} from 'react-intl';
import {Field} from 'react-final-form-html5-validation';

const IntlField = ({intl, ...props}) => {
  const valueMissing = intl.formatMessage({id: 'valueMissing'});
  const typeMismatch = intl.formatMessage({id: 'typeMismatch'});

  return (
    <Field {...props} valueMissing={valueMissing} typeMismatch={typeMismatch} key={intl.locale}/>
  );
};

export default injectIntl(IntlField);