import React from 'react';
import Head from 'next/head';
import {FormattedHTMLMessage, FormattedMessage, injectIntl} from 'react-intl';
import detailsCss from './details.scss';
import ImageGallery from '../components/ImageGallery/ImageGallery';


const Ferienhaus = ({intl}) => {
  return (
    <div className="container">
      <Head>
        <title>
          {intl.formatMessage({id: 'house'})}
        </title>
      </Head>

      <h1><FormattedMessage id={'house'} /></h1>
      <p><FormattedHTMLMessage id={'house.description'} tagName={'span'}/></p>
      <div className={detailsCss.details}>
        <div className={detailsCss.features}>
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
        </div>
        <div className={detailsCss.pricing}>
          <h2><FormattedMessage id={'object.pricing'} /></h2>
          <ul>
            <li><FormattedMessage id={'house.pricing.threeNights'} /></li>
            <li><FormattedMessage id={'house.pricing.additionalNights'} /></li>
            <li><FormattedMessage id={'house.pricing.children'} /></li>
            <li><FormattedMessage id={'house.pricing.sheetsIncluded'} /></li>
            <li><FormattedMessage id={'house.pricing.twoNights'} /></li>
          </ul>
        </div>
      </div>
      <ImageGallery
        images={[
          'ferienhaus/blick_vom_balkon.jpg',
          'ferienhaus/kueche.jpg',
          'ferienhaus/schlafstube_oben_doppelbett.jpg',
          'ferienhaus/terasse.jpg',
          'ferienhaus/wohnstube_oben.jpg',
          'ferienhaus/wohnstube_oben_2.jpg',
        ]}
      />
    </div>
  );
};

export default injectIntl(Ferienhaus);