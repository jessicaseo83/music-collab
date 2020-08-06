import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Map from './Map/Map'

import "./Search.css"
import UserInd from "./list/User.js"
import Image from 'react-bootstrap/Image';

const Search = (props) => {
  const [users,setUsers] = useState([]);
  const [role,setRole] = useState();
  const [city,setCity] = useState();
  const [filteredUsers,setFilteredUsers] = useState([]);
  useEffect(()=>{
    axios.get('/users')
    .then(res => setUsers(res.data))
    
    
  },[])



// if the user clicks on the city, we want to return users from that city
// users.city === city 
if (city) {
  const userCity = users.filter(user => user.city === city)
  setFilteredUsers(userCity)
}

const userList = filteredUsers.map (user => <UserInd user={user}/>)

return (

<>
<label className="filter1" for="role">Select a role</label>
  <select id="role" onChange={(event)=>setRole(event.target.value)}>
      <option>Musician</option>
      <option>Sound Engineer</option>
      <option>Songwriter</option>
</select>

<label className="filter2" for="city">Select a city</label>
<select id="city" onChange={(event)=>{event.preventDefault(); setCity(event.target.value)}}>
      <option>Montreal</option>
      <option>Vancouver</option>
      <option>Ottawa</option>
</select>

  <Map users={users} />
  {userList}


</>
)
}

// dynamic rendering
// map value ==2 and list ==4 


export default Search;

