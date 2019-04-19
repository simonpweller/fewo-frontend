import React from 'react';
import Head from 'next/head';
import {FormattedMessage, FormattedHTMLMessage, injectIntl} from 'react-intl';
import detailsCss from './details.scss';
import ImageGallery from '../components/ImageGallery/ImageGallery';

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
      <div className={detailsCss.details}>
        <div className={detailsCss.features}>
          <h2><FormattedMessage id={'object.features'} /></h2>
          <ul>
            <li><FormattedMessage id={'apartment.feature.livingroom'} /></li>
            <li><FormattedMessage id={'apartment.feature.bedroom'} /></li>
            <li><FormattedMessage id={'apartment.feature.crib'} /></li>
            <li><FormattedMessage id={'apartment.feature.bathroom'} /></li>
            <li><FormattedMessage id={'apartment.feature.tv'} /></li>
            <li><FormattedMessage id={'object.feature.patio'} /></li>
            <li><FormattedMessage id={'object.feature.lawn'} /></li>
            <li><FormattedMessage id={'object.feature.parking'} /></li>
            <li><FormattedMessage id={'apartment.feature.bbq'} /></li>
            <li><FormattedMessage id={'apartment.feature.suitableForWheelchairs'} /></li>
          </ul>
        </div>
        <div className={detailsCss.pricing}>
          <h2><FormattedMessage id={'object.pricing'} /></h2>
          <ul>
            <li><FormattedMessage id={'apartment.pricing.threeNights'} /></li>
            <li><FormattedMessage id={'apartment.pricing.additionalNights'} /></li>
            <li><FormattedMessage id={'apartment.pricing.children'} /></li>
            <li><FormattedMessage id={'apartment.pricing.twoNights'} /></li>
          </ul>
        </div>
      </div>
      <ImageGallery
        images={[
          'ferienwohnung/aussenansicht.jpg',
          'ferienwohnung/kueche.jpg',
          'ferienwohnung/bad.jpg',
          'ferienwohnung/schlafstube.jpg',
          'ferienwohnung/wohnstube.jpg',
          'ferienwohnung/esstisch.jpg',
        ]}
      />
    </div>
  );
};

export default injectIntl(Ferienwohnung);