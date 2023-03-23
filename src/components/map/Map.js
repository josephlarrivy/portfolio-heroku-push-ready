import React, { useEffect, useState } from 'react'
import './Map.css'


import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { Icon, L, map } from 'leaflet'
import { homeIcon } from './icons'

const Map = () => {

  return (
    <div>
      <MapContainer
        // key={'mapContainer'}
        center={[46.7, -92.1]}
        zoom={4}
      >
        <TileLayer key={'tileLayer'}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          key={'duluthMN'}
          position={[46.7867, -92.1005]}
          icon={homeIcon}
        >
          <Popup
          >
            HOME
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );

}

export default Map;