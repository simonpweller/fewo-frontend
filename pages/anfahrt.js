import React from 'react'
import dynamic from 'next/dynamic';
import Page from '../components/Page';

const ClientSideMap = dynamic(() => import('../components/Map'), { ssr: false });

export default function Anfahrt() {
  return (
    <Page>
      <ClientSideMap />
    </Page>
  )
}