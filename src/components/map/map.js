import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';


const libraries = ["places"];
const mapContainerStyle = {
  width: '70vw',
  height: '70vh'
};
const center = {
  lat: 43.70011,
  lng: -79.4163
}


export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCMXpIKzcIugui4uYvcZfl5unWgiLpbBJk',
    libraries,
  });
 
  const [ selected, setSelected ] = useState({})
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

 

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading...";
  const onSelect = item => {
    setSelected(item);
  }

  const users = [
    {
      id: 6,
      name: "Hannibal Lecter",
      email: "creepyguy@hahaha.com",
      city: "Winnipeg",
      postal_code: "R2C 0S3",
      role: "Producer",
      profile_pic: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
      id: 8,
      name: "Hailee Steinfeld",
      email: "hhhhhssssql@musian.com",
      city: "Laval",
      postal_code: "H7A 1B7",
      role: "Musician",
      profile_pic: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    
  ];

  // {
  //   name: "Location 2",
  //   location: { 
  //     lat: 43.761539,
  //     lng: -79.411079
  //   },

  return <div>
   
    <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      onLoad={onMapLoad}
    >
      {locations.map(marker => (
        <Marker
          key={marker.name}
          position={marker.location}
          onClick={() => onSelect(marker)}
        />
        ))
      }
      {
        selected.location && 
        (
          <InfoWindow
          position={selected.location}
          clickable={true}
          onCloseClick={() => setSelected({})}
        >
          <p>{selected.name}</p>
        </InfoWindow>
        )
      }
    </GoogleMap>
  </div>
}
