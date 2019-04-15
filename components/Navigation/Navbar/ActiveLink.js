import React from 'react';
import css from './activeLink.scss';
import Link from 'next/link';
import {withRouter} from 'next/router';

const ActiveLink = ({href, children, router}) => {
  return (
    <Link href={href}>
      <a className={router.pathname === href ? css.activeLink : css.navLink}>
        {children}
      </a>
    </Link>  );
};

export default withRouter(ActiveLink);