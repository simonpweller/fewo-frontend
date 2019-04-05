import React from 'react';
import {FormattedMessage} from 'react-intl';

const Accommodations = () => {
  return (
    <div className="accommodations">
      <div className="tile">

        <h3>
          <FormattedMessage id={'apartment'}/>
        </h3>
      </div>
      <div className="tile">
        <h3>
          <FormattedMessage id={'house'}/>
        </h3>
      </div>
    </div>
  );
};

export default Accommodations;