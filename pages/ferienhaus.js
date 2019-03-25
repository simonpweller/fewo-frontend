import React from 'react';
import Head from 'next/head';
import {FormattedHTMLMessage, FormattedMessage, injectIntl} from 'react-intl';


const Ferienhaus = ({intl}) => {
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({id: 'house'})}
        </title>
      </Head>

      <h1><FormattedMessage id={'house'} /></h1>
      <p><FormattedHTMLMessage id={'house.description'} /></p>
      <h2><FormattedMessage id={'object.features'} /></h2>
      <ul>
        <li><FormattedMessage id={'house.feature.bedrooms'} /></li>
        <li><FormattedMessage id={'house.feature.kitchen'} /></li>
        <li><FormattedMessage id={'house.feature.livingroom'} /></li>
        <li><FormattedMessage id={'house.feature.balcony'} /></li>
        <li><FormattedMessage id={'object.feature.padio'} /></li>
        <li><FormattedMessage id={'object.feature.lawn'} /></li>
        <li><FormattedMessage id={'object.feature.parking'} /></li>
        <li><FormattedMessage id={'house.feature.separateEntrance'} /></li>
      </ul>
      <h2><FormattedMessage id={'object.pricing'} /></h2>
      <ul>
        <li><FormattedMessage id={'house.pricing.threeNights'} /></li>
        <li><FormattedMessage id={'house.pricing.additionalNights'} /></li>
        <li><FormattedMessage id={'house.pricing.children'} /></li>
        <li><FormattedMessage id={'house.pricing.sheetsIncluded'} /></li>
        <li><FormattedMessage id={'house.pricing.twoNights'} /></li>
      </ul>
    </>
  );
};

export default injectIntl(Ferienhaus);