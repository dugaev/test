import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import img from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import marker from '../assets/marker.svg'
const markerIcon = new L.Icon({
  iconUrl: `${marker}`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});


const Map = ({ onSelectApartment }) => {
  const position = [50.4501, 30.5234];

  const southWest = [44.1, 22.2];
  const northEast = [52.4, 40.2];
  const bounds = [southWest, northEast];

  const apartments = [
    { id: 1, lat: 50.4501, lng: 30.5234, title: 'Квартира на вул. Xрещатик, 21', description: 'Здається в оренду квартира', price: '$1000', image: `${img}` },
    { id: 2, lat: 50.4601, lng: 30.5334, title: 'Квартира на набережній Дніпра', description: 'Здається в оренду квартира', price: '$1500', image: `${img2}` },
    { id: 3, lat: 50.4701, lng: 30.5134, title: 'Квартира на вул. Щекавицька, 23', description: 'Здається в оренду квартира', price: '$820', image: `${img3}` },
    { id: 4, lat: 49.8397, lng: 24.0297, title: 'Квартира на площі Адама Міцкевича, 12', description: 'Здається в оренду квартира', price: '$1200', image: `${img4}` },
    { id: 5, lat: 49.8419, lng: 24.0315, title: 'Квартира на площі Ринок', description: 'Здається в оренду квартира', price: '$1150', image: `${img5}` },
    { id: 6, lat: 48.2921, lng: 25.9352, title: 'Квартира на вул. Головна, 238', description: 'Здається в оренду квартира', price: '$600', image: `${img6}` },
    { id: 7, lat: 48.2987, lng: 25.9355, title: 'Квартира на вул. Вокзальна, 35', description: 'Здається в оренду квартира', price: '$350', image: `${img7}` },
    // Додайте інші об'єкти квартир у різних районах
  ];

  const handleApartmentClick = (apartment) => {
    onSelectApartment(apartment);
  };

  return (
    <div>
      <div className='h-[520px] w-[900px] flex -z-10'>
        <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }} maxBounds={bounds} maxBoundsViscosity={0.9}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {apartments.map((apartment) => (
            <Marker key={apartment.id} position={[apartment.lat, apartment.lng]} icon={markerIcon} eventHandlers={{ click: () => handleApartmentClick(apartment) }}>
              <Popup>{apartment.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
