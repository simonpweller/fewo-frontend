import React from 'react'
import App, { Container } from 'next/app';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_de from '../translations/de.json';
import messages_en from '../translations/en.json';
import Layout from '../hocs/Layout';
import '../styles/global.scss';

class MyApp extends App {
  state = {
    locale: 'de',
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }


  render() {
    addLocaleData([...locale_de, ...locale_en]);

    const messages = {
      'de': messages_de,
      'en': messages_en,
    };

    const { Component, pageProps } = this.props;
    const { locale } = this.state;

    return (
      <Container>
        <IntlProvider locale={locale} messages={messages[locale]} textComponent={React.Fragment}>
          <Layout locale={locale} setLocale={(locale) => this.setState({ locale })}>
            <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </Container>
    )
  }
}

export default MyApp
