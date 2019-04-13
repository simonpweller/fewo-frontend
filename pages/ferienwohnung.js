import React from 'react';
import Head from 'next/head';
import {FormattedMessage, FormattedHTMLMessage, injectIntl} from 'react-intl';

const Ferienwohnung = ({intl}) => {
  return (
    <div className="container">
      <Head>
        <title>
          {intl.formatMessage({id: 'apartment'})}
        </title>
      </Head>

      <h1><FormattedMessage id={'apartment'} /></h1>
      <p><FormattedHTMLMessage id={'apartment.description'} tagName={'span'}/></p>
      <h2><FormattedMessage id={'object.features'} /></h2>
      <ul>
        <li><FormattedMessage id={'apartment.feature.livingroom'} /></li>
        <li><FormattedMessage id={'apartment.feature.bedroom'} /></li>
        <li><FormattedMessage id={'apartment.feature.crib'} /></li>
        <li><FormattedMessage id={'apartment.feature.bathroom'} /></li>
        <li><FormattedMessage id={'apartment.feature.tv'} /></li>
        <li><FormattedMessage id={'object.feature.padio'} /></li>
        <li><FormattedMessage id={'object.feature.lawn'} /></li>
        <li><FormattedMessage id={'object.feature.parking'} /></li>
        <li><FormattedMessage id={'apartment.feature.bbq'} /></li>
        <li><FormattedMessage id={'apartment.feature.suitableForWheelchairs'} /></li>
      </ul>
      <h2><FormattedMessage id={'object.pricing'} /></h2>
      <ul>
        <li><FormattedMessage id={'apartment.pricing.threeNights'} /></li>
        <li><FormattedMessage id={'apartment.pricing.additionalNights'} /></li>
        <li><FormattedMessage id={'apartment.pricing.children'} /></li>
        <li><FormattedMessage id={'apartment.pricing.twoNights'} /></li>
      </ul>
    </div>
  );
};

export default injectIntl(Ferienwohnung);