import Link from 'next/link';
import withPage from '../components/Page';
import { FormattedMessage } from 'react-intl';

export function Index(props) {
  return (
    <>
      <FormattedMessage id={'helloWorld'} />
      <Link prefetch href="/belegung"><a>Belegung</a></Link>
    </>
  )
}

export default withPage(Index);