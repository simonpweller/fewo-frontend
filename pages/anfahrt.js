import React from 'react'
import dynamic from 'next/dynamic';

const ClientSideMap = dynamic(() => import('../components/Map'), { ssr: false });

export function Anfahrt() {
  return (
    <ClientSideMap />
  )
}

export default Anfahrt;