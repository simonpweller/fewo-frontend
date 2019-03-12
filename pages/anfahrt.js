import React from 'react'
import dynamic from 'next/dynamic';
import withPage from '../components/Page';

const ClientSideMap = dynamic(() => import('../components/Map'), { ssr: false });

export function Anfahrt() {
  return (
    <ClientSideMap />
  )
}

export default withPage(Anfahrt);