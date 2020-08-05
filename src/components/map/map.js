import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';


const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};


export default function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCMXpIKzcIugui4uYvcZfl5unWgiLpbBJk',
    libraries,
  });
  const [ currentPosition, setCurrentPosition ] = useState({});
  const [ selected, setSelected ] = useState({})

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })


  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading...";
  const onSelect = item => {
    setSelected(item);
  }

  const users = props.users;
  

  return (
  <div class='map'>
 
    <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={currentPosition}
     
    >
    
      {users && users.map(user => (
        <Marker
          key={user.name}
          position={{lat: user.lat, lng: user.lng}}
          onClick={() => onSelect(user)}
          onLoad={onMapLoad}
        />
        ))
      }
      {
        selected.lat && (
        
          <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          clickable={true}
          onCloseClick={() => setSelected({})}
        >
          <div>
            <img src={selected.profile_pic} width="100" height="100" />
            <p>Name: {selected.name}</p>
            <p>Role: {selected.role}</p>
            <button>See Profile</button>
          </div>
        </InfoWindow>
        
        )}
    </GoogleMap>
    
  </div>
  )
}
