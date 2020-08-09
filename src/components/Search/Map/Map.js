import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, InfoWindowOptions } from '@react-google-maps/api';
import Geocode from "react-geocode";
import MapStyles from "./MapStyles";
import Button from 'react-bootstrap/Button'
import './Map.css'

const libraries = ["places"];
const mapContainerStyle = {
  width: '75vw',
  height: '75vh'
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};


export default function Map(props) {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
    if (props.city) {
      Geocode.fromAddress(props.city).then(
        response => {
          const location = response.results[0].geometry.location;
          console.log(props.city)
          console.log(location)
          setCurrentPosition(location)
        },
      )}
      else {
        
        navigator.geolocation.getCurrentPosition(success);
      }
  },[props.city])


  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading...";
  const onSelect = item => {
    setSelected(item);
  }

  const users = props.users;
  

  return (
  <div className='map'>
 
    <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      options={options}
      center={currentPosition}
     
    >
    
      {users && users.map(user => (
        <Marker
          key={user.name}
          position={{lat: user.lat, lng: user.lng}}
          onClick={() => onSelect(user)}
          onLoad={onMapLoad}

          icon={{
            url: `/music.svg`,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
          }}
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
          <div className="window_info">
            <div className="user_info">
              <img className="user_pic" src={selected.profile_pic} alt="pic" width="80" height="80" />
              <h5>{selected.name}</h5>
              <p>{selected.role}</p>
            </div>
            <Button variant="info" size="sm">See Profile</Button>
          </div>
        </InfoWindow>
      
        )}
    </GoogleMap>
    
  </div>
  )
}
