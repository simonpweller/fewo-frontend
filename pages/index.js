import Link from 'next/link';

export default () => (
  <div>
    Welcome to next.js!
    <Link prefetch href="/belegung"><a>Belegung</a></Link>
  </div>
);