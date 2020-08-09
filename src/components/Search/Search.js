import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Map from "./Map/Map.js"
import Button from 'react-bootstrap/Button'
import "./Search.css"
import UserInd from "./list/User.js"



const Search = (props) => {
  const [users,setUsers] = useState([]);
  const [role,setRole] = useState("");
  const [city,setCity] = useState("");
  const [filteredUsers,setFilteredUsers] = useState([]);
  const [view,setView]=useState("list");
  
  const clearFilters = function () {
    setCity("")
    setRole("")
  }


  useEffect(()=>{
    axios.get('/users')
    .then(res => {
      setUsers(res.data)
      setFilteredUsers(res.data)
    }) 
  },[])
  
  useEffect(() => {
    let usersArray = users;
    if (city) {
       usersArray = usersArray.filter(user => user.city === city)
     
    };

    if (role) {
      usersArray = usersArray.filter(user => user.role === role)
    }

    setFilteredUsers(usersArray)
  
  },[city,role])


const userList = filteredUsers.map (user => <UserInd user={user}/>)

return (

<section className="main">
  
  <section className="sidebar"/>
  <section className="map_list">
  <select id="role" className="search_filter" onChange={(event)=>setRole(event.target.value)} value ={role}>
      <option value ="" selected  > Select a role</option>
      <option>Musician</option>
      <option>Sound Engineer</option>
      <option>Songwriter</option>
</select>


<select id="city" className="search_filter" onChange={(event)=>setCity(event.target.value)} value ={city}>
      <option value="" selected  > Select a city</option>
      <option value="Montreal">Montreal</option>
      <option value = "Toronto">Toronto</option>
      <option value ="Vancouver">Vancouver</option>
      <option value ="Ottawa"> Ottawa</option>
</select>
<Button className="filter-btn" type="button" onClick={clearFilters}> Clear All Filters</Button>



<form onChange={(event) => setView(event.target.value)}>

<input className="map-btn" type="radio" id ="map" name="view" value="map" ></input>
<label for="map">Map</label>
<input className="list-btn" type="radio" id ="list" name="view" value="list"></input>
<label for="list">List</label>
</form>



  {view ==="map" &&<Map users={filteredUsers} city={city} />}
  {view ==="list" && userList}

  </section>
</section>
)
}

// dynamic rendering
// map value ==2 and list ==4 


export default Search;

