import Link from 'next/link';
import Page from '../components/Page';

export default () => (
  <Page>
    Welcome to next.js!
    <Link prefetch href="/belegung"><a>Belegung</a></Link>
  </Page>
);