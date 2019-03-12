import React from 'react'
import Head from 'next/head';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

export default function MapComponent() {

  L.Icon.Default.prototype.options.iconUrl = '/static/leaflet/marker-icon.png';
  L.Icon.Default.prototype.options.iconRetinaUrl = '/static/leaflet/marker-icon-2x.png';
  L.Icon.Default.prototype.options.shadowUrl = '/static/leaflet/marker-shadow.png';
  L.Icon.Default.prototype.options.shadowRetinaUrl = '/static/leaflet/marker-shadow.png';

  const zoom = 16;
  const positionApartment = [50.97108, 13.45563];
  const positionHouse = [50.97150, 13.45661];


  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
          integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
          crossOrigin="" />
      </Head>
      <Map center={[50.9708, 13.4580]} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={positionApartment}>
          <Popup>Ferienwohnung</Popup>
        </Marker>
        <Marker position={positionHouse}>
          <Popup>Ferienhaus</Popup>
        </Marker>
      </Map>
    </>
  )
}
