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

  const locations = [
    {
      name: "Jude Smith",
      location: { 
        lat: 43.652769,
        lng: -79.381254
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 43.761539,
        lng: -79.411079
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 43.649588,
        lng: -79.378086
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 43.64382,
        lng: -79.404198
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 43.7764,
        lng: -79.2318
      },
    }
  ];

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
